export default function Header({ query, onQuery }) {
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
            <span className="text-[13px] font-semibold text-on-surface leading-tight">Bambang Hermanto</span>
            <div className="flex items-center gap-space-xs justify-end">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span className="text-[11px] font-semibold text-on-surface-variant">Kaur Tata Usaha (Operator Desa)</span>
            </div>
          </div>
          <img
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKkLG0G9qRmBPI9Xt9swDsSscdWvnHHUusSyF8p5id3iMkFWhQ0V5-2jPpwGPEdggoSuCRalvF8ppnC3FxpXj_8_kwtFOQpvkKTsqUwbLDQlkPgI_lwUgftZaL4hc9O4WXqcTYB0V9dtAxg43kz-BIxsbYbAivzM5RrDD_hB9R4YaEA1yCb6nFXo1w6xEwOUy38B2S3RxnbokoJz8jnNecyw8djTp8-3zi3g4sqr8Um8MO3ArRQVrU"
          />
        </div>
      </div>
    </header>
  );
}
