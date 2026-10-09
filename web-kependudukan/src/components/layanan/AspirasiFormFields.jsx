import { useState } from 'react';
import { KATEGORI_MASALAH } from '../../data/layanan';

export default function AspirasiFormFields({ onSent }) {
  const [anonim, setAnonim] = useState(false);
  return (
    <form className="flex flex-col gap-space-md" onSubmit={(e) => { e.preventDefault(); onSent(anonim); }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-semibold text-on-surface">Kategori Masalah</label>
          <select className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-[14px] text-on-surface focus:outline-none">
            {KATEGORI_MASALAH.map((k) => (<option key={k}>{k}</option>))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-semibold text-on-surface">Geotagging / Lokasi Kejadian</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary text-[18px]">location_on</span>
            <input className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-surface-container-low text-[14px] text-on-surface focus:outline-none" type="text" defaultValue="Jl. Melati RT 03 dekat Irigasi Sawah" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[13px] font-semibold text-on-surface">Uraian Aspirasi atau Laporan</label>
        <textarea className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-[14px] text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none" placeholder="Jelaskan detail permasalahan, dampak terhadap warga sekitar, dan waktu kejadian..." rows="3"></textarea>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md items-center">
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-semibold text-on-surface">Foto Bukti Lapangan</label>
          <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
            <img className="w-16 h-16 rounded-lg object-cover shadow-sm" alt="Bukti lapangan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQWQU-Ummh1pQoDIqiQcPLXmCyz4efZZ9YP1xjB5Z2kofIxhaMxd-M7oUiWByHem6ApSukjKN1xnNzFkdrykYqP339IrJEuPshBZHpV4JR3TqZPVbmkximPR04WC1XKq2MvnAGIv3Jw6C5tdL-CMsq6KYnpUbbIofTx6QZYx8hC9-QFn_Cc-g4fFX1uZKM52EU7HyHuKLJTQxy4glNsD9FSbOm98Bq3txs54qjEZUYEx-j6ffjhZsP" />
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[11px] font-semibold text-on-surface truncate">foto_irigasi_retak.jpg</span>
              <span className="font-mono-tabular text-[11px] text-on-surface-variant">2.4 MB • Terlampir</span>
              <button className="text-left text-[11px] font-semibold text-primary hover:underline mt-0.5" type="button">Ganti Foto</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end gap-space-sm pt-2">
          <label className="flex items-center gap-space-xs cursor-pointer select-none">
            <input className="w-4 h-4 rounded accent-primary" type="checkbox" checked={anonim} onChange={(e) => setAnonim(e.target.checked)} />
            <span className="text-[12px] text-on-surface">Kirim secara Anonim (Sembunyikan Identitas NIK)</span>
          </label>
          <button className="w-full py-2.5 px-space-md rounded-lg bg-primary-container text-on-primary text-[13px] font-semibold hover:bg-secondary transition-colors shadow-sm flex items-center justify-center gap-1.5" type="submit">
            <span className="material-symbols-outlined text-[18px]">send</span>
            <span>Kirim Laporan Pengaduan</span>
          </button>
        </div>
      </div>
    </form>
  );
}
