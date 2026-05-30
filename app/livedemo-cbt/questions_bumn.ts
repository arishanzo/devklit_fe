import { Question } from './types';

// Baseline questions for FHCI BUMN (TKD & AKHLAK)
const BASELINE_BUMN: Question[] = [
  // === TKD - VERBAL / NUMERIK / LOGIKA ===
  {
    id: 1,
    category: 'TKD',
    text: 'INDONESIA : JAKARTA = FILIPINA : ...\nTentukan hubungan yang setara dengan analogi kata di atas!',
    options: {
      A: 'Kuala Lumpur',
      B: 'Manila',
      C: 'Bangkok',
      D: 'Hanoi',
      E: 'Phnom Penh'
    },
    correctAnswer: 'B',
    explanation: 'Hubungan analoginya adalah Negara : Ibu Kota. Ibu kota Filipina adalah Manila.'
  },
  {
    id: 2,
    category: 'TKD',
    text: 'Suku selanjutnya dari barisan angka: 3, 7, 15, 31, 63, ... adalah...',
    options: {
      A: '127',
      B: '126',
      C: '128',
      D: '125',
      E: '131'
    },
    correctAnswer: 'A',
    explanation: 'Pola barisannya adalah dikali 2 ditambah 1 (Un = 2 * Un-1 + 1): 3*2+1=7, 7*2+1=15, 15*2+1=31, 31*2+1=63, 63*2+1=127.'
  },
  {
    id: 3,
    category: 'TKD',
    text: 'Semua manajer di perusahaan BUMN harus berintegritas tinggi. Pak Rudi adalah kepala divisi logistik BUMN yang nakal dan ketahuan melanggar prosedur anggaran keuangan. Simpulan yang logis adalah...',
    options: {
      A: 'Pak Rudi tetap merupakan manajer teladan di BUMN',
      B: 'Pak Rudi bukan seorang manajer yang berintegritas tinggi',
      C: 'Pak Rudi tidak bersalah karena anggaran bernilai kecil',
      D: 'Semua kepala divisi melanggar prosedur di BUMN',
      E: 'Tidak ada simpulan yang benar'
    },
    correctAnswer: 'B',
    explanation: 'Karena semua manajer harus berintegritas tinggi, jika Pak Rudi melanggar prosedur dia bertindak tidak jujur, maka Pak Rudi tidak memenuhi kualifikasi berintegritas tinggi.'
  },
  {
    id: 4,
    category: 'TKD',
    text: 'Sebuah tangki air memiliki dua pipa pengisi. Pipa A dapat mengisi tangki dalam waktu 3 jam, sedangkan pipa B dapat mengisi tangki dalam waktu 6 jam. Jika kedua pipa dibuka bersamaan, berapa lama waktu yang diperlukan untuk mengisi tangki air tersebut hingga penuh?',
    options: {
      A: '4,5 jam',
      B: '2 jam',
      C: '1,5 jam',
      D: '9 jam',
      E: '3 jam'
    },
    correctAnswer: 'B',
    explanation: 'Laju pengisian bersama = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2. Maka waktu penuh adalah kebalikan dari laju pengisian, yaitu 2 jam.'
  },

  // === AKHLAK (CORE VALUES BUMN) ===
  {
    id: 5,
    category: 'AKHLAK',
    text: '[AMANAH] Anda dimintai tolong oleh rekan kerja satu divisi untuk membubuhkan tanda tangan kehadiran (absensi) milik dia di lembar manual dinas karena dia ingin pulang lebih cepat mengurus mobil pribadinya di bengkel. Tindakan Anda...',
    options: {
      A: 'Menandatanganinya karena dia adalah sahabat karib Anda sejak perkuliahan',
      B: 'Menolak secara tegas namun sopan, menjelaskan bahwa tindakan tersebut melanggar moral integritas (Amanah) organisasi BUMN, serta menyarankan dia meminta izin melapor resmi ke bagian personalia',
      C: 'Melaporkan rekan tersebut ke direksi BUMN lewat media massa regional terkemuka',
      D: 'Meminta suap uang rokok kepadanya agar Anda bersedia menandatanganinya',
      E: 'Mendiamkannya dan ikut bolos pulang kantor cepat'
    },
    optionPoints: { B: 5, D: 2, C: 4, A: 3, E: 1 },
    explanation: 'Core Value AMANAH (Memegang teguh kepercayaan yang diberikan): Menolak manipulasi absensi demi menegakkan nilai integritas BUMN.'
  },
  {
    id: 6,
    category: 'AKHLAK',
    text: '[KOMPETEN] Perusahaan BUMN tempat Anda bekerja mengimplementasikan aplikasi Enterprise Resource Planning (ERP) SAP terintegrasi yang mengharuskan pemutakhiran kompetensi digital seluruh karyawan. Sikap Anda...',
    options: {
      A: 'Mengeluh terus menerus di sosial media pribadi mengancam mogok kerja',
      B: 'Bersemangat aktif mengikuti modul pelatihan SAP, mempelajarinya dengan tekun hingga mahir, serta bersedia berbagi pengetahuan bagi rekan kerja lain yang membutuhkan bimbingan',
      C: 'Menyewa jasa konsultan lepas untuk mengisi seluruh laporan tugas SAP Anda harian',
      D: 'Menghindar dari tugas berbau aplikasi sistem ERP SAP dan bertahan menerapkan metode manual',
      E: 'Menghasut karyawan lain agar sepihak melakukan sabotase server internet kantor'
    },
    optionPoints: { B: 5, D: 2, C: 3, A: 4, E: 1 },
    explanation: 'Core Value KOMPETEN (Terus belajar dan mengembangkan kapabilitas): Pro aktif mempelajari sistem baru guna mengeskalasi kapasitas penunjang dinas.'
  },
  {
    id: 7,
    category: 'AKHLAK',
    text: '[LOYAL] Unit divisi Anda diposisikan lembur akhir pekan guna mempersiapkan peluncuran layanan logistik kerakyatan BUMN. Sementara Anda telah memiliki janji acara kumpul reuni bersama teman sekolah. Sikap Anda...',
    options: {
      A: 'Abaikan perintah lembur dan langsung mematikan smartphone Anda sampai senin',
      B: 'Mengedepankan kewajiban negara mengawal peluncuran proyek penugasan BUMN (Loyal), menyampaikan permohonan maaf serta menjadwal ulang hadir sela kepada panitia reuni',
      C: 'Marah-marah di hadapan pimpinan menuduh penugasan tidak berperikemanusiaan',
      D: 'Hadir lembur sebentar lalu menghilang tanpa pamit',
      E: 'Menugaskan asisten honorer luar pengerjaan mewakili kursi posisi Anda tanpa konfirmasi'
    },
    optionPoints: { B: 5, D: 3, C: 2, A: 4, E: 1 },
    explanation: 'Core Value LOYAL (Dedikasi mengutamakan kepentingan bangsa & negara): Mengedepankan penyelesaian proyek krusial instansi pelayanan publik kemanusiaan.'
  }
];

