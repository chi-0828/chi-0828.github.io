import React, { useState, useRef, useEffect } from 'react';
import { searchCities, CityRec } from './cities';

export interface CityValue { name: string; lat: number | ''; lng: number | ''; }

// Text input with offline city suggestions. Picking a suggestion fills
// coordinates automatically; typing a custom name keeps manual lat/lng.
export const CityAutocomplete: React.FC<{
    label: string;
    value: CityValue;
    onChange: (v: CityValue) => void;
}> = ({ label, value, onChange }) => {
    const [open, setOpen] = useState(false);
    const [hi, setHi] = useState(0);
    const boxRef = useRef<HTMLDivElement>(null);
    const results = searchCities(value.name);

    useEffect(() => {
        const onDoc = (e: MouseEvent) => {
            if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener('mousedown', onDoc);
        return () => document.removeEventListener('mousedown', onDoc);
    }, []);

    const pick = (c: CityRec) => {
        onChange({ name: c.name, lat: c.lat, lng: c.lng });
        setOpen(false);
    };

    const onKey = (e: React.KeyboardEvent) => {
        if (!open || results.length === 0) return;
        if (e.key === 'ArrowDown') { e.preventDefault(); setHi((h) => Math.min(h + 1, results.length - 1)); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); setHi((h) => Math.max(h - 1, 0)); }
        else if (e.key === 'Enter') { e.preventDefault(); pick(results[hi]); }
        else if (e.key === 'Escape') setOpen(false);
    };

    return (
        <div className="relative" ref={boxRef}>
            <span className="block font-mono text-[10px] uppercase tracking-wider text-faint mb-1">{label}</span>
            <input
                value={value.name}
                onChange={(e) => { onChange({ ...value, name: e.target.value }); setOpen(true); setHi(0); }}
                onFocus={() => setOpen(true)}
                onKeyDown={onKey}
                placeholder="Type a city…"
                autoComplete="off"
                className="w-full rounded-lg border border-line bg-paper px-2.5 py-1.5 text-sm text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30"
            />
            {open && results.length > 0 && (
                <ul className="absolute z-20 mt-1 w-full max-h-56 overflow-auto rounded-lg border border-line bg-surface shadow-soft py-1">
                    {results.map((c, i) => (
                        <li key={`${c.name}-${c.country}`}>
                            <button
                                type="button"
                                onMouseEnter={() => setHi(i)}
                                onClick={() => pick(c)}
                                className={`w-full text-left px-3 py-1.5 text-sm flex items-center justify-between gap-2 ${i === hi ? 'bg-accent-soft text-accent' : 'text-ink hover:bg-paper'}`}
                            >
                                <span>{c.name}</span>
                                <span className="font-mono text-[10px] text-faint">{c.country} · {c.lat.toFixed(1)},{c.lng.toFixed(1)}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            {(value.lat !== '' && value.lng !== '') && (
                <span className="absolute right-2 top-7 font-mono text-[9px] text-faint pointer-events-none">
                    {Number(value.lat).toFixed(2)},{Number(value.lng).toFixed(2)}
                </span>
            )}
        </div>
    );
};
