// Bundled city list for offline autocomplete (no geocoding API needed — works
// on static hosting like GitHub Pages). Add more as needed.
export interface CityRec { name: string; country: string; lat: number; lng: number; }

export const CITY_DB: CityRec[] = [
    { name: 'Taipei', country: 'TW', lat: 25.03, lng: 121.56 },
    { name: 'Kaohsiung', country: 'TW', lat: 22.63, lng: 120.30 },
    { name: 'Hsinchu', country: 'TW', lat: 24.80, lng: 120.97 },
    { name: 'Tokyo', country: 'JP', lat: 35.68, lng: 139.69 },
    { name: 'Osaka', country: 'JP', lat: 34.69, lng: 135.50 },
    { name: 'Kyoto', country: 'JP', lat: 35.01, lng: 135.77 },
    { name: 'Seoul', country: 'KR', lat: 37.57, lng: 126.98 },
    { name: 'Busan', country: 'KR', lat: 35.18, lng: 129.08 },
    { name: 'Hong Kong', country: 'HK', lat: 22.32, lng: 114.17 },
    { name: 'Macau', country: 'MO', lat: 22.20, lng: 113.54 },
    { name: 'Shanghai', country: 'CN', lat: 31.23, lng: 121.47 },
    { name: 'Beijing', country: 'CN', lat: 39.90, lng: 116.41 },
    { name: 'Shenzhen', country: 'CN', lat: 22.54, lng: 114.06 },
    { name: 'Singapore', country: 'SG', lat: 1.35, lng: 103.82 },
    { name: 'Bangkok', country: 'TH', lat: 13.76, lng: 100.50 },
    { name: 'Kuala Lumpur', country: 'MY', lat: 3.14, lng: 101.69 },
    { name: 'Jakarta', country: 'ID', lat: -6.21, lng: 106.85 },
    { name: 'Manila', country: 'PH', lat: 14.60, lng: 120.98 },
    { name: 'Ho Chi Minh City', country: 'VN', lat: 10.82, lng: 106.63 },
    { name: 'Mumbai', country: 'IN', lat: 19.08, lng: 72.88 },
    { name: 'Bengaluru', country: 'IN', lat: 12.97, lng: 77.59 },
    { name: 'New Delhi', country: 'IN', lat: 28.61, lng: 77.21 },
    { name: 'Dubai', country: 'AE', lat: 25.20, lng: 55.27 },
    { name: 'Tel Aviv', country: 'IL', lat: 32.08, lng: 34.78 },
    { name: 'Istanbul', country: 'TR', lat: 41.01, lng: 28.98 },
    { name: 'Sydney', country: 'AU', lat: -33.87, lng: 151.21 },
    { name: 'Melbourne', country: 'AU', lat: -37.81, lng: 144.96 },
    { name: 'Auckland', country: 'NZ', lat: -36.85, lng: 174.76 },
    { name: 'San Francisco', country: 'US', lat: 37.77, lng: -122.42 },
    { name: 'Los Angeles', country: 'US', lat: 34.05, lng: -118.24 },
    { name: 'Seattle', country: 'US', lat: 47.61, lng: -122.33 },
    { name: 'San Diego', country: 'US', lat: 32.72, lng: -117.16 },
    { name: 'Las Vegas', country: 'US', lat: 36.17, lng: -115.14 },
    { name: 'Austin', country: 'US', lat: 30.27, lng: -97.74 },
    { name: 'Chicago', country: 'US', lat: 41.88, lng: -87.63 },
    { name: 'New York', country: 'US', lat: 40.71, lng: -74.01 },
    { name: 'Boston', country: 'US', lat: 42.36, lng: -71.06 },
    { name: 'Washington', country: 'US', lat: 38.91, lng: -77.04 },
    { name: 'Atlanta', country: 'US', lat: 33.75, lng: -84.39 },
    { name: 'Toronto', country: 'CA', lat: 43.65, lng: -79.38 },
    { name: 'Vancouver', country: 'CA', lat: 49.28, lng: -123.12 },
    { name: 'Montreal', country: 'CA', lat: 45.50, lng: -73.57 },
    { name: 'Mexico City', country: 'MX', lat: 19.43, lng: -99.13 },
    { name: 'Sao Paulo', country: 'BR', lat: -23.55, lng: -46.63 },
    { name: 'London', country: 'GB', lat: 51.51, lng: -0.13 },
    { name: 'Paris', country: 'FR', lat: 48.86, lng: 2.35 },
    { name: 'Amsterdam', country: 'NL', lat: 52.37, lng: 4.90 },
    { name: 'Munich', country: 'DE', lat: 48.14, lng: 11.58 },
    { name: 'Berlin', country: 'DE', lat: 52.52, lng: 13.40 },
    { name: 'Frankfurt', country: 'DE', lat: 50.11, lng: 8.68 },
    { name: 'Zurich', country: 'CH', lat: 47.38, lng: 8.54 },
    { name: 'Vienna', country: 'AT', lat: 48.21, lng: 16.37 },
    { name: 'Barcelona', country: 'ES', lat: 41.39, lng: 2.17 },
    { name: 'Madrid', country: 'ES', lat: 40.42, lng: -3.70 },
    { name: 'Rome', country: 'IT', lat: 41.90, lng: 12.50 },
    { name: 'Milan', country: 'IT', lat: 45.46, lng: 9.19 },
    { name: 'Stockholm', country: 'SE', lat: 59.33, lng: 18.07 },
    { name: 'Copenhagen', country: 'DK', lat: 55.68, lng: 12.57 },
    { name: 'Helsinki', country: 'FI', lat: 60.17, lng: 24.94 },
    { name: 'Dublin', country: 'IE', lat: 53.35, lng: -6.26 },
    { name: 'Lisbon', country: 'PT', lat: 38.72, lng: -9.14 },
    { name: 'Prague', country: 'CZ', lat: 50.08, lng: 14.44 },
    { name: 'Warsaw', country: 'PL', lat: 52.23, lng: 21.01 },
    { name: 'Athens', country: 'GR', lat: 37.98, lng: 23.73 },
];

export function searchCities(q: string, limit = 6): CityRec[] {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    const starts = CITY_DB.filter((c) => c.name.toLowerCase().startsWith(s));
    const contains = CITY_DB.filter(
        (c) => !c.name.toLowerCase().startsWith(s) && c.name.toLowerCase().includes(s)
    );
    return [...starts, ...contains].slice(0, limit);
}
