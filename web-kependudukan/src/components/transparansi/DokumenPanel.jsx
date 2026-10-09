import { useState } from 'react';
import { DOKUMEN } from '../../data/transparansi2';

export default function DokumenPanel() {
  const [done, setDone] = useState(null);
  return (
    <div className="lg:col-span-4 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-md">
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[24px]">folder_open</span>
            <h2 className="text-[18px] font-bold text-on-surface">Unduh Dokumen Publik</h2>
          </div>
          <span className="px-space-xs py-0.5 rounded bg-surface-container text-[11px] text-primary font-semibold">Resmi</span>
        </div>
        <p className="text-[12px] text-on-surface-variant">Dokumen peraturan desa, LPJ, dan infografis format PDF yang telah ditandatangani secara elektronik (TTE).</p>
        {done && (
          <div className="p-space-sm rounded-lg bg-surface-variant text-primary text-[12px] font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">check_circle</span>{done} disiapkan untuk diunduh.
          </div>
        )}
        <div className="flex flex-col gap-space-xs pt-space-xs">
          {DOKUMEN.map((d) => (
            <div key={d.judul} className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm min-w-0">
                <span className={`material-symbols-outlined text-[28px] shrink-0 ${d.iconCls}`}>{d.icon}</span>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold text-on-surface truncate">{d.judul}</div>
                  <div className="text-[12px] text-on-surface-variant">{d.meta}</div>
                </div>
              </div>
              <button onClick={() => setDone(d.judul)} className="p-2 rounded-lg bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary transition-colors shrink-0 shadow-sm" title="Unduh File">
                <span className="material-symbols-outlined text-[20px]">download</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-xs text-center">
        <div className="flex items-center justify-center gap-1 text-primary font-bold text-[13px]">
          <span className="material-symbols-outlined text-[18px]">verified_user</span>
          <span>Bebas Akses Informasi Publik</span>
        </div>
        <p className="text-[12px] text-on-surface-variant">Penyediaan data ini tunduk pada UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik (KIP).</p>
      </div>
    </div>
  );
}
