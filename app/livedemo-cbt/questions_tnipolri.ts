import { Question } from './types';

// Baseline questions for TNI & POLRI (Akademik, Wawasan Kebangsaan, Psikotes)
const BASELINE_TNIPOLRI: Question[] = [
  // === AKADEMIK / PENGETAHUAN UMUM ===
  {
    id: 1,
    category: 'AKADEMIK',
    text: 'Dalam menjaga kedaulatan laut teritorial Indonesia berdasarkan UNCLOS 1982, batas laut teritorial diukur sejauh... dari garis pangkal kepulauan.',
    options: {
      A: '200 mil laut',
      B: '12 mil laut',
      C: '24 mil laut',
      D: '100 mil laut',
      E: '350 mil laut'
    },
    correctAnswer: 'B',
    explanation: 'Berdasarkan Konvensi Hukum Laut Internasional (UNCLOS 1982), lebar laut teritorial sebuah negara adalah sejauh 12 mil laut diukur dari garis pangkal.'
  },
  {
    id: 2,
    category: 'AKADEMIK',
    text: 'Satu-satunya organisasi internasional bentukan PBB yang menangani urusan kelautan sipil dunia di mana Indonesia berperan aktif di dalamnya adalah...',
    options: {
      A: 'WHO',
      B: 'IMO (International Maritime Organization)',
      C: 'UNESCO',
      D: 'ILO',
      E: 'UNWTO'
    },
    correctAnswer: 'B',
    explanation: 'IMO (International Maritime Organization) adalah badan khusus PBB yang bertanggung jawab atas keselamatan dan keamanan pelayaran sipil dunia.'
  },
  {
    id: 3,
    category: 'AKADEMIK',
    text: 'Siapakah Panglima Besar Tentara Keamanan Rakyat (TKR) pertama di Indonesia yang memimpin perjuangan gerilya taktis melawan tentara Sekutu dan Belanda?',
    options: {
      A: 'Jenderal Ahmad Yani',
      B: 'Jenderal Soedirman',
      C: 'Jenderal Gatot Soebroto',
      D: 'Jenderal A.H. Nasution',
      E: 'Bung Tomo'
    },
    correctAnswer: 'B',
    explanation: 'Jenderal Besar Soedirman dipilih menjadi Panglima Besar TKR pada November 1945, memimpin gerilya meski dalam keadaan sakit parah.'
  },

  // === KEBAHASAAN / KEBANGSAAN ===
  {
    id: 4,
    category: 'KEBANGSAAN',
    text: 'Pemberontakan DI/TII yang dipimpin oleh Sekarmadji Maridjan Kartosoewirjo bertujuan untuk mengganti dasar negara Pancasila menjadi...',
    options: {
      A: 'Ideologi Komunis',
      B: 'Negara Islam Indonesia',
      C: 'Monarki Tradisional',
      D: 'Federasi Liberal',
      E: 'Kekaisaran Jepang'
    },
    correctAnswer: 'B',
    explanation: 'DI/TII (Darul Islam/Tentara Islam Indonesia) bertujuan mendirikan Negara Islam Indonesia (NII) yang diproklamasikan pada tahun 1949.'
  },
  {
    id: 5,
    category: 'KEBANGSAAN',
    text: 'Lembaga Kepolisian Negara Republik Indonesia (Polri) berada langsung di bawah koordinasi kepala pemerintahan tertinggi yaitu...',
    options: {
      A: 'Menteri Pertahanan',
      B: 'Presiden RI',
      C: 'Panglima TNI',
      D: 'Ketua DPR RI',
      E: 'Kepala BIN'
    },
    correctAnswer: 'B',
    explanation: 'Berdasarkan UU No. 2 Tahun 2002, Kepolisian Negara Republik Indonesia (Polri) berada langsung di bawah Presiden.'
  },

  // === PSIKOTES (KECERMATAN / INTEGRITAS / PSIKOLOGI UTAMA) ===
  {
    id: 6,
    category: 'PSIKOTES',
    text: 'Saat sedang melaksanakan tugas patroli perbatasan hutan, Anda mendengar suara ringkikan mencurigakan di semak-semak lebat yang diduga aktivitas penyelundupan ilegal. Anggota regu Anda menyarankan untuk mengabaikannya karena jam dinas hampir berakhir. Tindakan ksatria Anda...',
    options: {
      A: 'Mengikuti sarannya agar bisa segera mandi dan istirahat di barak',
      B: 'Tetap waspada, segera melapor cepat ke posisi komandan regu dan mengajak unit melakukan penyergapan/pengecekan prosedur bersenjata lengkap demi keamanan batas negara',
      C: 'Menembak membabi buta ke arah semak tanpa memeriksa sasaran terlebih dahulu',
      D: 'Melarikan diri kembali ke base camp sendirian tanpa berkoordinasi',
      E: 'Menghubungi media gosip lokal untuk meminta meliput peristiwa tersebut'
    },
    optionPoints: { B: 5, C: 2, D: 1, A: 3, E: 4 },
    explanation: 'Aspek kedisplinan tinggi, keberanian fungsional, taktis kepemimpinan prajurit bhayangkara di bawah ancaman perbatasan negara.'
  },
  {
    id: 7,
    category: 'PSIKOTES',
    text: 'Sebagai perwira kepolisian di bagian Satlantas, seorang pengemudi mobil mewah yang melakukan pelanggaran rambu lintas fatal menyodorkan amplop tebal berisi uang tutup mulut agar Anda tidak menulis surat tilang. Sikap Anda...',
    options: {
      A: 'Menerima amplop tersebut demi kesejahteraan regu lalu lintas Anda',
      B: 'Menolak secara tegas, mencatat nomor kendaraan, menulis surat tilang resmi sesuai hukum acara, dan menjelaskan konsekuensi pidana suap-meyuap',
      C: 'Memukuli wajah pelaku secara fisik di pinggir jalan raya',
      D: 'Mengabaikan pelanggarannya dan menyuruhnya pergi begitu saja karena Anda malas mengejar tilang',
      E: 'Meminta suap lebih besar lagi karena mobilnya tergolong sangat mewah'
    },
    optionPoints: { B: 5, D: 2, C: 3, A: 4, E: 1 },
    explanation: 'Aspek keteguhan integritas luhur institusi (Tribrata / Catur Prasetya): Anti-Korupsi mutlak dalam penegakan hukum prima.'
  }
];

