import { Question } from './types';

// Baseline hand-crafted questions for PPPK Guru
const BASELINE_PPPK: Question[] = [
  // === KOMPETENSI TEKNIS (PEDAGOGIK / PROFESIONAL GURU) ===
  {
    id: 1,
    category: 'TEKNIS',
    text: 'Seorang guru akan merancang asesmen diagnostik nonsignifikan untuk mengidentifikasi gaya belajar siswa di kelasnya. Hasil asesmen menunjukkan sebagian besar siswa memiliki gaya belajar kinestetik. Metode pembelajaran yang paling sesuai dirancang oleh guru adalah...',
    options: {
      A: 'Metode ceramah interaktif yang didominasi mendengarkan audio penjelasan ilmiah',
      B: 'Metode demonstrasi visual berbantuan infografis berwarna-warni',
      C: 'Metode eksperimen langsung di laboratorium, simulasi fisik, atau pembelajaran berbasis proyek (PjBL) berbasis aktivitas',
      D: 'Membaca mandiri buku teks paket secara berkelompok',
      E: 'Tugas menulis rangkuman jurnal ilmiah secara rutin'
    },
    correctAnswer: 'C',
    explanation: 'Siswa kinestetik belajar paling efektif melalui gerakan fisik, perabaan, kegiatan langsung (hands-on), eksperimen, dan proyek fisik (PjBL).'
  },
  {
    id: 2,
    category: 'TEKNIS',
    text: 'Sesuai dengan teori perkembangan kognitif Jean Piaget, siswa pada rentang usia sekolah dasar (7–11 tahun) berada pada fase operasional konkret. Tindakan guru matematika yang paling tepat dalam mengajarkan konsep pecahan desimal adalah...',
    options: {
      A: 'Menyajikan definisi pecahan desimal murni berbentuk rumus abstrak tanpa benda nyata',
      B: 'Meminta siswa menghafal di luar kepala pembagian desimal tanpa alat peraga',
      C: 'Menggunakan alat peraga manipulatif konkret seperti kue yang dipotong, kertas arsir, atau blok Dienes',
      D: 'Langsung latihan soal ujian nasional di papan tulis tanpa pengantar konsep',
      E: 'Menyuguhkan draf materi tulisan panjang yang wajib disalin ke buku tulis'
    },
    correctAnswer: 'C',
    explanation: 'Fase operasional konkret membutuhkan objek nyata atau visual (manipulatif) untuk memahami konsep abstrak seperti matematika atau pecahan.'
  },
  {
    id: 3,
    category: 'TEKNIS',
    text: 'Dalam pelaksanaan Kurikulum Merdeka, salah satu asesmen yang berfokus memberikan feedback formatif berkelanjutan sepanjang proses pembelajaran berlangsung tanpa berkorelasi langsung ke kelulusan rapor adalah...',
    options: {
      A: 'Asesmen Sumatif Tengah Semester',
      B: 'Asesmen Formatif (seperti jurnal refleksi, kuis sela, penilaian sejawat)',
      C: 'Asesmen Sumatif Akhir Semester',
      D: 'Ujian Kelulusan Nasional berbasis komputer',
      E: 'Sertifikasi kompetensi guru mandiri'
    },
    correctAnswer: 'B',
    explanation: 'Asesmen formatif bertujuan memantau proses belajar, memberikan umpan balik (feedback) perbaikan berkelanjutan, dan bukan untuk nilai kuantitatif kelulusan akhir.'
  },
  {
    id: 4,
    category: 'TEKNIS',
    text: 'Seorang siswa sering kali melanggar disiplin kelas, mengganggu teman, dan tidak mengerjakan tugas. Setelah diselidiki, siswa tersebut kurang perhatian di rumah. Pendekatan bimbingan konseling yang paling tepat dilakukan guru adalah...',
    options: {
      A: 'Langsung menghukum siswa berdiri di depan lapangan sekolah agar jera',
      B: 'Melakukan pendekatan personal empat mata (konseling individu), mendiskusikan latar belakang masalah, memberi motivasi, serta menetapkan komitmen disiplin bersama secara empatik',
      C: 'Mengeluarkan siswa tersebut secara sepihak dari keanggotaan kelas selamanya',
      D: 'Memarahi wali murid siswa tersebut secara emosional di grup umum whatsapp kelas',
      E: 'Mengabaikan total perilaku buruk siswa tersebut agar tidak mengganggu fokus guru'
    },
    correctAnswer: 'B',
    explanation: 'Pendekatan humanistik/konseling individu secara empatik bertindak menyelesaikan akar penyebab masalah (kurang perhatian) dan membangun disiplin positif secara mandiri.'
  },
  {
    id: 5,
    category: 'TEKNIS',
    text: 'Indikator pencapaian kompetensi (IPK): "Menganalisis faktor penyebab terjadinya pencemaran lingkungan sekitar." Rumusan butir soal pilihan ganda di lembar ujian yang paling menguji tingkat berpikir tinggi (HOTS - Higher Order Thinking Skills) sesuai IPK tersebut adalah...',
    options: {
      A: "Sebutkan zat kimia apa saja yang terkandung dalam air selokan kota?",
      B: "Tuliskan definisi pencemaran air berdasarkan UU Perlindungan Lingkungan Hidup!",
      C: "Disajikan studi kasus fenomena matinya ribuan ikan mendadak di danau lokal disertai data limbah industri. Analisislah kaitan langsung antara kadar oksigen terlarut (COD/BOD) dan aktivitas pabrik tekstil tersebut!",
      D: "Berapa jumlah danau tercemar di wilayah perkotaan Jawa Timur tahun ini?",
      E: "Sebutkan nama menteri lingkungan hidup saat ini!"
    },
    correctAnswer: 'C',
    explanation: 'Soal HOTS menuntut kemampuan menganalisis, mengevaluasi, atau berkreasi. Analisis studi kasus dan kaitan data limpasan limbah dengan parameter biokimia adalah level analisis (C4).'
  },

  // === KOMPETENSI MANAJERIAL ===
  {
    id: 6,
    category: 'MANAJERIAL',
    text: 'Sebagai ketua tim perumus kurikulum sekolah, Anda menemui adanya perbedaan pendapat yang sangat tajam antara guru senior dan guru muda mengenai metode asesmen berbasis proyek. Tindakan Anda...',
    options: {
      A: 'Mengakomodasi usulan guru senior secara mutlak karena mereka memiliki jam terbang lebih lama',
      B: 'Mengambil keputusan sepihak tanpa mendengar perdebatan di forum agar rapat cepat selesai',
      C: 'Memediasi forum, mendengarkan argumen kedua belah pihak secara objektif, menyusun sintesis kurikulum hibrida yang memadukan keunggulan teoretis senior dan kepraktisan digital guru muda',
      D: 'Menghapus materi asesmen proyek sama sekali agar perselisihan mereda',
      E: 'Melaporkan guru muda yang kritis tersebut ke yayasan agar dikurangi jam mengajarnya'
    },
    optionPoints: { C: 5, B: 3, A: 2, D: 4, E: 1 },
    explanation: 'Kompetensi Manajerial (Pengambilan Keputusan & Mengelola Konflik): Mampu memediasi perbedaan pendapat secara objektif, melahirkan sinergi win-win solution yang profesional.'
  },
  {
    id: 7,
    category: 'MANAJERIAL',
    text: 'Sekolah Anda mendadak ditunjuk sebagai pilot project pelaksanaan digitalisasi administrasi sekolah yang menuntut semua rencana pelaksanaan pembelajaran (RPP) diunggah ke cloud server harian. Sikap Anda...',
    options: {
      A: 'Menolak keras karena dinilai melipatgandakan beban administrasi kerja guru di luar jam mengajar',
      B: 'Menyambut baik secara antusias, mempelajari cara kerja sistem cloud tersebut secara mandiri, mengunggah draf tepat waktu, serta membantu guru-guru lain yang kesulitan beradaptasi',
      C: 'Membeli aplikasi joki di internet untuk mengunggah draf fiktif secara otomatis',
      D: 'Menunggu desakan dinas terlebih dahulu baru mulai mempelajari sistem tersebut setengah hati',
      E: 'Mengisi draf administrasi kosong saja agar kuota unggahan terlihat terpenuhi'
    },
    optionPoints: { A: 4, B: 5, C: 1, D: 3, E: 2 },
    explanation: 'Kompetensi Manajerial (Orientasi pada hasil & Pengembangan Diri/Orang Lain): Sikap adaptif inovatif terhadap teknologi guna kemajuan sekolah.'
  },

  // === KOMPETENSI SOSIO-KULTURAL ===
  {
    id: 8,
    category: 'SOSIO_KULTURAL',
    text: 'Di sekolah tugas baru Anda, terdapat perayaan hari raya keagamaan minoritas yang dirayakan sebagian kecil staf guru dan siswa secara khidmat namun syahdu. Mayoritas komunitas berniat membubarkan karena dinilai tidak sejalan. Tindakan Anda...',
    options: {
      A: 'Mendamaikan situasi dengan mengawal pembubaran secara tertib',
      B: 'Memahami indahnya toleransi beragama, mendukung perayaan keagamaan minoritas tersebut secara beradab dan legal, serta mengedukasi rekan sejawat mayoritas tentang pentingnya menghargai keyakinan umat lain',
      C: 'Tidak ikut campur demi keselamatan reputasi karir pribadi Anda di sekolah',
      D: 'Memaksa kelompok minoritas tersebut merayakan upacara di luar batas wilayah perumahan sekolah saja',
      E: 'Ikut memboikot upacara keagamaan demi menjaga kebersamaan mayoritas'
    },
    optionPoints: { B: 5, C: 3, D: 2, A: 4, E: 1 },
    explanation: 'Kompetensi Sosial Kultural (Perekat Bangsa): Membela kerukunan, pluralisme, toleransi beragama dalam lingkungan dinas demi kesatuan NKRI.'
  },

  // === WAWANCARA ===
  {
    id: 9,
    category: 'WAWANCARA',
    text: 'Mengapa Anda mengabdikan diri mendaftar menjadi Aparatur Sipil Negara (ASN) PPPK ini, di saat banyak tawaran industri swasta yang memberikan gaji berkali-kali lipat di luar sana?',
    options: {
      A: 'Hanya ingin mengamankan masa tua saya dari kekhawatiran finansial yang bergejolak',
      B: 'Karena murni dorongan panggilan jiwa mengabdi bagi kemajuan pendidikan anak bangsa secara berkelanjutan, berdedikasi tinggi menegakkan martabat literasi, serta menjadi agen perubahan di instansi pemerintah',
      C: 'Guna memamerkan status kebanggaan seragam dinas baru saya di kampung halaman',
      D: 'Terpaksa karena didesak orang tua saya agar terlihat memiliki pekerjaan terpandang',
      E: 'Menguji keberuntungan nasib saja tanpa ekspektasi pengabdian berkepanjangan'
    },
    optionPoints: { B: 5, A: 3, E: 2, D: 4, C: 1 },
    explanation: 'Wawancara (Integritas, Motivasi & Bela Negara): Menghargai dedikasi mulia pengabdian profesi ASN demi mencerdaskan kehidupan bangsa.'
  }
];

