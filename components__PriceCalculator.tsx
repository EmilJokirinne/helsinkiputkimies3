"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import { AlertCircle, ArrowDownUp, ExternalLink, Info } from "lucide-react";
import type { Provider, Slot } from "@/data/providers";
import { SLOT_LABELS } from "@/data/providers";
import { SERVICES } from "@/data/services";
import { estimateForProvider } from "@/lib/calc";
import { formatEur, formatHourly } from "@/lib/format";

const SLOTS: Slot[] = ["arki", "ilta", "lauantai", "sunnuntai", "pyha"];

function parseNum(v: string): number | null {
  const n = Number(v.replace(",", ".").trim());
  return v.trim() === "" || !Number.isFinite(n) || n < 0 ? null : n;
}

export function PriceCalculator({ providers, initialService }: { providers: Provider[]; initialService?: string }) {
  const id = useId();
  const [service, setService] = useState(initialService ?? SERVICES[3].slug);
  const [slot, setSlot] = useState<Slot>("arki");
  const [hoursStr, setHoursStr] = useState(() => String(SERVICES.find((s) => s.slug === (initialService ?? SERVICES[3].slug))?.defaultHours ?? 1).replace(".", ","));
  const [materialsStr, setMaterialsStr] = useState("");
  const [kmStr, setKmStr] = useState("");

  const svc = SERVICES.find((s) => s.slug === service);
  const hours = parseNum(hoursStr);
  const materials = parseNum(materialsStr) ?? 0;
  const km = parseNum(kmStr);
  const hoursValid = hours !== null && hours > 0 && hours <= 40;

  const results = useMemo(() => {
    if (!hoursValid) return [];
    return providers
      .map((p) => ({ p, r: estimateForProvider(p, { slot, hours: hours as number, materials, km }) }))
      .sort((a, b) => {
        if (a.r.ok && b.r.ok) return a.r.total - b.r.total;
        if (a.r.ok) return -1;
        if (b.r.ok) return 1;
        return a.p.name.localeCompare(b.p.name, "fi");
      });
  }, [providers, slot, hours, materials, km, hoursValid]);

  const okCount = results.filter((x) => x.r.ok).length;

  return (
    <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
      <form className="card h-fit p-5 sm:p-6 lg:sticky lg:top-24" onSubmit={(e) => e.preventDefault()} aria-describedby={`${id}-ohje`}>
        <h2 className="text-lg font-semibold">Työn tiedot</h2>
        <p id={`${id}-ohje`} className="mt-1 text-sm text-muted">
          Arvio päivittyy heti. Tiedot eivät lähde selaimestasi minnekään.
        </p>

        <div className="mt-5 space-y-4">
          <div>
            <label htmlFor={`${id}-tyo`} className="label">
              Työn tyyppi
            </label>
            <select
              id={`${id}-tyo`}
              className="field"
              value={service}
              onChange={(e) => {
                setService(e.target.value);
                const s = SERVICES.find((x) => x.slug === e.target.value);
                if (s) setHoursStr(String(s.defaultHours).replace(".", ","));
              }}
            >
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.navLabel}
                </option>
              ))}
            </select>
            {svc && (
              <p className="mt-1.5 text-xs text-muted">
                {svc.estimate ? `Suunnitteluarvio: ${svc.estimate}. ` : "Hinta määräytyy kohdekohtaisesti. "}
                Tuntimäärä on oletus – muuta se omaan tilanteeseesi.
              </p>
            )}
          </div>

          <fieldset>
            <legend className="label">Työaika</legend>
            <div className="grid grid-cols-1 gap-1.5">
              {SLOTS.map((s) => (
                <label
                  key={s}
                  className={`flex cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2 text-sm ${
                    slot === s ? "border-teal-600 bg-teal-50 font-semibold text-navy-900" : "border-line"
                  }`}
                >
                  <input type="radio" name={`${id}-aika`} value={s} checked={slot === s} onChange={() => setSlot(s)} className="accent-teal-700" />
                  {SLOT_LABELS[s]}
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor={`${id}-tunnit`} className="label">
              Arvioitu työaika (h)
            </label>
            <input
              id={`${id}-tunnit`}
              inputMode="decimal"
              className="field num"
              value={hoursStr}
              onChange={(e) => setHoursStr(e.target.value)}
              aria-invalid={!hoursValid}
              aria-describedby={`${id}-tunnit-virhe`}
            />
            {!hoursValid && (
              <p id={`${id}-tunnit-virhe`} className="mt-1.5 text-xs font-semibold text-danger-700">
                Syötä työaika väliltä 0,5–40 tuntia.
              </p>
            )}
          </div>

          <div>
            <label htmlFor={`${id}-tarvikkeet`} className="label">
              Tarvikkeet (€, valinnainen)
            </label>
            <input
              id={`${id}-tarvikkeet`}
              inputMode="decimal"
              className="field num"
              placeholder="esim. 40"
              value={materialsStr}
              onChange={(e) => setMaterialsStr(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor={`${id}-km`} className="label">
              Ajomatka edestakaisin (km, jos tiedossa)
            </label>
            <input
              id={`${id}-km`}
              inputMode="decimal"
              className="field num"
              placeholder="tarvitaan km-korvausta perivälle"
              value={kmStr}
              onChange={(e) => setKmStr(e.target.value)}
            />
          </div>
        </div>
      </form>

      <section aria-labelledby={`${id}-tulos`} aria-live="polite">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 id={`${id}-tulos`} className="text-xl font-semibold">
            Arvio julkaistuilla hinnastoilla
          </h2>
          <p className="flex items-center gap-1.5 text-sm text-muted">
            <ArrowDownUp className="h-4 w-4" aria-hidden="true" />
            Järjestetty arvioidun kokonaishinnan mukaan
          </p>
        </div>
        <p className="mt-1 text-sm text-muted">
          {SLOT_LABELS[slot]} · {hoursValid ? `${hoursStr.replace(".", ",")} h` : "–"} · arvio laskettavissa {okCount}/{providers.length} yritykselle
        </p>

        {!hoursValid ? (
          <div className="card mt-4 p-6 text-sm text-muted">Korjaa työaika, niin arvio lasketaan.</div>
        ) : (
          <ul className="mt-4 space-y-3">
            {results.map(({ p, r }) => {
              const t = p.tariffs[slot];
              return (
                <li key={p.id} className="card p-4 sm:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">{p.name}</h3>
                      <p className="num text-sm text-muted">
                        Tuntihinta: {t.hourly !== null ? formatHourly(t.hourly) : "ei julkaistu"}
                        {p.sponsored && " · Kaupallinen yhteistyö"}
                      </p>
                    </div>
                    <div className="text-right">
                      {r.ok ? (
                        <>
                          <p className="num text-2xl font-bold text-navy-900">{formatEur(r.total)}</p>
                          <p className="text-xs text-muted">arvio, sis. alv</p>
                        </>
                      ) : (
                        <p className="max-w-[12rem] text-sm font-semibold text-warn-700">Pyydä hinta yritykseltä</p>
                      )}
                    </div>
                  </div>

                  {r.ok ? (
                    <details className="mt-3 text-sm">
                      <summary className="cursor-pointer font-semibold text-teal-700">Näytä erittely</summary>
                      <dl className="mt-2 rounded-lg bg-surface px-3 py-1">
                        {r.lines.map((l) => (
                          <div key={l.label} className="flex justify-between gap-3 border-b border-line/70 py-1.5 last:border-0">
                            <dt>{l.label}</dt>
                            <dd className="num font-semibold">{formatEur(l.amount)}</dd>
                          </div>
                        ))}
                      </dl>
                      {r.notes.length > 0 && (
                        <ul className="mt-2 space-y-1 text-xs text-muted">
                          {r.notes.map((n) => (
                            <li key={n} className="flex gap-1.5">
                              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                              {n}
                            </li>
                          ))}
                        </ul>
                      )}
                    </details>
                  ) : (
                    <div className="mt-3 rounded-lg bg-warn-50 p-3 text-sm text-ink/85">
                      <p className="flex items-start gap-1.5">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-warn-700" aria-hidden="true" />
                        <span>
                          Arviota ei lasketa, koska seuraavaa ei ole julkaistu tai syötetty: {r.missing.join(", ")}.
                        </span>
                      </p>
                    </div>
                  )}

                  <a
                    href={p.priceListUrl ?? p.website}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-teal-700 hover:underline"
                  >
                    {p.priceListUrl ? "Yrityksen hinnasto" : "Siirry yrityksen sivuille"}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="sr-only"> ({p.name}, avautuu uuteen välilehteen)</span>
                  </a>
                </li>
              );
            })}
          </ul>
        )}

        <div className="mt-6 rounded-2xl border border-line bg-surface p-5 text-sm leading-relaxed text-ink/85">
          <p className="font-semibold text-navy-900">Näin arvio lasketaan</p>
          <p className="mt-1">
            Arvio = työ (vähintään minimiveloitus, tarvittaessa alkaviin tunteihin pyöristettynä) + lähtö- tai hälytysmaksu +
            ajoveloitus + kilometrikorvaus + tarvikkeet. Laskelma käyttää vain yritysten julkaisemia hintoja. Se ei ole sitova
            tarjous eikä huomioi esimerkiksi pysäköintiä, laitevuokria tai yrityksen tapaa laskea matka-aikaa työaikaan.
            Varmista lopullinen hinta aina yritykseltä. <Link href="/putkimiehen-hinta" className="link">Lue hintaopas</Link>.
          </p>
        </div>

        <OwnQuoteCalculator />
      </section>
    </div>
  );
}

/** Laske oman tarjouksen tai puhelimessa saadun hinnan perusteella. */
function OwnQuoteCalculator() {
  const id = useId();
  const [v, setV] = useState({ hourly: "", minH: "", hours: "", callout: "", travel: "", materials: "" });
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement>) => setV((s) => ({ ...s, [k]: e.target.value }));

  const hourly = parseNum(v.hourly);
  const hours = parseNum(v.hours);
  const minH = parseNum(v.minH) ?? 0;
  const ready = hourly !== null && hours !== null && hours > 0;
  const billed = ready ? Math.max(hours as number, minH) : 0;
  const total = ready
    ? billed * (hourly as number) + (parseNum(v.callout) ?? 0) + (parseNum(v.travel) ?? 0) + (parseNum(v.materials) ?? 0)
    : null;

  const fields: { k: keyof typeof v; label: string; ph: string }[] = [
    { k: "hourly", label: "Tuntihinta (€/h)", ph: "pakollinen" },
    { k: "hours", label: "Työaika (h)", ph: "pakollinen" },
    { k: "minH", label: "Minimiveloitus (h)", ph: "esim. 2" },
    { k: "callout", label: "Lähtö-/hälytysmaksu (€)", ph: "0" },
    { k: "travel", label: "Matkakulut (€)", ph: "0" },
    { k: "materials", label: "Tarvikkeet (€)", ph: "0" },
  ];

  return (
    <section aria-labelledby={`${id}-oma`} className="card mt-6 p-5 sm:p-6">
      <h2 id={`${id}-oma`} className="text-lg font-semibold">
        Laske saamasi hinnan perusteella
      </h2>
      <p className="mt-1 text-sm text-muted">
        Jos yritys kertoi hinnat puhelimessa tai tarjouksessa, syötä ne tähän ja vertaa kokonaishintoja.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {fields.map((f) => (
          <div key={f.k}>
            <label htmlFor={`${id}-${f.k}`} className="label !text-[13px]">
              {f.label}
            </label>
            <input id={`${id}-${f.k}`} inputMode="decimal" className="field num" placeholder={f.ph} value={v[f.k]} onChange={set(f.k)} />
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm" aria-live="polite">
        {total !== null ? (
          <>
            Arvioitu kokonaishinta: <strong className="num text-lg text-navy-900">{formatEur(total)}</strong>{" "}
            <span className="text-muted">(laskutettava työaika {String(billed).replace(".", ",")} h)</span>
          </>
        ) : (
          <span className="text-muted">Syötä vähintään tuntihinta ja työaika.</span>
        )}
      </p>
    </section>
  );
}
