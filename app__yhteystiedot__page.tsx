import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { LegalPage, Placeholder } from "@/components/Legal";

export const metadata = pageMetadata({
  title: "Yhteystiedot ja toimintamalli – HelsinkiPutkimies.fi",
  description:
    "HelsinkiPutkimies.fi on riippumaton tietopalvelu, ei putkiliike. Lue, miten palvelu toimii, miten hintatiedot kootaan ja miten yritys voi pyytää tietojen korjaamista.",
  path: "/yhteystiedot",
});

export default function ContactPage() {
  return (
    <LegalPage
      title="Yhteystiedot ja toimintamalli"
      href="/yhteystiedot"
      updated="2026-10-09"
      lead="HelsinkiPutkimies.fi on tietopalvelu. Emme ole putkiliike emmekä tee putkitöitä."
    >
      <h2>Ylläpitäjä</h2>
      <p>
        Sivuston ylläpitäjä: <Placeholder>yrityksen tai henkilön virallinen nimi</Placeholder>
        <br />
        Y-tunnus: <Placeholder>Y-tunnus, jos ylläpitäjä on yritys</Placeholder>
        <br />
        Sähköposti: <Placeholder>yhteydenottosähköposti</Placeholder>
      </p>
      <p>
        Sivustolla ei ole puhelinpalvelua eikä päivystysnumeroa. Putkitöihin liittyvissä asioissa ota yhteys suoraan
        putkiliikkeeseen, ja kiireellisissä taloyhtiön asioissa huoltoyhtiön päivystykseen.
      </p>

      <h2>Mitä palvelu tekee</h2>
      <ul>
        <li>Kokoaa putkiliikkeiden omilla sivuillaan julkaisemia hintatietoja ja ehtoja.</li>
        <li>Laskee julkaistuista hinnoista suuntaa-antavia kokonaishinta-arvioita.</li>
        <li>Julkaisee yleistä tietoa putkitöistä, hinnoista ja vastuista.</li>
      </ul>
      <p>
        Palvelu ei työllistä putkiasentajia, ei myy putkitöitä eikä anna takuita yritysten töistä. Emme ole
        yhteydessä samankaltaisesti nimettyihin yrityksiin.
      </p>

      <h2>Miten palvelu rahoitetaan</h2>
      <p>
        Palvelu voidaan tulevaisuudessa rahoittaa kumppanilinkeillä, selvästi merkityillä maksetuilla listauksilla tai
        tarjouspyyntöjen välityksellä. Tällä hetkellä listalla ei ole maksettuja sijoituksia. Mahdollinen kaupallinen
        yhteistyö merkitään aina näkyvästi, eikä se vaikuta siihen, miten hintatiedot esitetään.
      </p>

      <h2>Yritykset: tietojen korjaaminen</h2>
      <p>
        Jos yrityksenne tiedot ovat virheelliset tai vanhentuneet, lähettäkää korjauspyyntö ja linkki ajantasaiseen
        hinnastoon osoitteeseen <Placeholder>yhteydenottosähköposti</Placeholder>. Päivitämme tiedot ja
        tarkistuspäivän tarkistuksen jälkeen.
      </p>

      <h2>Vastuunrajoitus</h2>
      <p>
        Hinnat ja yritystiedot voivat muuttua. Varmista lopullinen hinta, saatavuus ja ehdot aina suoraan
        palveluntarjoajalta. Lue lisää{" "}
        <Link href="/kayttoehdot" className="link">
          käyttöehdoista
        </Link>
        .
      </p>
    </LegalPage>
  );
}
