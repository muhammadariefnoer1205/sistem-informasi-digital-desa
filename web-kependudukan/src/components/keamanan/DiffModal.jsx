export default function DiffModal({ diff, notice, onClose, onUnduh }) {
  if (!diff) return null;
  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-surface-container-lowest rounded-xl max-w-xl w-full p-space-lg shadow-2xl flex flex-col gap-space-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between pb-space-xs">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[24px]">difference</span>
            <h3 className="text-[18px] font-semibold text-on-surface">Forensik Diff: Perubahan Kolom Data</h3>
          </div>
          <button className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant" onClick={onClose}>
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <div className="p-space-sm rounded-lg bg-surface-container-low text-[12px] text-on-surface-variant">
          Entitas Terdampak: <span className="font-mono-tabular text-primary font-bold">{diff.nik}</span> • Field: <strong className="text-on-surface">{diff.field}</strong>
        </div>
        <div className="grid grid-cols-2 gap-space-md">
          <div className="p-space-md rounded-xl bg-error-container/40 flex flex-col gap-1">
            <span className="text-[11px] text-on-error-container uppercase font-semibold">Nilai Sebelumnya (Old)</span>
            <div className="font-mono-tabular text-[20px] text-on-error-container font-mono">{diff.oldVal}</div>
            <span className="text-[11px] text-on-surface-variant">{diff.oldNote}</span>
          </div>
          <div className="p-space-md rounded-xl bg-secondary-container/50 flex flex-col gap-1">
            <span className="text-[11px] text-on-secondary-container uppercase font-semibold">Nilai Baru (Mutasi Disetujui)</span>
            <div className="font-mono-tabular text-[20px] text-primary font-mono">{diff.newVal}</div>
            <span className="text-[11px] text-on-surface-variant">{diff.newNote}</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-surface-container text-[11px] font-mono-tabular text-on-surface-variant flex flex-col gap-1">
          <div>Merkle Tree Tx Hash: <span className="text-on-surface">0x81cf7128a6f3b00d81ef39</span></div>
          <div>Operator: Hendra Wijaya (Kaur TU) • Otorisator: Balai Desa Krajan</div>
        </div>
        {notice && (
          <div className="p-space-sm rounded-lg bg-surface-variant text-primary text-[13px] font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>{notice}
          </div>
        )}
        <div className="flex justify-end gap-space-sm pt-space-xs flex-wrap">
          <button className="px-space-md py-2 rounded-lg bg-surface-container text-primary text-[13px] font-semibold hover:bg-surface-container-high transition-colors" onClick={onUnduh}>
            Unduh Berita Acara Perubahan
          </button>
          <button className="px-space-md py-2 rounded-lg bg-primary text-on-primary text-[13px] font-semibold hover:bg-secondary transition-colors" onClick={onClose}>
            Tutup Forensik
          </button>
        </div>
      </div>
    </div>
  );
}
