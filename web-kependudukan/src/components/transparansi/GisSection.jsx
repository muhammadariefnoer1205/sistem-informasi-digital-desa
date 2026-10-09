import { useState } from 'react';
import { MAP_LAYERS, MAP_PINS, FASILITAS } from '../../data/transparansi2';

export default function GisSection() {
  const [layer, setLayer] = useState(0);
  return (
    <section className="flex flex-col gap-space-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-xs">
        <div>
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[24px]">map</span>
            <h2 className="text-[22px] font-bold text-on-surface">Peta Spasial &amp; Potensi Geografis Wilayah (GIS)</h2>
          </div>
          <p className="text-[12px] text-on-surface-variant">Sistem pemetaan zonasi aset, batas dusun, dan mitigasi kebencanaan desa.</p>
        </div>
        <div className="flex flex-wrap items-center gap-space-xs">
          {MAP_LAYERS.map((l, i) => (
            <button
              key={l.label}
              onClick={() => setLayer(i)}
              className={`px-space-md py-1.5 rounded-full text-[11px] font-semibold flex items-center gap-1 shadow-sm transition-colors ${
                layer === i ? 'bg-primary text-on-primary' : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">{l.icon}</span> {l.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col justify-between overflow-hidden relative">
          <div
            className="w-full h-96 rounded-lg bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAR_R8hKgqtm2CAU2ZbM9F8EiFUIRa7L60_d55YX40fsqs4T49xZH63WGTedlx8j2EywDB6oX9nVaXqWEXWk4DnP9nec_8I630HGzgtqlF-NTfw_hhWf9hAc2AvaDrQY9upmcQytJB3irFSlLSW0ziqzOYcecbR4tqzZQVDpVa9uFWgZxeLJFJmVcwmtPy01K1MGeqpJCLQIAwaitx6UvuCWFPIQWtsYL2pnCkZqvmZo3qAJ0T3kSh')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent pointer-events-none"></div>
            {MAP_PINS.map((p) => (
              <div key={p.label} className={`absolute ${p.pos} px-space-xs py-1 rounded shadow-md flex items-center gap-1 text-[11px] font-semibold ${p.box} ${p.bounce ? 'animate-bounce' : ''}`}>
                <span className={`material-symbols-outlined text-[16px] ${p.iconCls}`} style={p.bounce ? { fontVariationSettings: "'FILL' 1" } : undefined}>{p.icon}</span>
                <span className="font-bold">{p.label}</span>
              </div>
            ))}
            <div className="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/95 backdrop-blur-md p-space-sm rounded-lg flex flex-wrap items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-md">
                <div>
                  <span className="text-[11px] font-semibold text-on-surface-variant block">Koordinat Balai Desa</span>
                  <span className="font-mono-tabular text-[11px] font-semibold text-on-surface">-7.0983° S, 107.5482° E</span>
                </div>
                <div className="hidden sm:block">
                  <span className="text-[11px] font-semibold text-on-surface-variant block">Luas Wilayah Administrasi</span>
                  <span className="font-mono-tabular text-[11px] font-semibold text-on-surface">428,5 Hektar (Ha)</span>
                </div>
              </div>
              <button className="bg-primary text-on-primary text-[11px] font-semibold px-space-md py-1.5 rounded-lg flex items-center gap-1 hover:bg-secondary transition-colors">
                <span className="material-symbols-outlined text-[16px]">open_in_new</span> Buka Peta Fullscreen GIS
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col justify-between gap-space-sm">
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-xs">
            <div className="flex items-center justify-between">
              <span className="text-[18px] font-bold text-on-surface">Fasilitas Pokok Warga</span>
              <span className="font-mono-tabular text-[11px] text-primary font-semibold">14 Titik Aktif</span>
            </div>
            <p className="text-[12px] text-on-surface-variant">Aksesibilitas layanan sosial, kesehatan dan ekonomi warga desa.</p>
          </div>
          <div className="flex flex-col gap-space-xs">
            {FASILITAS.map((f) => (
              <div key={f.nama} className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex items-center gap-space-sm hover:bg-surface-container-low transition-colors">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${f.iconBox}`}>
                  <span className="material-symbols-outlined text-[20px]">{f.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-bold text-on-surface truncate">{f.nama}</div>
                  <div className="text-[12px] text-on-surface-variant truncate">{f.desc}</div>
                </div>
                <span className={`material-symbols-outlined text-[18px] ${f.arrowCls}`}>near_me</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