// PROGRAMMATIC GENERATION FOR THE REMAINING PPPK GURU QUESTIONS (TOTAL 90)
// TEKNIS target: 30 Questions (Needs 25 more, IDs 10 to 34)
// MANAJERIAL target: 25 Questions (Needs 23 more, IDs 35 to 57)
// SOSIO_KULTURAL target: 20 Questions (Needs 19 more, IDs 58 to 77)
// WAWANCARA target: 15 Questions (Needs 14 more, IDs 78 to 90)

const pppkQuestions: Question[] = [...BASELINE_PPPK];

// Teknis items pool (Pedagogi, RPP, Media, Evaluasi)
const teknisMockTexts = [
  {
    text: "Media pembelajaran visual berbasis video interaktif sangat cocok diimplementasikan pada materi sistem pencernaan manusia karena...",
    options: {
      A: "Mampu memvisualisasikan proses peristaltik lambung yang dinamis dan sulit diamati secara kasat mata",
      B: "Harganya relatif paling murah di antara semua media pembelajaran",
      C: "Tidak memerlukan pengawasan guru dalam penggunaannya",
      D: "Dapat digantikan oleh coretan di papan tulis biasa",
      E: "Siswa dipastikan langsung lulus ujian sumatif"
    },
    ans: "A",
    exp: "Video interaktif mampu mendemonstrasikan proses fisiologis dinamis yang tidak dapat dilihat secara langsung."
  },
  {
    text: "Menurut Permendikbudristek, langkah pertama Guru dalam merancang Pembelajaran Berdiferensiasi di kelas kurikulum Merdeka adalah...",
    options: {
      A: "Menentukan jenis buku paket wajib bagi seluruh siswa",
      B: "Melakukan pemetaan profil, kebutuhan belajar, kesiapan (readiness), dan minat siswa terlebih dahulu",
      C: "Langsung memberi materi pelajaran yang sama rata guna keadilan kelas",
      D: "Memisahkan anak pintar dan anak kurang pintar di kelas berbeda secara fisik",
      E: "Menunjuk ketua kelas baru yang menguasai bidang olahraga"
    },
    ans: "B",
    exp: "Asesmen diagnostik awal memetakan profil belajar, kesiapan, dan minat siswa sehingga guru dapat menyusun pembelajaran berdiferensiasi konten, proses, maupun produk."
  },
  {
    text: "Teori belajar konstruktivistik berorientasi bahwa pembelajaran terjadi ketika peserta didik...",
    options: {
      A: "Menghafal kalimat definisi dari guru secara pasif",
      B: "Secara aktif membangun makna dan pemahaman baru berdasarkan pengalaman konseptual nyata yang disambung materi terdahulu",
      C: "Menerima hukuman fisik jika melakukan kelalaian menulis",
      D: "Mendengarkan rekaman radio tanpa umpan balik lisan",
      E: "Meniru persis gerakan guru olahraga tanpa modifikasi"
    },
    ans: "B",
    exp: "Prinsip konstruktivisme adalah siswa aktif mengonstruksi pengetahuan barunya sendiri berdasarkan pengalaman konkret dan refleksi kognitif."
  },
  {
    text: "Evaluasi program remedial bagi siswa yang belum melampaui Kriteria Ketercapaian Tujuan Pembelajaran (KKTP) sebaiknya dilakukan dengan...",
    options: {
      A: "Mengulang kembali ujian sumatif yang persis sama berulang kali tanpa bimbingan baru",
      B: "Memberian bimbingan khusus pada materi yang diidentifikasi sulit, dirujuk pemberian variasi latihan soal, lalu diuji kembali secara formatif",
      C: "Membatalkan seluruh nilai siswa dan menjatuhkan sanksi tinggal kelas langsung",
      D: "Menyuruh siswa membeli buku tulis baru bernilai tinggi",
      E: "Mewajibkan siswa menyapu koridor kelas setiap sore"
    },
    ans: "B",
    exp: "Pembelajaran remedial dimulai dari analisis kesulitan belajar, diagnosis kekeliruan konsep, bimbingan khusus, baru pengujian ulang secara objektif."
  },
  {
    text: "Model pembelajaran Cooperatve Learning tipe Jigsaw sangat unggul dalam melatih kemampuan bersosialisasi siswa karena...",
    options: {
      A: "Siswa bersaing secara ketat satu lawan satu untuk menjadi pemenang kelompok",
      B: "Setiap siswa dituntut menjadi 'ahli' pada sub-materi tertentu, lalu bertanggung jawab mengajarkannya ke anggota kelompok asal",
      C: "Tidak memerlukan persiapan RPP materi oleh guru",
      D: "Siswa dibebaskan tidur siang saat anggota kelompok lain melakukan presentasi",
      E: "Mengurangi interaksi kerja kelompok guru"
    },
    ans: "B",
    exp: "Jigsaw membagi siswa ke kelompok ahli dan kelompok asal, menuntut pertukaran informasi aktif antarsiswa secara kolaboratif."
  }
];

