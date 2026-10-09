import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata = pageMetadata({
  title: "Tarjouspyyntö putkityöstä – esikatselu",
  description: "Tarjouspyyntölomake on esikatselutilassa. Tietoja ei vielä välitetä putkiliikkeille.",
  path: "/tarjouspyynto",
  noIndex: true,
});

export default function InquiryPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Tarjouspyyntö", href: "/tarjouspyynto" }]}
        eyebrow="Tarjouspyyntö"
        title="Pyydä tarjouksia putkityöstä"
        lead="Lomakkeella voi jatkossa pyytää tarjouksia useammalta putkiliikkeeltä kerralla. Kysymme vain tiedot, joita tarjouksen laatiminen edellyttää."
      />
      <div className="container-page mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <InquiryForm />
        <aside className="card h-fit p-6 text-sm leading-relaxed text-ink/85">
          <h2 className="text-base font-semibold">Kuka tiedot saa?</h2>
          <p className="mt-2">
            Kun välitys otetaan käyttöön, pyyntösi toimitetaan vain niille putkiliikkeille, jotka palvelevat
            postinumeroalueellasi ja tekevät valitsemaasi työtä. Tarkoitus on, että he voivat tehdä sinulle tarjouksen.
            Vastaanottajat ja käsittelyperusteet kerrotaan{" "}
            <Link href="/tietosuojaseloste" className="link">
              tietosuojaselosteessa
            </Link>
            .
          </p>
          <h2 className="mt-5 text-base font-semibold">Ei ylimääräisiä tietoja</h2>
          <p className="mt-2">
            Nimeä, puhelinnumeroa tai osoitetta ei kysytä esikatseluvaiheessa. Yhteystiedot pyydetään vasta, kun
            välitysprosessi on käytössä ja niitä tarvitaan.
          </p>
        </aside>
      </div>
    </>
  );
}
