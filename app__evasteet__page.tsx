import { pageMetadata } from "@/lib/metadata";
import { LegalPage, Placeholder } from "@/components/Legal";

export const metadata = pageMetadata({
  title: "Evästeet – HelsinkiPutkimies.fi",
  description: "Tietoa HelsinkiPutkimies.fi-sivuston evästeistä ja vastaavista tekniikoista.",
  path: "/evasteet",
});

export default function CookiesPage() {
  return (
    <LegalPage title="Evästeet" href="/evasteet" updated="2026-10-09">
      <p>
        Sivusto ei tällä hetkellä käytä analytiikka-, markkinointi- tai seurantaevästeitä eikä aseta evästeitä
        selaimeesi. Hintalaskurin syötteet pysyvät selaimesi muistissa vain sivun ollessa auki.
      </p>
      <p>
        Fontit ladataan sivuston omalta palvelimelta, joten niiden vuoksi ei oteta yhteyttä kolmansiin osapuoliin.
      </p>

      <h2>Jos evästeitä otetaan käyttöön</h2>
      <p>
        Jos sivustolle lisätään esimerkiksi kävijäanalytiikka tai kumppanilinkkien seuranta, muut kuin välttämättömät
        evästeet otetaan käyttöön vain käyttäjän suostumuksella, ja tälle sivulle lisätään luettelo evästeistä,
        niiden tarkoituksesta ja säilytysajasta.
      </p>
      <p>
        Käytössä olevat evästeet: <Placeholder>päivitä luettelo, jos analytiikka tai muita palveluita lisätään</Placeholder>
      </p>
    </LegalPage>
  );
}
