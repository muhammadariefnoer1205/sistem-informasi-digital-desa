-- =====================================================================
-- SatuDesa · Policy TULIS untuk tabel public.warga (frontend-only)
-- Jalankan di: Supabase Dashboard → SQL Editor → Run.
-- Idempotent: aman dijalankan ulang.
--
-- PERINGATAN: policy ini mengizinkan anon key (yang tertanam di
-- aplikasi web dan terlihat publik) untuk insert/update. Ini PANTAS
-- untuk tahap pengembangan/demo. Untuk PRODUKSI, matikan policy ini
-- dan tulis data lewat backend / Edge Function dengan service_role
-- key + autentikasi operator desa (lihat catatan di bawah).
-- =====================================================================

drop policy if exists "warga insert by app" on public.warga;
create policy "warga insert by app"
  on public.warga for insert
  to anon, authenticated
  with check (
    nik  ~ '^[0-9]{16}$'
    and no_kk ~ '^[0-9]{16}$'
    and nama_lengkap <> ''
  );

-- UPDATE butuh USING (baris yang boleh diubah) + WITH CHECK (hasil akhir).
drop policy if exists "warga update by app" on public.warga;
create policy "warga update by app"
  on public.warga for update
  to anon, authenticated
  using (true)
  with check (
    nik  ~ '^[0-9]{16}$'
    and no_kk ~ '^[0-9]{16}$'
    and nama_lengkap <> ''
  );

-- TIDAK ada policy DELETE: baris tidak bisa dihapus dari frontend.
-- Nonaktifkan warga via update is_active = false (soft-delete).

-- Verifikasi cepat (jalankan setelah policy dibuat):
--   select * from public.warga limit 3;

-- --- Kembali ke mode aman (produksi) ----------------------------------
-- drop policy if exists "warga insert by app" on public.warga;
-- drop policy if exists "warga update by app" on public.warga;

