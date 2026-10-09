import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { LegalPage, Placeholder } from "@/components/Legal";

export const metadata = pageMetadata({
  title: "Tietosuojaseloste – HelsinkiPutkimies.fi",
  description: "Miten HelsinkiPutkimies.fi käsittelee henkilötietoja: rekisterinpitäjä, käsittelyn tarkoitukset, vastaanottajat ja rekisteröidyn oikeudet.",
  path: "/tietosuojaseloste",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Tietosuojaseloste"
      href="/tietosuojaseloste"
      updated="2026-10-09"
      lead="Luonnos. Täydennä merkityt kohdat ja tarkistuta seloste ennen kuin henkilötietoja kerätään."
    >
      <h2>1. Rekisterinpitäjä</h2>
      <p>
        <Placeholder>rekisterinpitäjän virallinen nimi, Y-tunnus, osoite</Placeholder>
        <br />
        Yhteyshenkilö tietosuoja-asioissa: <Placeholder>nimi ja sähköposti</Placeholder>
      </p>

      <h2>2. Mitä tietoja käsitellään</h2>
      <ul>
        <li>
          <strong>Sivuston käyttö:</strong> palvelimen tekniset lokitiedot (esim. IP-osoite, selaintyyppi, pyyntöjen
          ajankohta), joita palveluntarjoaja käsittelee tietoturvan ja toiminnan varmistamiseksi.
        </li>
        <li>
          <strong>Hintalaskuri:</strong> laskurin syötteet käsitellään vain selaimessasi eikä niitä lähetetä
          palvelimelle.
        </li>
        <li>
          <strong>Tarjouspyyntölomake:</strong> työn tyyppi, postinumero, toivottu ajankohta ja vapaamuotoinen kuvaus.
          Lomake on tällä hetkellä esikatselutilassa: tiedot tarkistetaan palvelimella, mutta niitä ei tallenneta eikä
          välitetä kenellekään.
        </li>
      </ul>

      <h2>3. Käsittelyn tarkoitus ja peruste</h2>
      <p>
        Teknisiä lokitietoja käsitellään rekisterinpitäjän oikeutetun edun perusteella palvelun toiminnan ja
        tietoturvan varmistamiseksi. Kun tarjouspyyntöjen välitys otetaan käyttöön, tietoja käsitellään käyttäjän
        pyynnöstä tarjousten välittämiseksi <Placeholder>käsittelyperuste, esim. suostumus tai sopimus</Placeholder>.
      </p>

      <h2>4. Vastaanottajat</h2>
      <p>
        Välityksen ollessa käytössä tarjouspyyntö toimitetaan vain niille putkiliikkeille, jotka palvelevat
        postinumeroalueellasi ja tekevät valitsemaasi työtä:{" "}
        <Placeholder>vastaanottajat tai vastaanottajaryhmät, välitystapa</Placeholder>. Sivuston ylläpidossa käytetään
        palveluntarjoajia: <Placeholder>hosting-palvelu (esim. Vercel), sähköpostipalvelu</Placeholder>.
      </p>

      <h2>5. Siirrot EU:n ja ETA:n ulkopuolelle</h2>
      <p>
        <Placeholder>kuvaus mahdollisista siirroista ja suojatoimista, esim. vakiosopimuslausekkeet</Placeholder>
      </p>

      <h2>6. Säilytysaika</h2>
      <p>
        <Placeholder>esim. tarjouspyynnöt poistetaan X kuukauden kuluttua, lokit X päivän kuluttua</Placeholder>
      </p>

      <h2>7. Rekisteröidyn oikeudet</h2>
      <p>
        Sinulla on oikeus saada pääsy tietoihisi, oikaista ja poistaa niitä, rajoittaa käsittelyä, vastustaa
        käsittelyä ja peruuttaa suostumuksesi. Voit tehdä valituksen tietosuojavaltuutetun toimistolle
        (tietosuoja.fi).
      </p>

      <h2>8. Evästeet</h2>
      <p>
        Evästeiden käytöstä kerrotaan{" "}
        <Link href="/evasteet" className="link">
          evästesivulla
        </Link>
        .
      </p>
    </LegalPage>
  );
}
