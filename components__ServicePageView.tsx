import Link from "next/link";
import { ArrowRight, CheckCircle2, ListChecks, AlertTriangle, Coins, Wrench, Calculator } from "lucide-react";
import type { Service } from "@/data/services";
import { SERVICES } from "@/data/services";
import { PageHero } from "./PageHero";
import { FaqList } from "./FaqList";
import { EmergencySteps } from "./EmergencySteps";
import { ServiceIcon, SLUG_ICON } from "./ServiceIcon";
import { JsonLd } from "./JsonLd";
import { absoluteUrl, SITE } from "@/lib/site";

function Block({ icon: Icon, title, items, tone = "default" }: { icon: typeof Wrench; title: string; items: string[]; tone?: "default" | "warn" }) {
  return (
    <section className={`rounded-2xl border p-6 ${tone === "warn" ? "border-danger-700/15 bg-danger-50" : "border-line bg-white"}`}>
      <h2 className="flex items-center gap-2 text-xl font-semibold">
        <Icon className={`h-5 w-5 ${tone === "warn" ? "text-danger-700" : "text-teal-700"}`} aria-hidden="true" />
        {title}
      </h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-ink/90">
            <CheckCircle2 className={`mt-0.5 h-4.5 w-4.5 shrink-0 ${tone === "warn" ? "text-danger-700" : "text-teal-600"}`} aria-hidden="true" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ServicePageView({ service }: { service: Service }) {
  const related = service.related.map((slug) => SERVICES.find((s) => s.slug === slug)).filter((s): s is Service => Boolean(s));
  const isEmergency = service.slug === "putkimies-paivystys" || service.slug === "vesivuodon-korjaus";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: service.metaTitle,
          description: service.metaDescription,
          url: absoluteUrl(`/${service.slug}`),
          inLanguage: "fi-FI",
          isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
        }}
      />
      <PageHero crumbs={[{ name: "Putkipalvelut", href: "/putkipalvelut" }, { name: service.navLabel, href: `/${service.slug}` }]} eyebrow="Putkipalvelut" title={service.h1} lead={service.intro}>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href={`/hintavertailu?tyo=${service.slug}`} className="btn-accent">
            <Calculator className="h-4 w-4" aria-hidden="true" />
            Arvioi kokonaishinta
          </Link>
          <Link href="/putkimiehet-helsinki" className="btn-secondary">
            Vertaile putkiliikkeitä
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </PageHero>

      <div className="container-page mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          {isEmergency && <EmergencySteps compact />}
          <Block icon={ListChecks} title={service.symptomsTitle} items={service.symptoms} />
          <Block icon={Wrench} title="Mitä työhön yleensä kuuluu" items={service.involves} />

          <section className="rounded-2xl border border-line bg-white p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <Coins className="h-5 w-5 text-teal-700" aria-hidden="true" />
              Suuntaa-antava hinta
            </h2>
            {service.estimate ? (
              <>
                <p className="num mt-3 text-2xl font-bold text-navy-900">{service.estimate}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Suunnitteluarvio, ei tarkistettu markkinakeskiarvo eikä sitova hinta. Arvio ei kerro, sisältyvätkö
                  tarvikkeet, ajokulut tai päivystyslisät – ne riippuvat yrityksestä. Katso yritysten julkaisemat hinnat{" "}
                  <Link href="/putkimiehen-hinta" className="link">
                    hintaoppaasta
                  </Link>
                  .
                </p>
              </>
            ) : (
              <p className="mt-3 text-[15px] leading-relaxed text-ink/90">
                Hinta määräytyy kohdekohtaisesti, joten emme julkaise yleistä hinta-arviota. Pyydä yrityksiltä tarjous tai
                hinnoitteluperusteet ja vertaa niitä{" "}
                <Link href="/hintavertailu" className="link">
                  laskurilla
                </Link>
                .
              </p>
            )}
            <h3 className="mt-6 text-base font-semibold">Hintaan vaikuttavat</h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] text-ink/90 marker:text-teal-600">
              {service.costFactors.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>

          <Block icon={ListChecks} title="Tarkista ennen tilaamista" items={service.checklist} />
          <Block icon={AlertTriangle} title="Milloin tilanne on kiireellinen" items={service.urgent} tone="warn" />

          <section>
            <h2 className="mb-4 text-xl font-semibold">Usein kysyttyä: {service.navLabel.toLowerCase()}</h2>
            <FaqList items={service.faqs} withSchema />
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-2xl bg-navy-900 p-6 text-white">
            <h2 className="text-lg font-semibold text-white">Vertaile ennen tilaamista</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Katso helsinkiläisten putkiliikkeiden julkaistut tuntihinnat, minimiveloitukset ja ajoveloitukset samasta
              paikasta.
            </p>
            <Link href="/putkimiehet-helsinki" className="btn mt-4 w-full bg-white text-navy-900 hover:bg-teal-50">
              Putkiliikkeet Helsingissä
            </Link>
          </div>
          <nav aria-label="Liittyvät palvelut" className="card p-5">
            <h2 className="text-base font-semibold">Liittyvät palvelut</h2>
            <ul className="mt-3 space-y-1">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${r.slug}`} className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-[15px] hover:bg-surface">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                      <ServiceIcon name={SLUG_ICON[r.slug] ?? "wrench"} className="h-4 w-4" />
                    </span>
                    {r.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}
