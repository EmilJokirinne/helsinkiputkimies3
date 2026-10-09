import { ExternalLink, MapPin, Clock, CalendarCheck, Info, BadgeAlert } from "lucide-react";
import type { Provider } from "@/data/providers";
import { formatDateFi, formatEur, formatHourly } from "@/lib/format";

const ASK = "Hinta pyydettävä yritykseltä";

function Row({ label, value, muted = false }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-line/70 py-2 last:border-0">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className={`num text-right text-[15px] font-semibold ${muted ? "font-normal text-muted" : "text-navy-900"}`}>{value}</dd>
    </div>
  );
}

export function ProviderCard({ p }: { p: Provider }) {
  const arki = p.tariffs.arki;
  const minimum =
    p.publishedMinimumCharge !== null
      ? formatEur(p.publishedMinimumCharge)
      : arki.minHours !== null
        ? `${arki.minHours} h`
        : null;

  return (
    <article className="card flex h-full flex-col p-5 sm:p-6" aria-labelledby={`yritys-${p.id}`}>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 id={`yritys-${p.id}`} className="text-lg font-semibold leading-snug">
            {p.name}
          </h3>
          {p.legalName && p.legalName !== p.name && <p className="text-sm text-muted">{p.legalName}</p>}
        </div>
        {p.sponsored && (
          <span className="rounded-full bg-warn-50 px-2.5 py-1 text-xs font-semibold text-warn-700">Kaupallinen yhteistyö</span>
        )}
        {!p.dataComplete && (
          <span className="inline-flex items-center gap-1 rounded-full bg-navy-50 px-2.5 py-1 text-xs font-semibold text-navy-700">
            <BadgeAlert className="h-3.5 w-3.5" aria-hidden="true" />
            Tiedot osittaiset
          </span>
        )}
      </div>

      <ul className="mt-3 space-y-1.5 text-sm text-ink/85">
        <li className="flex gap-2">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" aria-hidden="true" />
          <span>{p.serviceArea ?? "Palvelualue tarkistettava yritykseltä"}</span>
        </li>
        <li className="flex gap-2">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" aria-hidden="true" />
          <span>
            {p.emergencyAdvertised === true
              ? "Ilmoittaa päivystyksestä (yrityksen oma ilmoitus)"
              : p.emergencyAdvertised === false
                ? "Ei päivystystä ilmoitettu"
                : "Päivystys tarkistettava yritykseltä"}
          </span>
        </li>
      </ul>

      <dl className="mt-4 rounded-xl bg-surface px-4 py-1">
        <Row label="Tuntihinta arkisin" value={arki.hourly !== null ? formatHourly(arki.hourly) : ASK} muted={arki.hourly === null} />
        <Row label="Ajo-/huoltoautoveloitus" value={arki.vehicle !== null ? formatEur(arki.vehicle) : ASK} muted={arki.vehicle === null} />
        <Row label="Minimiveloitus" value={minimum ?? ASK} muted={minimum === null} />
        {p.perKm !== null && <Row label="Kilometrikorvaus" value={`${formatEur(p.perKm)}/km`} />}
      </dl>
      <p className="mt-2 text-xs text-muted">Hinnat sis. alv 25,5 % yrityksen hinnaston mukaan.</p>

      {p.services.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-navy-900">Palvelut yrityksen sivujen mukaan</h4>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {p.services.map((s) => (
              <li key={s} className="rounded-full border border-line px-2.5 py-1 text-xs text-ink/80">
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}

      <details className="group mt-4 text-sm">
        <summary className="inline-flex cursor-pointer items-center gap-1.5 font-semibold text-teal-700">
          <Info className="h-4 w-4" aria-hidden="true" />
          Hinnaston ehdot ja huomiot
        </summary>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-ink/85 marker:text-teal-600">
          {p.travelNote && <li>{p.travelNote}</li>}
          {p.minimumNote && <li>{p.minimumNote}</li>}
          {p.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
          {p.extraFees.map((f) => (
            <li key={f.label}>
              {f.label} {formatEur(f.amount)}: {f.note}
            </li>
          ))}
          {p.materialsNote && <li>{p.materialsNote}</li>}
          {p.emergencyNote && <li>{p.emergencyNote}</li>}
        </ul>
      </details>

      <div className="mt-auto pt-5">
        <p className="mb-3 flex items-center gap-1.5 text-xs text-muted">
          <CalendarCheck className="h-3.5 w-3.5" aria-hidden="true" />
          Tiedot tarkistettu {formatDateFi(p.lastChecked)}
          {p.priceListUrl && (
            <>
              {" · "}
              <a href={p.priceListUrl} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-navy-900">
                lähde
                <span className="sr-only"> (yrityksen hinnasto, avautuu uuteen välilehteen)</span>
              </a>
            </>
          )}
        </p>
        <a
          href={p.website}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="btn-secondary w-full"
        >
          Siirry yrityksen sivuille
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">: {p.name} (avautuu uuteen välilehteen)</span>
        </a>
      </div>
    </article>
  );
}
