import { SURAT_CATALOG } from '../../data/layanan';

function SuratCard({ s }) {
  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-start justify-between mb-space-sm">
          <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[26px]">{s.icon}</span>
          </div>
          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${s.badgeTertiary ? 'bg-tertiary-fixed text-on-surface' : 'bg-secondary-fixed text-on-secondary-fixed'}`}>
            {s.badge}
          </span>
        </div>
        <h3 className="text-[18px] font-semibold text-on-surface mb-1">{s.title}</h3>
        <p className="text-[12px] text-on-surface-variant mb-space-md">{s.desc}</p>
        <div className="bg-surface-container-low/70 rounded-lg p-space-sm mb-space-md">
          <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider block mb-1">Syarat Dokumen:</span>
          <ul className="flex flex-col gap-1 text-[12px] text-on-surface">
            {s.syarat.map((d) => (
              <li key={d} className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-primary">check_circle</span>{d}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className={`w-full py-2.5 px-space-md rounded-lg text-[13px] font-semibold transition-colors flex items-center justify-center gap-1.5 ${
        s.ctaPrimary ? 'bg-primary-container text-on-primary hover:bg-secondary' : 'bg-surface-container text-primary hover:bg-surface-container-high'
      }`}>
        <span className="material-symbols-outlined text-[18px]">edit_document</span>
        <span>{s.cta}</span>
      </button>
    </div>
  );
}

export default function SuratCatalog() {
  return (
    <section className="w-full flex flex-col gap-space-md" id="katalog-surat">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-primary font-bold">Katalog Layanan Digital</span>
          <h2 className="text-[22px] font-semibold text-on-surface">Penerbitan Surat Kilat Mandiri</h2>
        </div>
        <p className="text-[12px] text-on-surface-variant">Pilih jenis permohonan surat administrasi untuk diproses secara digital tanpa antre di balai desa.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
        {SURAT_CATALOG.map((s) => (<SuratCard key={s.title} s={s} />))}
        <div className="bg-surface-container-low/50 p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
          <div className="flex flex-col items-center text-center py-4">
            <div className="w-14 h-14 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center mb-space-sm shadow-sm">
              <span className="material-symbols-outlined text-[32px]">contact_support</span>
            </div>
            <h3 className="text-[18px] font-semibold text-on-surface mb-1">Perlu Layanan Lain?</h3>
            <p className="text-[12px] text-on-surface-variant mb-space-md max-w-xs">Pengantar nikah (NA), izin keramaian, keterangan penghasilan, atau legalisir surat adat desa.</p>
            <div className="inline-flex items-center gap-1.5 text-primary text-[13px] font-semibold bg-surface-container-lowest px-3 py-1.5 rounded-full shadow-sm mb-2">
              <span className="material-symbols-outlined text-[16px]">call</span>
              <span>Layanan Halo Pamong: 0812-9988-7766</span>
            </div>
          </div>
          <button className="w-full py-2.5 px-space-md rounded-lg bg-surface-container-high text-on-surface text-[13px] font-semibold hover:bg-surface-variant transition-colors flex items-center justify-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">search</span>
            <span>Cari Jenis Dokumen Lain</span>
          </button>
        </div>
      </div>
    </section>
  );
}
