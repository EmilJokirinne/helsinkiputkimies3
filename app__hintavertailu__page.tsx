import { PROVIDERS, PROVIDERS_LAST_CHECKED } from "@/data/providers";
import { SERVICES } from "@/data/services";
import { formatDateFi } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { PriceCalculator } from "@/components/PriceCalculator";

export const metadata = pageMetadata({
  title: "Arvioi putkityön kokonaishinta – hintalaskuri Helsinki",
  description:
    "Laske putkityön arvioitu kokonaishinta helsinkiläisten putkiliikkeiden julkaistuilla hinnastoilla. Valitse työ, ajankohta ja tunnit – minimiveloitukset ja lisät huomioidaan.",
  path: "/hintavertailu",
});

export default async function CalculatorPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams;
  const raw = typeof sp.tyo === "string" ? sp.tyo : undefined;
  const initial = raw && SERVICES.some((s) => s.slug === raw) ? raw : undefined;

  return (
    <>
      <PageHero
        crumbs={[{ name: "Hintalaskuri", href: "/hintavertailu" }]}
        eyebrow="Hintalaskuri"
        title="Arvioi putkityön kokonaishinta"
        lead={`Laskuri käyttää yritysten julkaisemia hinnastoja (tarkistettu ${formatDateFi(PROVIDERS_LAST_CHECKED)}). Arvio ei ole sitova tarjous. Jos jokin tarvittava hinta puuttuu, laskuri ei arvaa sitä.`}
      />
      <div className="container-page mt-10">
        <PriceCalculator providers={PROVIDERS} initialService={initial} />
      </div>
    </>
  );
}
