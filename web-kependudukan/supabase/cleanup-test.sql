-- Hapus baris-baris TES agar Buku Induk kembali bersih (6 warga seed).
-- Jalankan di Supabase Dashboard → SQL Editor → Run.
delete from public.warga where nik in ('9999888877776666', '1231654165465465');

-- Cek hasil: harus 6 baris seed.
select nik, nama_lengkap from public.warga order by created_at;