// PROGRAMMATIC GENERATION FOR THE REMAINING TNI/POLRI QUESTIONS (TOTAL 90)
// AKADEMIK target: 35 Questions (Needs 32 more, IDs 8 to 39)
// KEBANGSAAN target: 25 Questions (Needs 23 more, IDs 40 to 62)
// PSIKOTES target: 30 Questions (Needs 28 more, IDs 63 to 90)

const tniPolriQuestions: Question[] = [...BASELINE_TNIPOLRI];

// Academic/PU items
const akademikMockPool = [
  {
    text: "Siapakah Menteri Pertahanan Republik Indonesia yang menjabat saat ini?",
    options: {
      A: "Prabowo Subianto",
      B: "Sjafrie Sjamsoeddin",
      C: "Retno Marsudi",
      D: "Tito Karnavian",
      E: "Mahfud MD"
    },
    ans: "B",
    exp: "Menteri Pertahanan Republik Indonesia Kabinet Merah Putih adalah Sjafrie Sjamsoeddin."
  },
  {
    text: "Konsep Pertahanan dan Keamanan Rakyat Semesta (Sishankamrata) menempatkan Rakyat sebagai kekuatan...",
    options: {
      A: "Kekuatan Utama",
      B: "Kekuatan Pendukung/Cadangan",
      C: "Kekuatan Inti",
      D: "Hanya Penonton Konstruktif",
      E: "Kekuatan Pemukul Pertama"
    },
    ans: "B",
    exp: "Dalam Sishankamrata, kekuatan utama diletakkan pada TNI/Polri, sedangkan rakyat sipil bertindak sebagai Kekuatan Pendukung/Cadangan."
  },
  {
    text: "Negara Indonesia adalah negara hukum. Hal tersebut dituangkan dalam UUD 1945 pasal...",
    options: {
      A: "Pasal 1 Ayat (3)",
      B: "Pasal 1 Ayat (1)",
      C: "Pasal 27 Ayat (1)",
      D: "Pasal 33",
      E: "Pasal 1 Ayat (2)"
    },
    ans: "A",
    exp: "UUD 1945 Pasal 1 Ayat (3) berbunyi: 'Negara Indonesia adalah negara hukum'."
  }
];

