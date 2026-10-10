import { useEffect, useState } from 'react';
import { maskNik } from '../../data/warga';

export default function MusdesusModal({ open, onClose, notice, onResolve }) {
  const [tab, setTab] = useState('ganda');
  const [resolved, setResolved] = useState([]);

  useEffect(() => { if (open) { setTab('ganda'); setResolved([]); } }, [open ]);
  if (!open) return null;

  const ganda = [
    { nik: '3302141508730088', nama: 'Sutrisno bin Hadi', program: 'PKH Kemensos + BLT-DD', status: resolved.includes('3302141508730088') ? 'Diselesaikan' : 'Menunggu Musdesus' },
    { nik: '3302141508730091', nama: 'Waginem binti Cari', program: 'PKH Kemensos + BLT-DD', status: resolved.includes('3302141508730091') ? 'Diselesaikan' : 'Menunggu Musdesus' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-surface-container-lowest rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-space-lg shadow-2xl flex flex-col gap-space-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[24px]">fact_check</span>
            <h3 className="text-[18px] font-semibold text-on-surface">Modul Musdesus &amp; Audit Bansos</h3>
          </div>
          <button className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant" onClick={onClose}>
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="flex items-center gap-space-xs border-b border-surface-container-high pb-2">
          {[{ id: 'ganda', label: 'Data Ganda (2)' }, { id: 'verifikasi', label: 'Antrean Verifikasi (4 KK)' }, { id: 'berita', label: 'Berita Acara' }].map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`px-space-sm py-1 text-[13px] font-semibold whitespace-nowrap ${tab === t.id ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
              {t.label}
            </button>
          ))}
        </div>

        {notice && (
          <div className="p-space-sm rounded-lg bg-surface-variant text-primary text-[13px] font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>{notice}
          </div>
        )}

        {tab === 'ganda' && (
          <div className="flex flex-col gap-space-xs">
            <p className="text-[12px] text-on-surface-variant">NIK tercatat ganda pada usulan PKH Kemensos dan BLT-DD. Hapus salah satu kepesertaan melalui keputusan Musdesus agar tepat sasaran (96,4%).</p>
            {ganda.map((g) => (
              <div key={g.nik} className="p-space-sm rounded-lg bg-surface-container-low flex flex-wrap items-center justify-between gap-space-sm">
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-on-surface">{g.nama}</span>
                  <span className="font-mono-tabular text-[11px] text-on-surface-variant">NIK {maskNik(g.nik)} • {g.program}</span>
                </div>
                {g.status === 'Diselesaikan'
                  ? <span className="px-2.5 py-1 rounded-full bg-surface-variant text-primary text-[11px] font-bold">Diselesaikan</span>
                  : <button onClick={() => { setResolved((r) => [...r, g.nik]); onResolve?.(g); }}
                      className="px-space-sm py-1.5 rounded-lg bg-primary-container text-on-primary text-[12px] font-semibold hover:bg-secondary transition-colors">
                      Hapus dari BLT-DD
                    </button>}
              </div>
            ))}
          </div>
        )}

        {tab === 'verifikasi' && (
          <div className="flex flex-col gap-space-xs">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[20px]">home_work</span>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-on-surface">KK Calon KPM #{118 + i} — Dusun Krajan</span>
                  <span className="text-[12px] text-on-surface-variant">Jadwal survei lapangan Tim Musdesus • minggu ini</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'berita' && (
          <div className="flex flex-col gap-space-sm text-[13px] text-on-surface">
            <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1">
              <span className="font-bold">Berita Acara Musdesus No. 140/07/V/2024</span>
              <span className="text-on-surface-variant">Memutuskan penghapusan data ganda bansos dan pengesahan 4 KK sisa kemiskinan ekstrem (118/122 KK terverifikasi).</span>
              <span className="font-mono-tabular text-[11px] text-on-surface-variant">Ditandatangani: Kades • BPD • Pendamping PKH</span>
            </div>
            <button onClick={() => onResolve?.({ berita: true })}
              className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary text-[13px] font-semibold hover:bg-secondary transition-colors self-start">
              Unduh Berita Acara (PDF)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
