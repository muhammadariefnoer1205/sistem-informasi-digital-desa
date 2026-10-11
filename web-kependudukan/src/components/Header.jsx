import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/login', { replace: true });
  };

  const displayName = user?.user_metadata?.nama_lengkap || user?.user_metadata?.full_name || user?.email || 'Pengguna';
  const role = user?.email || 'Operator Desa';

  return (
    <header className="fixed top-0 left-0 lg:left-64 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-lg flex items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-md">
        <div className="flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-low rounded-full text-[11px] font-semibold text-primary">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-mono-tabular font-normal">Koneksi Server Desa: Terenkripsi &amp; Aktif</span>
        </div>
        <div className="hidden xl:flex items-center gap-space-xs text-on-surface-variant text-[11px] font-semibold bg-surface-container-high px-space-sm py-space-xs rounded-lg">
          <span className="material-symbols-outlined text-[16px]">location_city</span>
          <span>Wilayah: Wil. Dusun Krajan / RW 02 / RT 04</span>
        </div>
      </div>
      <div className="flex items-center gap-space-md">
        <button className="relative p-space-xs rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" title="Notifikasi Pengajuan">
          <span className="material-symbols-outlined text-[22px]">notifications</span>
          <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-error ring-2 ring-surface-container-lowest"></span>
        </button>
        <div className="flex items-center gap-space-sm pl-space-sm">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-[13px] font-semibold text-on-surface leading-tight">{displayName}</span>
            <div className="flex items-center gap-space-xs justify-end">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span className="text-[11px] font-semibold text-on-surface-variant">{role}</span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            title="Keluar"
            className="p-space-xs rounded-lg text-on-surface-variant hover:bg-error-container/40 hover:text-on-error-container transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
