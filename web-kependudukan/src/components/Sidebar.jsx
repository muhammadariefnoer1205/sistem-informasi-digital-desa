import { NAV_ITEMS } from '../data/warga';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-full w-64 flex-col justify-between bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 lg:flex">
      <div className="flex flex-col">
        <div className="h-16 px-space-md flex items-center gap-space-sm bg-surface-container">
          <img
            alt="Logo SatuDesa"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1VtYWUwClBn7EGj551-h9IrOw0zlPvSgUMvRRRYCvt5hhUb4wUwYy6624bPDo3_3dyXHpC8u_o7sY5bvFUMPyWBZJ6vwDCrSZh8_Gr2Vtg0S0KIhNyHv8lY8bjcp9bce0bMdj5RK4CHijy24ik7xKjeh2kDmYub09pTk7w5B6Xp4Y_4JmCr40NgKtrlSZIQ0KGSx2XagahL6J0WKx33B76ZLDfbMGHkvfQBpW-xv9Mad8HYyopUsM3jnA"
          />
          <div className="flex flex-col">
            <span className="text-[18px] leading-tight font-semibold text-primary">SatuDesa</span>
            <span className="text-[11px] font-semibold text-on-surface-variant">Tata Kelola Digital</span>
          </div>
        </div>
        <div className="p-space-sm">
          <div className="px-space-sm py-space-xs mb-space-xs text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant">
            Modul Utama
          </div>
          <nav className="flex flex-col gap-space-xs">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href="#"
                onClick={(e) => e.preventDefault()}
                className={`flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-[13px] font-semibold transition-colors ${
                  item.active
                    ? 'bg-primary-container text-on-primary-container'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="p-space-md bg-surface-container-high/60 m-space-sm rounded-xl flex flex-col gap-space-xs">
        <div className="flex items-center gap-space-xs text-primary text-[11px] font-semibold">
          <span className="material-symbols-outlined text-[16px]">lock</span>
          <span>Enkripsi AES-256 Aktif</span>
        </div>
        <div className="text-[12px] text-on-surface-variant">Sistem Informasi Desa Mandiri v4.2.1 • Balai Desa</div>
      </div>
    </aside>
  );
}
