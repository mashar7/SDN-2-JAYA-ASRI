/**
 * Data profil, visi, misi, dan struktur dokumen Google Drive
 * UPTD SD NEGERI 2 JAYA ASRI
 */

export interface DocumentItem {
  id: string;
  name: string;
  type: 'pdf' | 'docx' | 'xlsx' | 'pptx' | 'folder';
  size: string;
  updatedAt: string;
  description: string;
  category: string;
}

export interface DriveFolderConfig {
  id: string;
  title: string;
  label: string;
  buttonText: string;
  category: 'management' | 'guru_kelas' | 'guru_mapel' | 'administrasi';
  grade?: number;
  subtext: string;
  color: 'blue' | 'green' | 'amber' | 'emerald';
  defaultUrl: string;
  documents: DocumentItem[];
}

export interface TeacherStaff {
  id: string;
  name: string;
  role: string;
  nip: string;
  avatarColor: string;
  phone?: string;
}

export const SCHOOL_INFO = {
  name: "UPTD SD NEGERI 2 JAYA ASRI",
  npsn: "10802091",
  akreditasi: "A (Amat Baik)",
  status: "Negeri",
  bentukPendidikan: "Sekolah Dasar (SD)",
  kurikulum: "Kurikulum Merdeka",
  motto: "“Terwujudnya Peserta Didik yang Relijius, Disiplin dan Berprestasi”",
  visi: "Terwujudnya Peserta Didik yang Relijius, Disiplin dan Berprestasi",
  misi: [
    "Menanamkan keimanan dan ketakwaan melalui pengamalan ajaran agama",
    "Menanamkan budaya disiplin, jujur, bertanggung jawab, mandiri, dan cinta lingkungan hidup",
    "Mengoptimalkan proses belajar yang bermakna dan bimbingan berkesinambungan",
    "Mengembangkan bidang ilmu pengetahuan dan teknologi berdasarkan minat, bakat dan potensi peserta didik",
    "Mengembangkan bidang ketrampilan berdasarkan minat, bakat dan potensi peserta didik."
  ],
  tujuan: [
    "Menghasilkan lulusan yang berakhlak mulia, taat beribadah, dan bertoleransi tinggi.",
    "Membentuk karakter peserta didik yang mandiri, jujur, berintegritas, dan peduli kebersihan lingkungan.",
    "Meningkatkan capaian literasi dan numerasi dalam Asesmen Nasional Berbasis Komputer (ANBK).",
    "Menjuarai berbagai kompetisi akademik, O2SN (olahraga), dan FLS2N (seni) di tingkat kecamatan dan kabupaten.",
    "Membekali peserta didik dengan kecakapan abad 21 (kritis, kreatif, kolaboratif, dan komunikatif)."
  ],
  kontak: {
    email: "sdn2jayaasri@gmail.com",
    telepon: "0812-7345-6789",
    whatsapp: "6281273456789",
    alamat: "Jl. Pendidikan No. 02, Desa Jaya Asri, Kec. Metro Kibang, Kab. Lampung Timur, Provinsi Lampung",
    kodePos: "34162",
    jamKerja: "Senin - Sabtu: 07.15 - 13.30 WIB"
  },
  kepalaSekolah: {
    nama: "Hj. Siti Rohmah, S.Pd., M.Pd.",
    nip: "19750814 199903 2 003",
    sambutan: "Selamat datang di Microsite Resmi UPTD SD Negeri 2 Jaya Asri. Portal ini dirancang sebagai Pusat Data Digital dan Akses Berkas Google Drive Pembelajaran Kurikulum Merdeka bagi seluruh dewan guru, tenaga kependidikan, serta masyarakat luas untuk mewujudkan tata kelola pendidikan yang transparan, profesional, dan akuntabel."
  }
};

