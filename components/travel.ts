// Travel history. Each trip carries its own coordinates so arbitrary cities
// can be added without editing a separate lookup table.
export interface Trip {
    id: string;
    fromName: string;
    fromLat: number;
    fromLng: number;
    toName: string;
    toLat: number;
    toLng: number;
    label: string;
    date: string; // YYYY-MM-DD (used for sorting)
}

// Shown only if public/trips.json cannot be loaded. Kept empty on purpose so the
// globe never displays placeholder trips that never happened.
export const DEFAULT_TRIPS: Trip[] = [];

// Trips are served from a committed JSON file (public/trips.json) so the
// published list is whatever is in the repo — only the owner can change it
// (by editing that file via git). Falls back to an empty list.
export async function fetchTrips(): Promise<Trip[]> {
    try {
        const base = (import.meta as any).env?.BASE_URL ?? '/';
        const res = await fetch(`${base}trips.json`, { cache: 'no-cache' });
        if (!res.ok) throw new Error('no file');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) return data as Trip[];
    } catch { /* fall back */ }
    return DEFAULT_TRIPS;
}

const CSV_COLS = ['fromName', 'fromLat', 'fromLng', 'toName', 'toLat', 'toLng', 'label', 'date'] as const;

export function tripsToCSV(trips: Trip[]): string {
    const esc = (v: string | number) => {
        const s = String(v);
        return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const head = CSV_COLS.join(',');
    const rows = trips.map((t) => CSV_COLS.map((c) => esc((t as any)[c])).join(','));
    return [head, ...rows].join('\n');
}

// Minimal CSV parser supporting quoted fields.
function parseCSVLine(line: string): string[] {
    const out: string[] = [];
    let cur = '', inQ = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (inQ) {
            if (ch === '"') {
                if (line[i + 1] === '"') { cur += '"'; i++; } else inQ = false;
            } else cur += ch;
        } else if (ch === '"') inQ = true;
        else if (ch === ',') { out.push(cur); cur = ''; }
        else cur += ch;
    }
    out.push(cur);
    return out;
}

export function csvToTrips(text: string): Trip[] {
    const lines = text.trim().split(/\r?\n/).filter((l) => l.trim());
    if (lines.length === 0) return [];
    const header = parseCSVLine(lines[0]).map((h) => h.trim());
    const idx = (name: string) => header.indexOf(name);
    const hasHeader = idx('fromName') !== -1;
    const start = hasHeader ? 1 : 0;
    const cols = hasHeader
        ? Object.fromEntries(CSV_COLS.map((c) => [c, idx(c)]))
        : Object.fromEntries(CSV_COLS.map((c, i) => [c, i]));

    const trips: Trip[] = [];
    for (let i = start; i < lines.length; i++) {
        const f = parseCSVLine(lines[i]);
        const g = (c: string) => (f[(cols as any)[c]] ?? '').trim();
        const t: Trip = {
            id: `${g('date')}-${g('toName')}-${i}`.replace(/\s+/g, '_'),
            fromName: g('fromName'), fromLat: Number(g('fromLat')), fromLng: Number(g('fromLng')),
            toName: g('toName'), toLat: Number(g('toLat')), toLng: Number(g('toLng')),
            label: g('label'), date: g('date'),
        };
        if (t.fromName && t.toName && !Number.isNaN(t.toLat) && !Number.isNaN(t.toLng)) trips.push(t);
    }
    return trips;
}

export function downloadFile(filename: string, content: string, type: string): void {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
}
