import { ExamType, Question, QuestionCategory } from './types';
import { QUESTIONS as PNS_QUESTIONS } from './questions';
import { PPPK_QUESTIONS } from './questions_pppk';
import { BUMN_QUESTIONS } from './questions_bumn';
import { TNIPOLRI_QUESTIONS } from './questions_tnipolri';
import { SBMPTN_QUESTIONS } from './questions_sbmptn';

export interface CategoryConfig {
  id: QuestionCategory;
  name: string;
  fullName: string;
  threshold: number;
  maxScore: number;
  questionCount: number;
}

export interface ExamConfig {
  id: ExamType;
  title: string;
  shortTitle: string;
  description: string;
  durationMinutes: number;
  categories: CategoryConfig[];
  totalQuestions: number;
  maxScore: number;
  passingScoreInfo: string;
}

export const EXAM_CONFIGS: Record<ExamType, ExamConfig> = {
  PNS: {
    id: 'PNS',
    title: 'CBT PNS (Seleksi Kompetensi Dasar CPNS)',
    shortTitle: 'CPNS BKN',
    description: 'Sistem ujian CAT SKD resmi sesuai standar Badan Kepegawaian Negara (BKN). Menguji pilar wawasan kebangsaan, kemampuan intelijensia umum, dan karakteristik pribadi.',
    durationMinutes: 100,
    totalQuestions: 110,
    maxScore: 550,
    passingScoreInfo: 'TWK ≥ 65 (Maks 150), TIU ≥ 80 (Maks 175), TKP ≥ 166 (Maks 225).',
    categories: [
      { id: 'TWK', name: 'TWK', fullName: 'Tes Wawasan Kebangsaan', threshold: 65, maxScore: 150, questionCount: 30 },
      { id: 'TIU', name: 'TIU', fullName: 'Tes Inteligensia Umum', threshold: 80, maxScore: 175, questionCount: 35 },
      { id: 'TKP', name: 'TKP', fullName: 'Tes Karakteristik Pribadi', threshold: 166, maxScore: 225, questionCount: 45 }
    ]
  },
  PPPK: {
    id: 'PPPK',
    title: 'CBT PPPK Guru (Seleksi PPPK Jabatan Fungsional Guru)',
    shortTitle: 'PPPK Guru',
    description: 'Sistem evaluasi seleksi guru aparatur sipil negara PPPK dengan kurikulum kompetensi pedagogik teknis, kepemimpinan manajerial, sosial kultural, dan integritas wawancara.',
    durationMinutes: 130,
    totalQuestions: 90,
    maxScore: 410, // 30*5 (150) + 25*4 (100) + 20*5 (100) + 15*4 (60)
    passingScoreInfo: 'Teknis ≥ 90 (Maks 150), Manajerial ≥ 50 (Maks 100), Sosio-Kultural ≥ 50 (Maks 100), Wawancara ≥ 24 (Maks 60).',
    categories: [
      { id: 'TEKNIS', name: 'Teknis', fullName: 'Kompetensi Teknis Guru', threshold: 90, maxScore: 150, questionCount: 30 },
      { id: 'MANAJERIAL', name: 'Manajerial', fullName: 'Kompetensi Manajerial', threshold: 50, maxScore: 100, questionCount: 25 },
      { id: 'SOSIO_KULTURAL', name: 'S. Kultural', fullName: 'Kompetensi Sosial Kultural', threshold: 50, maxScore: 100, questionCount: 20 },
      { id: 'WAWANCARA', name: 'Wawancara', fullName: 'Integritas Wawancara', threshold: 24, maxScore: 60, questionCount: 15 }
    ]
  },
  BUMN: {
    id: 'BUMN',
    title: 'CBT BUMN (FHCI Rekrutmen Bersama BUMN)',
    shortTitle: 'RBB FHCI BUMN',
    description: 'Sistem seleksi digital rekrutmen bersama Kementerian BUMN. Terdiri atas Tes Kemampuan Dasar (TKD) aritmatika spasial numerik verbal, dan implementasi Core Values AKHLAK BUMN.',
    durationMinutes: 90,
    totalQuestions: 70,
    maxScore: 350,
    passingScoreInfo: 'TKD ≥ 110 (Maks 200), AKHLAK ≥ 90 (Maks 150).',
    categories: [
      { id: 'TKD', name: 'TKD', fullName: 'Tes Kemampuan Dasar', threshold: 110, maxScore: 200, questionCount: 40 },
      { id: 'AKHLAK', name: 'AKHLAK', fullName: 'Core Values AKHLAK BUMN', threshold: 90, maxScore: 150, questionCount: 30 }
    ]
  },
  TNI_POLRI: {
    id: 'TNI_POLRI',
    title: 'CBT TNI & POLRI (Seleksi Akademik & Psikotes Calon Anggota)',
    shortTitle: 'TNI/Polri',
    description: 'Sistem ujian berbasis komputer akademik prima, wawasan kebangsaan, pertahanan sipil, dan kestabilan kepribadian mental psikologi taruna bhayangkara prajurit.',
    durationMinutes: 90,
    totalQuestions: 90,
    maxScore: 450,
    passingScoreInfo: 'Akademik ≥ 105 (Maks 175), Kebangsaan ≥ 75 (Maks 125), Psikotes ≥ 90 (Maks 150).',
    categories: [
      { id: 'AKADEMIK', name: 'Akademik', fullName: 'Tes Akademik & PU', threshold: 105, maxScore: 175, questionCount: 35 },
      { id: 'KEBANGSAAN', name: 'Kebangsaan', fullName: 'Wawasan Kebangsaan & Ideologi', threshold: 75, maxScore: 125, questionCount: 25 },
      { id: 'PSIKOTES', name: 'Psikotes', fullName: 'Kecermatan & Psikologi Kepribadian', threshold: 90, maxScore: 150, questionCount: 30 }
    ]
  },
  SBMPTN: {
    id: 'SBMPTN',
    title: 'UTBK - SNBT (Seleksi Nasional Berdasarkan Tes)',
    shortTitle: 'UTBK/SBMPTN',
    description: 'Simulasi Sistem Penilaian Item Response Theory (IRT) Seleksi Bersama Masuk Perguruan Tinggi Negeri. Menguji Tes Potensi Skolastik (TPS), Literasi Bahasa Indonesia/Inggris, dan Penalaran Matematika.',
    durationMinutes: 120,
    totalQuestions: 80,
    maxScore: 400,
    passingScoreInfo: 'TPS ≥ 100 (Maks 175), Literasi ≥ 75 (Maks 125), Matematika ≥ 50 (Maks 100).',
    categories: [
      { id: 'TPS', name: 'TPS', fullName: 'Tes Potensi Skolastik', threshold: 100, maxScore: 175, questionCount: 35 },
      { id: 'LITERASI', name: 'Literasi Bahasa', fullName: 'Literasi Indonesia & Inggris', threshold: 75, maxScore: 125, questionCount: 25 },
      { id: 'MATEMATIKA', name: 'Penalaran Matematika', fullName: 'Penalaran Matematika', threshold: 50, maxScore: 100, questionCount: 20 }
    ]
  }
};;

export const QUESTIONS_BY_EXAM_TYPE: Record<ExamType, Question[]> = {
  PNS: PNS_QUESTIONS,
  PPPK: PPPK_QUESTIONS,
  BUMN: BUMN_QUESTIONS,
  TNI_POLRI: TNIPOLRI_QUESTIONS,
  SBMPTN: SBMPTN_QUESTIONS
};
