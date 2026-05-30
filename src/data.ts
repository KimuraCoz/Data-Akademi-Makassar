import { SmuItem, KampusItem } from './types';

export const EXPLANATION_SHORT = `Kota Makassar (Lontara Makassar: ᨀᨚᨈ ᨆᨀᨔᨑ, transliterasi: Kota Mangkasara'), sebelumnya bernama Ujung Pandang (nama benteng suku makassar), adalah ibu kota Provinsi Sulawesi Selatan, Indonesia. Sebelumnya, kota yang sejak 1971 hingga 1999 dikenal secara resmi sebagai Ujung Pandang ini merupakan kota terbesar di wilayah Indonesia Timur dan pusat kota terbesar ketujuh di Indonesia dari jumlah penduduk setelah Jakarta, Surabaya, Medan, Bandung, Semarang, dan Palembang.`;

export const EXPLANATION_LONG = `Kota Makassar (Lontara Makassar: ᨀᨚᨈ ᨆᨀᨔᨑ, transliterasi: Kota Mangkasara'), sebelumnya bernama Ujung Pandang (nama benteng suku makassar), adalah ibu kota Provinsi Sulawesi Selatan, Indonesia. Sebelumnya, kota yang sejak 1971 hingga 1999 dikenal secara resmi sebagai Ujung Pandang ini merupakan kota terbesar di wilayah Indonesia Timur dan pusat kota terbesar ketujuh di Indonesia dari jumlah penduduk setelah Jakarta, Surabaya, Medan, Bandung, Semarang, dan Palembang. Kota ini terletak di pesisir barat daya pulau Sulawesi, menghadap Selat Makassar. Sebagian besar penduduk yang mendiami kota ini adalah suku Makassar atau Tu MANGKASARAK (paling dominan) dan pendatang dari orang-orang Bugis, Jawa, Mandar, Toraja, Sunda, Tionghoa dan lain-lain. Menurut Bappenas, Makassar adalah salah satu dari empat pusat pertumbuhan utama di Indonesia, bersama dengan Medan, Jakarta, dan Surabaya. Dengan memiliki wilayah seluas 175,77 km² dan jumlah penduduk lebih dari 1,4 juta jiwa, kota ini berada di urutan ketujuh kota terbesar di Indonesia dari jumlah penduduk setelah Jakarta, Surabaya, Medan, Bandung, Semarang, dan Palembang. Makanan khas Makassar yang umum dijumpai di pelosok kota adalah Coto Makassar, Roti Maros, Jalangkote, Bassang, Kue Tori, Pallu butung, Pisang Ijo, Sop Saudara dan Sop Konro.`;

export const HISTORY_PARAGRAPHS = [
  `Kota Makassar sejak masa awal kemerdekaan telah diposisikan secara strategis sebagai pintu gerbang sekaligus pusat pertumbuhan di Kawasan Timur Indonesia (KTI), termasuk dalam sektor pendidikan. Perkembangan institusi pendidikan menengah (SMU) dan perguruan tinggi di kota ini mulai menggeliat secara terstruktur pada dekade 1950-an. Pemerintah mulai mendirikan sekolah menengah atas negeri pionir—seperti SMA Negeri 1 Makassar yang melegenda—untuk menyaring dan mendidik talenta muda lokal guna mengisi kebutuhan birokrasi dan pembangunan daerah yang baru seumur jagung. Langkah awal ini berhasil memicu gelombang migrasi pelajar dari berbagai kabupaten di Sulawesi Selatan dan provinsi sekitarnya menuju pusat kota.`,
  
  `Titik balik terbesar yang mengukuhkan posisi Makassar sebagai "Kota Pelajar" di Indonesia Timur terjadi dengan berdirinya Universitas Hasanuddin (Unhas) secara resmi pada tahun 1956. Kehadiran Unhas kemudian disusul oleh berdirinya IKIP Ujung Pandang (sekarang Universitas Negeri Makassar/UNM) dan IAIN Alauddin (sekarang UIN Alauddin Makassar). Kehadiran perguruan-perguruan tinggi negeri ini tidak hanya menciptakan ekosistem akademik yang dinamis, tetapi juga memicu pertumbuhan institusi pendidikan swasta dan sekolah menengah di sekitarnya. Sepanjang sejarahnya, kampus-kampus di Makassar tidak hanya berfungsi sebagai menara gading tempat transfer ilmu, melainkan juga menjadi pusat pergerakan intelektual dan pemikiran kritis yang sangat diperhitungkan di tingkat nasional.`,
  
  `Seiring berjalannya waktu dan dinamika perubahan nama kota dari Makassar ke Ujung Pandang lalu kembali lagi ke Makassar, jumlah fasilitas pendidikan di kota ini mengalami pertumbuhan eksponensial. Kini, dengan ratusan SMU/SMK serta puluhan perguruan tinggi negeri dan swasta yang tersebar di berbagai kecamatan, lintasan sejarah ini membuktikan bahwa sektor akademik adalah pilar utama yang membentuk identitas Makassar. Melalui data akademik yang kita kumpulkan hari ini, kita sedang melihat warisan historis dari sebuah kota yang berhasil mentransformasikan dirinya menjadi pusat keunggulan (center of excellence) yang terus melahirkan para inovator dan pemimpin bangsa.`
];