// PROGRAMMATIC GENERATION FOR THE REMAINING BUMN QUESTIONS (TOTAL 70)
// TKD target: 40 Questions (Needs 36 more, IDs 8 to 43)
// AKHLAK target: 30 Questions (Needs 27 more, IDs 44 to 70)

const bumnQuestions: Question[] = [...BASELINE_BUMN];

// Mock database for TKD Questions (Verbal, Numeric, Logic)
const tkdMockPool = [
  {
    text: "EVALUASI = ...\nTentukan sinonim yang paling sesuai untuk kata tersebut!",
    options: {
      A: "Penghukuman",
      B: "Penilaian",
      C: "Perencanaan",
      D: "Pendaftaran",
      E: "Penyinggihan"
    },
    ans: "B",
    exp: "Evaluasi berarti penilaian terhadap sesuatu untuk menentukan value atau kelayakan."
  },
  {
    text: "Suku berikutnya dari deret: 2, 4, 8, 16, 32, ... adalah...",
    options: {
      A: "48",
      B: "64",
      C: "54",
      D: "128",
      E: "60"
    },
    ans: "B",
    exp: "Pola deret geometri dikali 2 (Un = Un-1 * 2): 32 * 2 = 64."
  },
  {
    text: "PRESTASI = ...\nTentukan sinonim dari kata tersebut!",
    options: {
      A: "Hasil yang dicapai secara gemilang",
      B: "Usaha sia-sia tanpa hasil berkelanjutan",
      C: "Kemunduran kinerja divisi",
      D: "Tahapan pendaftaran peserta ujian",
      E: "Hadiah lotre hiburan"
    },
    ans: "A",
    exp: "Prestasi adalah hasil yang telah dicapai secara gemilang melalui kerja keras."
  },
  {
    text: "Jika nilai x = 4 dan y = 5, berapakah nilai dari 3x + 2y - 5?",
    options: {
      A: "17",
      B: "22",
      C: "19",
      D: "27",
      E: "15"
    },
    ans: "A",
    exp: "3(4) + 2(5) - 5 = 12 + 10 - 5 = 17."
  },
  {
    text: "Semua pelamar BUMN harus bebas narkoba. Doni adalah pelamar BUMN yang dinyatakan bebas narkoba dari klinik kepolisian. Simpulan yang tepat...",
    options: {
      A: "Doni dipastikan langsung diterima sebagai direksi BUMN",
      B: "Doni memenuhi syarat administrasi bebas narkoba pelamar BUMN",
      C: "Doni memiliki prestasi akademik luar biasa tertinggi",
      D: "Doni tidak dapat diterima karena bebas narkoba",
      E: "Semua pelamar dipastikan melamar bersama Doni"
    },
    ans: "B",
    exp: "Doni memenuhi syarat administrasi bebas narkoba sebagai salah satu kewajiban seleksi pelamar BUMN."
  }
];

