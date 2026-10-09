import { FAQS } from "@/data/faq";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { FaqList } from "@/components/FaqList";

export const metadata = pageMetadata({
  title: "Usein kysyttyä putkimiehen hinnoista ja päivystyksestä",
  description:
    "Vastaukset yleisimpiin kysymyksiin: paljonko putkimies maksaa Helsingissä, mitä päivystys maksaa, sisältääkö hinta alv:n ja saako työstä kotitalousvähennystä.",
  path: "/usein-kysyttya",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Usein kysyttyä", href: "/usein-kysyttya" }]}
        eyebrow="Usein kysyttyä"
        title="Usein kysyttyä putkitöistä ja hinnoista"
        lead="Lyhyet vastaukset yleisimpiin kysymyksiin. Hintatiedot perustuvat yritysten julkaisemiin hinnastoihin ja voivat muuttua."
      />
      <div className="container-page mt-10 max-w-3xl">
        <FaqList items={FAQS} withSchema />
      </div>
    </>
  );
}
