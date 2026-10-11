// Terjemahkan pesan error Supabase Auth ke Bahasa Indonesia yang ramah.
export function authErrorMessage(err) {
  const raw = (err && err.message) || String(err || 'Terjadi kesalahan.');
  const m = raw.toLowerCase();

  if (m.includes('invalid login credentials')) return 'Email atau password salah.';
  if (m.includes('email not confirmed')) return 'Email belum diverifikasi. Silakan cek kotak masuk (dan folder spam) email Anda.';
  if (m.includes('user already registered') || m.includes('already been registered')) return 'Email ini sudah terdaftar. Silakan masuk atau gunakan email lain.';
  if (m.includes('password should be at least')) return 'Password minimal 6 karakter.';
  if (m.includes('unable to validate email address') || m.includes('invalid email')) return 'Format email tidak valid.';
  if (m.includes('rate limit')) return 'Terlalu banyak percobaan. Silakan coba lagi beberapa saat.';
  if (m.includes('failed to fetch') || m.includes('network')) return 'Tidak dapat menghubungi server. Periksa koneksi internet Anda.';

  return raw;
}