// Manajerial items pool (Komunikasi, Integritas, Pengambilan Keputusan, Pelayanan Publik)
const manajerialMockTexts = [
  {
    text: "Anda ditugaskan menyusun rencana pengadaan laboratorium komputer berskala besar dalam waktu 2 minggu, namun dinas kepegawaian tidak memberikan anggaran pemeliharaan tindak lanjut. Tindakan Anda...",
    options: {
      A: "Menolak penugasan tersebut secara agresif karena dinilai tidak aplikatif jangka panjang",
      B: "Mengerjakannya secara disiplin, merancang program pemeliharaan preventif yang melibatkan sukarelawan siswa IT, serta mengusulkan anggaran operasional di anggaran perubahan dinas",
      C: "Sengaja memperlambat draf perencanaan agar masa tugas Anda habis",
      D: "Membeli perangkat komputer kualifikasi terendah agar ada sisa dana rahasia untuk tim",
      E: "Melimpahkan tugas perencanaan sepenuhnya ke guru magang honorer"
    },
    pts: { B: 5, D: 3, C: 2, A: 4, E: 1 },
    exp: "Aspek integritas, perencanaan strategis dan keandalan fungsional."
  },
  {
    text: "Ketika terjadi sengketa batas lahan tempat parkir antara guru utama dan yayasan sekolah, sebagai guru berstatus ASN di sekolah tersebut langkah Anda...",
    options: {
      A: "Ikut memprovokasi rekan guru untuk berdemonstrasi mogok mengajar massal",
      B: "Tetap netral mengajar siswa secara profesional, mengutamakan keselamatan proses belajar, serta mengimbau pertemuan bipartit mediasi damai yang formal antara perwakilan guru dan pimpinan yayasan",
      C: "Keluar mengundurkan diri sepihak di hari yang sama",
      D: "Melakukan penyegelan lobi utama gedung sekolah memakai rantai besi",
      E: "Menyebarkan gosip negatif ke media sosial regional mengenai keburukan yayasan"
    },
    pts: { B: 5, D: 3, C: 4, A: 2, E: 1 },
    exp: "Aspek pengelolaan konflik dinas dan kestabilan fokus profesionalisme pengabdian."
  }
];