export const SMU_DATA: SmuItem[] = [
  {
    id: 'smu-17',
    name: 'SMAN 17 Makassar',
    alias: 'Smabel / Boarding',
    category: 'Negeri',
    description: 'Sekolah unggulan dengan sistem berasrama (boarding school).',
    longDescription: 'Sekolah unggulan dengan sistem berasrama (boarding school). Secara konsisten memiliki nilai UTBK tertinggi di Makassar dan langganan juara olimpiade sains.',
    achievements: [
      'Peringkat UTBK Tertinggi di Sulawesi Selatan',
      'Sistem Boarding/Asrama Berkarakter',
      'Langganan Juara Olimpiade Sains Nasional (OSN)'
    ],
    stats: {
      established: '1992',
      accreditation: 'A (Unggul)',
      studentCount: '~1,100 Pelajar'
    }
  },
  {
    id: 'smu-1',
    name: 'SMAN 1 Makassar',
    alias: 'Smansa',
    category: 'Negeri',
    description: 'SMA negeri tertua dan paling legendaris di Makassar.',
    longDescription: 'SMA negeri tertua dan paling legendaris di Makassar. Terkenal dengan jaringan alumni yang sangat kuat di ranah birokrasi, politik, dan bisnis nasional.',
    achievements: [
      'SMA Negeri Pertama / Tertua di Makassar',
      'Jaringan Alumni Paling Berpengaruh Nasional',
      'Sejarah Akademik Kokoh & Prestisius'
    ],
    stats: {
      established: '1950',
      accreditation: 'A (Unggul)',
      studentCount: '~1,400 Pelajar'
    }
  },
  {
    id: 'smu-rajawali',
    name: 'SMA Katolik Rajawali',
    alias: 'Kara',
    category: 'Swasta',
    description: 'Sekolah swasta Katolik terbaik di kota ini.',
    longDescription: 'Sekolah swasta Katolik terbaik di kota ini. Terkenal dengan kedisiplinan tingkat tinggi dan selalu bersaing di peringkat atas perolehan nilai akademik tingkat provinsi.',
    achievements: [
      'Disiplin Akademik dan Karakter Super Ketat',
      'Peringkat Atas Nilai Akademik Tingkat Provinsi',
      'Fasilitas Pembelajaran Modern Terbaik'
    ],
    stats: {
      established: '1954',
      accreditation: 'A (Unggul)',
      studentCount: '~950 Pelajar'
    }
  },
  {
    id: 'smu-athirah',
    name: 'SMA Islam Athirah 1',
    alias: 'Athirah',
    category: 'Swasta',
    description: 'Sekolah swasta Islam premium di bawah naungan Kalla Group.',
    longDescription: 'Sekolah swasta Islam premium di bawah naungan Kalla Group. Unggul dalam fasilitas modern dan integrasi kurikulum nasional dengan pendidikan karakter islami.',
    achievements: [
      'Infrastruktur Premium & Lab Digital Modern',
      'Kolaborasi Kurikulum Integratif Nasional & Islami',
      'Di Bawah Naungan Terpercaya Kalla Group'
    ],
    stats: {
      established: '1984',
      accreditation: 'A (Unggul)',
      studentCount: '~800 Pelajar'
    }
  },
  {
    id: 'smu-5',
    name: 'SMAN 5 Makassar',
    alias: 'Smanli',
    category: 'Negeri',
    description: 'Sekolah negeri favorit dengan kompetisi masuk sangat ketat.',
    longDescription: 'Sekolah negeri favorit yang memiliki kompetisi masuk sangat ketat. Unggul seimbang di bidang akademik serta aktivitas ekstrakurikuler seni dan olahraga.',
    achievements: [
      'Rasio Kompetisi Seleksi Masuk Terketat Kedua',
      'Keseimbangan Prestasi Olahraga, Seni & Sains',
      'Organisasi Ekstrakurikuler Paling Aktif'
    ],
    stats: {
      established: '1979',
      accreditation: 'A (Unggul)',
      studentCount: '~1,250 Pelajar'
    }
  },
  {
    id: 'smu-2',
    name: 'SMAN 2 Makassar',
    alias: 'Smada',
    category: 'Negeri',
    description: 'Memiliki rekam jejak prestasi yang stabil di pusat kota.',
    longDescription: 'Berlokasi strategis di pusat kota. Memiliki rekam jejak prestasi yang stabil dan dikenal dengan kegiatan kepemudaan serta pensi (pentas seni) yang masif.',
    achievements: [
      'Lokasi Strategis Geografis di Pusat Kota',
      'Pionir Kegiatan Pentas Seni (Pensi) Masif',
      'Rekam Jejak Kepemimpinan Pemuda Kuat'
    ],
    stats: {
      established: '1957',
      accreditation: 'A (Unggul)',
      studentCount: '~1,200 Pelajar'
    }
  }
];

