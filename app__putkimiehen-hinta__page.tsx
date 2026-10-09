import Link from "next/link";
import { AlertTriangle, ArrowRight, Calculator, Car, Clock, Moon, Package, Percent, Receipt, Timer, FileText, Siren } from "lucide-react";
import { ESTIMATE_TABLE } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { PublishedPriceTable } from "@/components/PublishedPriceTable";
import { FaqList } from "@/components/FaqList";
import { FAQS } from "@/data/faq";
import { VERO_KOTITALOUSVAHENNYS_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Putkimiehen hinta Helsingissä – hinnasto ja vertailu",
  description:
    "Paljonko putkimies maksaa Helsingissä? Putkiliikkeiden julkaistut tuntihinnat, minimiveloitukset ja ajoveloitukset sekä suuntaa-antavat hinnat yleisimmille putkitöille.",
  path: "/putkimiehen-hinta",
});

const PARTS = [
  { icon: Clock, t: "Tuntiveloitus", d: "Työaika kertaa tuntihinta. Moni yritys laskee työaikaan myös matkat kohteeseen ja tarvikehaut. Arkipäivän tuntihinnat olivat julkaistuissa hinnastoissa noin 63–81 €/h sis. alv." },
  { icon: Timer, t: "Minimiveloitus", d: "Pienin laskutettava aika tai summa käyntiä kohden, tyypillisesti 1–2 tuntia. Lyhyessä työssä maksat silti minimin." },
  { icon: Receipt, t: "Lähtö- tai käyntimaksu", d: "Osa yrityksistä veloittaa kiinteän lähtöveloituksen. Päivystyksessä lähtömaksu voi olla moninkertainen arkeen verrattuna." },
  { icon: Car, t: "Matka- ja pysäköintikulut", d: "Kiinteä huoltoauto- tai ajoveloitus, joskus lisäksi kilometrikorvaus. Kantakaupungissa pysäköintimaksu voidaan lisätä laskuun." },
  { icon: Moon, t: "Ilta- ja viikonloppulisät", d: "Arki-illan, lauantain, sunnuntain ja pyhien tuntihinnat ovat usein 2–3-kertaisia arkipäivään verrattuna." },
  { icon: Siren, t: "Päivystys- ja hälytysmaksut", d: "Päivystystilaukseen lisätään usein kiinteä hälytysmaksu. Julkaistuissa hinnastoissa se oli noin 119–163 €." },
  { icon: Package, t: "Tarvikkeet ja varaosat", d: "Veloitetaan yleensä menekin mukaan. Laitevuokrat, kuten viemärinavauskone tai kuivain, voivat olla erillisiä eriä." },
  { icon: Percent, t: "Arvonlisävero", d: "Kuluttajahinnat sisältävät yleensä alv:n 25,5 %. Tarkista aina merkintä \"sis. alv\" – osa hinnastoista näyttää myös verottomat hinnat." },
  { icon: FileText, t: "Kiinteä hinta vai tuntityö", d: "Selkeissä töissä kiinteä hinta tai asennuspaketti poistaa työajan epävarmuuden. Laajoissa töissä pyydä kirjallinen tarjous." },
];