// Sosio-kultural items pool (Persatuan bangsa, empati, kebinnekaan)
const sosioKulturalMockTexts = [
  {
    text: "Apabila ada siswa pindahan baru dari daerah perkotaan pedalaman yang logat bicaranya sering diejek dan ditertawakan oleh anak-anak di kelas Anda, tindakan taktis Anda sebagai guru kelas...",
    options: {
      A: "Meminta siswa baru tersebut untuk diam saja di kelas agar tidak memicu tawa teman-temannya",
      B: "Menegur keras anak-anak pengejek secara humanis, mengedukasi kelas tentang kekayaan dialek bahasa nusantara, serta menunjuk siswa baru tersebut menceritakan budayanya secara bangga di depan kelas",
      C: "Membiarkan karena hal tersebut dianggap candaan akrab anak-anak biasa",
      D: "Menyuruh siswa baru tersebut pindah ke sekolah asal yang sesuai dialeknya",
      E: "Menghukum fisik seluruh anak kelas dengan melarang mengikuti ujian akhir"
    },
    pts: { B: 5, D: 3, C: 2, A: 4, E: 1 },
    exp: "Pendidikan multikultural dan perekat kebangsaan: Guru menjadi perisai inklusivitas sosial siswa dari perundungan rasis/primordial."
  }
];