export const KAMPUS_DATA: KampusItem[] = [
  {
    id: 'kampus-unhas',
    name: 'Universitas Hasanuddin',
    alias: 'Unhas',
    category: 'PTN',
    description: 'Perguruan Tinggi Negeri (PTN) terbesar dan terbaik di Kawasan Timur Indonesia.',
    longDescription: 'Perguruan Tinggi Negeri (PTN) terbesar dan terbaik di Kawasan Timur Indonesia. Memiliki reputasi riset internasional dan menjadi barometer utama pendidikan tinggi di luar Pulau Jawa.',
    iconType: 'academic',
    keyFeature: 'Pusat Riset Terakreditasi Global & Barometer Utama Kawasan Timur Indonesia.',
    established: '1956',
    accreditation: 'Unggul',
    dominantFaculty: 'Fakultas Kedokteran, Teknik, Kelautan & Perikanan'
  },
  {
    id: 'kampus-unm',
    name: 'Universitas Negeri Makassar',
    alias: 'UNM',
    category: 'PTN',
    description: 'Eks-IKIP Ujung Pandang, pusat pencetak tenaga kependidikan utama dengan Menara Phinisi ikonik.',
    longDescription: 'Eks-IKIP Ujung Pandang. Pusat pencetak tenaga pendidik (guru) dan kependidikan utama di Sulawesi Selatan, dengan ikon Menara Phinisi yang ikonik di pusat kota.',
    iconType: 'phinisi',
    keyFeature: 'Menara Phinisi pencakar langit ikonik Makassar & Integrasi Pendidikan Berkualitas.',
    established: '1961',
    accreditation: 'Unggul',
    dominantFaculty: 'Fakultas Keguruan & Ilmu Pendidikan, Seni & Desain, Teknik'
  },
  {
    id: 'kampus-uin',
    name: 'Universitas Islam Negeri Alauddin Makassar',
    alias: 'UIN Alauddin',
    category: 'PTN Keagamaan',
    description: 'PTN keagamaan Islam terbesar di bawah naungan Kemenag.',
    longDescription: 'PTN keagamaan Islam terbesar di bawah naungan Kemenag. Unggul dalam integrasi ilmu sains modern dengan nilai-nilai spiritual dan syariat Islam.',
    iconType: 'islamic',
    keyFeature: 'Integrasi Kurikulum Sains Berlandaskan Nilai Spiritual Al-Qur\'an.',
    established: '1965',
    accreditation: 'A',
    dominantFaculty: 'Fakultas Syariah & Hukum, Tarbiyah, Sains & Teknologi'
  },
  {
    id: 'kampus-umi',
    name: 'Universitas Muslim Indonesia',
    alias: 'UMI',
    category: 'PTS',
    description: 'Perguruan Tinggi Swasta (PTS) tertua dan terbesar di Indonesia Timur.',
    longDescription: 'Perguruan Tinggi Swasta (PTS) tertua dan terbesar di Indonesia Timur. Menjadi PTS pertama di luar Pulau Jawa yang berhasil meraih akreditasi "Unggul" secara institusi.',
    iconType: 'scale',
    keyFeature: 'PTS Pertama Luar Jawa Berakreditasi Institusi "Unggul" & Standar ISO Keagamaan.',
    established: '1954',
    accreditation: 'Unggul (Pertama Swasta Luar Jawa)',
    dominantFaculty: 'Fakultas Kedokteran, Hukum, Teknik Industri, Farmasi'
  },
  {
    id: 'kampus-unismuh',
    name: 'Universitas Muhammadiyah Makassar',
    alias: 'Unismuh',
    category: 'PTS',
    description: 'PTS papan atas dengan pertumbuhan infrastruktur dan sosiopreneur masif.',
    longDescription: 'PTS papan atas dengan pertumbuhan infrastruktur dan jumlah mahasiswa yang sangat masif. Unggul dalam program kedokteran swasta dan pemberdayaan masyarakat berbasis sosiopreneur.',
    iconType: 'traditional',
    keyFeature: 'Rumah Sakit Pendidikan Mandiri, Pusat Kedokteran Swasta, & Sociopreneurship.',
    established: '1963',
    accreditation: 'Unggul',
    dominantFaculty: 'Fakultas Kedokteran & Ilmu Kesehatan, Ekonomi & Bisnis'
  }
];

export const FOOTER_CREDITS = {
  creator: 'KimuraCoz',
  disclaimer: 'Disclaimer!! Sumber ini berasal dari googling internet dan teks ini berupa informasi yang ada. Jika ada yang salah, mohon maaf untuk informasi yang kurang akurat. Terima kasih atas pengertiannya.'
};
