# HelsinkiPutkimies.fi

Independent Finnish-language information and price-comparison site for plumbing services in Helsinki. It is **not** a plumbing company: it collects prices that companies publish themselves, calculates total-cost estimates and publishes guides.

Stack: Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · lucide-react. No database, no API keys.

## Setup

This package is delivered **flat** (all files in one folder). File names encode their folder with `__`:
`app__oppaat__[slug]__page.tsx` → `app/oppaat/[slug]/page.tsx`.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

`npm run build` and `npm run dev` run `restore.mjs` automatically first, so you can upload the flat files straight to Vercel or a Git repo. You can also run `node restore.mjs` manually; it is safe to run repeatedly.

Requires Node.js 20.9+.

## Deployment (Vercel)

1. Upload the files (flat or restored) to a Git repository and import it in Vercel (framework preset: Next.js). The build restores the folders automatically.
2. Add the domain `helsinkiputkimies.fi`. The canonical URL is set in `lib/site.ts` (`SITE.url`).
3. Optional env var: `LEADS_ENABLED=true` — only after the lead forwarding is implemented (see below).

## Structure

| Path | Purpose |
|---|---|
| `data/providers.ts` | **All company prices and terms** — the only place to edit them |
| `data/services.ts` | Service page content, quick links, estimate table |
| `data/articles.ts` | Guides (`/oppaat/...`) — add an object to publish a new guide |
| `data/faq.ts` | FAQ |
| `lib/calc.ts` | Total-cost calculation |
| `lib/site.ts`, `lib/metadata.ts` | Site constants, nav, SEO metadata helper |
| `components/` | UI components (header, cards, calculator, form, FAQ, breadcrumbs…) |
| `app/` | Routes, sitemap, robots, OG image, API route |

Routes: `/`, `/putkimiehen-hinta`, `/putkimiehet-helsinki`, `/hintavertailu`, `/putkipalvelut`, eight service pages (`/putkimies-paivystys`, `/viemarin-avaus`, `/vesivuodon-korjaus`, `/hanan-vaihto`, `/wc-istuimen-asennus`, `/astianpesukoneen-asennus`, `/putkiremontti`, `/lvi-huolto`), `/oppaat` + 6 guides, `/usein-kysyttya`, `/tarjouspyynto`, `/yhteystiedot`, `/kayttoehdot`, `/tietosuojaseloste`, `/evasteet`.

## Updating company prices

Edit `data/providers.ts`. Each company has `tariffs` per time slot (`arki`, `ilta`, `lauantai`, `sunnuntai`, `pyha`):

```ts
arki: { hourly: 62.75, vehicle: 31.38, callout: 0, minHours: 2 },
```

- Amounts are euros **including VAT 25,5 %**.
- `null` = not published. The site then shows "Hinta pyydettävä yritykseltä" and the calculator does not estimate. Never guess.
- `0` = the price list mentions no such fee for that slot.
- `perKm` adds a per-km charge (the calculator asks the user for km).
- `roundUpToFullHour: true` if the company bills started hours.
- Update `lastChecked: "YYYY-MM-DD"` every time you check a price list. Dates appear on cards, the price table and the footer.
- `sponsored: true` shows a "Kaupallinen yhteistyö" label. Also update the sentences that say there are no paid listings (`app/putkimiehet-helsinki/page.tsx`, `app/yhteystiedot/page.tsx`).
- `dataComplete: false` shows a "Tiedot osittaiset" badge.

Some FAQ/article texts quote price ranges derived from this data (e.g. "63–81 €/h") — search for them when prices change.

## Lead form

`/tarjouspyynto` posts to `app/api/tiedustelu/route.ts`, which validates (same rules as the browser, `lib/inquiry.ts`), applies a honeypot and minimum fill time, and then returns a "preview mode — nothing sent" response. Nothing is stored. To go live: implement forwarding, rate limiting, finish the privacy policy, test, then set `LEADS_ENABLED=true`.

## SEO

Per-page title, description, canonical and Open Graph via `pageMetadata()`; `sitemap.xml` and `robots.txt` generated from data; JSON-LD: `WebSite`, `BreadcrumbList`, `Article` (guides), `FAQPage` (FAQ blocks), `WebPage` (services). No `LocalBusiness`, `Review` or `AggregateRating` markup by design.

## Before go-live

See **VERIFICATION.md** for the full list of unverified data and placeholders.
