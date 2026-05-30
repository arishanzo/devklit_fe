export type ExamType = 'PNS' | 'PPPK' | 'BUMN' | 'TNI_POLRI' | 'SBMPTN';

export type QuestionCategory = 
  | 'TWK' | 'TIU' | 'TKP' 
  | 'TEKNIS' | 'MANAJERIAL' | 'SOSIO_KULTURAL' | 'WAWANCARA' 
  | 'TKD' | 'AKHLAK' 
  | 'AKADEMIK' | 'KEBANGSAAN' | 'PSIKOTES' 
  | 'TPS' | 'LITERASI' | 'MATEMATIKA';

export interface Question {
  id: number;
  category: QuestionCategory;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  correctAnswer?: 'A' | 'B' | 'C' | 'D' | 'E'; // For academic/factual Qs
  optionPoints?: { // For situational/scale Qs (TKP, AKHLAK, Manajerial, etc)
    A: number;
    B: number;
    C: number;
    D: number;
    E: number;
  };
  explanation: string;
}

export interface Candidate {
  name: string;
  participantNumber: string;
  examCode: string;
}

export interface UserAnswer {
  questionId: number;
  selectedOption: 'A' | 'B' | 'C' | 'D' | 'E' | null;
  isFlagged: boolean; // Ragu-ragu
}

export interface ExamSession {
  candidate: Candidate | null;
  answers: Record<number, UserAnswer>;
  startedAt: number | null;
  endedAt: number | null;
  isCompleted: boolean;
  timeLeft: number; // in seconds
}
