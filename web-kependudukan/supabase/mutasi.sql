-- =====================================================================
-- SatuDesa · Riwayat Mutasi Penduduk (tabel mutasi_log)
-- Cara pakai: Supabase Dashboard → SQL Editor → jalankan file ini.
-- Aman diulang (idempotent). Berpasangan dengan kolom mutasi_* dan
-- is_active di tabel public.warga (lihat schema.sql).
-- =====================================================================

create table if not exists public.mutasi_log (
  id           uuid primary key default gen_random_uuid(),
  warga_id     uuid         null references public.warga (id) on delete set null,
  nik          char(16)     not null,
  nama_lengkap text         not null default '',
  jenis        text         not null
    check (jenis in ('lahir', 'datang', 'pindah', 'wafat')),
  tanggal      date         not null default current_date,
  keterangan   text         not null default '',
  asal_tujuan  text         not null default '',
  dicatat_oleh text         not null default 'Bambang Hermanto',
  created_at   timestamptz  not null default now()
);

create index if not exists mutasi_log_nik_idx    on public.mutasi_log (nik);
create index if not exists mutasi_log_jenis_idx  on public.mutasi_log (jenis);
create index if not exists mutasi_log_tgl_idx    on public.mutasi_log (tanggal desc);

-- RLS: baca untuk anon (riwayat tampil di Buku Mutasi).
-- Tulis ikut policy "warga insert/update by app" versi frontend-only,
-- jadi tambahkan policy tulis di sini juga untuk tahap demo.
alter table public.mutasi_log enable row level security;

drop policy if exists "mutasi_log readable by anon" on public.mutasi_log;
create policy "mutasi_log readable by anon"
  on public.mutasi_log for select
  to anon, authenticated
  using (true);

drop policy if exists "mutasi_log insert by app" on public.mutasi_log;
create policy "mutasi_log insert by app"
  on public.mutasi_log for insert
  to anon, authenticated
  with check (nik ~ '^[0-9]{16}$' and nama_lengkap <> '');
