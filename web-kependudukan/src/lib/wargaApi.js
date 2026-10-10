import { supabase, isSupabaseConfigured } from './supabase';
import { WARGAS as LOCAL_WARGAS } from '../data/warga';

// DB (snake_case) -> bentuk yang dipakai komponen UI
export function mapRowToWarga(row, index = 0) {
  const lahir = [row.tempat_lahir, row.tanggal_lahir
    ? new Date(`${row.tanggal_lahir}T00:00:00`).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
    : null].filter(Boolean).join(', ');
  return {
    id: row.id ?? index,
    nik: row.nik,
    kk: row.no_kk,
    nama: row.nama_lengkap,
    alamat: row.alamat || `Dusun ${row.dusun}, RT ${row.rt} / RW ${row.rw?.replace('rw', '')}`,
    lahir: lahir || row.usia_display || '-',
    usia: row.usia_display || `${row.jenis_kelamin ?? ''}`.trim(),
    agamaPendidikan: [row.agama, row.pendidikan].filter(Boolean).join(' • '),
    golDarah: row.gol_darah || '-',
    statusSipil: row.status_sipil || '-',
    kategori: row.kategori ?? 'reguler',
    klasifikasi: Array.isArray(row.klasifikasi) ? row.klasifikasi : [],
    mutasi: { type: row.mutasi_type ?? 'tetap', label: row.mutasi_label ?? 'Tetap', icon: row.mutasi_icon ?? undefined },
    dusun: row.dusun ?? 'krajan',
    rw: row.rw ?? 'rw01',
    // Field mentah untuk form Ubah (tidak ditampilkan di tabel):
    rt: row.rt ?? '',
    tempat_lahir: row.tempat_lahir ?? '',
    tanggal_lahir: row.tanggal_lahir ?? '',
    jenis_kelamin: row.jenis_kelamin ?? '',
    agama: row.agama ?? '',
    pendidikan: row.pendidikan ?? '',
    striped: index % 2 === 1,
  };
}

// UI form -> payload insert DB
export function mapFormToRow(f) {
  return {
    nik: f.nik.trim(),
    no_kk: f.no_kk.trim(),
    nama_lengkap: f.nama_lengkap.trim(),
    dusun: f.dusun,
    rw: f.rw,
    rt: f.rt.trim() || '01',
    alamat: f.alamat?.trim() || `Dusun ${f.dusun}, RT ${f.rt} / RW ${f.rw.replace('rw', '')}`,
    tempat_lahir: f.tempat_lahir?.trim() || '',
    tanggal_lahir: f.tanggal_lahir || null,
    usia_display: f.usia_display?.trim() || '',
    jenis_kelamin: f.jenis_kelamin,
    agama: f.agama?.trim() || 'Islam',
    pendidikan: f.pendidikan?.trim() || '',
    gol_darah: f.gol_darah?.trim() || '',
    status_sipil: f.status_sipil?.trim() || '',
    kategori: f.kategori,
    mutasi_type: f.mutasi_type,
    mutasi_label: f.mutasi_label?.trim() || 'Tetap',
    mutasi_icon: f.mutasi_icon?.trim() || null,
    klasifikasi: f.klasifikasi ?? [],
  };
}

export async function fetchWargas() {
  if (!isSupabaseConfigured) return { data: LOCAL_WARGAS, source: 'local' };
  const { data, error } = await supabase
    .from('warga')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: true });
  if (error) throw error;
  return { data: (data ?? []).map(mapRowToWarga), source: 'supabase' };
}

export async function insertWarga(form) {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase belum dikonfigurasi. Isi VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY di file .env.');
  }
  const { data, error } = await supabase
    .from('warga')
    .insert(mapFormToRow(form))
    .select('*')
    .single();
  if (error) throw error;
  return mapRowToWarga(data, 0);
}

// Update baris warga berdasarkan id (UUID Supabase). Untuk data lokal
// (tanpa Supabase), update dilakukan di state oleh pemanggil.
export async function updateWarga(id, form) {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase belum dikonfigurasi. Isi VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY di file .env.');
  }
  const payload = mapFormToRow(form);
  // NIK tidak diubah (kunci unik) — keluarkan dari payload update.
  delete payload.nik;
  const { data, error } = await supabase
    .from('warga')
    .update(payload)
    .eq('id', id)
    .select('*')
    .single();
  if (error) throw error;
  return data;
}
