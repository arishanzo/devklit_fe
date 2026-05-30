'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  User, 
  Clock, 
  BookOpen, 
  CheckCircle, 
  AlertTriangle, 
  HelpCircle, 
  Play, 
  Pause, 
  Award, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Flag, 
  Check, 
  Info,
  Layers,
  FileText,
  Bookmark,
  TrendingUp,
  X,
  Sparkles,
  ArrowRight,
  Shield,
  Briefcase,
  GraduationCap,
  Building,
  Trophy,
  Medal,
  Search
} from 'lucide-react';
import { ExamType, QuestionCategory, Question, UserAnswer, Candidate } from './types';
import { EXAM_CONFIGS, QUESTIONS_BY_EXAM_TYPE } from './questions_consolidated';
import { QUESTIONS as PNS_QUESTIONS } from './questions';

export default function CBTPage() {
  // Candidate / Login State
  const [selectedExamType, setSelectedExamType] = useState<ExamType>('PNS');
  
  // Resolve questions and configs dynamically
  const QUESTIONS = QUESTIONS_BY_EXAM_TYPE[selectedExamType];
  const currentExamConfig = EXAM_CONFIGS[selectedExamType];

  const [candidate, setCandidate] = useState<Candidate>({
    name: '',
    participantNumber: 'CAT-20260530-089',
    examCode: 'SKD-CPNS-2026'
  });

  const [leaderboard, setLeaderboard] = useState([
    { name: 'Rian Hidayat', examType: 'PNS', score: 485, passed: true, date: '30 Mei 2026', duration: '82 Mns' },
    { name: 'Siti Aminah', examType: 'PPPK', score: 245, passed: true, date: '30 Mei 2026', duration: '71 Mns' },
    { name: 'Budi Santoso', examType: 'PNS', score: 432, passed: true, date: '29 Mei 2026', duration: '94 Mns' },
    { name: 'Dewi Lestari', examType: 'TNI_POLRI', score: 415, passed: true, date: '29 Mei 2026', duration: '86 Mns' },
    { name: 'Eko Prasetyo', examType: 'SBMPTN', score: 620, passed: true, date: '28 Mei 2026', duration: '110 Mns' },
    { name: 'Diana Putri', examType: 'BUMN', score: 380, passed: true, date: '27 Mei 2026', duration: '62 Mns' },
    { name: 'Fitriani Lestari', examType: 'PPPK', score: 185, passed: false, date: '28 Mei 2026', duration: '78 Mns' }
  ]);

  const [leaderboardSearch, setLeaderboardSearch] = useState('');
  const [leaderboardFilter, setLeaderboardFilter] = useState<'ALL' | ExamType>('ALL');
  
  const [selectedAvatar, setSelectedAvatar] = useState<'male' | 'female'>('male');
  const [isExamStarted, setIsExamStarted] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  
  // Timer State
  const TOTAL_TIME = currentExamConfig.durationMinutes * 60; // dynamic duration
  const [timeLeft, setTimeLeft] = useState<number>(TOTAL_TIME);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerSpeed, setTimerSpeed] = useState<number>(1); // 1 for normal, can be bumped for testing
  
  // Update timeLeft when the selected exam type changes before starting
  useEffect(() => {
    if (!isExamStarted) {
      setTimeLeft(TOTAL_TIME);
    }
  }, [selectedExamType, TOTAL_TIME, isExamStarted]);
  
  // Question Navigation State
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, UserAnswer>>({});
  const [activeFilter, setActiveFilter] = useState<'ALL' | QuestionCategory>('ALL');
  
  // Modal / Confirmations State
  const [showExitConfirm, setShowExitConfirm] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Review Filter State
  const [reviewFilter, setReviewFilter] = useState<'ALL' | 'CORRECT' | 'WRONG' | 'FLAGGED'>('ALL');

  // Trigger brief floating notifications
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Timer Countdown Effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isExamStarted && isTimerRunning && !isCompleted && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleCompleteExam();
            return 0;
          }
          return prev - 1 * timerSpeed;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isExamStarted, isTimerRunning, isCompleted, timeLeft, timerSpeed]);

  // Handle start exam
  const handleStartExam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidate.name.trim() || !candidate.participantNumber.trim()) {
      showToast('Harap isi Nama dan Nomor Peserta terlebih dahulu!');
      return;
    }
    setIsExamStarted(true);
    setIsTimerRunning(true);
    setTimeLeft(TOTAL_TIME);
    // Initialize blank answers for all questions
    const initialAnswers: Record<number, UserAnswer> = {};
    QUESTIONS.forEach((q) => {
      initialAnswers[q.id] = {
        questionId: q.id,
        selectedOption: null,
        isFlagged: false
      };
    });
    setAnswers(initialAnswers);
    setCurrentQuestionIdx(0);
    showToast('Ujian dimulai. Semoga sukses!');
  };

  // Answer choice selector
  const handleSelectOption = (option: 'A' | 'B' | 'C' | 'D' | 'E') => {
    const qId = QUESTIONS[currentQuestionIdx].id;
    setAnswers((prev) => ({
      ...prev,
      [qId]: {
        ...prev[qId],
        selectedOption: option
      }
    }));
  };

  // Toggle Ragu-ragu (isFlagged)
  const handleToggleFlagged = () => {
    const qId = QUESTIONS[currentQuestionIdx].id;
    setAnswers((prev) => ({
      ...prev,
      [qId]: {
        ...prev[qId],
        isFlagged: !prev[qId]?.isFlagged
      }
    }));
    
    const nextFlagged = !answers[QUESTIONS[currentQuestionIdx].id]?.isFlagged;
    showToast(nextFlagged ? 'Soal ditandai Ragu-Ragu (Warna Jingga)' : 'Tanda Ragu-Ragu dihapus');
  };

  // Navigation Logic
  const handleNextQuestion = () => {
    if (currentQuestionIdx < QUESTIONS.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx((prev) => prev - 1);
    }
  };

  // Jump to specific indexed question
  const handleJumpToQuestion = (id: number) => {
    const originalIndex = QUESTIONS.findIndex((q) => q.id === id);
    if (originalIndex !== -1) {
      setCurrentQuestionIdx(originalIndex);
    }
  };

  // Calculate stats and finish exam
  const handleCompleteExam = () => {
    setIsTimerRunning(false);
    setIsCompleted(true);
    setShowExitConfirm(false);

    // Calculate final scores
    const finalScores = calculateScores();
    const durationNeeded = currentExamConfig.durationMinutes * 60 - timeLeft;
    const durationMinutesFormatted = Math.max(1, Math.ceil(durationNeeded / 60));

    // Add to leaderboard
    const newEntry = {
      name: candidate.name || 'Peserta Anonim',
      examType: selectedExamType,
      score: finalScores.totalScore,
      passed: finalScores.isOverallPassed,
      date: 'Hari Ini',
      duration: `${durationMinutesFormatted} Mns`
    };

    setLeaderboard((prev) => {
      const filtered = prev.filter(item => item.name !== (candidate.name || 'Peserta Anonim'));
      return [newEntry, ...filtered].sort((a, b) => b.score - a.score);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Ujian telah selesai disimpan. Semua jawaban berhasil terekam!');
  };

  // Reset exam to try again
  const handleResetExam = () => {
    setIsCompleted(false);
    setIsExamStarted(false);
    setTimeLeft(TOTAL_TIME);
    setAnswers({});
    setCurrentQuestionIdx(0);
    setTimerSpeed(1);
  };

  // Formatter for time
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    
    const displayH = h > 0 ? `${h.toString().padStart(2, '0')}:` : '';
    const displayM = `${m.toString().padStart(2, '0')}:`;
    const displayS = s.toString().padStart(2, '0');
    
    return `${displayH}${displayM}${displayS}`;
  };

  // Get count of states
  const answeredCount = (Object.values(answers) as UserAnswer[]).filter((a) => a.selectedOption !== null).length;
  const flaggedCount = (Object.values(answers) as UserAnswer[]).filter((a) => a.isFlagged).length;
  const unansweredCount = QUESTIONS.length - answeredCount;

  // Real-time categorization and calculations of scores dynamically across all CBT modes
  const calculateScores = () => {
    const categoryScores: Record<string, number> = {};
    const categoryCorrectCount: Record<string, number> = {};
    const categoryTotalQuestions: Record<string, number> = {};
    const categoryPassed: Record<string, boolean> = {};

    currentExamConfig.categories.forEach((cat) => {
      categoryScores[cat.id] = 0;
      categoryCorrectCount[cat.id] = 0;
      categoryTotalQuestions[cat.id] = 0;
    });

    QUESTIONS.forEach((q) => {
      const qCat = q.category;
      if (categoryTotalQuestions[qCat] !== undefined) {
        categoryTotalQuestions[qCat]++;
      } else {
        categoryTotalQuestions[qCat] = 1;
      }

      const ans = answers[q.id];
      if (!ans || !ans.selectedOption) return;

      if (q.correctAnswer) {
        // Academic/Factual: +5 for Correct, 0 for Wrong
        if (ans.selectedOption === q.correctAnswer) {
          categoryScores[qCat] = (categoryScores[qCat] || 0) + 5;
          categoryCorrectCount[qCat] = (categoryCorrectCount[qCat] || 0) + 1;
        }
      } else if (q.optionPoints) {
        // Situational Judgment: Scale-based points
        const pts = q.optionPoints[ans.selectedOption] || 0;
        categoryScores[qCat] = (categoryScores[qCat] || 0) + pts;
        if (pts >= 4) {
          categoryCorrectCount[qCat] = (categoryCorrectCount[qCat] || 0) + 1;
        }
      }
    });

    let totalScore = 0;
    let isOverallPassed = true;

    currentExamConfig.categories.forEach((cat) => {
      const score = categoryScores[cat.id] || 0;
      totalScore += score;
      const passed = score >= cat.threshold;
      categoryPassed[cat.id] = passed;
      if (!passed) {
        isOverallPassed = false;
      }
    });

    return {
      categoryScores,
      categoryCorrectCount,
      categoryTotalQuestions,
      categoryPassed,
      totalScore,
      isOverallPassed
    };
  };

  const scores = calculateScores();

  // Filtered list of questions based on active category
  const filteredQuestionListForNav = QUESTIONS.filter((q) => {
    if (activeFilter === 'ALL') return true;
    return q.category === activeFilter;
  });

  // Current active question
  const currentQuestion = QUESTIONS[currentQuestionIdx];
  const currentAnswer = answers[currentQuestion?.id] || { selectedOption: null, isFlagged: false };

  const filteredLeaderboard = leaderboard.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(leaderboardSearch.toLowerCase());
    const matchesFilter = leaderboardFilter === 'ALL' || item.examType === leaderboardFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-indigo-600 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-700/50 px-5 py-3.5 text-white shadow-xl max-w-sm transition-all duration-300 animate-slide-up transform hover:scale-105">
          <Sparkles className="h-5 w-5 text-indigo-400 shrink-0" />
          <p className="text-sm font-medium">{toastMessage}</p>
        </div>
      )}

      {/* Header Bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-800 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-200 shrink-0">
              <span className="text-base sm:text-lg">CAT</span>
            </div>
            <div>
              <h1 className="text-xs sm:text-sm md:text-lg font-bold text-slate-900 tracking-tight">SIMULASI CBT CAT 2026</h1>
              <p className="text-[9px] sm:text-xs text-slate-500 font-medium">{currentExamConfig.title}</p>
            </div>
          </div>

          {isExamStarted && !isCompleted && (
            <div className="hidden md:flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-1.5 border border-slate-200">
                <Layers className="h-4 w-4 text-indigo-600" />
                <span className="font-semibold text-slate-700">
                  {currentExamConfig.categories.map(c => `${c.name}: ${c.questionCount}`).join(' | ')}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-indigo-50 rounded-lg px-3.5 py-1.5 border border-indigo-100">
                <CheckCircle className="h-4 w-4 text-indigo-600" />
                <span className="font-medium text-indigo-900">
                  Terjawab: <strong className="font-bold">{answeredCount}</strong> / {QUESTIONS.length}
                </span>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3">
            <span className="text-[10px] sm:text-xs bg-indigo-100 text-indigo-800 font-bold px-2 sm:px-2.5 py-1 rounded-full border border-indigo-200 uppercase tracking-wider sm:tracking-widest animate-pulse">
              Live Demo
            </span>
          </div>
        </div>
      </header>

      {/* High Density Progress Bar */}
      {isExamStarted && !isCompleted && (
        <div className="w-full h-1.5 bg-slate-200 shrink-0">
          <div 
            className="h-full bg-indigo-600 transition-all duration-500" 
            style={{ width: `${(answeredCount / QUESTIONS.length) * 100}%` }}
          ></div>
        </div>
      )}

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6">
        
        {/* ========================================================= */}
        {/* PHASE 1: LOGIN / REGISTRATION PORTAL                      */}
        {/* ========================================================= */}
        {!isExamStarted && !isCompleted && (
          <div className="max-w-4xl mx-auto py-2 md:py-8 animate-fade-in">
            <div className="text-center mb-6 sm:mb-8 px-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Simulasi CAT & CBT Modern Terintegrasi
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-semibold">
                Sistem ujian Computer Assisted Test dengan standardisasi kurikulum nasional dan sistem penaksiran real-time intuitif responsif.
              </p>
            </div>

            {/* BAR BELAJAR / PILIHAN PROGRAM CBT BERDIRI SENDIRI DENGAN ICON DI ATAS DAN TULISAN DI BAWAH */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md p-6 mb-8 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="text-xs font-black uppercase text-indigo-600 tracking-widest">
                  Pilih Program Ujian CBT
                </span>
                <span className="md:hidden inline-flex items-center gap-1 text-[10px] font-semibold text-slate-400 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full leading-none">
                  Geser <ChevronRight className="h-3 w-3 shrink-0" />
                </span>
              </div>
              <div className="flex md:grid md:grid-cols-5 gap-3.5 sm:gap-4 max-w-4xl mx-auto overflow-x-auto pb-2 md:pb-0 snap-x snap-mandatory scrollbar-hide">
                {(Object.keys(EXAM_CONFIGS) as ExamType[]).map((type) => {
                  const themeColors = {
                    PNS: {
                      active: 'bg-gradient-to-br from-red-600 to-rose-500 text-white border-red-700 shadow-lg shadow-red-500/10 ring-4 ring-red-50',
                      inactive: 'bg-slate-50 hover:bg-red-50/50 hover:border-red-200 border-slate-200 text-slate-600'
                    },
                    PPPK: {
                      active: 'bg-gradient-to-br from-amber-600 to-yellow-500 text-white border-amber-700 shadow-lg shadow-amber-500/10 ring-4 ring-amber-50',
                      inactive: 'bg-slate-50 hover:bg-amber-50/50 hover:border-amber-200 border-slate-200 text-slate-600'
                    },
                    BUMN: {
                      active: 'bg-gradient-to-br from-indigo-600 to-blue-500 text-white border-indigo-700 shadow-lg shadow-indigo-500/10 ring-4 ring-indigo-50',
                      inactive: 'bg-slate-50 hover:bg-indigo-50/50 hover:border-indigo-200 border-slate-200 text-slate-600'
                    },
                    TNI_POLRI: {
                      active: 'bg-gradient-to-br from-emerald-600 to-teal-500 text-white border-emerald-700 shadow-lg shadow-emerald-500/10 ring-4 ring-emerald-50',
                      inactive: 'bg-slate-50 hover:bg-emerald-50/50 hover:border-emerald-200 border-slate-200 text-slate-600'
                    },
                    SBMPTN: {
                      active: 'bg-gradient-to-br from-pink-600 to-rose-500 text-white border-pink-700 shadow-lg shadow-pink-500/10 ring-4 ring-pink-50',
                      inactive: 'bg-slate-50 hover:bg-pink-50/50 hover:border-pink-200 border-slate-200 text-slate-600'
                    }
                  };
                  const conf = EXAM_CONFIGS[type];
                  const isSelected = selectedExamType === type;
                  const activeClass = themeColors[type].active;
                  const inactiveClass = themeColors[type].inactive;

                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setSelectedExamType(type);
                        setCandidate((prev) => ({
                          ...prev,
                          examCode: type === 'PNS' ? 'SKD-CPNS-2026' : `${type}-CBT-2026`
                        }));
                      }}
                      className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 text-center transition-all duration-300 cursor-pointer shrink-0 w-36 md:w-auto snap-center ${
                        isSelected ? activeClass : inactiveClass
                      }`}
                    >
                      {/* Icon container */}
                      <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 mb-3 border transition-colors ${
                        isSelected 
                          ? 'bg-white/20 border-white/10 text-white' 
                          : 'bg-white border-slate-200/80 text-slate-700 shadow-sm'
                      }`}>
                        {type === 'PNS' && <Building className="h-5.5 w-5.5" />}
                        {type === 'PPPK' && <Briefcase className="h-5.5 w-5.5" />}
                        {type === 'BUMN' && <TrendingUp className="h-5.5 w-5.5" />}
                        {type === 'TNI_POLRI' && <Shield className="h-5.5 w-5.5" />}
                        {type === 'SBMPTN' && <GraduationCap className="h-5.5 w-5.5" />}
                      </div>

                      {/* Text content */}
                      <span className={`text-xs font-black tracking-tight leading-tight uppercase block ${
                        isSelected ? 'text-white' : 'text-slate-800'
                      }`}>
                        {conf.shortTitle}
                      </span>
                      <span className={`text-[10px] sm:text-[11px] font-semibold mt-1 block leading-none ${
                        isSelected ? 'text-indigo-100/90' : 'text-slate-400'
                      }`}>
                        {conf.totalQuestions} Soal • {conf.durationMinutes}m
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic feedback on the active selection */}
              <div className="mt-6 pt-4 border-t border-slate-100 animate-fade-in max-w-xl mx-auto text-center">
                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest block mb-1">PROGRAM CBT YANG DIPIIHI:</span>
                <span className="text-xs sm:text-sm font-black text-slate-800 block">
                  {currentExamConfig.title} ({currentExamConfig.shortTitle})
                </span>
                <p className="text-[11px] text-slate-500 mt-1 font-semibold">
                  Sesi Ujian: <strong className="text-slate-700">{currentExamConfig.totalQuestions} Soal</strong> &nbsp;•&nbsp; Alokasi Waktu: <strong className="text-slate-700">{currentExamConfig.durationMinutes} Menit</strong> &nbsp;•&nbsp; Nilai Maksimal: <strong className="text-slate-700">{currentExamConfig.maxTotalScore} Poin</strong>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Registration Form */}
              <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-lg p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
                  <User className="h-5 w-5 text-indigo-600" />
                  <h3 className="text-lg font-bold text-slate-900">Kartu Login Peserta</h3>
                </div>

                <form onSubmit={handleStartExam} className="space-y-5">

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">
                      Nama Lengkap Peserta
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={candidate.name}
                        onChange={(e) => setCandidate({ ...candidate, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all pl-11"
                        placeholder="Nama Lengkap sesuai KTP"
                        required
                      />
                      <User className="absolute left-3.5 top-3 text-slate-400 h-5 w-5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">
                        Nomor Ujian / Peserta
                      </label>
                      <input
                        type="text"
                        value={candidate.participantNumber}
                        onChange={(e) => setCandidate({ ...candidate, participantNumber: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold tracking-wider text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                        placeholder="CAT-XXXXXX"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">
                        Kode Simulasi Ujian
                      </label>
                      <input
                        type="text"
                        value={candidate.examCode}
                        readOnly
                        className="w-full bg-slate-100 border border-slate-200 text-slate-500 rounded-xl px-4 py-3 text-sm font-semibold tracking-wider cursor-not-allowed uppercase"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2.5">
                      Pilih Karakter / Avatar Peserta
                    </label>
                    <div className="grid grid-cols-2 gap-3.5">
                      <button
                        type="button"
                        onClick={() => setSelectedAvatar('male')}
                        className={`flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl border-2 transition-all cursor-pointer ${
                          selectedAvatar === 'male'
                            ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-500/10'
                            : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                        }`}
                      >
                        <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-700" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                          </svg>
                        </div>
                        <div className="text-left min-w-0">
                          <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">Laki-Laki</p>
                          <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate">Calon Staf / Pegawai</p>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedAvatar('female')}
                        className={`flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl border-2 transition-all cursor-pointer ${
                          selectedAvatar === 'female'
                            ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-500/10'
                            : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                        }`}
                      >
                        <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
                          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                          </svg>
                        </div>
                        <div className="text-left min-w-0">
                          <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">Perempuan</p>
                          <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate">Analis/Auditor</p>
                        </div>
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold py-3 px-5 sm:py-3.5 sm:px-6 rounded-xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer transform active:scale-[0.98]"
                  >
                    Mulai Konfigurasi & Masuk Ujian
                    <ArrowRight className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </button>
                </form>
              </div>

              {/* Rules & Information Panels */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md p-5 sm:p-6 animate-fade-in">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-3.5 flex items-center gap-2">
                    <Info className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-indigo-600" />
                    Ketentuan Sistem & Bobot Nilai
                  </h4>
                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                    <li className="flex gap-2 items-start">
                      <span className="h-4.5 w-4.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-bold shrink-0 flex items-center justify-center mt-0.5">1</span>
                      <div>
                        <strong className="text-slate-900 font-bold block text-xs sm:text-sm">Sistem CAT {currentExamConfig.shortTitle}</strong>
                        <span className="text-slate-500 text-[11px] sm:text-xs">
                          Jumlah soal: <strong className="text-slate-700 font-bold">{currentExamConfig.totalQuestions} butir multimedia</strong> ({currentExamConfig.categories.map(c => `${c.questionCount} ${c.name}`).join(', ')}).
                        </span>
                      </div>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="h-4.5 w-4.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-bold shrink-0 flex items-center justify-center mt-0.5">2</span>
                      <div>
                        <strong className="text-slate-900 font-bold block text-xs sm:text-sm">Bobot Skor Berstandar Resmi</strong>
                        <span className="text-[11px] sm:text-xs block text-slate-500 mt-1 leading-relaxed">
                          • Soal pilihan ganda akademik bernilai <b className="text-indigo-600 font-bold">+5 untuk jawaban benar</b> dan 0 untuk salah/kosong.
                          {currentExamConfig.categories.some(c => ['TKP', 'AKHLAK', 'MANAJERIAL', 'SOSIO_KULTURAL', 'WAWANCARA', 'PSIKOTES'].includes(c.id)) && (
                            <span className="block mt-0.5">• Soal bermutu perilaku/situasional mengadopsi <b>skala nilai berjenjang +1 hingga +5</b> (tanpa poin minus).</span>
                          )}
                        </span>
                      </div>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="h-4.5 w-4.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-bold shrink-0 flex items-center justify-center mt-0.5">3</span>
                      <div>
                        <strong className="text-slate-900 font-bold block text-xs sm:text-sm">Nilai Ambang Batas Minim Kelulusan</strong>
                        <span className="text-slate-500 text-[11px] sm:text-xs block mb-1">Masing-masing kategori materi wajib melewati ambang batas:</span>
                        <div className="text-[10px] sm:text-xs flex flex-wrap gap-1.5 mt-0.5">
                          {currentExamConfig.categories.map(c => (
                            <span key={c.id} className="bg-indigo-50 border border-indigo-100 text-indigo-700 px-2 py-0.5 font-bold rounded text-[10px]">
                              {c.name}: {c.threshold}
                            </span>
                          ))}
                        </div>
                      </div>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="h-4.5 w-4.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-bold shrink-0 flex items-center justify-center mt-0.5">4</span>
                      <div>
                        <strong className="text-slate-900 font-bold block text-xs sm:text-sm">Navigasi Penuh & Real-time</strong>
                        <span className="text-slate-500 text-[11px] sm:text-xs">Peserta bebas melompati soal, menandai ragu-ragu, serta kembali menyunting jawaban kapan saja sebelum mengakhiri sesi ujian.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 sm:p-5 text-indigo-900">
                  <h4 className="font-bold flex items-center gap-1.5 text-indigo-950 text-xs sm:text-sm">
                    <Clock className="w-4 h-4 text-indigo-700" />
                    Waktu Pengerjaan Soal: {currentExamConfig.durationMinutes} Menit
                  </h4>
                  <p className="text-[11px] sm:text-xs mt-1 leading-relaxed text-indigo-950 font-medium">
                    Timer penanda mundur {currentExamConfig.durationMinutes} menit berjalan presisi begitu Anda menekan tombol mulai. Jika waktu terlampaui sebelum penyelesaian manual, sistem BKN otomatis menyimpan kondisi terakhir Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PHASE 2: ACTIVE CBT ENVIRONMENT (The actual exam applet) */}
        {/* ========================================================= */}
        {isExamStarted && !isCompleted && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: CAT Question Engine */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Question status bar */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3.5 sm:p-4 flex flex-wrap gap-3.5 items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xs sm:text-sm font-semibold text-slate-500">Kategori:</span>
                  <span className={`px-2 py-1 sm:px-3 text-[10px] sm:text-xs font-black rounded-lg ${
                    currentQuestion.category.includes('TWK') || currentQuestion.category.includes('KEBANGSAAN') || currentQuestion.category.includes('LITERASI')
                      ? 'bg-red-100 text-red-700 border border-red-200' 
                      : currentQuestion.category.includes('TIU') || currentQuestion.category.includes('TKD') || currentQuestion.category.includes('TPS') || currentQuestion.category.includes('MATEMATIKA') || currentQuestion.category.includes('AKADEMIK') || currentQuestion.category.includes('TEKNIS')
                      ? 'bg-amber-100 text-amber-700 border border-amber-200'
                      : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                  }`}>
                    {(() => {
                      const found = currentExamConfig.categories.find(c => c.id === currentQuestion.category);
                      return found ? `${found.fullName.toUpperCase()} (${found.name.toUpperCase()})` : currentQuestion.category;
                    })()}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-slate-500">
                    Soal <strong className="text-sm sm:text-lg text-indigo-600 font-extrabold">{currentQuestionIdx + 1}</strong> dari {QUESTIONS.length}
                  </span>
                </div>
              </div>

              {/* Main Question Card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-8 space-y-5">
                
                {/* Text Area */}
                <div className="space-y-2">
                  <div className="text-[10px] sm:text-xs uppercase font-extrabold tracking-widest text-indigo-500">Pertanyaan Soal</div>
                  <p className="text-slate-850 text-sm sm:text-base md:text-lg font-semibold leading-relaxed">
                    {currentQuestion.text}
                  </p>
                </div>

                {/* Multiple Options List */}
                <div className="space-y-3 mt-5">
                  {(['A', 'B', 'C', 'D', 'E'] as const).map((key) => {
                    const optionText = currentQuestion.options[key];
                    const isSelected = currentAnswer.selectedOption === key;

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => handleSelectOption(key)}
                        className={`w-full text-left flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border-2 transition-all duration-200 group relative cursor-pointer ${
                          isSelected
                            ? 'border-indigo-600 bg-indigo-50/50 ring-1 ring-indigo-500/10 shadow-sm'
                            : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50'
                        }`}
                      >
                        {/* Option alphabet bubble */}
                        <div className={`h-7 w-7 sm:h-8 sm:w-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-all ${
                          isSelected
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600'
                        }`}>
                          {key}
                        </div>

                        {/* Option Text */}
                        <div className="flex-1 text-xs sm:text-sm font-medium leading-relaxed pr-6 pt-0.5 text-slate-700">
                          {optionText}
                        </div>

                        {/* Selected Indicator Checkmark */}
                        {isSelected && (
                          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 bg-indigo-100 rounded-full p-1 border border-indigo-200">
                            <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-indigo-700" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation and state trigger buttons */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3.5 sm:p-4 flex items-center justify-between gap-3 flex-wrap md:flex-nowrap">
                {/* Prev Button */}
                <button
                  type="button"
                  onClick={handlePrevQuestion}
                  disabled={currentQuestionIdx === 0}
                  className="flex-1 md:flex-initial flex items-center justify-center gap-1 border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed font-semibold text-xs sm:text-sm px-3 sm:px-4 py-2.5 rounded-xl transition-all"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                  <span className="hidden xs:inline">Sebelumnya</span>
                  <span className="xs:hidden">Sebelum</span>
                </button>

                {/* Ragu-ragu checkbox button */}
                <button
                  type="button"
                  onClick={handleToggleFlagged}
                  className={`flex-1 md:flex-initial flex items-center justify-center gap-1.5 border font-bold text-xs sm:text-sm px-3 sm:px-5 py-2.5 rounded-xl transition-all ${
                    currentAnswer.isFlagged
                      ? 'bg-amber-500 border-amber-600 text-white shadow-inner'
                      : 'border-amber-200 text-amber-700 hover:bg-amber-50 active:bg-amber-100'
                  }`}
                >
                  <Flag className={`h-4 w-4 sm:h-4.5 sm:w-4.5 ${currentAnswer.isFlagged ? 'fill-white' : ''}`} />
                  {currentAnswer.isFlagged ? (
                    <>
                      <span className="hidden xs:inline">Ragu-Ragu (Aktif)</span>
                      <span className="xs:hidden">Ragu (Aktif)</span>
                    </>
                  ) : (
                    <>
                      <span className="hidden xs:inline">Tandai Ragu-Ragu</span>
                      <span className="xs:hidden">Ragu-Ragu</span>
                    </>
                  )}
                </button>

                {/* Next Button */}
                {currentQuestionIdx < QUESTIONS.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="flex-1 md:flex-initial flex items-center justify-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm px-3 sm:px-5 py-2.5 rounded-xl transition-all shadow-md shadow-indigo-100 active:transform active:scale-95"
                  >
                    <span className="hidden xs:inline">Simpan & Lanjutkan</span>
                    <span className="xs:hidden">Lanjutkan</span>
                    <ChevronRight className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowExitConfirm(true)}
                    className="flex-1 md:flex-initial flex items-center justify-center gap-1 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs sm:text-sm px-3 sm:px-5 py-2.5 rounded-xl transition-all shadow-md active:transform active:scale-95"
                  >
                    Selesaikan Ujian
                    <CheckCircle className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                  </button>
                )}
              </div>

              {/* Dev/Demo helper triggers */}
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row gap-3 sm:items-center justify-between text-amber-900">
                <div className="flex gap-2 items-start">
                  <Info className="h-4.5 w-4.5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-[11px] sm:text-xs leading-relaxed font-semibold">
                    <strong>Demo Power Tip:</strong> Gunakan fitur percepat waktu (speedrun) atau selesaikan ujian langsung dari tombol merah di panel kanan untuk melihat analisis skor lulus/tidak lulus instan beserta penjelasannya!
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg p-1 border border-amber-200 shrink-0 self-start sm:self-center">
                  <span className="text-[10px] sm:text-xs font-bold text-amber-800 px-1.5">Kecepatan Timer:</span>
                  <div className="flex gap-1">
                    {[1, 50, 200].map((spd) => (
                      <button
                        key={spd}
                        type="button"
                        onClick={() => setTimerSpeed(spd)}
                        className={`text-[10px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 font-extrabold rounded ${
                          timerSpeed === spd
                            ? 'bg-amber-500 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Candidate Profile & Navigation Grid */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Profile Bar with Live Timer Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md p-5 text-center space-y-4">
                
                {/* User avatar and metadata */}
                <div className="flex items-center gap-3.5 text-left border-b border-slate-100 pb-3.5">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow ${
                    selectedAvatar === 'male' ? 'bg-indigo-600' : 'bg-pink-600'
                  }`}>
                    {selectedAvatar === 'male' ? 'LK' : 'PR'}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 leading-tight">{candidate.name}</h4>
                    <p className="text-xs text-slate-500 font-semibold tracking-wider">{candidate.participantNumber}</p>
                    <p className="text-[10px] text-slate-400 font-bold mt-0.5 tracking-wider uppercase">{candidate.examCode}</p>
                  </div>
                </div>

                {/* Countdown Time Card */}
                <div className="bg-slate-900 text-white rounded-xl p-4 space-y-2.5 shadow-md relative overflow-hidden">
                  <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-3 -translate-y-3">
                    <Clock className="w-24 h-24" />
                  </div>

                  <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <span>Sisa Waktu Ujian</span>
                    <span className="bg-red-500/20 text-red-500 border border-red-500/30 px-1.5 py-0.5 rounded">Real-time</span>
                  </div>

                  <div className="font-mono text-3xl font-extrabold tracking-widest text-[#10B981] flex justify-center items-center gap-1">
                    {formatTime(timeLeft)}
                  </div>

                  <div className="flex justify-center items-center gap-3 pt-1 border-t border-slate-800/80">
                    <button
                      type="button"
                      onClick={() => setIsTimerRunning(!isTimerRunning)}
                      className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-xs px-3 py-1.5 rounded-lg font-bold border border-slate-700 transition"
                    >
                      {isTimerRunning ? (
                        <>
                          <Pause className="h-3 w-3 text-red-400" />
                          Pause Timer
                        </>
                      ) : (
                        <>
                          <Play className="h-3 w-3 text-emerald-400" />
                          Lanjutkan
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation Grid Container */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md p-5 space-y-4">
                
                {/* Filters */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-indigo-500" />
                    Navigasi Cepat Soal
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {['ALL', ...currentExamConfig.categories.map(c => c.id)].map((filter) => (
                      <button
                        key={filter}
                        type="button"
                        onClick={() => setActiveFilter(filter as any)}
                        className={`text-[9px] sm:text-[10px] font-black tracking-wider px-2 py-1 py-1 px-2.5 rounded-lg border uppercase transition-all cursor-pointer ${
                          activeFilter === filter
                            ? 'bg-indigo-600 text-white border-indigo-705 shadow-sm font-black'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 font-semibold'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Circular indicator count tags */}
                <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-xl text-center border border-slate-200/60">
                  <div className="space-y-0.5">
                    <span className="text-sm font-extrabold text-[#10B981]">{answeredCount}</span>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Terjawab</p>
                  </div>
                  <div className="space-y-0.5 border-x border-slate-200">
                    <span className="text-sm font-extrabold text-[#EAB308]">{flaggedCount}</span>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Ragu-Ragu</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-sm font-extrabold text-slate-400">{unansweredCount}</span>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Kosong</p>
                  </div>
                </div>

                {/* Grid Numbers */}
                <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-2 max-h-[300px] overflow-y-auto pr-1">
                  {filteredQuestionListForNav.map((q) => {
                    const originalIndex = QUESTIONS.findIndex((origQ) => origQ.id === q.id);
                    const isCurrent = originalIndex === currentQuestionIdx;
                    const ans = answers[q.id];
                    const hasAnswer = ans?.selectedOption !== null;
                    const isFlagged = ans?.isFlagged;

                    let bgClass = 'bg-white text-slate-700 border-slate-200 hover:border-slate-400';
                    let textClass = 'text-slate-700';
                    let iconNode = null;

                    if (hasAnswer) {
                      if (isFlagged) {
                        bgClass = 'bg-amber-500 text-white border-amber-600 shadow-sm';
                        textClass = 'text-white font-extrabold';
                      } else {
                        bgClass = 'bg-emerald-500 text-white border-emerald-600 shadow-sm';
                        textClass = 'text-white font-extrabold';
                      }
                    } else if (isFlagged) {
                      bgClass = 'bg-amber-500 text-white border-amber-600 shadow-sm';
                      textClass = 'text-white font-extrabold';
                    }

                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => handleJumpToQuestion(q.id)}
                        className={`aspect-square sm:h-10 sm:w-10 lg:h-11 lg:w-11 rounded-xl border flex flex-col items-center justify-center font-bold text-sm relative transition-all group ${bgClass} ${
                          isCurrent 
                            ? 'ring-2 ring-indigo-600 ring-offset-2 scale-105 z-10 border-indigo-600 font-extrabold text-indigo-700' 
                            : ''
                        }`}
                      >
                        <span>{originalIndex + 1}</span>
                        {/* Little helper badge for category */}
                        <span className={`text-[7px] font-black uppercase pointer-events-none mt-0.5 ${
                          hasAnswer || isFlagged ? 'text-white opacity-80' : 'text-slate-400'
                        }`}>
                          {q.category}
                        </span>

                        {isCurrent && (
                          <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-indigo-600 border border-white flex items-center justify-center text-[7px] text-white">
                            ●
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Legend explanation check */}
                <div className="border-t border-slate-100 pt-3 space-y-1.5 text-[11px] text-slate-500 font-semibold leading-normal">
                  <div className="flex items-center gap-2">
                    <span className="h-3.5 w-3.5 bg-emerald-500 border border-emerald-600 rounded"></span>
                    <span>Terjawab (Hijau)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3.5 w-3.5 bg-amber-500 border border-amber-600 rounded"></span>
                    <span>Ragu-Ragu (Kuning)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3.5 w-3.5 bg-white border border-slate-200 rounded"></span>
                    <span>Belum Dijawab (Putih)</span>
                  </div>
                </div>

                {/* Finish Big Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setShowExitConfirm(true)}
                    className="w-full bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-extrabold py-3 px-4 rounded-xl shadow-md cursor-pointer transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Kunci & Akhiri Ujian
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}
            {/* ========================================================= */}
        {/* PHASE 3: COMPREHENSIVE SCORECARD & REVIEW ANALYSIS DASHBOARD */}
        {/* ========================================================= */}
        {isCompleted && (
          <div className="max-w-5xl mx-auto py-4 space-y-8 animate-fade-in">
            
            {/* Header Result Banner with pass status */}
            <div className={`rounded-3xl border shadow-xl overflow-hidden p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 bg-gradient-to-br ${
              scores.isOverallPassed 
                ? 'from-emerald-50 to-teal-50 border-emerald-200 text-emerald-950' 
                : 'from-rose-50 to-orange-50 border-rose-200 text-rose-950'
            }`}>
              <div className="space-y-3 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Award className={`h-6 w-6 sm:h-8 sm:w-8 ${scores.isOverallPassed ? 'text-emerald-600' : 'text-rose-600'}`} />
                  <span className="text-[10px] sm:text-xs uppercase font-black tracking-widest text-slate-500">Hasil Evaluasi Kelulusan {currentExamConfig.shortTitle}</span>
                </div>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
                  Status: {scores.isOverallPassed ? 'LULUS (MEMENUHI SYARAT)' : 'TIDAK LULUS'}
                </h2>
                
                <p className="text-xs sm:text-sm max-w-xl text-slate-600 font-medium leading-relaxed">
                  {scores.isOverallPassed 
                    ? `Selamat, ${candidate.name}! Anda berhasil melewati batas ambang nasional (Passing Grade) di seluruh kategori ujian ${currentExamConfig.shortTitle} secara komprehensif.` 
                    : `Mohon maaf, Anda belum memenuhi nilai ambang batas minimal kelulusan pada beberapa kategori materi. Silakan pelajari pembahasan di bawah dan lakukan tes ulang.`}
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 font-semibold">
                  <span className="text-[10px] sm:text-xs px-2.5 py-1 bg-white/80 rounded-full border border-slate-250/60 text-slate-755">
                    Nama: <strong className="font-extrabold text-slate-900">{candidate.name}</strong>
                  </span>
                  <span className="text-[10px] sm:text-xs px-2.5 py-1 bg-white/80 rounded-full border border-slate-250/60 text-slate-755">
                    No: <strong className="font-extrabold text-slate-900">{candidate.participantNumber}</strong>
                  </span>
                  <span className="text-[10px] sm:text-xs px-2.5 py-1 bg-indigo-100 border border-indigo-200 text-indigo-800 rounded-full">
                    Program: <strong className="font-extrabold">{currentExamConfig.title}</strong>
                  </span>
                </div>
              </div>

              {/* Dynamic Overall Score Radial-Styled Gauge Card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-5 flex flex-col items-center justify-center shrink-0 w-full md:w-64">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Akumulasi Skor</span>
                <div className="text-5xl font-black text-indigo-600 tracking-tight mt-2.5">
                  {scores.totalScore}
                </div>
                <p className="text-xs font-semibold text-slate-500 mt-1">Nilai Maksimal: {currentExamConfig.maxTotalScore}</p>
                
                <div className="w-full bg-slate-100 rounded-full h-2 mt-4 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${
                      scores.isOverallPassed ? 'bg-emerald-500' : 'bg-indigo-500'
                    }`}
                    style={{ width: `${(scores.totalScore / currentExamConfig.maxTotalScore) * 100}%` }}
                  ></div>
                </div>

                <div className="text-[9px] font-bold text-slate-400 mt-2 text-center leading-relaxed">
                  <span>Ambang Batas Pas: <b className="text-slate-600">{currentExamConfig.categories.map(c => `${c.threshold} (${c.name})`).join(' + ')}</b></span>
                </div>
              </div>
            </div>

            {/* Dynamic category scorecard cards */}
            <div className={`grid grid-cols-1 md:grid-cols-${Math.min(3, currentExamConfig.categories.length)} lg:grid-cols-${currentExamConfig.categories.length} gap-6`}>
              {currentExamConfig.categories.map((cat, idx) => {
                const isPassed = scores.categoryPassed[cat.id];
                const score = scores.categoryScores[cat.id] || 0;
                const correctCount = scores.categoryCorrectCount[cat.id] || 0;
                const totalQs = cat.questionCount;
                const maxScore = cat.maxScore;
                
                const badgeThemes = [
                  'bg-red-50 text-red-700 border-red-200',
                  'bg-amber-50 text-amber-700 border-amber-200',
                  'bg-emerald-50 text-emerald-700 border-emerald-200',
                  'bg-pink-50 text-pink-700 border-pink-200',
                  'bg-indigo-50 text-indigo-700 border-indigo-200'
                ];
                const theme = badgeThemes[idx % badgeThemes.length];

                return (
                  <div key={cat.id} className="bg-white rounded-2xl border border-slate-200 shadow p-6 flex flex-col justify-between hover:shadow-md transition duration-300">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className={`${theme} text-[10px] sm:text-xs font-black px-2.5 py-1 rounded tracking-wide font-mono uppercase`}>{cat.id}</span>
                        <span className={`text-[10px] sm:text-xs font-black px-2.5 py-1 rounded-full ${
                          isPassed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}>
                          {isPassed ? 'Lolos Minimum' : 'Di Bawah Target'}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight">{cat.fullName}</h3>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-1.5 leading-normal">{cat.description}</p>

                      <div className="mt-5 space-y-3.5">
                        <div className="flex justify-between text-sm items-baseline">
                          <span className="text-slate-500 font-semibold text-xs">Skor Anda:</span>
                          <strong className="text-2xl font-black text-slate-800">{score} <span className="text-xs text-slate-400 font-semibold">/ {maxScore}</span></strong>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            <span>Min Kelulusan</span>
                            <span>Target ≥ {cat.threshold}</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all duration-1000 ${isPassed ? 'bg-emerald-500' : 'bg-rose-500'}`} 
                              style={{ width: `${Math.min(100, (score / maxScore) * 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3.5 mt-4 border-t border-slate-100 flex justify-between text-xs text-slate-500 font-semibold">
                      <span>Ref Terjawab:</span>
                      <span className="text-slate-800 font-black">{correctCount} dari {totalQs} Soal</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Answer Key & Explanation Review Center (Kunci Jawaban & Pembahasan) */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="h-5.5 w-5.5 text-indigo-600" />
                    Review Pembahasan & Kunci Jawaban
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Silakan telaah jawaban Anda versus kunci jawaban dan landasan teorinya secara mendalam.
                  </p>
                </div>

                {/* Filter triggers inside the result review block */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border self-start">
                  {[
                    { key: 'ALL', label: 'Semua' },
                    { key: 'CORRECT', label: 'Paling Unggul / Benar' },
                    { key: 'FLAGGED', label: 'Ragu-Ragu' }
                  ].map((btn) => (
                    <button
                      key={btn.key}
                      type="button"
                      onClick={() => setReviewFilter(btn.key as any)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all ${
                        reviewFilter === btn.key
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* List of 30 review questions with explanations */}
              <div className="space-y-6">
                {QUESTIONS.filter((q) => {
                  const ans = answers[q.id];
                  if (reviewFilter === 'FLAGGED') return ans?.isFlagged;
                  if (reviewFilter === 'CORRECT') {
                    if (q.category === 'TKP') {
                      // High pointed answer for TKP
                      return ans?.selectedOption !== null && q.optionPoints?.[ans.selectedOption] === 5;
                    } else {
                      return ans?.selectedOption === q.correctAnswer;
                    }
                  }
                  return true;
                }).map((q, idx) => {
                  const ans = answers[q.id];
                  const isFlagged = ans?.isFlagged;
                  const isSelected = ans?.selectedOption;
                  
                  // Score calc
                  let gainedPoints = 0;
                  let isCorrect = false;
                  if (q.category === 'TKP') {
                    gainedPoints = isSelected ? (q.optionPoints?.[isSelected] || 0) : 0;
                  } else {
                    isCorrect = isSelected === q.correctAnswer;
                    gainedPoints = isCorrect ? 5 : 0;
                  }

                  const alphabetIndex = QUESTIONS.findIndex((origQ) => origQ.id === q.id) + 1;

                  return (
                    <div 
                      key={q.id} 
                      id={`review-item-${q.id}`}
                      className="group border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200 transition-all p-5 shadow-sm space-y-4"
                    >
                      {/* Top info badge list of single review */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-50/30 pb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="h-6 w-6 rounded-lg bg-indigo-100 border border-indigo-200 text-indigo-700 flex items-center justify-center font-extrabold text-xs">
                            {alphabetIndex}
                          </span>
                          <span className={`px-2.5 py-0.5 rounded text-[10px] font-black uppercase text-center ${
                            q.category === 'TWK' 
                              ? 'bg-red-50 border border-red-200 text-red-700' 
                              : q.category === 'TIU'
                              ? 'bg-amber-50 border border-amber-200 text-amber-700'
                              : 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                          }`}>
                            {q.category}
                          </span>
                          {isFlagged && (
                            <span className="bg-amber-500/10 text-amber-700 border border-amber-500/20 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                              Di-Ragu-Ragukan
                            </span>
                          )}
                        </div>

                        {/* Point bubble */}
                        <div className="flex items-center gap-2 text-xs font-bold">
                          <span className="text-slate-500">Poin Diperoleh:</span>
                          <span className={`px-2.5 py-1 rounded-full border text-xs font-black shrink-0 ${
                            gainedPoints >= 4 
                              ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                              : gainedPoints >= 1
                              ? 'bg-amber-50 border-amber-200 text-amber-700'
                              : 'bg-rose-50 border-rose-200 text-rose-700'
                          }`}>
                            +{gainedPoints} Poin
                          </span>
                        </div>
                      </div>

                      {/* Question Text */}
                      <p className="text-sm sm:text-base font-bold text-slate-900 leading-normal">
                        {q.text}
                      </p>

                      {/* Options with Highlight of user selection vs key */}
                      <div className="grid grid-cols-1 gap-2 border-l-2 border-indigo-100 pl-3">
                        {(['A', 'B', 'C', 'D', 'E'] as const).map((opt) => {
                          const val = q.options[opt];
                          const optSel = isSelected === opt;
                          
                          // Styling decision
                          let cardStyle = 'text-slate-600 font-medium text-xs py-1 px-2.5 rounded-lg';
                          if (q.category === 'TKP') {
                            const pts = q.optionPoints?.[opt] || 0;
                            if (optSel) {
                              cardStyle = 'bg-indigo-50/70 border border-indigo-200 text-indigo-900 font-bold text-xs py-1.5 px-3 rounded-lg flex items-center justify-between gap-2';
                            } else if (pts === 5) {
                              cardStyle = 'bg-emerald-50 text-emerald-800 border border-emerald-100 text-xs py-1.5 px-3 rounded-lg flex items-center justify-between gap-2 font-medium';
                            }
                          } else {
                            const isKey = q.correctAnswer === opt;
                            if (optSel && isKey) {
                              cardStyle = 'bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold text-xs py-1.5 px-3 rounded-lg flex items-center gap-2';
                            } else if (optSel && !isKey) {
                              cardStyle = 'bg-rose-50 border border-rose-200 text-rose-900 font-bold text-xs py-1.5 px-3 rounded-lg flex items-center gap-2';
                            } else if (isKey) {
                              cardStyle = 'bg-emerald-50 border border-emerald-100 text-emerald-900 font-bold text-xs py-1.5 px-3 rounded-lg flex items-center gap-2';
                            }
                          }

                          return (
                            <div key={opt} className={cardStyle}>
                              <div className="flex gap-2.5 py-0.5">
                                <span className="font-extrabold text-slate-500 uppercase shrink-0">({opt})</span>
                                <span className="leading-relaxed">{val}</span>
                              </div>
                              
                              {/* Extra detailed points helper for TKP */}
                              {q.category === 'TKP' && (
                                <span className="bg-slate-200/50 text-slate-700 text-[10px] px-2 py-0.5 rounded-md font-bold shrink-0 self-center">
                                  Bobot: {q.optionPoints?.[opt]} Pts
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explicit Explanation Toggle Card */}
                      <div className="bg-indigo-50/45 border border-indigo-100/60 rounded-xl p-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <Bookmark className="h-4.5 w-4.5 text-indigo-700 fill-indigo-200" />
                          <h4 className="text-xs font-black uppercase text-indigo-700 tracking-wider">Kunci Jawaban & Landasan Hukum / Teori</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                          {q.category !== 'TKP' && (
                            <span className="font-bold text-emerald-800 block mb-1">
                              Jawaban Paling Tepat: Opsi ({q.correctAnswer})
                            </span>
                          )}
                          {q.category === 'TKP' && (
                            <span className="font-bold text-emerald-800 block mb-1">
                              Opsi Terbaik (Skor 5): Opsi ({Object.keys(q.optionPoints || {}).find(k => q.optionPoints?.[k as any] === 5)})
                            </span>
                          )}
                          {q.explanation}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Restart testing options */}
            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={handleResetExam}
                className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-indigo-300 transform transition hover:-translate-y-0.5 cursor-pointer active:translate-y-0"
              >
                <RotateCcw className="h-5 w-5" />
                Kembali ke Portal Keanggotaan & Coba Lagi
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PAPAN PERINGKAT / LEADERBOARD                            */}
        {/* ========================================================= */}
        {(!isExamStarted || isCompleted) && (
          <div className="mt-12 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden animate-fade-in">
            {/* Header section with Trophy gradient */}
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="h-11 w-11 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/10">
                  <Trophy className="h-6 w-6 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black tracking-tight uppercase">Papan Skor & Perangkingan CBT Nasional</h3>
                  <p className="text-[11px] text-slate-300 font-medium">Berdasarkan data simulasi kelulusan Ambang Batas BKN 2026</p>
                </div>
              </div>

              {/* Quick stats totals */}
              <div className="flex items-center gap-4 text-xs font-mono font-bold bg-white/10 px-4 py-2 rounded-xl border border-white/10 shrink-0">
                <div className="text-center">
                  <span className="block text-amber-400 text-sm font-black">{leaderboard.length}</span>
                  <span className="text-[9px] uppercase tracking-wider text-slate-300">Peserta</span>
                </div>
                <div className="h-8 w-px bg-white/20"></div>
                <div className="text-center">
                  <span className="block text-emerald-400 text-sm font-black">
                    {leaderboard.filter(e => e.passed).length}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-slate-300">Lolos</span>
                </div>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="p-5 border-b border-slate-150 bg-slate-50/50 flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Type Category Badges */}
              <div className="flex flex-wrap gap-1.5 w-full lg:w-auto">
                {(['ALL', 'PNS', 'PPPK', 'BUMN', 'TNI_POLRI', 'SBMPTN'] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setLeaderboardFilter(cat)}
                    className={`text-[10px] sm:text-xs px-3 py-1.5 rounded-lg border font-black uppercase tracking-wider transition-all cursor-pointer ${
                      leaderboardFilter === cat
                        ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {cat === 'ALL' ? 'Semua Program' : EXAM_CONFIGS[cat]?.shortTitle || cat}
                  </button>
                ))}
              </div>

              {/* Search element */}
              <div className="relative w-full lg:w-72 shrink-0">
                <input
                  type="text"
                  placeholder="Cari nama peserta..."
                  value={leaderboardSearch}
                  onChange={(e) => setLeaderboardSearch(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 pl-9 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-semibold text-slate-700"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              </div>
            </div>

            {/* Table layout with scrollbar wrapper */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[10px] text-slate-400 font-extrabold tracking-wider uppercase">
                    <th className="py-4 px-5 text-center w-16">Rank</th>
                    <th className="py-4 px-4">Nama Peserta</th>
                    <th className="py-4 px-4 text-center">Program CBT</th>
                    <th className="py-4 px-4 text-center">Skor Akhir</th>
                    <th className="py-4 px-4 text-center">Durasi</th>
                    <th className="py-4 px-4 text-center">Status PG</th>
                    <th className="py-4 px-5 text-right w-36">Tanggal Selesai</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150">
                  {filteredLeaderboard.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center py-12 text-slate-400 font-bold text-xs bg-white">
                        Tidak ada data peserta yang cocok dengan filter pencarian.
                      </td>
                    </tr>
                  ) : (
                    filteredLeaderboard.map((item, index) => {
                      const isCurrentUser = item.name === candidate.name;
                      let rankBadge = null;

                      // Display trophy/badge styles
                      if (index === 0) {
                        rankBadge = (
                          <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs mx-auto border border-amber-200 shadow-sm animate-pulse">
                            🥇
                          </div>
                        );
                      } else if (index === 1) {
                        rankBadge = (
                          <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-xs mx-auto border border-slate-200 shadow-sm">
                            🥈
                          </div>
                        );
                      } else if (index === 2) {
                        rankBadge = (
                          <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold text-xs mx-auto border border-orange-200 shadow-sm">
                            🥉
                          </div>
                        );
                      } else {
                        rankBadge = <span className="text-slate-500 font-bold text-xs">{index + 1}</span>;
                      }

                      const programColors: Record<string, string> = {
                        PNS: 'bg-red-50 hover:bg-red-100/50 text-red-700 border-red-150',
                        PPPK: 'bg-amber-50 hover:bg-amber-100/50 text-amber-700 border-amber-150',
                        BUMN: 'bg-indigo-50 hover:bg-indigo-100/50 text-indigo-700 border-indigo-150',
                        TNI_POLRI: 'bg-emerald-50 hover:bg-emerald-100/50 text-emerald-700 border-emerald-150',
                        SBMPTN: 'bg-pink-50 hover:bg-pink-100/50 text-pink-700 border-pink-150'
                      };

                      return (
                        <tr
                          key={`${item.name}-${index}`}
                          className={`hover:bg-slate-50/50 transition-colors bg-white ${
                            isCurrentUser ? 'bg-indigo-50/40 border-l-4 border-indigo-600' : ''
                          }`}
                        >
                          <td className="py-3.5 px-5 text-center">{rankBadge}</td>
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-2">
                              <span className={`font-bold text-slate-800 text-xs sm:text-sm truncate max-w-[180px] sm:max-w-[280px] ${isCurrentUser ? 'font-black text-indigo-900' : ''}`}>
                                {item.name}
                              </span>
                              {isCurrentUser && (
                                <span className="bg-indigo-600 text-white text-[8px] sm:text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                                  Anda
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <span className={`inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-lg border uppercase tracking-wide cursor-default ${programColors[item.examType] || 'bg-slate-100 text-slate-700'}`}>
                              {item.examType}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <span className="text-xs sm:text-sm font-black text-slate-800">
                              {item.score}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <span className="text-xs sm:text-sm text-slate-500 font-bold">
                              {item.duration}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-extrabold rounded-full ${
                              item.passed
                                ? 'bg-emerald-50 border border-emerald-200 text-emerald-800 shadow-sm'
                                : 'bg-rose-50 border border-rose-200 text-rose-800'
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${item.passed ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                              {item.passed ? 'MEMENUHI PG' : 'GUGUR PG'}
                            </span>
                          </td>
                          <td className="py-3.5 px-5 text-right font-medium text-slate-400 text-[11px]">
                            {item.date}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination / helper guidelines info */}
            <div className="bg-slate-50/50 p-4 border-t border-slate-100 text-[10px] sm:text-xs text-slate-500 font-bold flex flex-col sm:flex-row items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <Info className="h-4 w-4 text-indigo-500" />
                <span>Tekan tombol "Kunci & Akhiri Ujian" pada lembar kerja Anda agar skor Anda terekam langsung di atas.</span>
              </div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-indigo-500/80">
                Data Terenskripsi & Sinkronisasi Presisi
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer bar */}
      <footer className="bg-white max-w-7xl mx-auto  px-4 sm:px-6 py-4 mt-16 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] font-bold text-slate-400 gap-3 shrink-0 text-center sm:text-left">
        <div>SISTEM CBT VERSI 4.2.0 • SERVER-01 (ACTIVE) • &copy; 2026 CAT CBT</div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 uppercase">
          <span className="h-3 w-px bg-slate-200 hidden sm:inline"></span>
          <span>Devklit Team</span>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* DIALOG MODAL: FINISH EXAM CONFIRMATION                    */}
      {/* ========================================================= */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl max-w-md w-full overflow-hidden animate-zoom-in">
            {/* Modal Icon and decoration */}
            <div className="bg-gradient-to-r from-red-500 to-rose-600 p-6 text-white text-center space-y-2 relative">
              <div className="mx-auto h-12 w-12 rounded-full bg-white/20 flex items-center justify-center border border-white/20">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold">Konfirmasi Kunci Jawaban</h3>
              <p className="text-xs text-rose-100">Apakah Anda benar-benar yakin ingin mengakhiri sesi ujian?</p>
            </div>

            {/* Modal details */}
            <div className="p-6 space-y-4 text-sm text-slate-600">
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-xl border">
                <div className="text-center">
                  <span className="block text-2xl font-black text-slate-800">{answeredCount}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Terjawab</span>
                </div>
                <div className="text-center border-l">
                  <span className="block text-2xl font-black text-amber-600">{flaggedCount}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ragu-Ragu</span>
                </div>
              </div>

              {unansweredCount > 0 && (
                <div className="flex gap-2.5 p-3.5 bg-amber-50 border border-amber-200/60 rounded-xl text-amber-900">
                  <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs leading-relaxed font-bold">
                    PERINGATAN: Masih ada <span className="text-red-700 underline font-black">{unansweredCount}</span> soal yang belum terjawab atau bertanda ragu-ragu! Soal yang belum dijawab akan bernilai 0.
                  </p>
                </div>
              )}

              <p className="text-xs text-slate-400 mt-2 leading-relaxed text-center font-medium">
                Setelah tombol "Kunci Jawaban & Selesai" ditekan, jawaban Anda akan dinilai permanen dan Anda tidak dapat mengubah jawaban lagi.
              </p>
            </div>

            {/* Modal action buttons */}
            <div className="bg-slate-50 px-6 py-4 flex flex-col sm:flex-row gap-3 border-t">
              <button
                type="button"
                onClick={() => setShowExitConfirm(false)}
                className="w-full sm:w-1/2 border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold px-4 py-3 rounded-xl transition text-sm cursor-pointer"
              >
                Kembali ke Soal
              </button>
              <button
                type="button"
                onClick={handleCompleteExam}
                className="w-full sm:w-1/2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-extrabold px-4 py-3 rounded-xl shadow transition text-sm cursor-pointer"
              >
                Kunci Jawaban & Selesai
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
