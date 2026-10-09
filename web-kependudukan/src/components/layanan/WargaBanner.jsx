import { WARGA_PROFILE, LAYANAN_ACTIONS } from '../../data/layanan';

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function WargaBanner() {
  return (
    <section className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col xl:flex-row items-start xl:items-center justify-between gap-space-lg">
      <div className="flex items-start sm:items-center gap-space-md">
        <div className="relative flex-shrink-0">
          <img
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shadow-sm"
            alt="Foto warga Sugeng Riyadi"
            src={WARGA_PROFILE.foto}
          />
          <span className="absolute -bottom-1 -right-1 bg-primary text-on-primary w-6 h-6 rounded-full flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-space-xs sm:gap-space-sm mb-1">
            <h1 className="text-[22px] leading-[28px] font-semibold text-on-surface">{WARGA_PROFILE.nama}</h1>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-primary text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Akun Aktif &amp; Terpadu Dukcapil
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-fixed text-on-surface text-[11px] font-semibold">
              <span className="material-symbols-outlined text-[14px]">shield</span>
              Level Validasi: Pamong Desa
            </span>
          </div>
          <p className="text-[14px] text-on-surface-variant flex flex-wrap items-center gap-x-space-md gap-y-1">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-primary">badge</span>
              <span className="font-mono-tabular text-[13px]">{WARGA_PROFILE.nik}</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
              {WARGA_PROFILE.alamat}
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-space-xs sm:gap-space-sm w-full xl:w-auto">
        {LAYANAN_ACTIONS.map((a) => (
          <button
            key={a.label}
            onClick={() => scrollTo(a.target)}
            className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-space-xs px-space-md py-2.5 rounded-lg text-[13px] font-semibold transition-colors shadow-sm ${
              a.primary
                ? 'bg-primary-container text-on-primary hover:bg-secondary'
                : 'bg-surface-container-high text-on-surface hover:bg-surface-variant'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">{a.icon}</span>
            <span>{a.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