export const INITIAL_DRIVE_FOLDERS: DriveFolderConfig[] = [
  {
    id: "ks",
    title: "MANAJEMEN & KEPALA SEKOLAH",
    label: "Folder Kepala Sekolah",
    buttonText: "AKSES FOLDER KEPALA SEKOLAH (KS)",
    category: "management",
    subtext: "RKT, RKAS, Supervisi Akademik, PK, SKP, ARKAS",
    color: "blue",
    defaultUrl: "https://drive.google.com/drive/folders/1sdn2jayaasri-kepala-sekolah-rkas-rkt",
    documents: [
      {
        id: "ks-1",
        name: "Rencana Kerja Tahunan (RKT) TA 2025/2026.pdf",
        type: "pdf",
        size: "3.4 MB",
        updatedAt: "12 Januari 2026",
        description: "Program kerja strategis tahunan UPTD SD Negeri 2 Jaya Asri",
        category: "Manajemen"
      },
      {
        id: "ks-2",
        name: "RKAS & Laporan Realisasi ARKAS TA 2025-2026.xlsx",
        type: "xlsx",
        size: "2.1 MB",
        updatedAt: "28 Februari 2026",
        description: "Rencana Kegiatan dan Anggaran Sekolah & BOSP",
        category: "Keuangan"
      },
      {
        id: "ks-3",
        name: "Instrumen & Jadwal Supervisi Akademik Guru.docx",
        type: "docx",
        size: "1.2 MB",
        updatedAt: "15 Januari 2026",
        description: "Format penilaian observasi kelas dan tindak lanjut supervisi klinis",
        category: "Supervisi"
      },
      {
        id: "ks-4",
        name: "SK Pembagian Tugas Mengajar & Tugas Tambahan.pdf",
        type: "pdf",
        size: "1.8 MB",
        updatedAt: "08 Juli 2025",
        description: "Surat Keputusan Kepala Sekolah tentang distribusi jam mengajar dewan guru",
        category: "Administrasi"
      },
      {
        id: "ks-5",
        name: "Panduan Evaluasi Diri Sekolah (EDS) & Rapor Pendidikan.pdf",
        type: "pdf",
        size: "4.5 MB",
        updatedAt: "20 November 2025",
        description: "Analisis capaian mutu Rapor Pendidikan Kemendikbudristek",
        category: "Mutu Pendidikan"
      }
    ]
  },
  {
    id: "kelas-1",
    title: "GURU KELAS 1",
    label: "Guru Kelas 1 (Fase A)",
    buttonText: "AKSES FOLDER KELAS 1",
    category: "guru_kelas",
    grade: 1,
    subtext: "Modul Ajar, ATP, CP, Penilaian & LKPD Fase A",
    color: "green",
    defaultUrl: "https://drive.google.com/drive/folders/1sdn2jayaasri-guru-kelas-1-kurikulum-merdeka",
    documents: [
      {
        id: "k1-1",
        name: "Modul Ajar Bahasa Indonesia Kelas 1 (Fase A) - Bab 1-4.docx",
        type: "docx",
        size: "4.8 MB",
        updatedAt: "05 Februari 2026",
        description: "Modul pembelajaran membaca nyaring, suku kata, dan kartu kata",
        category: "Modul Ajar"
      },
      {
        id: "k1-2",
        name: "Modul Ajar Matematika Kelas 1 - Bilangan & Geometri.pdf",
        type: "pdf",
        size: "3.2 MB",
        updatedAt: "18 Januari 2026",
        description: "Pengenalan lambang bilangan sampai 20 dan bentuk bangun datar",
        category: "Modul Ajar"
      },
      {
        id: "k1-3",
        name: "Alur Tujuan Pembelajaran (ATP) & Capaian Pembelajaran (CP) Kelas 1.xlsx",
        type: "xlsx",
        size: "850 KB",
        updatedAt: "10 Agustus 2025",
        description: "Pemetaan materi esensial semester 1 dan semester 2",
        category: "Perangkat"
      },
      {
        id: "k1-4",
        name: "Format Penilaian Formatif & Asesmen Sumatif Lingkup Materi.xlsx",
        type: "xlsx",
        size: "1.1 MB",
        updatedAt: "15 Februari 2026",
        description: "Template nilai raport Kurikulum Merdeka",
        category: "Asesmen"
      },
      {
        id: "k1-5",
        name: "Kumpulan Lembar Kerja Peserta Didik (LKPD) Menyenangkan.pdf",
        type: "pdf",
        size: "5.6 MB",
        updatedAt: "22 Januari 2026",
        description: "Lembar aktivitas visual dan mewarnai untuk siswa kelas 1",
        category: "Bahan Ajar"
      }
    ]
  },
  {
    id: "kelas-2",
    title: "GURU KELAS 2",
    label: "Guru Kelas 2 (Fase A)",
    buttonText: "AKSES FOLDER KELAS 2",
    category: "guru_kelas",
    grade: 2,
    subtext: "Modul Ajar, ATP, CP, Penilaian & LKPD Fase A",
    color: "green",
    defaultUrl: "https://drive.google.com/drive/folders/1sdn2jayaasri-guru-kelas-2-kurikulum-merdeka",
    documents: [
      {
        id: "k2-1",
        name: "Modul Ajar PPKn Kelas 2 - Pancasila di Hatiku.docx",
        type: "docx",
        size: "2.7 MB",
        updatedAt: "14 Februari 2026",
        description: "Pembiasaan gotong royong, aturan rumah dan sekolah",
        category: "Modul Ajar"
      },
      {
        id: "k2-2",
        name: "Modul Ajar Matematika Kelas 2 - Perkalian & Pembagian Dasar.pdf",
        type: "pdf",
        size: "3.9 MB",
        updatedAt: "19 Januari 2026",
        description: "Konsep penjumlahan berulang dan pembagian",
        category: "Modul Ajar"
      },
      {
        id: "k2-3",
        name: "Program Tahunan (Prota) & Program Semester (Promes) Kelas 2.xlsx",
        type: "xlsx",
        size: "780 KB",
        updatedAt: "15 Juli 2025",
        description: "Alokasi jam pelajaran dan kalender akademik kelas 2",
        category: "Perangkat"
      },
      {
        id: "k2-4",
        name: "Bank Soal Sumatif Tengah Semester (STS) Genap.docx",
        type: "docx",
        size: "1.5 MB",
        updatedAt: "01 Maret 2026",
        description: "Kisi-kisi soal dan instrumen STS genap",
        category: "Asesmen"
      }
    ]
  },
  {
    id: "kelas-3",
    title: "GURU KELAS 3",
    label: "Guru Kelas 3 (Fase B)",
    buttonText: "AKSES FOLDER KELAS 3",
    category: "guru_kelas",
    grade: 3,
    subtext: "Modul Ajar, IPAS, P5, Penilaian & LKPD Fase B",
    color: "green",
    defaultUrl: "https://drive.google.com/drive/folders/1sdn2jayaasri-guru-kelas-3-kurikulum-merdeka",
    documents: [
      {
        id: "k3-1",
        name: "Modul Ajar IPAS Kelas 3 - Mari Kenali Hewan di Sekitar Kita.pdf",
        type: "pdf",
        size: "4.1 MB",
        updatedAt: "26 Januari 2026",
        description: "Siklus hidup hewan, metamorfosis dan habitat lokal",
        category: "Modul Ajar"
      },
      {
        id: "k3-2",
        name: "Modul Projek P5 Kelas 3 - Gaya Hidup Berkelanjutan (Kelola Sampah).pdf",
        type: "pdf",
        size: "5.3 MB",
        updatedAt: "10 Februari 2026",
        description: "Panduan projek pembuatan kompos dan pemilahan sampah organik",
        category: "Projek P5"
      },
      {
        id: "k3-3",
        name: "Modul Ajar Bahasa Indonesia Kelas 3 - Cerita Pengalaman.docx",
        type: "docx",
        size: "2.3 MB",
        updatedAt: "08 Februari 2026",
        description: "Menulis paragraf narasi sederhana dengan ejaan yang disempurnakan",
        category: "Modul Ajar"
      },
      {
        id: "k3-4",
        name: "Buku Jurnal Harian & Catatan Refleksi Mengajar Kelas 3.xlsx",
        type: "xlsx",
        size: "920 KB",
        updatedAt: "20 Februari 2026",
        description: "Catatan kemajuan belajar individu peserta didik",
        category: "Administrasi"
      }
    ]
  },
  {
    id: "kelas-4",
    title: "GURU KELAS 4",
    label: "Guru Kelas 4 (Fase B)",
    buttonText: "AKSES FOLDER KELAS 4",
    category: "guru_kelas",
    grade: 4,
    subtext: "Modul Ajar, IPAS, P5, Penilaian & LKPD Fase B",
    color: "green",
    defaultUrl: "https://drive.google.com/drive/folders/1sdn2jayaasri-guru-kelas-4-kurikulum-merdeka",
    documents: [
      {
        id: "k4-1",
        name: "Modul Ajar IPAS Kelas 4 - Mengubah Bentuk Energi.pdf",
        type: "pdf",
        size: "4.4 MB",
        updatedAt: "17 Januari 2026",
        description: "Praktikum sains sederhana tentang energi kinetik, potensial, dan bunyi",
        category: "Modul Ajar"
      },
      {
        id: "k4-2",
        name: "Modul Ajar Matematika Kelas 4 - Pecahan & Desimal.docx",
        type: "docx",
        size: "3.1 MB",
        updatedAt: "03 Februari 2026",
        description: "Konsep pecahan senilai, pembulatan bilangan dan diagram batang",
        category: "Modul Ajar"
      },
      {
        id: "k4-3",
        name: "Modul Projek P5 Kelas 4 - Kearifan Lokal Budaya Lampung.pdf",
        type: "pdf",
        size: "6.2 MB",
        updatedAt: "11 Januari 2026",
        description: "Mengenal aksara Lampung, motif tapis, dan kuliner khas daerah",
        category: "Projek P5"
      },
      {
        id: "k4-4",
        name: "Panduan Persiapan Asesmen Diagnostik Literasi & Numerasi.pdf",
        type: "pdf",
        size: "2.8 MB",
        updatedAt: "05 Agustus 2025",
        description: "Pengelompokan tingkat kemahiran siswa awal semester",
        category: "Asesmen"
      }
    ]
  },
  {
    id: "kelas-5",
    title: "GURU KELAS 5",
    label: "Guru Kelas 5 (Fase C)",
    buttonText: "AKSES FOLDER KELAS 5",
    category: "guru_kelas",
    grade: 5,
    subtext: "Modul Ajar, Persiapan ANBK, Penilaian & LKPD Fase C",
    color: "green",
    defaultUrl: "https://drive.google.com/drive/folders/1sdn2jayaasri-guru-kelas-5-kurikulum-merdeka",
    documents: [
      {
        id: "k5-1",
        name: "Modul Persiapan & Latihan Soal Simulasi ANBK Kelas 5.pdf",
        type: "pdf",
        size: "7.1 MB",
        updatedAt: "25 Februari 2026",
        description: "Bank soal Literasi Membaca dan Numerasi standar Pusmendik Kemendikbud",
        category: "ANBK"
      },
      {
        id: "k5-2",
        name: "Modul Ajar IPAS Kelas 5 - Bagaimana Bernapas dan Mencerna Makanan.docx",
        type: "docx",
        size: "3.8 MB",
        updatedAt: "12 Januari 2026",
        description: "Sistem pernapasan dan sistem pencernaan manusia dengan model interaktif",
        category: "Modul Ajar"
      },
      {
        id: "k5-3",
        name: "Modul Ajar Bahasa Indonesia Kelas 5 - Teks Eksplanasi & Wawancara.pdf",
        type: "pdf",
        size: "2.9 MB",
        updatedAt: "19 Februari 2026",
        description: "Teknik wawancara tokoh masyarakat dan penulisan laporan peristiwa",
        category: "Modul Ajar"
      },
      {
        id: "k5-4",
        name: "Aplikasi Rekap Nilai Raport Kurikulum Merdeka Fase C.xlsx",
        type: "xlsx",
        size: "1.9 MB",
        updatedAt: "05 Februari 2026",
        description: "Perhitungan otomatis capaian kompetensi dan deskripsi nilai raport",
        category: "Asesmen"
      }
    ]
  },
  {
    id: "kelas-6",
    title: "GURU KELAS 6",
    label: "Guru Kelas 6 (Fase C)",
    buttonText: "AKSES FOLDER KELAS 6",
    category: "guru_kelas",
    grade: 6,
    subtext: "Modul Ajar, Persiapan Kelulusan & Ujian Sekolah Fase C",
    color: "green",
    defaultUrl: "https://drive.google.com/drive/folders/1sdn2jayaasri-guru-kelas-6-kurikulum-merdeka",
    documents: [
      {
        id: "k6-1",
        name: "Modul Ajar Matematika Kelas 6 - Bangun Ruang & Statistika.docx",
        type: "docx",
        size: "3.6 MB",
        updatedAt: "18 Januari 2026",
        description: "Volume tabung, kerucut, bola serta mean, median, modus",
        category: "Modul Ajar"
      },
      {
        id: "k6-2",
        name: "Kumpulan Kisi-kisi & Naskah Latihan Ujian Sekolah (US) Kelas 6.pdf",
        type: "pdf",
        size: "6.8 MB",
        updatedAt: "02 Maret 2026",
        description: "Tryout ujian sekolah mata pelajaran utama lengkap dengan kunci jawaban",
        category: "Ujian Sekolah"
      },
      {
        id: "k6-3",
        name: "Modul Ajar IPAS Kelas 6 - Bumi Kita dalam Tata Surya.pdf",
        type: "pdf",
        size: "4.9 MB",
        updatedAt: "08 Februari 2026",
        description: "Rotasi, revolusi bumi, gerhana matahari dan gerhana bulan",
        category: "Modul Ajar"
      },
      {
        id: "k6-4",
        name: "Format Surat Keterangan Lulus (SKL) & Biodata Ijazah Siswa.xlsx",
        type: "xlsx",
        size: "1.3 MB",
        updatedAt: "24 Februari 2026",
        description: "Format verifikasi data peserta didik calon lulusan tahun ajaran berjalan",
        category: "Kelulusan"
      }
    ]
  },
  {
    id: "mapel-pai",
    title: "GURU MAPEL PAI & BP",
    label: "Pendidikan Agama Islam",
    buttonText: "AKSES FOLDER PAI & BP",
    category: "guru_mapel",
    subtext: "Modul Ajar PAI, Doa Harian, Tajwid & Praktik Ibadah",
    color: "emerald",
    defaultUrl: "https://drive.google.com/drive/folders/1sdn2jayaasri-guru-pai-budi-pekerti",
    documents: [
      {
        id: "pai-1",
        name: "Modul Ajar PAI Fase A, B, C (Kelas 1 - 6 Lengkap).pdf",
        type: "pdf",
        size: "8.2 MB",
        updatedAt: "15 Januari 2026",
        description: "Panduan mengajar PAI & Budi Pekerti seluruh jenjang",
        category: "Modul Ajar"
      },
      {
        id: "pai-2",
        name: "Buku Panduan Praktik Sholat Fardhu & Dhuha Berjamaah.pdf",
        type: "pdf",
        size: "3.5 MB",
        updatedAt: "20 September 2025",
        description: "Pedoman pembiasaan sholat dhuha dan dzuhur berjamaah di musholla sekolah",
        category: "Pembiasaan"
      },
      {
        id: "pai-3",
        name: "Kumpulan Doa Sehari-hari & Hafalan Surat Pendek (Juz Amma).docx",
        type: "docx",
        size: "1.4 MB",
        updatedAt: "05 Oktober 2025",
        description: "Target capaian hafalan santri cilik UPTD SD Negeri 2 Jaya Asri",
        category: "Bahan Ajar"
      }
    ]
  },
  {
    id: "mapel-pjok",
    title: "GURU MAPEL PJOK",
    label: "Pendidikan Jasmani & Olahraga",
    buttonText: "AKSES FOLDER PJOK",
    category: "guru_mapel",
    subtext: "Modul Ajar PJOK, Kebugaran Jasmani, Senam & O2SN",
    color: "emerald",
    defaultUrl: "https://drive.google.com/drive/folders/1sdn2jayaasri-guru-pjok-olahraga",
    documents: [
      {
        id: "pjok-1",
        name: "Modul Ajar PJOK Fase A, B, C - Atletik, Senam & Permainan Bola.pdf",
        type: "pdf",
        size: "5.5 MB",
        updatedAt: "19 Januari 2026",
        description: "Rencana pembelajaran aktivitas fisik dan kebugaran",
        category: "Modul Ajar"
      },
      {
        id: "pjok-2",
        name: "Instrumen Tes Kebugaran Jasmani Indonesia (TKJI) Anak SD.xlsx",
        type: "xlsx",
        size: "1.2 MB",
        updatedAt: "14 November 2025",
        description: "Format penilaian lari 40m, gantung siku tekuk, baring duduk",
        category: "Asesmen"
      },
      {
        id: "pjok-3",
        name: "Program Pembinaan Ekstrakurikuler Olahraga Prestasi (O2SN).docx",
        type: "docx",
        size: "1.7 MB",
        updatedAt: "03 Desember 2025",
        description: "Jadwal dan materi latihan bulutangkis, catur, dan atletik cilik",
        category: "Ekstrakurikuler"
      }
    ]
  }
];

