# chi-0828.github.io

Personal academic website of Liang-Chi Chen, built with React 19, Vite, Tailwind CSS and `react-router-dom` (hash routing).
The `redesign` branch is the live site; pushing to it triggers the GitHub Pages workflow in `.github/workflows/deploy.yml`.

## Develop

```bash
npm install
npm run dev        # http://localhost:7777
npm run typecheck  # tsc --noEmit
npm run build      # outputs to dist/
```

## Where the content lives

| What | File |
| --- | --- |
| Profile, bio, contact links, CV link | `constants.tsx` → `PROFILE` |
| Education / experience timeline | `constants.tsx` → `EDUCATION`, `EXPERIENCE` |
| News and honors | `constants.tsx` → `NEWS`, `AWARDS` |
| Publications | `constants.tsx` → `PAPERS` (types in `types.ts`) |
| Logos and avatar | `public/img/` |
| Travel globe flights | `public/trips.json` |

### Updating the travel globe

Open `/#/travel?edit` locally to get an editor with city autocomplete, import/export and a per-trip delete button.
Export the JSON, replace `public/trips.json`, and commit. The public page only shows what is in that file.

## Layout

```
App.tsx            routes + page shell
pages/             Home, Publications, Travel (lazy-loaded, pulls in three.js)
components/        TopBar, travel helpers, city autocomplete + offline city list
constants.tsx      all site content
types.ts           content types
```
