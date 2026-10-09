-- =====================================================================
-- SatuDesa · Skema Database Supabase (Postgres)
-- Modul: Kependudukan & Mutasi Warga · Buku Induk Kependudukan Desa
-- Cara pakai: Supabase Dashboard → SQL Editor → jalankan file ini,
-- lalu jalankan seed.sql. Aman diulang (idempotent).
-- =====================================================================

create table if not exists public.warga (
  id               uuid primary key default gen_random_uuid(),
  nik              char(16)     not null unique,
  no_kk            char(16)     not null,
  nama_lengkap     text         not null,
  dusun            text         not null default 'krajan'
    check (dusun in ('krajan', 'sukamaju', 'mekarsari')),
  rw               text         not null default 'rw01'
    check (rw in ('rw01', 'rw02', 'rw03', 'rw04', 'rw05')),
  rt               text         not null default '01',
  alamat           text         not null default '',
  tempat_lahir     text         not null default '',
  tanggal_lahir    date             null,
  usia_display     text         not null default '',
  jenis_kelamin    text         not null default 'Laki-laki'
    check (jenis_kelamin in ('Laki-laki', 'Perempuan')),
  agama            text         not null default 'Islam',
  pendidikan       text         not null default '',
  gol_darah        text         not null default '',
  status_sipil     text         not null default '',
  kategori         text         not null default 'reguler'
    check (kategori in ('reguler', 'bansos', 'lansia', 'disabilitas', 'mutasi', 'ktp')),
  mutasi_type      text         not null default 'tetap'
    check (mutasi_type in ('tetap', 'datang', 'lahir', 'pindah', 'wafat')),
  mutasi_label     text         not null default 'Tetap',
  mutasi_icon      text             null,
  klasifikasi      jsonb        not null default '[]'::jsonb,
  is_active        boolean      not null default true,
  created_at       timestamptz  not null default now(),
  updated_at       timestamptz  not null default now()
);

-- NIK & No KK: tepat 16 digit numerik
alter table public.warga drop constraint if exists warga_nik_format;
alter table public.warga add constraint warga_nik_format check (nik ~ '^[0-9]{16}$');
alter table public.warga drop constraint if exists warga_kk_format;
alter table public.warga add constraint warga_kk_format check (no_kk ~ '^[0-9]{16}$');

-- Index pencarian cepat
create index if not exists warga_nik_idx      on public.warga (nik);
create index if not exists warga_no_kk_idx    on public.warga (no_kk);
create index if not exists warga_wilayah_idx  on public.warga (dusun, rw);
create index if not exists warga_kategori_idx on public.warga (kategori);
create index if not exists warga_active_idx   on public.warga (is_active);

-- updated_at otomatis
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists warga_set_updated_at on public.warga;
create trigger warga_set_updated_at
  before update on public.warga
  for each row execute function public.set_updated_at();

-- RLS: anon key hanya boleh BACA. Tulis lewat service_role di backend.
alter table public.warga enable row level security;

drop policy if exists "warga readable by anon" on public.warga;
create policy "warga readable by anon"
  on public.warga for select
  to anon, authenticated
  using (is_active = true);