export const TEACHERS_LIST: TeacherStaff[] = [
  {
    id: "t1",
    name: "Hj. Siti Rohmah, S.Pd., M.Pd.",
    role: "Kepala Sekolah",
    nip: "19750814 199903 2 003",
    avatarColor: "bg-blue-600",
    phone: "0812-7345-6789"
  },
  {
    id: "t2",
    name: "Ahmad Suhendra, S.Pd.",
    role: "Guru Kelas 1",
    nip: "19830412 200801 1 012",
    avatarColor: "bg-emerald-600"
  },
  {
    id: "t3",
    name: "Ratna Dewi, S.Pd.SD.",
    role: "Guru Kelas 2",
    nip: "19881105 201101 2 018",
    avatarColor: "bg-teal-600"
  },
  {
    id: "t4",
    name: "Bambang Triyono, S.Pd.",
    role: "Guru Kelas 3",
    nip: "19850220 200902 1 005",
    avatarColor: "bg-indigo-600"
  },
  {
    id: "t5",
    name: "Nur Hidayati, S.Pd.SD.",
    role: "Guru Kelas 4",
    nip: "19900315 201403 2 007",
    avatarColor: "bg-sky-600"
  },
  {
    id: "t6",
    name: "Drs. Eko Prasetyo",
    role: "Guru Kelas 5",
    nip: "19680922 199308 1 002",
    avatarColor: "bg-cyan-700"
  },
  {
    id: "t7",
    name: "Sri Wahyuni, M.Pd.",
    role: "Guru Kelas 6",
    nip: "19810618 200604 2 015",
    avatarColor: "bg-blue-700"
  },
  {
    id: "t8",
    name: "Ustadz Muhammad Ilham, S.Pd.I.",
    role: "Guru PAI & Budi Pekerti",
    nip: "19870710 201001 1 016",
    avatarColor: "bg-emerald-700"
  },
  {
    id: "t9",
    name: "Wahyu Hidayat, S.Pd.Jas.",
    role: "Guru PJOK",
    nip: "19920108 201903 1 009",
    avatarColor: "bg-teal-700"
  },
  {
    id: "t10",
    name: "Endang Sulastri, S.E.",
    role: "Kepala Tenaga Administrasi / Operator Dapodik",
    nip: "19860517 201201 2 004",
    avatarColor: "bg-slate-600"
  }
];

export const SCHOOL_FACILITIES = [
  {
    title: "Ruang Kelas Nyaman & Ber-AC",
    description: "6 ruang kelas representatif dilengkapi proyektor LCD dan pojok baca literasi."
  },
  {
    title: "Laboratorium Komputer & ANBK",
    description: "25 unit komputer modern dengan jaringan internet fiber optik untuk simulasi ujian digital."
  },
  {
    title: "Perpustakaan 'Cahaya Ilmu'",
    description: "Koleksi lebih dari 2.500 buku pengayaan, ensiklopedia anak, dan dongeng nusantara."
  },
  {
    title: "Musholla Sekolah 'Al-Ikhlas'",
    description: "Pusat kegiatan sholat dhuha, sholat dzuhur berjamaah, dan tadarus pagi siswa."
  },
  {
    title: "Lapangan Olahraga & Upacara",
    description: "Fasilitas multifungsi untuk upacara bendera, senam irama, futsal, dan bulutangkis."
  },
  {
    title: "UKS & Taman Toga Hijau",
    description: "Ruang kesehatan dokter kecil yang higienis serta kebun tanaman obat keluarga asri."
  }
];
