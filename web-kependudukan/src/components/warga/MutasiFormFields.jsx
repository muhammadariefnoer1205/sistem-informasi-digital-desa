import { Field, inputCls } from './FormFields';

const JENIS = [
  { id: 'lahir', label: 'Kelahiran Baru', desc: 'Bayi lahir, masuk KK orang tua' },
  { id: 'datang', label: 'Pindah Masuk / Datang', desc: 'Warga baru dari luar desa' },
  { id: 'pindah', label: 'Pindah Keluar', desc: 'Warga pindah, nonaktif dari Buku Induk' },
  { id: 'wafat', label: 'Meninggal Dunia', desc: 'Warga wafat, nonaktif dari Buku Induk' },
];

export default function MutasiFormFields({ wargas, form, onChange }) {
  return (
    <div className="flex flex-col gap-space-sm">
      <Field label="Warga *">
        <select name="warga_id" value={form.warga_id} onChange={onChange} className={inputCls}>
          <option value="">— Pilih warga —</option>
          {wargas.map((w) => (
            <option key={w.id} value={w.id}>{w.nama} • {w.nik}</option>
          ))}
        </select>
      </Field>
      <Field label="Jenis Mutasi *">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
          {JENIS.map((j) => (
            <label key={j.id} className={`flex items-start gap-2 p-space-sm rounded-lg cursor-pointer transition-colors ${form.jenis === j.id ? 'bg-primary-container/20 ring-2 ring-primary' : 'bg-surface-container-low hover:bg-surface-container'}`}>
              <input type="radio" name="jenis" value={j.id} checked={form.jenis === j.id} onChange={onChange} className="mt-1 accent-primary" />
              <span>
                <span className="block text-[13px] font-bold text-on-surface">{j.label}</span>
                <span className="block text-[12px] text-on-surface-variant">{j.desc}</span>
              </span>
            </label>
          ))}
        </div>
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
        <Field label="Tanggal Peristiwa *">
          <input type="date" name="tanggal" value={form.tanggal} onChange={onChange} className={inputCls} />
        </Field>
        <Field label={form.jenis === 'datang' ? 'Asal Daerah' : form.jenis === 'pindah' ? 'Tujuan Pindah' : 'No. Surat / Keterangan'}>
          <input name="asal_tujuan" value={form.asal_tujuan} onChange={onChange}
            placeholder={form.jenis === 'datang' ? 'cth: Kec. Cilacap Tengah' : form.jenis === 'pindah' ? 'cth: Kec. Dayeuhkolot' : 'cth: No. 472.12/014/III/2024'}
            className={inputCls} />
        </Field>
      </div>
      <Field label="Catatan">
        <input name="keterangan" value={form.keterangan} onChange={onChange}
          placeholder="cth: Saksi Kadus Krajan, SKPWNI terlampir" className={inputCls} />
      </Field>
      {(form.jenis === 'pindah' || form.jenis === 'wafat') && (
        <div className="p-space-sm rounded-lg bg-error-container/40 text-on-error-container text-[12px] font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">warning</span>
          Warga akan dinonaktifkan dari Buku Induk (arsip, tidak terhapus). Riwayat tercatat di mutasi_log.
        </div>
      )}
    </div>
  );
}