// Mock database for AKHLAK Corporate Situations (Amanah, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif)
const akhlakMockPool = [
  {
    text: "[HARMONIS] Rekan kerja Anda di divisi berlainan latar suku kerap kali kesulitan beradaptasi dengan ritme rapat tim di BUMN yang menggunakan perpaduan bahasa asing. Sikap toleran Anda...",
    options: {
      A: "Menertawakannya dan mengejek ketertinggalan wawasannya",
      B: "Membantunya menterjemahkan draf materi rapat secara tulus berkelanjutan, menciptakan suasana diskusi inklusif yang saling menghargai (Harmonis)",
      C: "Meminta atasan memindahkannya ke kantor cabang luar daerah terpencil",
      D: "Mengabaikannya demi kecepatan target waktu sendiri",
      E: "Menuntut diadakannya tes ulang bahasa asing"
    },
    pts: { B: 5, D: 3, C: 2, A: 4, E: 1 },
    exp: "Core Value HARMONIS (Saling peduli dan menghargasi perbedaan): Membantu rekan kerja tanpa memandang latar belakang asal."
  },
  {
    text: "[ADAPTIF] Sistem operasi komputasi BUMN dimigrasikan dari platform lawas berbasis server fisik lokal ke arsitektur komputasi awan (Cloud Server). Langkah taktis Anda...",
    options: {
      A: "Mogok menyampaikan laporan harian",
      B: "Segera beradaptasi mempelajari keunggulan cloud, merekayasa pola kerja agar lebih responsif cepat (Adaptif)",
      C: "Merenovasi paksa unit server lobi kantor agar bisa memakai manual lokal",
      D: "Menunggu rekan kerja lain sukses baru Anda mau ikut beralih",
      E: "Meretas sistem cloud tersebut"
    },
    pts: { B: 5, D: 4, C: 2, A: 3, E: 1 },
    exp: "Core Value ADAPTIF (Cepat menyesuaikan diri untuk menghadapi perubahan): Mengakselerasi adopsi inovasi teknologi."
  },
  {
    text: "[KOLABORATIF] Divisi Anda ditargetkan menjalin aliansi bisnis jasa antar barang pedesaan dengan BumDes lokal setempat guna memangkas jalur distribusi perkebunan rakyat. Sikap Anda...",
    options: {
      A: "Menolak kerja sama karena menilai BumDes tidak memiliki kualifikasi korporasi modern",
      B: "Merangkul pengurus BumDes, berkolaborasi memetakan rute logistik terintegrasi, saling bersinergi (Kolaboratif) memaksimalkan potensi ekonomi rakyat",
      C: "Sengaja memperlambat pelaporan berkas sengketa agar aliansi gagal terlaksana",
      D: "Membeli paksa tanah warga di sepanjang jalurnya demi keuntungan pribadi",
      E: "Membiarkan proyek berjalan timpang tanpa pendampingan"
    },
    pts: { B: 5, D: 3, C: 4, A: 2, E: 1 },
    exp: "Core Value KOLABORATIF (Membangun kerja sama yang sinergis): Membuka ruang kemitraan produktif."
  }
];

// Populate TKD up to 40 questions
let idCounter = 8;
for (let i = 0; i < 36; i++) {
  const customId = idCounter++;
  const mock = tkdMockPool[i % tkdMockPool.length];
  bumnQuestions.push({
    id: customId,
    category: 'TKD',
    text: `[TKD] (Soal #${customId}) ${mock.text} (${i + 1})`,
    options: { ...mock.options },
    correctAnswer: mock.ans as 'A' | 'B' | 'C' | 'D' | 'E',
    explanation: mock.exp
  });
}

// Populate AKHLAK up to 30 questions (current state of IDs is 44 now)
idCounter = 44;
for (let i = 0; i < 27; i++) {
  const customId = idCounter++;
  const mock = akhlakMockPool[i % akhlakMockPool.length];
  bumnQuestions.push({
    id: customId,
    category: 'AKHLAK',
    text: `[AKHLAK] (Soal #${customId}) ${mock.text} (${i + 1})`,
    options: { ...mock.options },
    optionPoints: { ...mock.pts },
    explanation: mock.exp
  });
}

// Order check
export const BUMN_QUESTIONS: Question[] = bumnQuestions.slice(0, 70).map((q, idx) => ({
  ...q,
  id: idx + 1 // normalized 1-70
}));
