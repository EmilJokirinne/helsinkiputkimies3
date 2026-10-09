import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ServiceIcon, SLUG_ICON } from "@/components/ServiceIcon";

export const metadata = pageMetadata({
  title: "Putkipalvelut Helsingissä – vuodot, viemärit, asennukset",
  description:
    "Tietoa yleisimmistä putkipalveluista Helsingissä: päivystys, viemärin avaus, vesivuodon korjaus, hanan ja WC-istuimen vaihto, kodinkoneasennukset, putkiremontti ja LVI-huolto.",
  path: "/putkipalvelut",
});

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Putkipalvelut", href: "/putkipalvelut" }]}
        eyebrow="Putkipalvelut"
        title="Putkipalvelut Helsingissä"
        lead="Valitse työ, niin näet mitä siihen yleensä kuuluu, mistä hinta muodostuu ja mitä kannattaa tarkistaa ennen tilaamista."
      />
      <div className="container-page mt-10">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link href={`/${s.slug}`} className="card group flex h-full flex-col p-6 hover:border-teal-600">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <ServiceIcon name={SLUG_ICON[s.slug] ?? "wrench"} />
                </span>
                <h2 className="mt-4 text-lg font-semibold group-hover:underline">{s.h1}</h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{s.intro}</p>
                <p className="mt-auto flex items-center justify-between pt-4 text-sm">
                  <span className="num font-semibold text-navy-900">{s.estimate ?? "Kohdekohtainen hinta"}</span>
                  <ArrowRight className="h-4 w-4 text-teal-700" aria-hidden="true" />
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          Hinta-arviot ovat suuntaa-antavia suunnitteluarvioita. Katso yritysten julkaisemat hinnat{" "}
          <Link href="/putkimiehen-hinta" className="link">
            hintaoppaasta
          </Link>
          .
        </p>
      </div>
    </>
  );
}
