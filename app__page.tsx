import Link from "next/link";
import { ArrowRight, Calculator, CheckCircle2, BookOpen, Scale, Receipt, ShieldCheck } from "lucide-react";
import { QUICK_LINKS } from "@/data/services";
import { PROVIDERS, PROVIDERS_LAST_CHECKED } from "@/data/providers";
import { ARTICLES } from "@/data/articles";
import { FAQS } from "@/data/faq";
import { weekdayTotals } from "@/lib/calc";
import { formatDateFi, formatEur, formatHourly } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";
import { ServiceIcon } from "@/components/ServiceIcon";
import { EmergencySteps } from "@/components/EmergencySteps";
import { FaqList } from "@/components/FaqList";

export const metadata = pageMetadata({
  title: "Putkimies Helsinki – vertaile hintoja ja löydä sopiva palvelu",
  description:
    "Putkimies Helsingissä: vertaile putkiliikkeiden julkaistuja hintoja, arvioi putkityön kokonaishinta ja lue käytännön oppaat vuotoihin, tukoksiin ja asennuksiin.",
  path: "/",
});

const BENEFITS = [
  "Hintatietoa useista palveluntarjoajista",
  "Vertailu helpottaa sopivan tekijän löytämistä",
  "Käytännön oppaita putkiongelmiin",
];

