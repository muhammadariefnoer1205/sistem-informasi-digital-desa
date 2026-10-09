export const SECURITY_METRICS = [
  {
    label: 'Enkripsi Database', icon: 'lock', iconBox: 'bg-surface-container text-primary',
    value: 'AES-256 GCM', valueCls: 'text-primary',
    lineIcon: 'check_circle', line: 'NIK & KK Terenkripsi', lineCls: 'text-secondary',
    foot: 'Kunci KMS Rotasi: Tiap 90 Hari',
  },
  {
    label: 'Hashing Kredensial', icon: 'key', iconBox: 'bg-surface-container text-primary',
    value: 'Argon2id', valueCls: 'text-on-surface',
    lineIcon: 'shield', line: 'Memori 64MB • Cost 3', lineCls: 'text-primary',
    foot: 'Anti-Bruteforce & Salt Dinamis',
  },
  {
    label: 'Sertifikasi TTE', icon: 'verified_user', iconBox: 'bg-surface-container text-primary',
    value: 'BSrE / BSSN', valueCls: 'text-primary',
    lineIcon: 'link', line: 'OCSP Live Validated', lineCls: 'text-secondary',
    foot: 'RSA-4096 / SHA-512',
  },
  {
    label: 'Anomali Akses', icon: 'security', iconBox: 'bg-surface-container-low text-secondary',
    value: '0 Insiden', valueCls: 'text-on-surface',
    lineIcon: 'shield_with_heart', line: 'WAF Desa Proteksi 100%', lineCls: 'text-secondary',
    foot: 'Rate-limit: 60 req/min/IP',
  },
  {
    label: 'Log Terarsip (7 Hari)', icon: 'receipt_long', iconBox: 'bg-surface-container text-primary',
    value: '14.820 Entri', valueCls: 'text-primary',
    lineIcon: 'archive', line: 'Merkle-Root Sinkron', lineCls: 'text-on-surface-variant',
    foot: 'Penyimpanan WORM Aman',
  },
];

export const RBAC_ROLES = [
  {
    jabatan: 'Kepala Desa (Kades)', role: 'Role: GOV_EXECUTIVE_HEAD', jabatanCls: 'text-primary',
    spasial: 'Seluruh Wilayah Desa', spasialCls: 'bg-surface-container text-on-surface-variant font-medium',
    crud: { icon: 'visibility', iconCls: 'text-outline', label: 'Read-Only', cls: 'text-on-surface-variant font-normal' },
    validasi: { icon: 'draw', label: 'TTE Final BSrE', cls: 'text-primary font-semibold' },
    audit: 'Laporan Eksekutif', auditCls: 'text-on-surface-variant',
    status: '1 Aktif (2FA)', statusCls: 'bg-secondary-container text-on-secondary-container', dotCls: 'bg-primary',
  },
  {
    jabatan: 'Kaur Tata Usaha & Pelayanan', role: 'Role: REGISTRAR_OPERATOR', jabatanCls: 'text-on-surface',
    spasial: 'Seluruh Wilayah Desa', spasialCls: 'bg-surface-container text-on-surface-variant font-medium',
    crud: { icon: 'edit_note', iconCls: '', label: 'CRUD Lengkap (Validasi NIK)', cls: 'text-primary font-semibold' },
    validasi: { icon: 'fact_check', label: 'Draft & Paraf Hirarki', cls: 'text-on-surface-variant font-normal' },
    audit: 'Pemeriksa Terbatas', auditCls: 'text-primary font-medium',
    status: '3 Aktif (2FA)', statusCls: 'bg-secondary-container text-on-secondary-container', dotCls: 'bg-primary',
    striped: true,
  },
  {
    jabatan: 'Kepala Dusun / RW / RT', role: 'Role: TERRITORIAL_SUPERVISOR', jabatanCls: 'text-on-surface',
    spasial: 'Terisolasi (RT/RW Terpilih)', spasialCls: 'bg-tertiary-fixed text-on-tertiary-fixed font-bold',
    crud: { icon: 'check_box', iconCls: '', label: 'Verifikasi Pengantar', cls: 'text-on-surface-variant font-normal' },
    validasi: { icon: 'thumb_up', label: 'Acc Pengantar Digital', cls: 'text-on-surface-variant font-normal' },
    audit: 'Aktivitas Wilayahnya', auditCls: 'text-on-surface-variant',
    status: '28 Wilayah Terdaftar', statusCls: 'bg-surface-container text-on-surface-variant', dotCls: 'bg-outline',
  },
  {
    jabatan: 'Warga Mandiri (Portal Warga)', role: 'Role: CITIZEN_AUTHENTICATED', jabatanCls: 'text-on-surface',
    spasial: 'Hanya KK Sendiri', spasialCls: 'bg-surface-container text-on-surface-variant',
    crud: { icon: null, label: 'Lihat & Ajukan Koreksi', cls: 'text-on-surface-variant font-normal' },
    validasi: { icon: null, label: 'Permohonan Mandiri', cls: 'text-on-surface-variant font-normal' },
    audit: 'Log Sesi Sendiri', auditCls: 'text-on-surface-variant',
    status: '1.420 NIK Warga Aktif', statusCls: 'bg-secondary-container text-on-secondary-container', dotCls: null,
  },
];

export const TTE_INFO = {
  nama: 'H. Ahmad Mulyadi, S.Sos',
  jabatan: 'Kepala Desa Karang Anyar',
  nik: 'NIK: 3204012903740001',
  ca: 'Balai Sertifikasi Elektronik',
  masa: 's/d 14 Nov 2026',
  hash: 'SHA-256 MATCHED',
  digest: 'e7b8f9a21c43d9284fca873b22019c8f00192a5bc1048b2938a8e1047fa8c392',
};
