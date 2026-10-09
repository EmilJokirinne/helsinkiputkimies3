import Link from "next/link";
import { PROVIDERS } from "@/data/providers";
import { estimateForProvider } from "@/lib/calc";
import { formatDateFi, formatEur, formatHourly } from "@/lib/format";

/**
 * Vertailutaulukko yritysten julkaisemista hinnoista: tuntihinta sekä
 * 1 h:n ja 2 h:n arkityön kokonaishinta (ilman tarvikkeita ja km-korvausta).
 */
export function PublishedPriceTable() {
  const rows = PROVIDERS.map((p) => {
    const one = estimateForProvider(p, { slot: "arki", hours: 1, materials: 0, km: p.perKm !== null ? 0 : null });
    const two = estimateForProvider(p, { slot: "arki", hours: 2, materials: 0, km: p.perKm !== null ? 0 : null });
    return { p, one, two };
  });
  const ASK = <span className="text-sm font-normal text-muted">Pyydä hinta</span>;

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-[15px]">
          <caption className="sr-only">Putkiliikkeiden julkaistut arkihinnat ja niistä lasketut kokonaishinnat</caption>
          <thead className="bg-navy-900 text-sm text-white">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Yritys</th>
              <th scope="col" className="px-4 py-3 font-semibold">Tuntihinta arkisin</th>
              <th scope="col" className="px-4 py-3 font-semibold">1 h:n työ yhteensä</th>
              <th scope="col" className="px-4 py-3 font-semibold">2 h:n työ yhteensä</th>
              <th scope="col" className="px-4 py-3 font-semibold">Tarkistettu</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map(({ p, one, two }) => (
              <tr key={p.id} className="num">
                <th scope="row" className="px-4 py-3 font-semibold text-navy-900">
                  {p.name}
                </th>
                <td className="px-4 py-3">{p.tariffs.arki.hourly !== null ? formatHourly(p.tariffs.arki.hourly) : ASK}</td>
                <td className="px-4 py-3 font-semibold">{one.ok ? formatEur(one.total) : ASK}</td>
                <td className="px-4 py-3 font-semibold">{two.ok ? formatEur(two.total) : ASK}</td>
                <td className="px-4 py-3 text-sm text-muted">{formatDateFi(p.lastChecked)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-line bg-surface px-4 py-3 text-xs leading-relaxed text-muted">
        Kokonaishinta = työ (minimiveloitus huomioiden) + ajo- tai huoltoautoveloitus, sis. alv 25,5 %. Ei sisällä
        tarvikkeita, kilometrikorvauksia, pysäköintiä eikä laitevuokria. &quot;Pyydä hinta&quot; tarkoittaa, että jokin
        laskennassa tarvittava erä (esim. minimiveloitus) puuttuu julkaistusta hinnastosta.{" "}
        <Link href="/hintavertailu" className="link">
          Laske omalla työajalla
        </Link>
        .
      </p>
    </div>
  );
}
