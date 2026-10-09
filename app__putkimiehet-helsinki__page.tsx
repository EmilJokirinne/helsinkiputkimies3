import Link from "next/link";
import { Calculator, ClipboardCheck, Scale, Megaphone } from "lucide-react";
import { PROVIDERS, PROVIDERS_LAST_CHECKED } from "@/data/providers";
import { formatDateFi } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ProviderDirectory } from "@/components/ProviderDirectory";
import { PublishedPriceTable } from "@/components/PublishedPriceTable";

export const metadata = pageMetadata({
  title: "Putkiliikkeet Helsingissä – vertaile palveluita ja hintoja",
  description:
    "Vertaile helsinkiläisten putki- ja LVI-liikkeiden julkaistuja tuntihintoja, minimiveloituksia, ajoveloituksia ja päivystystietoja. Lähde ja tarkistuspäivä jokaisessa tiedossa.",
  path: "/putkimiehet-helsinki",
});

export default function DirectoryPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Vertaile putkiliikkeitä", href: "/putkimiehet-helsinki" }]}
        eyebrow="Putkiliikkeiden vertailu"
        title="Putkiliikkeet Helsingissä – vertaile palveluita ja hintoja"
        lead={`Kokosimme Helsingissä toimivien putki- ja LVI-liikkeiden itse julkaisemat hinnat ja ehdot. Kortit ovat yhdenmukaisia eikä yrityksiä järjestetä paremmuusjärjestykseen. Tiedot tarkistettu viimeksi ${formatDateFi(PROVIDERS_LAST_CHECKED)}.`}
      >
        <Link href="/hintavertailu" className="btn-accent mt-6">
          <Calculator className="h-4 w-4" aria-hidden="true" />
          Vertaile kokonaishintoja laskurilla
        </Link>
      </PageHero>

      <div className="container-page mt-10">
        <ProviderDirectory providers={PROVIDERS} />

        <section aria-labelledby="kokonaishinnat" className="mt-16">
          <h2 id="kokonaishinnat" className="text-2xl font-bold">
            Kokonaishinnat rinnakkain
          </h2>
          <p className="mt-2 max-w-3xl text-ink/85">
            Sama työaika, eri lasku: taulukossa minimiveloitus ja ajoveloitus on laskettu mukaan.
          </p>
          <div className="mt-5">
            <PublishedPriceTable />
          </div>
        </section>

        <section aria-labelledby="menetelma" className="mt-16 grid gap-5 md:grid-cols-3">
          <h2 id="menetelma" className="sr-only">
            Miten vertailu tehdään
          </h2>
          <div className="card p-6">
            <ClipboardCheck className="h-6 w-6 text-teal-700" aria-hidden="true" />
            <h3 className="mt-3 font-semibold">Mistä tiedot tulevat</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/85">
              Jokainen hinta on poimittu yrityksen omalta verkkosivulta, ja kortissa on linkki lähteeseen sekä
              tarkistuspäivä. Puuttuvaa tietoa ei arvata: silloin näytetään &quot;Hinta pyydettävä yritykseltä&quot;.
            </p>
          </div>
          <div className="card p-6">
            <Scale className="h-6 w-6 text-teal-700" aria-hidden="true" />
            <h3 className="mt-3 font-semibold">Ei paremmuusjärjestystä</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/85">
              Emme nimeä yrityksiä parhaiksi, halvimmiksi tai luotettavimmiksi. Emme arvioi työn laatua emmekä julkaise
              asiakasarvioita. Päivystystieto perustuu yrityksen omaan ilmoitukseen.
            </p>
          </div>
          <div className="card p-6">
            <Megaphone className="h-6 w-6 text-teal-700" aria-hidden="true" />
            <h3 className="mt-3 font-semibold">Kaupallinen yhteistyö</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/85">
              Listalla ei tällä hetkellä ole maksettuja sijoituksia. Jos sivusto myöhemmin ottaa vastaan maksuja
              näkyvyydestä tai käyttää kumppanilinkkejä, ne merkitään kortteihin selvästi. Yritys voi pyytää tietojensa
              korjaamista{" "}
              <Link href="/yhteystiedot" className="link">
                yhteystietosivun
              </Link>{" "}
              kautta.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
