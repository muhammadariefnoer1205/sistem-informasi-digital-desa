// ---- Mutasi penduduk -------------------------------------------------
// jenis: 'lahir' | 'datang' | 'pindah' | 'wafat'
export const MUTASI_META = {
  lahir:  { label: 'Lahir Baru', icon: 'child_friendly', kategori: 'mutasi' },
  datang: { label: 'Datang', icon: 'login', kategori: 'mutasi' },
  pindah: { label: 'Pindah Keluar', icon: 'logout', kategori: 'mutasi' },
  wafat:  { label: 'Wafat', icon: 'sentiment_very_dissatisfied', kategori: 'mutasi' },
};

export async function fetchMutasiLog(limit = 20) {
  if (!isSupabaseConfigured) return { data: [], source: 'local' };
  const { data, error } = await supabase
    .from('mutasi_log')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error) throw error;
  return { data: data ?? [], source: 'supabase' };
}

export async function insertMutasiLog(entry) {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase belum dikonfigurasi.');
  }
  const { data, error } = await supabase
    .from('mutasi_log')
    .insert({
      warga_id: entry.warga_id ?? null,
      nik: entry.nik,
      nama_lengkap: entry.nama_lengkap ?? '',
      jenis: entry.jenis,
      tanggal: entry.tanggal || new Date().toISOString().slice(0, 10),
      keterangan: entry.keterangan ?? '',
      asal_tujuan: entry.asal_tujuan ?? '',
      dicatat_oleh: entry.dicatat_oleh ?? 'Bambang Hermanto',
    })
    .select('*')
    .single();
  if (error) throw error;
  return data;
}

// Terapkan efek mutasi ke baris warga:
// - datang/lahir → mutasi aktif (tetap tampil di Buku Induk)
// - pindah/wafat  → nonaktif (is_active=false, hilang dari Buku Induk)
export async function applyMutasiToWarga(warga, jenis, label) {
  if (!isSupabaseConfigured) return null;
  const meta = MUTASI_META[jenis];
  const keluar = jenis === 'pindah' || jenis === 'wafat';
  const { data, error } = await supabase
    .from('warga')
    .update({
      mutasi_type: keluar ? jenis : warga.mutasi?.type === 'tetap' ? 'tetap' : warga.mutasi.type,
      mutasi_label: keluar ? label : (warga.mutasi?.label ?? 'Tetap'),
      mutasi_icon: keluar ? meta.icon : (warga.mutasi?.icon ?? null),
      kategori: keluar ? 'mutasi' : (warga.kategori ?? 'reguler'),
      is_active: !keluar,
    })
    .eq('id', warga.id)
    .select('*')
    .single();
  if (error) throw error;
  return data;
}