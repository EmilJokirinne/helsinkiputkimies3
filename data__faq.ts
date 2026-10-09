import type { Faq } from "./services";

export const FAQS: (Faq & { links?: { href: string; label: string }[] })[] = [
  {
    q: "Paljonko putkimies maksaa Helsingissä?",
    a: "Tarkistamiemme julkaistujen hinnastojen arkipäivän tuntihinnat olivat noin 63–81 € tunnissa sis. alv. Kun mukaan lasketaan tyypillinen kahden tunnin minimiveloitus ja ajoveloitus, pieni arkityö maksaa usein noin 157–207 € ennen tarvikkeita. Yrityskohtaiset luvut ja tarkistuspäivät näet vertailusta.",
    links: [
      { href: "/putkimiehet-helsinki", label: "Vertaile putkiliikkeitä" },
      { href: "/putkimiehen-hinta", label: "Hintaopas" },
    ],
  },
  {
    q: "Paljonko putkimiehen päivystys maksaa?",
    a: "Julkaistuissa hinnastoissa päivystyksen tuntihinta oli noin 125–245 € ajankohdasta riippuen, ja useimmat lisäsivät 119–163 € hälytys- tai lähtömaksun. Kaikki yritykset eivät julkaise päivystyshintojaan, joten kysy hinta aina ennen tilausta.",
    links: [{ href: "/putkimies-paivystys", label: "Päivystävä putkimies" }],
  },
  {
    q: "Sisältääkö tuntihinta arvonlisäveron?",
    a: "Kuluttajille ilmoitettavissa hinnoissa arvonlisävero on yleensä mukana, ja kaikki tämän sivuston hintatiedot on ilmoitettu arvonlisäverollisina (alv 25,5 %). Osa yrityksistä julkaisee myös verottomat hinnat, joten tarkista merkintä aina hinnastosta.",
  },
  {
    q: "Miksi yrityksillä on erilaiset minimiveloitukset?",
    a: "Minimiveloitus kattaa käynnin kiinteät kulut, kuten ajon, valmistelun ja tarvikehankinnat. Osa yrityksistä veloittaa vähintään yhden tunnin, osa kaksi tuntia, ja osa sisällyttää minimiin myös ajoveloituksen. Pienissä töissä minimiveloitus vaikuttaa kokonaishintaan enemmän kuin tuntihinta.",
  },
  {
    q: "Miten löydän putkimiehen viikonlopuksi?",
    a: "Vertailussa näet, ketkä yrityksistä ilmoittavat päivystyksestä ja julkaisevat viikonloppuhinnat. Saatavuus ja saapumisaika on aina varmistettava yritykseltä puhelimessa – sivusto ei näe yritysten reaaliaikaista tilannetta. Kerrostalossa yhteisten putkien vioissa soita ensin huoltoyhtiön päivystykseen.",
    links: [{ href: "/putkimiehet-helsinki", label: "Putkiliikkeet Helsingissä" }],
  },
  {
    q: "Miten vertailen tarjouksia oikein?",
    a: "Vertaa kokonaishintaa: tuntihinta juuri sille ajankohdalle, minimiveloitus, ajo- ja kilometriveloitukset, hälytysmaksut, laskutustarkkuus sekä tarvikkeiden hinnoittelu. Pyydä selkeissä töissä kiinteä hinta tai kirjallinen tarjous.",
    links: [{ href: "/oppaat/miten-vertailet-putkiliikkeiden-hintoja", label: "Opas hintojen vertailuun" }],
  },
  {
    q: "Kuka maksaa putkivuodon korjauksen taloyhtiössä?",
    a: "Yleisesti taloyhtiö vastaa rakenteisiin kuuluvista vesi- ja viemäriputkista ja osakas esimerkiksi hanoista, kodinkoneista ja niiden liitännöistä. Yhtiöjärjestys, vahingon syy ja vakuutusehdot vaikuttavat lopputulokseen, joten tarkista oma tilanteesi isännöitsijältä.",
    links: [{ href: "/oppaat/kuka-vastaa-putkivuodosta-taloyhtiossa", label: "Opas taloyhtiön vastuista" }],
  },
  {
    q: "Voiko putkimiehen työstä saada kotitalousvähennyksen?",
    a: "Putkityön työosuus voi oikeuttaa kotitalousvähennykseen, tarvikkeet ja matkakulut eivät yleensä. Vähennyksen määrä, omavastuu ja ehdot riippuvat verovuodesta ja työn luonteesta, joten tarkista ajantasaiset tiedot Verohallinnon sivuilta ja pyydä laskulle työn osuus eriteltynä.",
    links: [{ href: "https://www.vero.fi/henkiloasiakkaat/vahennykset/kotitalousvahennys/", label: "Verohallinto: kotitalousvähennys" }],
  },
  {
    q: "Onko HelsinkiPutkimies.fi putkiliike?",
    a: "Ei ole. HelsinkiPutkimies.fi on tietopalvelu, joka kokoaa yritysten itse julkaisemia hintatietoja ja yleistä tietoa putkitöistä. Sivusto ei tee putkitöitä eikä työllistä asentajia. Sivustolla ei myöskään ole yhteyttä samankaltaisesti nimettyihin yrityksiin.",
    links: [{ href: "/yhteystiedot", label: "Tietoa palvelusta" }],
  },
];
