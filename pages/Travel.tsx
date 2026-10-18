import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Globe from 'react-globe.gl';
import { Plus, Upload, Download, Trash2, X } from 'lucide-react';
import {
    Trip, DEFAULT_TRIPS, fetchTrips,
    tripsToCSV, csvToTrips, downloadFile,
} from '../components/travel';
import { CityAutocomplete, CityValue } from '../components/CityAutocomplete';

const ARC_FROM = '#7aa7ff';
const ARC_TO = '#ffce73';

interface FormState { from: CityValue; to: CityValue; label: string; date: string; }
const emptyForm: FormState = {
    from: { name: 'Taipei', lat: 25.03, lng: 121.56 },
    to: { name: '', lat: '', lng: '' },
    label: '', date: '',
};

export const Travel: React.FC = () => {
    const globeEl = useRef<any>(null);
    const wrapRef = useRef<HTMLDivElement>(null);
    const fileRef = useRef<HTMLInputElement>(null);
    const location = useLocation();
    const isEdit = new URLSearchParams(location.search).has('edit');

    const [width, setWidth] = useState(640);
    const [ready, setReady] = useState(false);
    const [trips, setTrips] = useState<Trip[]>(DEFAULT_TRIPS);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState<FormState>(emptyForm);

    // Load committed trips (public/trips.json)
    useEffect(() => { fetchTrips().then(setTrips); }, []);

    useEffect(() => {
        const ro = new ResizeObserver((entries) => {
            for (const e of entries) setWidth(Math.floor(e.contentRect.width));
        });
        if (wrapRef.current) ro.observe(wrapRef.current);
        return () => ro.disconnect();
    }, []);

    useEffect(() => {
        const g = globeEl.current;
        if (!g) return;
        const c = g.controls();
        c.autoRotate = true;
        c.autoRotateSpeed = 0.5;
        c.enableZoom = true;
        c.minDistance = 140;
        c.maxDistance = 600;
        g.pointOfView({ lat: 22, lng: 120, altitude: 2.3 }, 0);
    }, [ready]);

    const arcs = useMemo(
        () => trips.map((t) => ({
            startLat: t.fromLat, startLng: t.fromLng,
            endLat: t.toLat, endLng: t.toLng,
            color: [ARC_FROM, ARC_TO], label: t.label,
        })),
        [trips]
    );

    const points = useMemo(() => {
        const m = new Map<string, { name: string; lat: number; lng: number }>();
        trips.forEach((t) => {
            m.set(t.fromName, { name: t.fromName, lat: t.fromLat, lng: t.fromLng });
            m.set(t.toName, { name: t.toName, lat: t.toLat, lng: t.toLng });
        });
        return [...m.values()];
    }, [trips]);

    const addTrip = (e: React.FormEvent) => {
        e.preventDefault();
        const { from, to } = form;
        if (!to.name.trim() || to.lat === '' || to.lng === '' || from.lat === '' || from.lng === '') {
            alert('Pick cities from the list (or fill latitude/longitude manually).');
            return;
        }
        const t: Trip = {
            id: `${form.date}-${to.name}-${Date.now()}`.replace(/\s+/g, '_'),
            fromName: from.name.trim(), fromLat: Number(from.lat), fromLng: Number(from.lng),
            toName: to.name.trim(), toLat: Number(to.lat), toLng: Number(to.lng),
            label: form.label.trim(), date: form.date.trim(),
        };
        setTrips((prev) => [...prev, t]);
        setForm(emptyForm);
        setShowForm(false);
    };

    const removeTrip = (id: string) => setTrips((prev) => prev.filter((t) => t.id !== id));

    const onImport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            const text = String(reader.result || '');
            try {
                const next = file.name.toLowerCase().endsWith('.csv')
                    ? csvToTrips(text)
                    : (JSON.parse(text) as Trip[]);
                if (!Array.isArray(next) || next.length === 0) throw new Error('empty');
                setTrips(next);
            } catch {
                alert('Could not parse file. Expected JSON array or CSV with header: fromName,fromLat,fromLng,toName,toLat,toLng,label,date');
            }
        };
        reader.readAsText(file);
        e.target.value = '';
    };

    const sorted = [...trips].sort((a, b) => b.date.localeCompare(a.date));

    return (
        <div className="animate-rise">
            <h1 className="font-arial text-3xl font-bold tracking-tight text-ink mb-2">Travel</h1>
            <p className="text-sm text-muted mb-5">
                A spinning map of places I&apos;ve flown.
                <span className="text-faint"> Scroll to zoom · drag to spin.</span>
            </p>

            <div
                ref={wrapRef}
                className="relative rounded-2xl overflow-hidden border border-line shadow-soft mb-5"
                style={{ background: 'radial-gradient(120% 90% at 50% 0%, #2b3a55 0%, #131a2b 72%, #0d111d 100%)' }}
            >
                <Globe
                    ref={globeEl}
                    width={width}
                    height={Math.min(520, Math.max(360, width * 0.6))}
                    onGlobeReady={() => setReady(true)}
                    backgroundColor="rgba(0,0,0,0)"
                    globeImageUrl="https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
                    bumpImageUrl="https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
                    atmosphereColor="#9cc0ff"
                    atmosphereAltitude={0.22}
                    arcsData={arcs}
                    arcColor={'color' as any}
                    arcStroke={0.55}
                    arcDashLength={0.42}
                    arcDashGap={0.18}
                    arcDashInitialGap={() => Math.random()}
                    arcDashAnimateTime={2400}
                    arcAltitudeAutoScale={0.45}
                    pointsData={points}
                    pointLat={'lat' as any}
                    pointLng={'lng' as any}
                    pointColor={() => '#ffd866'}
                    pointAltitude={0.008}
                    pointRadius={0.22}
                    pointResolution={12}
                    pointLabel={((p: any) => `<div style="font:600 12px 'IBM Plex Sans',sans-serif;color:#1b2233;background:#fff;padding:3px 8px;border-radius:6px;box-shadow:0 2px 8px rgba(0,0,0,.25)">${p.name}</div>`) as any}
                    ringsData={points}
                    ringLat={'lat' as any}
                    ringLng={'lng' as any}
                    ringColor={() => (t: number) => `rgba(255,216,102,${Math.max(0, 1 - t)})`}
                    ringMaxRadius={1.6}
                    ringPropagationSpeed={1.1}
                    ringRepeatPeriod={1700}
                />
            </div>

            {/* Always-visible city legend */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-8">
                {[...points].sort((a, b) => a.name.localeCompare(b.name)).map((c) => (
                    <span key={c.name} className="inline-flex items-center gap-1.5 text-[13px] text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffce73] shrink-0" />
                        {c.name}
                    </span>
                ))}
            </div>

            {/* Owner edit mode — only when the URL has ?edit */}
            {isEdit && (
                <div className="rounded-xl border border-accent/30 bg-accent-soft/50 p-4 mb-6">
                    <p className="text-[12px] text-accent font-medium mb-3">
                        Edit mode — author your trips here, then <strong>Export JSON</strong> and replace
                        <code className="font-mono mx-1">public/trips.json</code> (commit to publish).
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                        <button onClick={() => setShowForm((v) => !v)} className={btn}><Plus size={14} /> Add trip</button>
                        <button onClick={() => fileRef.current?.click()} className={btn}><Upload size={14} /> Import</button>
                        <button onClick={() => downloadFile('trips.json', JSON.stringify(trips, null, 2), 'application/json')} className={btn}><Download size={14} /> Export JSON</button>
                        <button onClick={() => downloadFile('trips.csv', tripsToCSV(trips), 'text/csv')} className={btn}><Download size={14} /> Export CSV</button>
                        <button onClick={() => { if (confirm('Reset to the default list?')) setTrips(DEFAULT_TRIPS); }} className={`${btn} text-muted`}>Reset</button>
                        <input ref={fileRef} type="file" accept=".json,.csv" onChange={onImport} className="hidden" />
                    </div>

                    {showForm && (
                        <form onSubmit={addTrip} className="rounded-xl border border-line bg-surface p-4 mt-4">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-arial font-bold text-sm text-ink">New trip</h3>
                                <button type="button" onClick={() => setShowForm(false)} className="text-faint hover:text-ink"><X size={16} /></button>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-3">
                                <CityAutocomplete label="From" value={form.from} onChange={(v) => setForm((f) => ({ ...f, from: v }))} />
                                <CityAutocomplete label="To *" value={form.to} onChange={(v) => setForm((f) => ({ ...f, to: v }))} />
                                <TextField label="Date (YYYY-MM)" value={form.date} onChange={(v) => setForm((f) => ({ ...f, date: v }))} />
                                <TextField label="Label" value={form.label} onChange={(v) => setForm((f) => ({ ...f, label: v }))} />
                            </div>
                            <div className="mt-3 flex justify-end">
                                <button type="submit" className="rounded-lg bg-accent text-white text-sm font-medium px-4 py-2 hover:opacity-90 transition-opacity">Add trip</button>
                            </div>
                        </form>
                    )}
                </div>
            )}

            {/* Trip log — owner edit mode only (kept private on the public page) */}
            {isEdit && (
            <div>
            <h2 className="font-arial text-lg font-bold text-ink mb-3">Trip log</h2>
            <ul className="divide-y divide-line">
                {sorted.map((t) => (
                    <li key={t.id} className="group flex items-baseline gap-4 py-3 px-2 -mx-2 rounded-md hover:bg-accent-soft/60 transition-colors">
                        <span className="font-mono text-[11px] text-faint w-[88px] shrink-0">{t.date || '—'}</span>
                        <div className="min-w-0 flex-grow">
                            <p className="text-[14.5px] text-ink">
                                {t.fromName}<span className="text-faint mx-1.5">→</span>{t.toName}
                            </p>
                            {t.label && <p className="text-[13px] text-muted">{t.label}</p>}
                        </div>
                        {isEdit && (
                            <button
                                onClick={() => removeTrip(t.id)}
                                aria-label="Delete trip"
                                className="text-faint opacity-0 group-hover:opacity-100 hover:text-red-500 transition-all shrink-0"
                            >
                                <Trash2 size={15} />
                            </button>
                        )}
                    </li>
                ))}
            </ul>
            </div>
            )}
        </div>
    );
};

const btn = 'inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface text-sm text-ink px-3 py-1.5 hover:border-accent/50 hover:text-accent transition-colors';

const TextField: React.FC<{ label: string; value: string; onChange: (v: string) => void }> = ({ label, value, onChange }) => (
    <label className="block">
        <span className="block font-mono text-[10px] uppercase tracking-wider text-faint mb-1">{label}</span>
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full rounded-lg border border-line bg-paper px-2.5 py-1.5 text-sm text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30"
        />
    </label>
);
