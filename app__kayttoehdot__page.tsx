import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { LegalPage, Placeholder } from "@/components/Legal";

export const metadata = pageMetadata({
  title: "Käyttöehdot – HelsinkiPutkimies.fi",
  description: "HelsinkiPutkimies.fi-sivuston käyttöehdot: tietojen luonne, hintatietojen ajantasaisuus ja vastuunrajoitukset.",
  path: "/kayttoehdot",
});

export default function TermsPage() {
  return (
    <LegalPage title="Käyttöehdot" href="/kayttoehdot" updated="2026-10-09">
      <p>
        Nämä ehdot koskevat HelsinkiPutkimies.fi-sivuston käyttöä. Sivuston ylläpitäjä on{" "}
        <Placeholder>ylläpitäjän virallinen nimi ja Y-tunnus</Placeholder>.
      </p>

      <h2>Palvelun luonne</h2>
      <p>
        Sivusto on tietopalvelu. Se ei ole putkiliike, ei tee putkitöitä eikä ole osapuoli käyttäjän ja putkiliikkeen
        välisessä sopimuksessa. Työn tilaaminen, hinnat, aikataulut, takuut ja reklamaatiot sovitaan aina suoraan
        palveluntarjoajan kanssa.
      </p>

      <h2>Hintatiedot ja arviot</h2>
      <ul>
        <li>Yritysten hintatiedot on poimittu yritysten omilta verkkosivuilta ilmoitettuna tarkistuspäivänä.</li>
        <li>Hinnat ja ehdot voivat muuttua milloin tahansa. Varmista lopullinen hinta aina yritykseltä.</li>
        <li>Hintalaskurin tulokset ja suuntaa-antavat hinnat ovat arvioita, eivät sitovia tarjouksia.</li>
        <li>Puuttuvaa hintatietoa ei arvata, vaan käyttäjää ohjataan pyytämään hinta yritykseltä.</li>
      </ul>

      <h2>Oppaat</h2>
      <p>
        Oppaat sisältävät yleistä tietoa. Ne eivät ole oikeudellista, vero- tai vakuutusneuvontaa. Tarkista oman
        tilanteesi yksityiskohdat asianomaiselta taholta.
      </p>

      <h2>Ulkoiset linkit</h2>
      <p>
        Sivustolla on linkkejä yritysten ja viranomaisten sivuille. Emme vastaa ulkoisten sivustojen sisällöstä.
        Mahdolliset kumppanilinkit merkitään.
      </p>

      <h2>Vastuunrajoitus</h2>
      <p>
        Sivuston tiedot pyritään pitämään oikeina ja ajantasaisina, mutta niiden virheettömyyttä ei taata. Ylläpitäjä
        ei vastaa vahingoista, jotka aiheutuvat tietojen käyttämisestä, siltä osin kuin pakottava lainsäädäntö sen
        sallii.
      </p>

      <h2>Muutokset</h2>
      <p>
        Ehtoja voidaan päivittää. Voimassa oleva versio on aina tällä sivulla. Henkilötietojen käsittelystä kerrotaan{" "}
        <Link href="/tietosuojaseloste" className="link">
          tietosuojaselosteessa
        </Link>
        .
      </p>
    </LegalPage>
  );
}
