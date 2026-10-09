import { TAHUN_ANGGARAN, APBDES } from '../../data/transparansi';

export default function TransparansiBanner({ tahun, setTahun }) {
  return (
    <section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg relative overflow-hidden">
      <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none"></div>
      <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-space-lg">
        <div className="flex flex-col gap-space-xs max-w-3xl">
          <div className="flex flex-wrap items-center gap-space-xs text-secondary text-[11px] font-semibold uppercase tracking-wider">
            <span className="px-space-xs py-0.5 rounded bg-surface-container font-semibold">Domain Publik Resmi</span>
            <span>•</span>
            <span className="text-on-surface-variant font-mono-tabular font-normal">KODE WILAYAH BPS: 32.04.18.2004</span>
            <span>•</span>
            <span className="text-primary font-semibold">Terbuka &amp; Bebas Akses</span>
          </div>
          <h1 className="text-[28px] leading-[36px] text-on-surface font-bold tracking-tight">
            Portal Transparansi &amp; Satu Data Desa Sukamaju
          </h1>
          <p className="text-[14px] text-on-surface-variant">
            Pusat akuntabilitas publik, audit realisasi APBDes terpadu, peta geospasial tematik, dan demografi agregat Kec. Cimaung, Kab. Bandung, Jawa Barat.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md">
          <div className="bg-surface-container-low p-space-md rounded-lg flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
            <div>
              <div className="flex items-center gap-space-xs">
                <span className="font-mono-tabular text-[20px] font-semibold text-primary">98.4%</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary text-on-primary uppercase tracking-wide">Informatif</span>
              </div>
              <p className="text-[11px] font-semibold text-on-surface-variant leading-none mt-1">Skor Keterbukaan KIP 2024</p>
            </div>
          </div>
          <div className="bg-surface-container p-space-xs rounded-lg flex items-center gap-1 self-start sm:self-center">
            {TAHUN_ANGGARAN.map((t) => (
              <button
                key={t}
                onClick={() => setTahun(t)}
                className={`px-space-md py-1.5 rounded text-[13px] font-semibold transition-all ${
                  tahun === t ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {APBDES[t].label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
