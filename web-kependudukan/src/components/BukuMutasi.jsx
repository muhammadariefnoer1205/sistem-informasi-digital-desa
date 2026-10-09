import { MUTATION_QUEUE } from '../data/warga';

export default function BukuMutasi() {
  return (
    <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between flex-wrap gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[20px]">menu_book</span>
            <span className="text-[18px] font-semibold text-on-surface">Buku Administrasi Desa Permendagri No. 47/2016</span>
          </div>
          <span className="text-tertiary text-[11px] font-semibold bg-tertiary-fixed px-2 py-0.5 rounded-full">Periode: Maret 2024</span>
        </div>
        <div className="flex items-center gap-space-xs border-b border-surface-container-high pb-2 pt-1 overflow-x-auto">
          <button className="px-space-sm py-1 text-[13px] text-primary font-semibold border-b-2 border-primary whitespace-nowrap">Buku Mutasi Penduduk</button>
          <button className="px-space-sm py-1 text-[13px] text-on-surface-variant hover:text-on-surface whitespace-nowrap">Rekapitulasi Akhir Bulan</button>
          <button className="px-space-sm py-1 text-[13px] text-on-surface-variant hover:text-on-surface whitespace-nowrap">Penduduk Sementara (KIPEM)</button>
        </div>
        <div className="flex flex-col gap-space-xs mt-space-xs">
          <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">Verifikasi Mutasi Terkini — Tanda Tangan Digital Kades</span>
          {MUTATION_QUEUE.map((m) => (
            <div key={m.title} className="flex items-center justify-between gap-space-sm p-space-sm bg-surface-container-low rounded-lg flex-wrap">
              <div className="flex items-center gap-space-sm">
                <span className="p-2 rounded-lg bg-surface-container text-error flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">{m.icon}</span>
                </span>
                <div className="flex flex-col">
                  <div className="flex items-center gap-space-xs flex-wrap">
                    <span className="text-[13px] font-semibold text-on-surface">{m.title}</span>
                    <span className="font-mono-tabular text-[11px] text-on-surface-variant">{m.meta}</span>
                  </div>
                  <span className="text-[12px] text-on-surface-variant">{m.desc}</span>
                </div>
              </div>
              <button className={`px-space-sm py-1 rounded text-[11px] font-semibold shadow-sm ${m.actionCls}`}>{m.action}</button>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-space-sm flex items-center justify-between gap-space-sm text-on-surface-variant text-[11px] font-semibold flex-wrap">
        <span>Tersinkronisasi otomatis dengan Dindukcapil Kab. Banyumas</span>
        <button className="text-primary hover:underline font-semibold flex items-center gap-1">
          <span>Buka Register Lengkap</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