// Wawancara items pool (Integritas, dedikasi, motivasi)
const wawancaraMockTexts = [
  {
    text: "Komitmen apa yang bisa Anda janjikan bila Anda dinyatakan lolos seleksi menjadi Pegawai Pemerintah (PPPK) di instansi ini selama 5 tahun mendatang?",
    options: {
      A: "Bekerja jika gajinya lancar dan naik berkala, serta mengundurkan diri jika dirotasi",
      B: "Mendedikasikan segenap kompetensi pedagogik, waktu, dan pikiran saya guna mengabdi memajukan unit kerja, menaati kode etik ASN secara konsisten, serta tidak mengajukan pindah mutasi sepihak",
      C: "Hanya hadir saat jam mengajar wajib saja selebihnya mengurus bisnis sampingan di luar sekolah",
      D: "Melakukan kampanye politik terselubung demi kepentingan partai tertentu",
      E: "Menerima tawaran dari sekolah elit luar negeri sesegera mungkin"
    },
    pts: { B: 5, A: 3, C: 4, D: 2, E: 1 },
    exp: "Menilai komitmen pengabdian jangka panjang dan kepatuhan hukum ASN profesional."
  }
];

// Populate TEKNIS up to 30 items
let idCounter = 10;
for (let i = 0; i < 25; i++) {
  const customId = idCounter++;
  const mock = teknisMockTexts[i % teknisMockTexts.length];
  pppkQuestions.push({
    id: customId,
    category: 'TEKNIS',
    text: `[Teknis] (Soal #${customId}) ${mock.text} (${i + 1})`,
    options: { ...mock.options },
    correctAnswer: mock.ans as 'A' | 'B' | 'C' | 'D' | 'E',
    explanation: mock.exp
  });
}

