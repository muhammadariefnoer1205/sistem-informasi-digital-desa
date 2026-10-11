import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthShell from '../components/AuthShell';
import { AuthField, inputCls } from '../components/AuthField';
import { authErrorMessage } from '../lib/authMessages';
import { isSupabaseConfigured } from '../lib/supabase';

export default function LoginPage() {
  const { session, loading, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (loading) return null; // AuthProvider sudah menampilkan loading awal lewat App.
  if (session) return <Navigate to={from} replace />;

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await signIn(email.trim(), password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(authErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthShell
      title="Masuk ke Akun Anda"
      subtitle="Sistem Informasi Kependudukan & Tata Kelola Digital Desa"
      footer={
        <p className="text-center text-[13px] text-on-surface-variant">
          Belum punya akun?{' '}
          <Link to="/register" className="font-semibold text-primary hover:underline">
            Daftar di sini
          </Link>
        </p>
      }
    >
      {!isSupabaseConfigured && (
        <div className="p-space-sm rounded-lg bg-tertiary-fixed text-on-surface text-[12px] font-semibold flex items-start gap-2">
          <span className="material-symbols-outlined text-[18px]">info</span>
          <span>Supabase belum dikonfigurasi. Isi VITE_SUPABASE_URL &amp; VITE_SUPABASE_ANON_KEY di .env, lalu restart dev server agar login berfungsi.</span>
        </div>
      )}
      {error && (
        <div className="p-space-sm rounded-lg bg-error-container/40 text-on-error-container text-[13px] font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">warning</span>
          <span>{error}</span>
        </div>
      )}
      <form onSubmit={onSubmit} className="flex flex-col gap-space-md">
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
        <AuthField label="Password">
          <input
            className={inputCls}
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </AuthField>
        <button
          type="submit"
          disabled={submitting}
          className="w-full px-space-md py-2 rounded-lg bg-primary text-on-primary text-[13px] font-semibold hover:bg-secondary transition-colors disabled:opacity-50 flex items-center justify-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[18px]">login</span>
          {submitting ? 'Memproses…' : 'Masuk'}
        </button>
      </form>
    </AuthShell>
  );
}
