export const TAHUN_ANGGARAN = ['2024', '2023', '2022'];

export const APBDES = {
  '2024': {
    label: '2024 (Berjalan)',
    sinkron: 'Sinkronisasi Siskeudes: Hari ini, 09:14 WIB',
    pendapatan: {
      total: 'Rp 1.482.500.000', target: 'Target Anggaran Penetapan: Rp 1.694.000.000', pct: 'Realisasi 87.5%',
      rincian: [
        { label: 'Dana Desa (APBN Pusat)', nilai: 'Rp 820.000.000' },
        { label: 'Alokasi Dana Desa (ADD Kab)', nilai: 'Rp 450.000.000' },
        { label: 'Pendapatan Asli Desa (PADes)', nilai: 'Rp 112.500.000' },
        { label: 'Bagi Hasil Pajak & Retribusi', nilai: 'Rp 100.000.000' },
      ],
    },
    belanja: {
      total: 'Rp 1.450.000.000', target: 'Total Plafon Anggaran: Rp 1.766.000.000', pct: 'Realisasi 82.1%',
      rincian: [
        { label: 'Penyelenggaraan Pemerintahan', nilai: '32% (Rp 464 Jt)', highlight: false },
        { label: 'Pembangunan Fisik Desa', nilai: '41% (Rp 594 Jt)', highlight: true },
        { label: 'Pembinaan Kemasyarakatan', nilai: '12% (Rp 174 Jt)', highlight: false },
        { label: 'Pemberdayaan Warga & UMKM', nilai: '10% (Rp 145 Jt)', highlight: false },
      ],
    },
    silpa: {
      total: 'Rp 32.500.000', desc: 'Selisih Kas Saldo Realisasi Berjalan',
      terserap: 82.1, sisa: 17.9, sisaLabel: '17.9% Tahap IV Cair Des',
    },
  },
  '2023': {
    label: '2023',
    sinkron: 'Sinkronisasi Siskeudes: 31 Des 2023, 16:40 WIB',
    pendapatan: {
      total: 'Rp 1.395.000.000', target: 'Target Anggaran Penetapan: Rp 1.580.000.000', pct: 'Realisasi 88.3%',
      rincian: [
        { label: 'Dana Desa (APBN Pusat)', nilai: 'Rp 768.000.000' },
        { label: 'Alokasi Dana Desa (ADD Kab)', nilai: 'Rp 425.000.000' },
        { label: 'Pendapatan Asli Desa (PADes)', nilai: 'Rp 108.000.000' },
        { label: 'Bagi Hasil Pajak & Retribusi', nilai: 'Rp 94.000.000' },
      ],
    },
    belanja: {
      total: 'Rp 1.368.000.000', target: 'Total Plafon Anggaran: Rp 1.652.000.000', pct: 'Realisasi 82.8%',
      rincian: [
        { label: 'Penyelenggaraan Pemerintahan', nilai: '33% (Rp 451 Jt)', highlight: false },
        { label: 'Pembangunan Fisik Desa', nilai: '40% (Rp 547 Jt)', highlight: true },
        { label: 'Pembinaan Kemasyarakatan', nilai: '12% (Rp 164 Jt)', highlight: false },
        { label: 'Pemberdayaan Warga & UMKM', nilai: '10% (Rp 137 Jt)', highlight: false },
      ],
    },
    silpa: {
      total: 'Rp 27.000.000', desc: 'Selisih Kas Saldo Realisasi (Audited)',
      terserap: 82.8, sisa: 17.2, sisaLabel: '17.2% SiLPA Akhir Tahun',
    },
  },
  '2022': {
    label: '2022',
    sinkron: 'Sinkronisasi Siskeudes: 31 Des 2022, 15:20 WIB',
    pendapatan: {
      total: 'Rp 1.310.500.000', target: 'Target Anggaran Penetapan: Rp 1.495.000.000', pct: 'Realisasi 87.7%',
      rincian: [
        { label: 'Dana Desa (APBN Pusat)', nilai: 'Rp 720.000.000' },
        { label: 'Alokasi Dana Desa (ADD Kab)', nilai: 'Rp 398.000.000' },
        { label: 'Pendapatan Asli Desa (PADes)', nilai: 'Rp 102.500.000' },
        { label: 'Bagi Hasil Pajak & Retribusi', nilai: 'Rp 90.000.000' },
      ],
    },
    belanja: {
      total: 'Rp 1.284.000.000', target: 'Total Plafon Anggaran: Rp 1.560.000.000', pct: 'Realisasi 82.3%',
      rincian: [
        { label: 'Penyelenggaraan Pemerintahan', nilai: '34% (Rp 437 Jt)', highlight: false },
        { label: 'Pembangunan Fisik Desa', nilai: '39% (Rp 501 Jt)', highlight: true },
        { label: 'Pembinaan Kemasyarakatan', nilai: '12% (Rp 154 Jt)', highlight: false },
        { label: 'Pemberdayaan Warga & UMKM', nilai: '10% (Rp 128 Jt)', highlight: false },
      ],
    },
    silpa: {
      total: 'Rp 26.500.000', desc: 'Selisih Kas Saldo Realisasi (Audited)',
      terserap: 82.3, sisa: 17.7, sisaLabel: '17.7% SiLPA Akhir Tahun',
    },
  },
};

export const SEKTOR_BELANJA = [
  { label: 'Pembangunan Fisik & Infrastruktur', pct: 41, bar: 'bg-primary', text: 'text-primary' },
  { label: 'Penyelenggaraan Pemerintahan Desa', pct: 32, bar: 'bg-secondary', text: 'text-secondary' },
  { label: 'Pembinaan Kemasyarakatan Desa', pct: 12, bar: 'bg-tertiary', text: 'text-tertiary' },
  { label: 'Pemberdayaan Masyarakat & UMKM', pct: 10, bar: 'bg-secondary-fixed-dim', text: 'text-on-surface' },
  { label: 'Penanggulangan Bencana & Keadaan Darurat', pct: 5, bar: 'bg-error', text: 'text-error' },
];

export const PROYEK_FISIK = [
  {
    nama: 'Rabat Beton Jalan Tani', lokasi: 'Dusun 2 RW 04 (Panjang 450m)',
    anggaran: 'Rp 185.000.000', sumber: 'Dana Desa', sumberCls: 'bg-surface-container text-primary',
    progres: '100%', status: 'SELESAI', statusCls: 'text-primary', dotCls: 'bg-primary',
  },
  {
    nama: 'Renovasi Posyandu Mawar', lokasi: 'Dusun 1 RW 02 (Peningkatan Sanitasi)',
    anggaran: 'Rp 65.000.000', sumber: 'ADD Kab', sumberCls: 'bg-tertiary-fixed text-on-tertiary-fixed',
    progres: '85%', status: 'FINISHING', statusCls: 'text-secondary', dotCls: 'bg-secondary',
  },
  {
    nama: 'Bantuan Pompa Air & Pipanisasi', lokasi: 'Gapoktan Subur Makmur (4 Unit)',
    anggaran: 'Rp 48.000.000', sumber: 'Ketahanan Pangan', sumberCls: 'bg-surface-container text-primary',
    progres: '100%', status: 'TERSALUR', statusCls: 'text-primary', dotCls: 'bg-primary',
  },
];