export default function HomePage() {
  const totals = weekdayTotals(PROVIDERS, 1).sort((a, b) => a.r.total - b.r.total);
  const max = Math.max(...totals.map((t) => t.r.total), 1);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-navy-50 to-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle_at_1px_1px,#c9d4e2_1px,transparent_0)] [background-size:22px_22px]" />
        <div className="container-page relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_1fr] lg:py-20">
          <div>
            <p className="eyebrow">Riippumaton hintavertailu · Helsinki ja pääkaupunkiseutu</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] sm:text-5xl">
              Putkimies Helsingissä – vertaile hintoja ja löydä sopiva palvelu
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Selvitä putkitöiden tyypilliset hinnat, vertaile helsinkiläisiä putkiliikkeitä ja löydä tarpeeseesi sopiva
              LVI-palvelu.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/putkimiehet-helsinki" className="btn-primary">
                Vertaile putkimiehiä
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/putkimiehen-hinta" className="btn-secondary">
                Katso putkitöiden hinnat
              </Link>
            </div>
            <ul className="mt-8 grid gap-2.5 sm:grid-cols-3 sm:gap-4">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm font-medium text-navy-900">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal-600" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <figure className="card p-5 sm:p-6">
            <figcaption>
              <p className="eyebrow">Esimerkki julkaistuista hinnastoista</p>
              <p className="mt-1.5 font-[family-name:var(--font-heading)] text-lg font-bold text-navy-900">
                Sama tunnin arkityö – eri kokonaishinta
              </p>
              <p className="mt-1 text-sm text-muted">Minimiveloitus ja ajoveloitus mukana, tarvikkeet eivät.</p>
            </figcaption>
            <ul className="mt-5 space-y-4">
              {totals.map(({ p, r }) => (
                <li key={p.id}>
                  <div className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="font-semibold text-navy-900">{p.name}</span>
                    <span className="num font-bold text-navy-900">{formatEur(r.total)}</span>
                  </div>
                  <div className="mt-1.5 h-2.5 rounded-full bg-navy-50" aria-hidden="true">
                    <div className="h-2.5 rounded-full bg-teal-600" style={{ width: `${(r.total / max) * 100}%` }} />
                  </div>
                  <p className="num mt-1 text-xs text-muted">
                    Tuntihinta {formatHourly(p.tariffs.arki.hourly ?? 0)}
                    {p.perKm !== null && " + kilometrikorvaus"}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-line pt-3 text-xs text-muted">
              Hinnat sis. alv yritysten hinnastojen mukaan, tarkistettu {formatDateFi(PROVIDERS_LAST_CHECKED)}. Mukana
              yritykset, joiden hinnastosta arvio voidaan laskea.{" "}
              <Link href="/hintavertailu" className="link">
                Laske oma arvio
              </Link>
            </p>
          </figure>
        </div>
      </section>

      {/* PIKANAVIGOINTI */}
      <section aria-labelledby="palvelut-otsikko" className="container-page mt-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">Mihin tarvitset apua?</p>
            <h2 id="palvelut-otsikko" className="mt-2 text-2xl font-bold sm:text-3xl">
              Valitse putkityö
            </h2>
          </div>
          <Link href="/putkipalvelut" className="link text-sm">
            Kaikki putkipalvelut
          </Link>
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {QUICK_LINKS.map((q) => (
            <li key={q.label}>
              <Link
                href={q.href}
                className="card group flex h-full flex-col gap-3 p-4 transition hover:-translate-y-0.5 hover:border-teal-600"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white">
                  <ServiceIcon name={q.icon} />
                </span>
                <span className="text-[15px] font-semibold leading-snug text-navy-900">{q.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* MITEN TOIMII */}
      <section aria-labelledby="miten-otsikko" className="container-page mt-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Tuntihinta ei ole koko totuus</p>
            <h2 id="miten-otsikko" className="mt-2 text-2xl font-bold sm:text-3xl">
              Halvin tuntihinta ei aina tarkoita halvinta laskua
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-ink/85">
              Putkityön lasku muodostuu tuntihinnasta, minimiveloituksesta, ajoveloituksesta, mahdollisista hälytys-
              maksuista ja tarvikkeista. Lyhyessä työssä minimiveloitus ja ajokulut voivat ratkaista enemmän kuin
              tuntihinta. Siksi näytämme yritysten julkaisemat hinnat rinnakkain ja laskemme niistä kokonaishinnan.
            </p>
            <Link href="/putkimiehen-hinta" className="btn-secondary mt-6">
              Lue hintaopas
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <ol className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { icon: Receipt, t: "Kokoamme julkaistut hinnat", d: `Tiedot ${PROVIDERS.length} putkiliikkeen omilta sivuilta, lähdelinkki ja tarkistuspäivä jokaisessa.` },
              { icon: Calculator, t: "Lasket kokonaishinnan", d: "Valitse työ, ajankohta ja tunnit – laskuri huomioi minimiveloitukset ja lisät." },
              { icon: Scale, t: "Vertaat ja päätät itse", d: "Emme järjestä yrityksiä \"parhaiksi\". Varmista lopullinen hinta yritykseltä." },
            ].map((s, i) => (
              <li key={s.t} className="card flex gap-4 p-5">
                <span className="num flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 font-bold text-white">{i + 1}</span>
                <div>
                  <h3 className="flex items-center gap-2 font-semibold">
                    <s.icon className="h-4 w-4 text-teal-700" aria-hidden="true" />
                    {s.t}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* HÄTÄOHJEET */}
      <div className="container-page mt-20">
        <EmergencySteps />
      </div>

      {/* OPPAAT */}
      <section aria-labelledby="oppaat-otsikko" className="container-page mt-20">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">Oppaat</p>
            <h2 id="oppaat-otsikko" className="mt-2 text-2xl font-bold sm:text-3xl">
              Käytännön tietoa putkiongelmiin
            </h2>
          </div>
          <Link href="/oppaat" className="link text-sm">
            Kaikki oppaat
          </Link>
        </div>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {ARTICLES.slice(0, 3).map((a) => (
            <li key={a.slug}>
              <Link href={`/oppaat/${a.slug}`} className="card group flex h-full flex-col p-5 hover:border-teal-600">
                <BookOpen className="h-5 w-5 text-teal-700" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:underline">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.excerpt}</p>
                <span className="mt-auto pt-4 text-sm font-semibold text-teal-700">Lue opas · {a.readingMinutes} min</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* UKK */}
      <section aria-labelledby="ukk-otsikko" className="container-page mt-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Usein kysyttyä</p>
          <h2 id="ukk-otsikko" className="mt-2 text-2xl font-bold sm:text-3xl">
            Lyhyet vastaukset yleisimpiin kysymyksiin
          </h2>
          <Link href="/usein-kysyttya" className="btn-secondary mt-6">
            Kaikki kysymykset
          </Link>
        </div>
        <FaqList items={FAQS.slice(0, 4)} />
      </section>

      {/* LÄPINÄKYVYYS */}
      <section className="container-page mt-20">
        <div className="flex flex-col gap-5 rounded-2xl bg-navy-900 p-7 text-white sm:p-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-white sm:text-2xl">
              <ShieldCheck className="h-6 w-6 text-teal-100" aria-hidden="true" />
              Näin palvelu toimii
            </h2>
            <p className="mt-3 leading-relaxed text-white/80">
              HelsinkiPutkimies.fi on tietopalvelu, ei putkiliike. Emme työllistä asentajia emmekä myy putkitöitä.
              {PROVIDERS.some((p) => p.sponsored)
                ? "Osa listauksista on kaupallista yhteistyötä, ja ne on merkitty selvästi."
                : "Tällä hetkellä listalla ei ole maksettuja näkyvyyksiä. Jos niitä tulee, ne merkitään selvästi."}
            </p>
          </div>
          <Link href="/yhteystiedot" className="btn shrink-0 bg-white text-navy-900 hover:bg-teal-50">
            Lue toimintamallista
          </Link>
        </div>
      </section>
    </>
  );
}
