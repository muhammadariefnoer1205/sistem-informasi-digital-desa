import { useState } from 'react';

export default function PembaruanData() {
  const [sent, setSent] = useState(false);
  return (
    <section className="lg:col-span-5 bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between gap-space-md" id="pembaruan-data">
      <div className="flex flex-col gap-space-sm">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-primary font-bold">Koreksi Biodata</span>
          <h2 className="text-[22px] font-semibold text-on-surface">Pembaruan Data Mandiri</h2>
        </div>
        <p className="text-[12px] text-on-surface-variant">
          Perbarui catatan pendidikan atau pekerjaan Anda. Perubahan akan diselaraskan ke database kependudukan desa setelah divalidasi operator.
        </p>
        {sent && (
          <div className="p-space-sm rounded-lg bg-surface-variant text-primary text-[13px] font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            Berkas pembaruan data terkirim untuk verifikasi operator.
          </div>
        )}
        <form className="flex flex-col gap-space-sm mt-space-xs" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-semibold text-on-surface">Jenjang Pendidikan Terakhir</label>
            <select className="w-full px-3.5 py-2 rounded-lg bg-surface-container-low text-[14px] text-on-surface focus:outline-none" defaultValue="Strata 1 (S1) - Sarjana Pertanian">
              <option>Strata 1 (S1) - Sarjana Pertanian</option>
              <option>Diploma III (D3)</option>
              <option>SMA / SMK Sederajat</option>
              <option>Strata 2 (S2) - Magister</option>
            </select>
            <span className="text-[12px] text-on-surface-variant">Data terdahulu: SLTA / Sederajat</span>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-semibold text-on-surface">Profesi / Status Pekerjaan</label>
            <input className="w-full px-3.5 py-2 rounded-lg bg-surface-container-low text-[14px] text-on-surface focus:outline-none" type="text" defaultValue="Wirausaha Pertanian & Perdagangan" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-semibold text-on-surface">Unggah Berkas Pendukung (Scan Ijazah / KK)</label>
            <div className="p-space-md rounded-xl bg-surface-container-low/60 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container transition-colors">
              <div className="w-10 h-10 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center mb-1 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">cloud_upload</span>
              </div>
              <span className="text-[13px] font-semibold text-on-surface">Pilih file atau seret ke sini</span>
              <span className="font-mono-tabular text-[11px] text-on-surface-variant">PDF, JPG, PNG (Maks. 5 MB)</span>
            </div>
          </div>
          <div className="flex items-start gap-space-xs p-space-sm rounded-lg bg-surface-container text-on-surface-variant mt-1">
            <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">verified</span>
            <span className="text-[12px]">Validasi dilakukan maksimal 1x24 jam kerja oleh Operator Desa Bambang Hermanto melalui integrasi SIAK Dukcapil.</span>
          </div>
          <button className="w-full py-2.5 px-space-md rounded-lg bg-primary-container text-on-primary text-[13px] font-semibold hover:bg-secondary transition-colors shadow-sm flex items-center justify-center gap-1.5 mt-space-xs" type="submit">
            <span className="material-symbols-outlined text-[18px]">save</span>
            <span>Ajukan Pembaruan Data</span>
          </button>
        </form>
      </div>
      <div className="pt-space-sm flex items-center justify-between text-on-surface-variant font-mono-tabular text-[11px]">
        <span>Sinkronisasi Terakhir: 13 Okt 2024</span>
        <span className="text-primary font-semibold">Terkoneksi SIAK Pusat</span>
      </div>
    </section>
  );
}