export default function PricePage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Putkimiehen hinnat", href: "/putkimiehen-hinta" }]}
        eyebrow="Hintaopas"
        title="Putkimiehen hinta Helsingissä – hinnasto ja vertailu"
        lead="Putkityön lasku koostuu useammasta erästä kuin pelkästä tuntihinnasta. Tältä sivulta näet, miten hinta muodostuu, mitä helsinkiläiset putkiliikkeet ovat julkaisseet ja mitä yleisimmät työt suunnilleen maksavat."
      >
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/hintavertailu" className="btn-accent">
            <Calculator className="h-4 w-4" aria-hidden="true" />
            Arvioi putkityön kokonaishinta
          </Link>
          <Link href="/putkimiehet-helsinki" className="btn-secondary">
            Putkiliikkeet Helsingissä
          </Link>
        </div>
      </PageHero>

      <div className="container-page mt-12 space-y-16">
        <section aria-labelledby="julkaistut">
          <h2 id="julkaistut" className="text-2xl font-bold sm:text-3xl">
            Putkiliikkeiden julkaistut arkihinnat
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink/85">
            Taulukko perustuu yritysten omilla sivuillaan julkaisemiin hinnastoihin. Jokaisen rivin tarkistuspäivä on
            näkyvissä. Hinnat voivat muuttua, joten varmista lopullinen hinta aina yritykseltä.
          </p>
          <div className="mt-6">
            <PublishedPriceTable />
          </div>
        </section>

        <aside className="flex gap-4 rounded-2xl border border-teal-600/25 bg-teal-50 p-6 sm:p-7">
          <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-teal-700" aria-hidden="true" />
          <div>
            <h2 className="text-xl font-semibold">Halvin tuntihinta ei tarkoita halvinta laskua</h2>
            <p className="mt-2 leading-relaxed text-ink/85">
              Yritys, jonka tuntihinta on matalin, voi silti laskuttaa enemmän, jos sen minimiveloitus on pidempi,
              ajoveloitus suurempi tai laskutus tapahtuu alkavilta tunneilta. Vertaa aina kokonaishintaa samalla
              työajalla ja ajankohdalla.
            </p>
          </div>
        </aside>

        <section aria-labelledby="muodostuminen">
          <h2 id="muodostuminen" className="text-2xl font-bold sm:text-3xl">
            Näin putkityön hinta muodostuu
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PARTS.map((p) => (
              <li key={p.t} className="card p-5">
                <p.icon className="h-5 w-5 text-teal-700" aria-hidden="true" />
                <h3 className="mt-3 font-semibold">{p.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/80">{p.d}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="arviot">
          <h2 id="arviot" className="text-2xl font-bold sm:text-3xl">
            Yleisimpien putkitöiden suuntaa-antavat hinnat
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink/85">
            Alla olevat hintahaarukat ovat sisällön suunnittelua varten laadittuja kuluttaja-arvioita arkipäivänä
            tehtävästä työstä. Ne eivät ole tarkistettuja markkinakeskiarvoja, takuuhintoja eivätkä tarjouksia.
            Haarukoista ei voi päätellä, sisältyvätkö tarvikkeet, matkakulut tai päivystyslisät.
          </p>
          <div className="card mt-6 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-[15px]">
                <caption className="sr-only">Suuntaa-antavat hinnat yleisimmille putkitöille</caption>
                <thead className="bg-surface text-sm text-navy-900">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Työ</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Suuntaa-antava hinta</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {ESTIMATE_TABLE.map((r) => (
                    <tr key={r.work}>
                      <th scope="row" className="px-4 py-3 font-medium">
                        {r.href ? (
                          <Link href={r.href} className="hover:underline">
                            {r.work}
                          </Link>
                        ) : (
                          r.work
                        )}
                      </th>
                      <td className="num px-4 py-3 font-semibold text-navy-900">{r.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-line bg-warn-50 px-4 py-3 text-xs font-medium leading-relaxed text-warn-700">
              Suunnitteluarvio – ei sitova hinta. Pienet työt maksavat käytännössä usein vähintään yrityksen
              minimiveloituksen verran; vertaa yllä olevaan julkaistujen hintojen taulukkoon.
            </p>
          </div>
        </section>

        <section aria-labelledby="alueet" className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 id="alueet" className="text-2xl font-bold">
              Vaikuttaako kaupunginosa hintaan?
            </h2>
            <p className="mt-3 leading-relaxed text-ink/85">
              Tarkistamissamme hinnastoissa ajoveloitus oli Helsingin sisällä yleensä sama kaupunginosasta riippumatta,
              oli kohde Kalliossa, Töölössä, Pasilassa, Lauttasaaressa, Herttoniemessä, Malmilla, Vuosaaressa tai
              Kampissa. Erot syntyvät lähinnä kilometrikorvauksista ja pysäköinnistä: esimerkiksi kantakaupungin
              maksullinen pysäköinti voidaan lisätä laskuun. Espooseen, Vantaalle ja Kauniaisiin ajoveloitus voi olla
              suurempi.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Kotitalousvähennys</h2>
            <p className="mt-3 leading-relaxed text-ink/85">
              Putkityön työosuudesta voi saada kotitalousvähennystä. Vähennyksen määrä, omavastuu ja ehdot riippuvat
              verovuodesta ja työn luonteesta. Tarkista ajantasaiset tiedot{" "}
              <a href={VERO_KOTITALOUSVAHENNYS_URL} className="link" target="_blank" rel="noopener noreferrer">
                Verohallinnon sivuilta
                <span className="sr-only"> (avautuu uuteen välilehteen)</span>
              </a>{" "}
              ja pyydä laskulle työn osuus eriteltynä.
            </p>
          </div>
        </section>

        <section aria-labelledby="hinta-ukk">
          <h2 id="hinta-ukk" className="text-2xl font-bold sm:text-3xl">
            Kysymyksiä putkimiehen hinnasta
          </h2>
          <div className="mt-6">
            <FaqList items={FAQS.slice(0, 4)} withSchema />
          </div>
          <Link href="/oppaat/paljonko-putkimies-maksaa-helsingissa" className="link mt-6 inline-flex items-center gap-1">
            Lue opas: Paljonko putkimies maksaa Helsingissä?
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </section>
      </div>
    </>
  );
}
