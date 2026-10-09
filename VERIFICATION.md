# To verify before go-live — helsinkiputkimies.fi

Company data was checked against each company's own website on **9.10.2026**. Everything below is either unverified, a placeholder, or a decision only the site owner can make.

## 1. Legal entity and contact details (blocking)
- [ ] Site operator's legal name, Y-tunnus and contact email — placeholders marked `[TÄYDENNÄ: …]` on `/yhteystiedot`, `/kayttoehdot`, `/tietosuojaseloste`, `/evasteet` (search the code for `TÄYDENNÄ`).
- [ ] Privacy policy: data controller, legal basis, recipients, processors (hosting, email), transfers outside EU/EEA, retention periods. Have it reviewed before collecting any personal data.
- [ ] **Name-confusion risk:** a real company, *Helsingin Putkimies Oy* (helsinginputkimies.fi), operates under a near-identical name and domain. Get legal advice on trademark/trade-name and passing-off risk. The site already states it is not a plumbing company and has no connection to similarly named companies — keep that wording prominent.

## 2. Company records (`data/providers.ts`)
Verified 9.10.2026 from the companies' own pages. Still open:

| Company | Open items |
|---|---|
| LVI-palvelu Uno Oy | Y-tunnus; vehicle charge outside weekdays 7–16 (not published → calculator asks); whether the 150,75 € alarm fee applies to all evening/weekend work or only urgent jobs |
| LVI Kröger (V.J Group Oy) | Sunday rate (only "pyhät" listed); whether billing rounds up to started hours; whether 2 h minimum also applies on holidays as stated |
| Töölön Putkiliike Oy | Minimum charge for päivystys work (not published); weekday minimum shown as published 206,80 € (2 × 81,44 + 43,93 = 206,81 — 1 cent rounding difference in their list) |
| KH-Suomi Putki | Legal name and Y-tunnus not shown on site; minimum charge; whether 70 €/h applies outside daytime; emergency prices. Dedicated price page (`/putkityot-hinnasto/`) not yet checked |
| LVI-Express (Cheffi-Group Oy) | Y-tunnus; minimum charge; evening/weekend rates; when the 12,55 € "Huoltoauto" line and 138,05 € alarm fee apply |
| Helsingin Putkimies Oy | No published prices; service area; homepage last updated 2024 — confirm current details |

- [ ] Confirm each company is happy to be listed (not legally required for factual public price data, but good practice).
- [ ] Re-check all prices on a schedule (suggest monthly) and update `lastChecked`.
- [ ] Emergency availability is shown only as each company's *own claim* — the site has not verified 24/7 availability.

## 3. Content
- [ ] **Estimate ranges** on `/putkimiehen-hinta` and service pages (hanan vaihto 100–250 €, etc.) come from the brief and are labelled as planning estimates. Validate or replace before publication. Note: several lower bounds (100 €) are below the cheapest computable weekday minimum from published lists (~157 €); only KH-Suomi (70 €/h + 25 €, minimum unknown) could plausibly be lower.
- [ ] Price ranges quoted in FAQ/article text ("63–81 €/h", "157–207 €", "119–163 € hälytysmaksu", "125–245 €/h päivystys") are derived from `providers.ts` as of 9.10.2026 — update the text when data changes.
- [ ] Taloyhtiö responsibility article: general information only; have someone with housing-company expertise review it.
- [ ] Kotitalousvähennys: no amounts are stated on purpose; text links to vero.fi.
- [ ] Finnish copy proofread by a native editor.

## 4. Photography
- [ ] No photos are included (none licensed). The brief asks for professional plumbing photography: add licensed images via `next/image` with descriptive Finnish `alt` text. Do not use company logos without permission.

## 5. Lead form (`/tarjouspyynto`)
- [ ] Currently **preview only**: server validates, then returns "nothing was sent". Nothing is stored or forwarded. Page is `noindex`.
- [ ] Before enabling: implement forwarding in `app/api/tiedustelu/route.ts`, add contact fields only if needed, rate limiting, update privacy policy, decide recipients, test end-to-end, then set `LEADS_ENABLED=true`.
- [ ] If leads are sold to companies, disclose it on the form and in the privacy policy.

## 6. Technical
- [ ] Run `npm install && npm run build` locally — this package was written and render-tested in a sandbox without access to the npm registry, so the production build has not been run yet.
- [ ] Check Lighthouse (performance, accessibility) and mobile layouts on real devices.
- [ ] Submit `https://helsinkiputkimies.fi/sitemap.xml` to Google Search Console.
- [ ] If analytics is added, add a consent banner and update `/evasteet`.
