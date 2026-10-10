import { CATEGORY_CHIPS } from '../data/warga';

export default function Toolbar({ query, setQuery, dusun, setDusun, rw, setRw, category, setCategory, onTambah, onCetakPdf, onEksporExcel, onMutasi }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
      <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-space-md">
        <div className="flex flex-wrap items-center gap-space-sm flex-1">
          <div className="relative min-w-[280px] flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
            <input
              className="w-full pl-9 pr-space-md py-2 rounded-lg bg-surface-container-low text-[12px] text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Cari NIK (16 digit), No KK, atau Nama Lengkap..."
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-1 bg-surface-container-low px-space-sm py-1.5 rounded-lg">
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant">map</span>
            <select value={dusun} onChange={(e) => setDusun(e.target.value)} className="bg-transparent text-[12px] text-on-surface focus:outline-none">
              <option value="all">Semua Wilayah Dusun</option>
              <option value="krajan">Dusun Krajan (RW 01, RW 02)</option>
              <option value="sukamaju">Dusun Sukamaju (RW 03, RW 04)</option>
              <option value="mekarsari">Dusun Mekarsari (RW 05)</option>
            </select>
          </div>
          <div className="flex items-center gap-1 bg-surface-container-low px-space-sm py-1.5 rounded-lg">
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant">holiday_village</span>
            <select value={rw} onChange={(e) => setRw(e.target.value)} className="bg-transparent text-[12px] text-on-surface focus:outline-none">
              <option value="all">Semua RW/RT</option>
              <option value="rw01">RW 01 / Krajan Barat</option>
              <option value="rw02">RW 02 / Krajan Wetan</option>
              <option value="rw03">RW 03 / Sukamaju</option>
              <option value="rw04">RW 04 / Sawah Baru</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-space-xs">
          <button onClick={onCetakPdf} className="flex items-center gap-1 px-space-md py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface text-[13px] font-semibold transition-colors shadow-sm" title="Cetak Buku Induk Format Standar Kemendagri">
            <span className="material-symbols-outlined text-[18px] text-error">picture_as_pdf</span>
            <span>Cetak Buku Induk</span>
          </button>
          <button onClick={onEksporExcel} className="flex items-center gap-1 px-space-md py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface text-[13px] font-semibold transition-colors shadow-sm" title="Ekspor Data Format Excel">
            <span className="material-symbols-outlined text-[18px] text-primary">table_view</span>
            <span>Ekspor Format Kecamatan</span>
          </button>
          <button onClick={onMutasi} className="flex items-center gap-1 px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-primary text-[13px] font-semibold transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[18px]">transfer_within_a_station</span>
            <span>+ Catat Mutasi</span>
          </button>
          <button onClick={onTambah} className="flex items-center gap-1 px-space-md py-2 rounded-lg bg-primary-container text-on-primary hover:bg-secondary transition-colors text-[13px] font-semibold shadow-sm">
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            <span>+ Tambah Warga Baru</span>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-space-xs overflow-x-auto pt-space-xs">
        {CATEGORY_CHIPS.map((chip) => (
          <button
            key={chip.id}
            onClick={() => setCategory(chip.id)}
            className={`px-space-md py-1 rounded-full text-[11px] font-semibold whitespace-nowrap shadow-sm transition-colors ${
              category === chip.id
                ? 'bg-primary-container text-on-primary'
                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
            }`}
          >
            {chip.label}
          </button>
        ))}
      </div>
    </div>
  );
}
