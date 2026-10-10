import { useEffect, useRef, useState } from 'react';
import { triggerSubHeaderAction } from '../lib/subHeaderBus';

export default function SubHeader({ onExportExcel, onExportPdf, onTambah }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [menuOpen]);

  const pick = (fn, name) => { setMenuOpen(false); fn ? fn() : triggerSubHeaderAction(name); };

  return (
    <div className="w-full bg-surface-container-low/70 px-space-lg py-space-sm shadow-[0_1px_4px_rgba(0,0,0,0.02)] flex flex-wrap items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-md flex-1 max-w-xl flex-wrap">
        <div className="flex items-center gap-space-xs text-on-surface-variant text-[11px] font-semibold">
          <span className="material-symbols-outlined text-[16px]">home</span>
          <span>Portal</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary font-semibold">Administrasi Terpadu</span>
        </div>
        <div className="relative flex-1 min-w-[220px]">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
          <input
            className="w-full pl-9 pr-space-md py-1.5 rounded-lg bg-surface-container-lowest text-[12px] text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            placeholder="Cari NIK (16 digit) / Nama Warga / No KK..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-space-sm flex-wrap">
        <div className="relative" ref={menuRef}>
          <button onClick={() => setMenuOpen((o) => !o)} className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-primary text-[13px] font-semibold hover:bg-surface-container-high transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[18px]">file_download</span>
            <span>Export Register (Excel/PDF)</span>
            <span className="material-symbols-outlined text-[16px]">expand_more</span>
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-1 w-56 rounded-lg bg-surface-container-lowest shadow-lg p-1 z-50 flex flex-col">
              <button onClick={() => pick(onExportExcel, 'onExportExcel')} className="flex items-center gap-2 px-3 py-2 rounded-md text-[13px] font-semibold text-on-surface hover:bg-surface-container-low text-left">
                <span className="material-symbols-outlined text-[18px] text-primary">table_view</span>
                Unduh Excel (CSV)
              </button>
              <button onClick={() => pick(onExportPdf, 'onExportPdf')} className="flex items-center gap-2 px-3 py-2 rounded-md text-[13px] font-semibold text-on-surface hover:bg-surface-container-low text-left">
                <span className="material-symbols-outlined text-[18px] text-error">picture_as_pdf</span>
                Cetak / Simpan PDF
              </button>
            </div>
          )}
        </div>
        <button onClick={() => (onTambah ? onTambah() : triggerSubHeaderAction('onTambah'))} className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary text-[13px] font-semibold hover:bg-secondary transition-colors shadow-sm">
          <span className="material-symbols-outlined text-[18px]">person_add</span>
          <span>Tambah Data Warga</span>
        </button>
      </div>
    </div>
  );
}

