import { TTE_INFO } from '../../data/keamanan';

export default function TteCard({ notice, onUji, onSync }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
      <div className="flex items-center justify-between pb-space-xs flex-wrap gap-space-xs">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[20px]">qr_code_scanner</span>
          <h3 className="text-[18px] font-semibold text-on-surface">Verifikasi TTE &amp; QR BSrE</h3>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-semibold">
          Valid • Belum Dimodifikasi
        </span>
      </div>
      <p className="text-[12px] text-on-surface-variant">
        Pemeriksaan integritas stempel elektronik dokumen output (Surat Keterangan Usaha, Kelahiran, Domisili) sesuai standar BSrE/BSSN.
      </p>
      {notice && (
        <div className="p-space-sm rounded-lg bg-surface-variant text-primary text-[13px] font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">check_circle</span>{notice}
        </div>
      )}
      <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
        <div className="flex items-start justify-between gap-space-sm">
          <div className="w-24 h-24 rounded-lg bg-surface-container-lowest p-2 shadow-sm flex items-center justify-center shrink-0">
            <svg className="w-full h-full text-primary" fill="currentColor" viewBox="0 0 100 100">
              <path d="M0 0h36v36H0V0zm8 8v20h20V8H8zm56-8h36v36H64V0zm8 8v20h20V8H72zM0 64h36v36H0V64zm8 8v20h20V72H8zm44-56h8v8h-8V16zm-8 16h8v8h-8V32zm16 8h8v8h-8V40zm8-16h8v8h-8V24zm-16 24h8v8h-8V48zm24 8h8v8h-8V56zm-16 8h8v8h-8V64zm8 16h8v8h-8V80zm16-8h8v8h-8V72zm-24 16h8v8h-8V88zm24 8h8v8h-8V96zM44 64h8v8h-8V64zm8 8h8v8h-8V72zm-8 16h8v8h-8V88z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">Penandatangan Resmi</span>
            <div className="text-[13px] text-on-surface font-bold truncate">{TTE_INFO.nama}</div>
            <span className="text-[12px] text-primary font-medium">{TTE_INFO.jabatan}</span>
            <div className="mt-1 font-mono-tabular text-[11px] text-on-surface-variant/80">{TTE_INFO.nik}</div>
          </div>
        </div>
        <div className="mt-space-xs p-2.5 rounded-lg bg-surface-container-lowest flex flex-col gap-1">
          <div className="flex justify-between items-center text-[11px] font-mono-tabular">
            <span className="text-on-surface-variant">Sertifikat CA:</span>
            <span className="text-primary font-semibold">{TTE_INFO.ca}</span>
          </div>
          <div className="flex justify-between items-center text-[11px] font-mono-tabular">
            <span className="text-on-surface-variant">Masa Berlaku:</span>
            <span className="text-on-surface">{TTE_INFO.masa}</span>
          </div>
          <div className="flex justify-between items-center text-[11px] font-mono-tabular">
            <span className="text-on-surface-variant">Status Hash:</span>
            <span className="text-secondary font-semibold">{TTE_INFO.hash}</span>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-on-surface-variant">Digital Signature Digest:</span>
          <span className="font-mono-tabular text-[10px] break-all text-on-surface-variant/90 bg-surface-container px-2 py-1 rounded">{TTE_INFO.digest}</span>
        </div>
      </div>
      <div className="flex gap-space-sm">
        <button onClick={onUji} className="flex-1 py-2 px-3 rounded-lg bg-primary-container text-on-primary-container text-[13px] font-semibold text-center hover:bg-secondary hover:text-on-primary transition-colors">
          Uji Validitas Dokumen Baru
        </button>
        <button onClick={onSync} className="py-2 px-3 rounded-lg bg-surface-container text-primary text-[13px] font-semibold hover:bg-surface-container-high transition-colors" title="Perbarui Sertifikat">
          <span className="material-symbols-outlined text-[18px]">sync</span>
        </button>
      </div>
    </div>
  );
}
