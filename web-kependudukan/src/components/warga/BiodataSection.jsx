import { Field, inputCls } from './FormFields';

export default function BiodataSection({ form, onChange }) {
  return (
    <div className="flex flex-col gap-space-sm">
      <h4 className="text-[13px] font-bold text-primary uppercase tracking-wider">Biodata &amp; Status</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
        <Field label="Tempat Lahir">
          <input name="tempat_lahir" value={form.tempat_lahir} onChange={onChange} placeholder="cth: Banyumas" className={inputCls} />
        </Field>
        <Field label="Tanggal Lahir">
          <input type="date" name="tanggal_lahir" value={form.tanggal_lahir} onChange={onChange} className={inputCls} />
        </Field>
        <Field label="Jenis Kelamin">
          <select name="jenis_kelamin" value={form.jenis_kelamin} onChange={onChange} className={inputCls}>
            <option>Laki-laki</option>
            <option>Perempuan</option>
          </select>
        </Field>
        <Field label="Agama">
          <select name="agama" value={form.agama} onChange={onChange} className={inputCls}>
            <option>Islam</option>
            <option>Kristen</option>
            <option>Katolik</option>
            <option>Hindu</option>
            <option>Buddha</option>
            <option>Khonghucu</option>
          </select>
        </Field>
        <Field label="Pendidikan Terakhir">
          <input name="pendidikan" value={form.pendidikan} onChange={onChange} placeholder="cth: SLTA / SMK" className={inputCls} />
        </Field>
        <Field label="Golongan Darah">
          <input name="gol_darah" value={form.gol_darah} onChange={onChange} placeholder="cth: Gol. Darah: O" className={inputCls} />
        </Field>
      </div>
      <Field label="Status Perkawinan / Hubungan Keluarga">
        <input name="status_sipil" value={form.status_sipil} onChange={onChange}
          placeholder="cth: Kawin (Kepala Keluarga)" className={inputCls} />
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
        <Field label="Kategori Warga">
          <select name="kategori" value={form.kategori} onChange={onChange} className={inputCls}>
            <option value="reguler">Reguler</option>
            <option value="bansos">Bansos &amp; DTKS</option>
            <option value="lansia">Lansia</option>
            <option value="disabilitas">Disabilitas</option>
            <option value="mutasi">Mutasi Baru</option>
            <option value="ktp">Wajib KTP Pemula</option>
          </select>
        </Field>
        <Field label="Status Mutasi">
          <select name="mutasi_type" value={form.mutasi_type} onChange={onChange} className={inputCls}>
            <option value="tetap">Tetap</option>
            <option value="datang">Datang / Pindah Masuk</option>
            <option value="lahir">Lahir Baru</option>
          </select>
        </Field>
      </div>
    </div>
  );
}
