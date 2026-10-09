export default function KeamananBanner({ notice, onWorm, onTambah }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg shadow-sm">
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md relative z-10">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Kepatuhan Regulasi UU No. 27/2022 (UU PDP)
            </span>
            <span className="px-2 py-0.5 rounded-md bg-surface-container font-mono-tabular text-[11px] text-on-surface-variant">
              ISO/IEC 27001 Ready
            </span>
          </div>
          <div className="flex items-baseline gap-space-sm mt-1 flex-wrap">
            <span className="text-[28px] leading-[36px] text-primary font-bold">Keamanan Sistem &amp; Audit Trail</span>
            <span className="text-[12px] text-on-surface-variant font-mono-tabular">Kriptografi • Kontrol Akses • Forensik Data</span>
          </div>
          <p className="text-[14px] text-on-surface-variant max-w-3xl">
            Pusat kendali proteksi data kependudukan balai desa. Memastikan integritas rekaman mutasi warga, validasi kriptografi Tanda Tangan Elektronik (TTE BSrE), serta isolasi hak akses spasial perangkat desa.
          </p>
          {notice && (
            <div className="p-space-sm rounded-lg bg-surface-variant text-primary text-[13px] font-semibold flex items-center gap-2 max-w-3xl">
              <span className="material-symbols-outlined text-[18px]">check_circle</span>{notice}
            </div>
          )}
        </div>
        <div className="flex items-center gap-space-sm shrink-0 flex-wrap">
          <button onClick={onWorm} className="flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-primary text-[13px] font-semibold shadow-sm hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span>Integritas Log WORM</span>
          </button>
          <button onClick={onTambah} className="flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-primary text-on-primary text-[13px] font-semibold shadow-sm hover:bg-secondary transition-all">
            <span className="material-symbols-outlined text-[18px]">person_add_disabled</span>
            <span>+ Tambah Akun 2FA</span>
          </button>
        </div>
      </div>
    </div>
  );
}
