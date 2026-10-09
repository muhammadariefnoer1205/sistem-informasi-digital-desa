export const MAP_LAYERS = [
  { icon: 'layers', label: 'Batas Dusun & RT/RW' },
  { icon: 'local_hospital', label: 'Fasilitas Publik' },
  { icon: 'warning', label: 'Titik Rawan Longsor' },
  { icon: 'agriculture', label: 'Sawah & Pertanian' },
];

export const MAP_PINS = [
  { icon: 'account_balance', label: 'Balai Desa Sukamaju', pos: 'top-1/4 left-1/3', box: 'bg-surface-container-lowest text-primary', iconCls: 'text-primary', bounce: true },
  { icon: 'local_pharmacy', label: 'Puskesmas Pembantu 01', pos: 'bottom-1/3 right-1/4', box: 'bg-surface-container-lowest text-secondary', iconCls: 'text-secondary', bounce: false },
  { icon: 'storefront', label: 'Pasar Desa Kulon', pos: 'top-1/2 right-1/3', box: 'bg-tertiary-fixed text-on-tertiary-fixed', iconCls: '', bounce: false },
];

export const FASILITAS = [
  { icon: 'account_balance', iconBox: 'bg-surface-container text-primary', nama: 'Kantor Balai Desa', desc: 'Jl. Raya Sukamaju No. 12 • Layanan 08.00 - 15.30', arrowCls: 'text-primary' },
  { icon: 'local_hospital', iconBox: 'bg-surface-container text-secondary', nama: 'Puskesmas Pembantu (Pustu)', desc: 'Dusun Krajan RW 02 • Bidan & Perawat Siaga 24 Jam', arrowCls: 'text-secondary' },
  { icon: 'storefront', iconBox: 'bg-tertiary-fixed text-on-tertiary-fixed', nama: 'Pasar Desa & Sentra Kopi', desc: 'Dusun Cijambu RW 05 • Buka Tiap Hari Pasaran', arrowCls: 'text-tertiary' },
  { icon: 'school', iconBox: 'bg-surface-container text-primary', nama: 'SD Negeri Sukamaju 01 & 02', desc: 'Kawasan Pendidikan • 430 Murid Aktif', arrowCls: 'text-primary' },
];

export const KELOMPOK_USIA = [
  { label: 'Usia Produktif (15 - 59 Thn)', nilai: '63.4% (3.101 Jiwa)', pct: 63.4, bar: 'bg-primary', text: 'text-primary' },
  { label: 'Anak-anak (0 - 14 Thn)', nilai: '22.8% (1.115 Jiwa)', pct: 22.8, bar: 'bg-secondary', text: 'text-secondary' },
  { label: 'Lansia (60+ Thn)', nilai: '13.8% (676 Jiwa)', pct: 13.8, bar: 'bg-tertiary-container', text: 'text-tertiary' },
];

export const MATA_PENCAHARIAN = [
  { label: 'Petani & Pekebun', pct: '46%', dot: 'bg-primary', text: 'text-primary' },
  { label: 'Buruh Industri / Pabrik', pct: '22%', dot: 'bg-secondary', text: 'text-secondary' },
  { label: 'Pedagang & Wiraswasta', pct: '18%', dot: 'bg-tertiary', text: 'text-tertiary' },
  { label: 'PNS / TNI / Polri / Guru', pct: '4%', dot: 'bg-surface-tint', text: 'text-on-surface' },
  { label: 'Lainnya / Jasa Mandiri', pct: '10%', dot: 'bg-outline-variant', text: 'text-on-surface-variant' },
];

export const PENDIDIKAN = [
  { label: 'Lulusan PT / Sarjana (S1/D3)', nilai: '11.2%' },
  { label: 'SMA / SMK Sederajat', nilai: '38.4%' },
  { label: 'SMP / MTs Sederajat', nilai: '28.9%' },
  { label: 'SD / Sederajat', nilai: '21.5%' },
];

export const BERITA_UTAMA = {
  foto: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBoY7KjgucwyH1uwldXcVq9UTUOrC2O4RMgOWtX62_ck1M3sIyQOmgBFGa0YYn2e_6tJJIQJ02tyGheEePjeDQ5Hm7bC9kg4VDMA9LckRGL9hFNr-QBrg3zhzCWif5-QnAOLIw4t1UtcLJLnZXtC-ujbLHKfJruTSlPLroGPU8WHiajqCo4FiLe7HUlDvzDpv90xDh8nYCPeyiAXSKkGkrGhWqA-ICaI3SvpzqR7BOhMHgw1koRjFo',
  badge: 'Bansos BLT-DD', tanggal: '18 November 2024',
  judul: 'Penyaluran BLT Dana Desa Tahap III Siap Didistribusikan Hari Kamis di Aula Kantor Desa',
  isi: 'Sebanyak 78 KPM telah diverifikasi melalui Musyawarah Desa Khusus (Musdesus). Warga diimbau membawa KTP elektronik dan Kartu Keluarga asli tanpa biaya administrasi apa pun.',
};

export const AGENDA = [
  { tgl: '21 NOV', box: 'bg-surface-container text-secondary', judul: 'Jadwal Posyandu Balita & Lansia Mawar Melati', desc: 'Poskesdes Dusun 1 • Pemberian Vitamin A & Skrining Tekanan Darah Gratis', jam: 'Pukul 08:30 WIB' },
  { tgl: '24 NOV', box: 'bg-surface-container text-primary', judul: 'Kerja Bakti Massal Normalisasi Saluran Irigasi Tersier', desc: 'Dusun Cijambu RW 04 & 05 • Antisipasi Musim Hujan Bersama Babinsa', jam: 'Pukul 07:00 WIB' },
];

export const DOKUMEN = [
  { icon: 'picture_as_pdf', iconCls: 'text-error', judul: 'Perdes APBDes TA 2024 (Penetapan)', meta: 'PDF • 3.4 MB • TTE Balai Sertifikasi' },
  { icon: 'picture_as_pdf', iconCls: 'text-error', judul: 'Laporan Realisasi Semester I TA 2024', meta: 'PDF • 2.1 MB • Terverifikasi Inspektorat' },
  { icon: 'picture_as_pdf', iconCls: 'text-error', judul: 'LPJ Realisasi APBDes TA 2023 (Audited)', meta: 'PDF • 4.8 MB • Opini WTP BPK-RI' },
  { icon: 'image', iconCls: 'text-primary', judul: 'Baliho APBDes 2024 Cetak (Hi-Res)', meta: 'PNG • 8.2 MB • Baliho Depan Balai Desa' },
];