// Populate MANAJERIAL up to 25 items (current IDs is 35 now)
idCounter = 35;
for (let i = 0; i < 23; i++) {
  const customId = idCounter++;
  const mock = manajerialMockTexts[i % manajerialMockTexts.length];
  pppkQuestions.push({
    id: customId,
    category: 'MANAJERIAL',
    text: `[Manajerial] (Soal #${customId}) ${mock.text} (${i + 1})`,
    options: { ...mock.options },
    optionPoints: { ...mock.pts },
    explanation: mock.exp
  });
}

// Populate SOSIO_KULTURAL up to 20 items (current IDs is 58)
idCounter = 58;
for (let i = 0; i < 19; i++) {
  const customId = idCounter++;
  const mock = sosioKulturalMockTexts[i % sosioKulturalMockTexts.length];
  pppkQuestions.push({
    id: customId,
    category: 'SOSIO_KULTURAL',
    text: `[Sosio-Kultural] (Soal #${customId}) ${mock.text} (${i + 1})`,
    options: { ...mock.options },
    optionPoints: { ...mock.pts },
    explanation: mock.exp
  });
}

// Populate WAWANCARA up to 15 items (current IDs is 77)
idCounter = 77;
for (let i = 0; i < 14; i++) {
  const customId = idCounter++;
  const mock = wawancaraMockTexts[i % wawancaraMockTexts.length];
  pppkQuestions.push({
    id: customId,
    category: 'WAWANCARA',
    text: `[Wawancara] (Soal #${customId}) ${mock.text} (${i + 1})`,
    options: { ...mock.options },
    optionPoints: { ...mock.pts },
    explanation: mock.exp
  });
}

// Sort check to order questions beautifully
export const PPPK_QUESTIONS: Question[] = pppkQuestions.slice(0, 90).map((q, idx) => ({
  ...q,
  id: idx + 1 // Re-index nicely from 1 to 90
}));
