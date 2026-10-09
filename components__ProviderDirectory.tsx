"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import type { Provider } from "@/data/providers";
import { ProviderCard } from "./ProviderCard";

type Sort = "nimi" | "tuntihinta";

export function ProviderDirectory({ providers }: { providers: Provider[] }) {
  const [onlyPrices, setOnlyPrices] = useState(false);
  const [onlyEmergencyPrices, setOnlyEmergencyPrices] = useState(false);
  const [sort, setSort] = useState<Sort>("nimi");

  const list = useMemo(() => {
    let l = providers.slice();
    if (onlyPrices) l = l.filter((p) => p.tariffs.arki.hourly !== null);
    if (onlyEmergencyPrices) l = l.filter((p) => p.tariffs.ilta.hourly !== null || p.tariffs.lauantai.hourly !== null);
    l.sort((a, b) => {
      if (sort === "tuntihinta") {
        const ah = a.tariffs.arki.hourly ?? Infinity;
        const bh = b.tariffs.arki.hourly ?? Infinity;
        if (ah !== bh) return ah - bh;
      }
      return a.name.localeCompare(b.name, "fi");
    });
    return l;
  }, [providers, onlyPrices, onlyEmergencyPrices, sort]);

  return (
    <div>
      <fieldset className="card flex flex-col gap-4 p-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <legend className="sr-only">Suodata ja järjestä</legend>
        <div className="flex items-center gap-2 text-sm font-semibold text-navy-900">
          <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
          Suodata
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="h-4 w-4 accent-teal-700" checked={onlyPrices} onChange={(e) => setOnlyPrices(e.target.checked)} />
            Julkaissut arkihinnan
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="h-4 w-4 accent-teal-700"
              checked={onlyEmergencyPrices}
              onChange={(e) => setOnlyEmergencyPrices(e.target.checked)}
            />
            Julkaissut ilta- tai viikonloppuhinnan
          </label>
        </div>
        <label className="flex items-center gap-2 text-sm">
          <span className="text-muted">Järjestys</span>
          <select className="field !w-auto !py-2" value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
            <option value="nimi">Aakkosjärjestys</option>
            <option value="tuntihinta">Arkituntihinta (nouseva)</option>
          </select>
        </label>
      </fieldset>

      <p className="mt-4 text-sm text-muted" aria-live="polite">
        Näytetään {list.length} / {providers.length} yritystä.
        {sort === "tuntihinta" && " Tuntihinta ei yksin kerro kokonaishinnasta – katso myös minimiveloitus ja ajoveloitus."}
      </p>

      {list.length === 0 ? (
        <div className="card mt-4 p-8 text-center">
          <p className="font-semibold text-navy-900">Valinnoilla ei löytynyt yrityksiä.</p>
          <button
            type="button"
            className="btn-secondary mt-4"
            onClick={() => {
              setOnlyPrices(false);
              setOnlyEmergencyPrices(false);
            }}
          >
            Poista suodattimet
          </button>
        </div>
      ) : (
        <ul className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <li key={p.id}>
              <ProviderCard p={p} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
