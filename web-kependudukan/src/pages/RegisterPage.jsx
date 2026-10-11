import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthShell from '../components/AuthShell';
import { AuthField, inputCls } from '../components/AuthField';
import { authErrorMessage } from '../lib/authMessages';
import { isSupabaseConfigured } from '../lib/supabase';

export default function RegisterPage() {
  const { session, loading, signUp } = useAuth();
  const navigate = useNavigate();

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');

  if (loading) return null;
  if (session) return <Navigate to="/" replace />;

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setInfo('');
    if (password.length < 6) {
      setError('Password minimal 6 karakter.');
      return;
    }
    if (password !== confirm) {
      setError('Konfirmasi password tidak cocok.');
      return;
    }
    setSubmitting(true);
    try {
      const data = await signUp(email.trim(), password, {
        data: { nama_lengkap: nama.trim(), full_name: nama.trim() },
      });
      // Bila email confirmation aktif, session masih null → beri tahu user.
      if (!data.session) {
        setInfo('Pendaftaran berhasil! Silakan cek email Anda untuk verifikasi, lalu masuk.');
        return;
      }
      navigate('/', { replace: true });
    } catch (err) {
      setError(authErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthShell
      title="Buat Akun Baru"
      subtitle="Daftarkan akun untuk mengakses SatuDesa"
      footer={
        <p className="text-center text-[13px] text-on-surface-variant">
          Sudah punya akun?{' '}
          <Link to="/login" className="font-semibold text-primary hover:underline">
            Masuk di sini
          </Link>
        </p>
      }
    >
      {!isSupabaseConfigured && (
        <div className="p-space-sm rounded-lg bg-tertiary-fixed text-on-surface text-[12px] font-semibold flex items-start gap-2">
          <span className="material-symbols-outlined text-[18px]">info</span>
          <span>Supabase belum dikonfigurasi. Isi VITE_SUPABASE_URL &amp; VITE_SUPABASE_ANON_KEY di .env, lalu restart dev server agar pendaftaran berfungsi.</span>
        </div>
      )}
      {error && (
        <div className="p-space-sm rounded-lg bg-error-container/40 text-on-error-container text-[13px] font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">warning</span>
          <span>{error}</span>
        </div>
      )}
      {info && (
        <div className="p-space-sm rounded-lg bg-surface-variant text-primary text-[13px] font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">check_circle</span>
          <span>{info}</span>
        </div>
      )}
      <form onSubmit={onSubmit} className="flex flex-col gap-space-md">
        <AuthField label="Nama Lengkap">
          <input
            className={inputCls}
            type="text"
            name="nama"
            autoComplete="name"
            placeholder="Bambang Hermanto"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </AuthField>
        <AuthField label="Email">
          <input
            className={inputCls}
            type="email"
            name="email"
            autoComplete="email"
            placeholder="nama@desa.go.id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </AuthField>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <AuthField label="Password">
            <input
              className={inputCls}
              type="password"
              name="password"
              autoComplete="new-password"
              placeholder="Min. 6 karakter"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </AuthField>
          <AuthField label="Konfirmasi Password">
            <input
              className={inputCls}
              type="password"
              name="confirm"
              autoComplete="new-password"
              placeholder="Ulangi password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </AuthField>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full px-space-md py-2 rounded-lg bg-primary text-on-primary text-[13px] font-semibold hover:bg-secondary transition-colors disabled:opacity-50 flex items-center justify-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[18px]">person_add</span>
          {submitting ? 'Memproses…' : 'Daftar'}
        </button>
      </form>
    </AuthShell>
  );
}
