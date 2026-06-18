// Travel history. Each trip carries its own coordinates so users can add
// arbitrary cities without editing a separate lookup table.
export interface Trip {
    id: string;
    fromName: string;
    fromLat: number;
    fromLng: number;
    toName: string;
    toLat: number;
    toLng: number;
    label: string;
    date: string; // YYYY-MM
}

const TPE = { name: 'Taipei', lat: 25.03, lng: 121.56 };
const mk = (
    from: { name: string; lat: number; lng: number },
    to: { name: string; lat: number; lng: number },
    label: string,
    date: string
): Trip => ({
    id: `${date}-${to.name}`.replace(/\s+/g, '_'),
    fromName: from.name, fromLat: from.lat, fromLng: from.lng,
    toName: to.name, toLat: to.lat, toLng: to.lng,
    label, date,
});

export const DEFAULT_TRIPS: Trip[] = [
    mk(TPE, { name: 'Tokyo', lat: 35.68, lng: 139.69 }, 'ASPLOS — paper presentation', '2023-03'),
    mk(TPE, { name: 'Seoul', lat: 37.57, lng: 126.98 }, 'Research visit', '2023-08'),
    mk(TPE, { name: 'Singapore', lat: 1.35, lng: 103.82 }, 'Summer internship', '2022-07'),
    mk(TPE, { name: 'Hong Kong', lat: 22.32, lng: 114.17 }, 'MICRO workshop', '2024-02'),
    mk(TPE, { name: 'San Francisco', lat: 37.77, lng: -122.42 }, 'ISCA — conference', '2024-06'),
    mk({ name: 'San Francisco', lat: 37.77, lng: -122.42 }, { name: 'New York', lat: 40.71, lng: -74.01 }, 'Lab visit', '2024-06'),
    mk(TPE, { name: 'Vancouver', lat: 49.28, lng: -123.12 }, 'USENIX FAST', '2025-02'),
    mk(TPE, { name: 'Munich', lat: 48.14, lng: 11.58 }, 'DATE — conference', '2025-04'),
    mk(TPE, { name: 'Sydney', lat: -33.87, lng: 151.21 }, 'Invited talk', '2025-09'),
];

// Trips are served from a committed JSON file (public/trips.json) so the
// published list is whatever is in the repo — only the owner can change it
// (by editing that file via git). Falls back to the bundled defaults.
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
