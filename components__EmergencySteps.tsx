import Link from "next/link";
import { CircleAlert, Droplets, PlugZap, Building, Siren } from "lucide-react";

const STEPS = [
  {
    icon: Droplets,
    title: "Sulje vesi, jos se on turvallista",
    text: "Käytä laitekohtaista venttiiliä (hanan tai koneen alla) tai huoneistokohtaisia sulkuventtiilejä.",
  },
  {
    icon: PlugZap,
    title: "Pysy erossa sähkölaitteista",
    text: "Suojaa tavarat, mutta älä koske pistorasioihin, valaisimiin tai laitteisiin märissä tiloissa.",
  },
  {
    icon: Building,
    title: "Ilmoita huoltoyhtiölle",
    text: "Kerros- ja rivitalossa ilmoita vahingosta huoltoyhtiön päivystykseen tai isännöitsijälle.",
  },
  {
    icon: Siren,
    title: "Hanki kiireellistä apua",
    text: "Jos vuoto on vakava tai leviää, ota yhteys päivystävään putkiliikkeeseen.",
  },
];

export function EmergencySteps({ compact = false }: { compact?: boolean }) {
  return (
    <section aria-labelledby="hata-otsikko" className="rounded-2xl border border-danger-700/15 bg-danger-50 p-6 sm:p-8">
      <div className="flex items-start gap-3">
        <CircleAlert className="mt-1 h-6 w-6 shrink-0 text-danger-700" aria-hidden="true" />
        <div>
          <h2 id="hata-otsikko" className="text-xl font-semibold sm:text-2xl">
            Putki vuotaa tai viemäri tulvii? Toimi näin
          </h2>
          <p className="mt-1 text-[15px] text-ink/80">
            Hengen- tai terveydenvaarassa soita hätänumeroon 112.
          </p>
        </div>
      </div>
      <ol className={`mt-6 grid gap-4 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
        {STEPS.map((s, i) => (
          <li key={s.title} className="rounded-xl bg-white p-4 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2">
              <span className="num flex h-7 w-7 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
                {i + 1}
              </span>
              <s.icon className="h-5 w-5 text-danger-700" aria-hidden="true" />
            </div>
            <h3 className="mt-3 text-[15.5px] font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink/80">{s.text}</p>
          </li>
        ))}
      </ol>
      <p className="mt-5 text-sm text-ink/80">
        HelsinkiPutkimies.fi ei ole putkiliike eikä välitä päivystyspalveluita. Päivystyksen saatavuus, saapumisajat ja
        lisämaksut vaihtelevat yrityksittäin, ja ne on aina varmistettava suoraan yritykseltä.{" "}
        <Link href="/oppaat/mita-tehda-kun-putki-vuotaa" className="link">
          Lue tarkemmat ohjeet
        </Link>
        .
      </p>
    </section>
  );
}