// Kebangsaan items
const kebangsaanMockPool = [
  {
    text: "Tujuan nasional bangsa Indonesia tertuang jelas dalam Pembukaan UUD 1945 alinea ke...",
    options: {
      A: "Alinea Pertama",
      B: "Alinea Keempat",
      C: "Alinea Kedua",
      D: "Alinea Ketiga",
      E: "Alinea Kelima"
    },
    ans: "B",
    exp: "Alinea keempat memuat tujuan negara (melindungi segenap bangsa, memajukan kesejahteraan umum, mencerdaskan kehidupan bangsa, dll)."
  },
  {
    text: "Dekrit Presiden 5 Juli 1959 dikeluarkan oleh Presiden Soekarno bertujuan mendasar mengatasi kebuntuan politik konstitusional, salah satunya yaitu...",
    options: {
      A: "Membubarkan Partai Komunis Indonesia",
      B: "Kembali ke UUD 1945 dari UUDS 1950",
      C: "Membentuk Kabinet Kerja Baru",
      D: "Memecat Perdana Menteri Djuanda",
      E: "Melaksanakan pemilihan umum pertama"
    },
    ans: "B",
    exp: "Dekrit Presiden 5 Juli 1959 menetapkan berlakunya kembali UUD 1945 dan tidak berlakunya lagi UUDS 1950."
  }
];

// Psikotes items
const psikotesMockPool = [
  {
    text: "[KECERMATAN] Sebagai calon taruna/taruni, ketahanan mental Anda sangat diuji saat menerima instruksi fisik berat berkali-kali dari pelatih senior. Sikap kesiapan Anda...",
    options: {
      A: "Berdiam diri pura-pura pingsan di lobi barak",
      B: "Menerima instruksi dengan sigap, melaksanakan dengan ketahanan fisik-mental terbaik, patuh (Loyalitas) dan cepat menyerap evaluasi",
      C: "Membalas memukul instrukturnya dengan batu",
      D: "Segera melarikan diri dari kompleks pendidikan taruna",
      E: "Melaporkan sanksi fisik ke draf forum perlindungan sipil internasional"
    },
    pts: { B: 5, D: 2, C: 1, A: 3, E: 4 },
    exp: "Ketahanan mental, ketaatan instruksi rantai komando, dan kegigihan fisik seorang patriot."
  },
  {
    text: "[KEPRIBADIAN] Saat diposisikan bertugas di daerah rawan bencana alam ekstrem yang minim pasokan listrik dan sarana MCK bersih, aksi fungsional Anda...",
    options: {
      A: "Berdiam diri merenung meratapi nasib",
      B: "Segera mendirikan tenda komando darurat, berkolaborasi menenangkan warga lokal, serta memitigasi sanitasi bersih alternatif",
      C: "Pulang diam-diam tanpa sepeser pun surat resmi",
      D: "Membakar ban bekas di lobi utama krisis",
      E: "Mengabaikan warga lokal fokus pada logistik pribadi"
    },
    pts: { B: 5, D: 4, C: 2, A: 3, E: 1 },
    exp: "Kepemimpinan di masa krisis kemanusiaan serta inisiasi gotong royong terpadu."
  }
];

// Populate AKADEMIK up to 35 questions
let idCounter = 8;
for (let i = 0; i < 32; i++) {
  const customId = idCounter++;
  const mock = akademikMockPool[i % akademikMockPool.length];
  tniPolriQuestions.push({
    id: customId,
    category: 'AKADEMIK',
    text: `[Akademik] (Soal #${customId}) ${mock.text} (${i + 1})`,
    options: { ...mock.options },
    correctAnswer: mock.ans as 'A' | 'B' | 'C' | 'D' | 'E',
    explanation: mock.exp
  });
}

// Populate KEBANGSAAN up to 25 questions (current state of IDs is 40 now)
idCounter = 40;
for (let i = 0; i < 23; i++) {
  const customId = idCounter++;
  const mock = kebangsaanMockPool[i % kebangsaanMockPool.length];
  tniPolriQuestions.push({
    id: customId,
    category: 'KEBANGSAAN',
    text: `[Kebangsaan] (Soal #${customId}) ${mock.text} (${i + 1})`,
    options: { ...mock.options },
    correctAnswer: mock.ans as 'A' | 'B' | 'C' | 'D' | 'E',
    explanation: mock.exp
  });
}

// Populate PSIKOTES up to 30 questions (current state of IDs is 63 now)
idCounter = 63;
for (let i = 0; i < 28; i++) {
  const customId = idCounter++;
  const mock = psikotesMockPool[i % psikotesMockPool.length];
  tniPolriQuestions.push({
    id: customId,
    category: 'PSIKOTES',
    text: `[Psikotes] (Soal #${customId}) ${mock.text} (${i + 1})`,
    options: { ...mock.options },
    optionPoints: { ...mock.pts },
    explanation: mock.exp
  });
}

// Normalize IDs 1-90
export const TNIPOLRI_QUESTIONS: Question[] = tniPolriQuestions.slice(0, 90).map((q, idx) => ({
  ...q,
  id: idx + 1
}));
