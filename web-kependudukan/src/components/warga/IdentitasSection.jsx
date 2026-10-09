import { Field, inputCls } from './FormFields';

export default function IdentitasSection({ form, onChange }) {
  return (
    <div className="flex flex-col gap-space-sm">
      <h4 className="text-[13px] font-bold text-primary uppercase tracking-wider">Identitas Kependudukan</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
        <Field label="NIK (16 digit) *">
          <input name="nik" value={form.nik} onChange={onChange} inputMode="numeric" maxLength={16}
            placeholder="330214xxxxxxxxxx" className={`${inputCls} font-mono-tabular`} />
        </Field>
        <Field label="No. Kartu Keluarga (16 digit) *">
          <input name="no_kk" value={form.no_kk} onChange={onChange} inputMode="numeric" maxLength={16}
            placeholder="330214xxxxxxxxxx" className={`${inputCls} font-mono-tabular`} />
        </Field>
      </div>
      <Field label="Nama Lengkap (sesuai KTP/KK) *">
        <input name="nama_lengkap" value={form.nama_lengkap} onChange={onChange}
          placeholder="cth: Siti Aminah binti Harto" className={inputCls} />
      </Field>
      <div className="grid grid-cols-3 gap-space-sm">
        <Field label="Dusun">
          <select name="dusun" value={form.dusun} onChange={onChange} className={inputCls}>
            <option value="krajan">Krajan</option>
            <option value="sukamaju">Sukamaju</option>
            <option value="mekarsari">Mekarsari</option>
          </select>
        </Field>
        <Field label="RW">
          <select name="rw" value={form.rw} onChange={onChange} className={inputCls}>
            <option value="rw01">RW 01</option>
            <option value="rw02">RW 02</option>
            <option value="rw03">RW 03</option>
            <option value="rw04">RW 04</option>
            <option value="rw05">RW 05</option>
          </select>
        </Field>
        <Field label="RT">
          <input name="rt" value={form.rt} onChange={onChange} maxLength={3} placeholder="02" className={inputCls} />
        </Field>
      </div>
    </div>
  );
}
