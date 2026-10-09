export const WARGA_PROFILE = {
  nama: 'Sugeng Riyadi',
  foto:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCn5oSJMInmRHML8drdM9Tn1hh4FVkTw6K5vUvZTGDwgBHxZ8qPbLL8RMFp7I1wo-Ci6Eg2BjDqdvxX5VyTAOAY5JIHGuz2CBYVAx_e3QOrluSiPRBinkQ-YmU75PNy4PlF6GDrcmra7tbvmfr_r_JvhQ96p9bHTE_Lg2TsZ35aXxJhezhSEWvPWfJJJpDfdgL5KZuBRek_Zj_pBzuiD4HUt6ZuLthAS0L-Ze8TLO9PMoA65Da9BmnJ',
  nik: 'NIK: 3204************',
  alamat: 'Dusun Krajan, RT 02 / RW 01, Desa Sukamaju',
};

export const LAYANAN_ACTIONS = [
  { icon: 'post_add', label: 'Permohonan Baru', target: 'katalog-surat', primary: true },
  { icon: 'track_changes', label: 'Cek Pelacak', target: 'pelacak-surat', primary: false },
  { icon: 'record_voice_over', label: 'Pengaduan Warga', target: 'kotak-aspirasi', primary: false },
  { icon: 'manage_accounts', label: 'Pembaruan Mandiri', target: 'pembaruan-data', primary: false },
];

export const TRACKER_STEPS = [
  {
    title: '1. Pengajuan Dikirim',
    time: '12 Okt 2024, 08:30 WIB',
    desc: 'Selesai • Validasi Formulir',
    state: 'done',
    icon: 'done',
  },
  {
    title: '2. Verifikasi RT/RW',
    time: '12 Okt 2024, 11:15 WIB',
    desc: 'Ketua RT 02 (Bpk. Mulyono)',
    state: 'done',
    icon: 'done',
  },
  {
    title: '3. Disetujui Operator Desa',
    time: '13 Okt 2024, 09:20 WIB',
    desc: 'Sedang Diproses • Kaur Tata Usaha',
    state: 'active',
    icon: 'pending',
  },
  {
    title: '4. TTE Kepala Desa & Terbit',
    time: 'Estimasi Siap: 13 Okt 14:00',
    desc: 'Sertifikasi Elektronik BSrE',
    state: 'todo',
    icon: 'draw',
  },
];

export const SURAT_CATALOG = [
  {
    icon: 'storefront',
    badge: '15 - 30 Menit',
    title: 'Surat Keterangan Usaha (SKU)',
    desc: 'Untuk legalitas kelayakan UMKM, pengajuan KUR perbankan, dan kelengkapan izin usaha mikro.',
    syarat: ['KTP & Kartu Keluarga', 'Foto Aktivitas Usaha / Warung', 'Surat Pengantar RT/RW'],
    cta: 'Ajukan SKU Online',
    ctaPrimary: true,
  },
  {
    icon: 'cottage',
    badge: 'Instan (15 Min)',
    title: 'Surat Keterangan Domisili',
    desc: 'Bukti kependudukan resmi untuk pengurusan domisili tinggal sementara, pendidikan, atau pekerjaan.',
    syarat: ['E-KTP Pemohon', 'Kartu Keluarga Terbaru', 'Surat Pernyataan Tempat Tinggal'],
    cta: 'Ajukan SK Domisili',
    ctaPrimary: false,
  },
  {
    icon: 'gavel',
    badge: '20 Menit',
    title: 'Surat Pengantar SKCK',
    desc: 'Rekomendasi tertulis kelakuan baik dari desa untuk diteruskan ke Polsek / Polres setempat.',
    syarat: ['E-KTP & Akta Kelahiran', 'Pas Foto Berlatar Merah 4x6', 'Verifikasi Ketua RT/RW'],
    cta: 'Ajukan Pengantar SKCK',
    ctaPrimary: false,
  },
  {
    icon: 'diversity_1',
    badge: 'Validasi DTKS',
    badgeTertiary: true,
    title: 'Keterangan Tidak Mampu (SKTM)',
    desc: 'Keringanan biaya pendidikan sekolah/kuliah dan pengajuan jaminan kesehatan gratis KIS.',
    syarat: ['Kartu Keluarga & KTP Pemohon', 'Foto Kondisi Rumah Tampak Depan', 'Surat Keterangan Penghasilan'],
    cta: 'Ajukan SKTM',
    ctaPrimary: false,
  },
  {
    icon: 'child_friendly',
    badge: 'Terpadu Dukcapil',
    title: 'Keterangan Kelahiran / Kematian',
    desc: 'Pelaporan mutasi sipil resmi untuk penerbitan Akta Kelahiran atau Akta Kematian di Disdukcapil.',
    syarat: ['Surat Dokter / Bidan / RS', 'KTP Saksi 2 Orang', 'Buku Nikah / Kartu Keluarga'],
    cta: 'Lapor Peristiwa',
    ctaPrimary: false,
  },
];

export const RIWAYAT_LAPORAN = [
  {
    icon: 'water_damage',
    title: 'Pintu Irigasi Blok Krajan 03 Tersumbat',
    meta: 'Dilaporkan: 10 Okt 2024 • ID: #LAP-8821',
    status: 'Dalam Penanganan Tim PU Desa',
    handling: true,
  },
  {
    icon: 'lightbulb',
    title: 'Lampu Penerangan Jalan Umum RT 02 Mati',
    meta: 'Dilaporkan: 04 Okt 2024 • ID: #LAP-8790',
    status: 'Tindak Lanjut Selesai',
    handling: false,
  },
];

export const KATEGORI_MASALAH = [
  'Infrastruktur Jalan & Jembatan',
  'Air Bersih & Sanitasi',
  'Keamanan Lingkungan & Poskamling',
  'Bantuan Sosial & Masalah Kesejahteraan',
  'Pelayanan Aparatur Desa',
];
