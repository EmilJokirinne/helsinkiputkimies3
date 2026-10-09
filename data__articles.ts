/**
 * Oppaat. Uuden oppaan voi lisätä tähän taulukkoon – sivu, sitemap ja
 * oppaiden listaus päivittyvät automaattisesti.
 *
 * Tekstissä voi käyttää linkkejä muodossa [linkin teksti](/polku) tai
 * [teksti](https://ulkoinen.fi). Ulkoiset linkit avautuvat uuteen välilehteen.
 */

export interface ArticleSection {
  h2: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  published: string;
  updated: string;
  readingMinutes: number;
  sections: ArticleSection[];
  /** Huomautus, joka erottaa yleisen tiedon tapauskohtaisesta neuvonnasta. */
  disclaimer: string;
  related: string[];
}

const GENERAL =
  "Tämä opas sisältää yleistä tietoa. Se ei korvaa tapauskohtaista neuvontaa – tarkista oman tilanteesi yksityiskohdat putkiliikkeeltä, taloyhtiöltä, vakuutusyhtiöltä tai viranomaiselta.";

export const ARTICLES: Article[] = [
  {
    slug: "paljonko-putkimies-maksaa-helsingissa",
    title: "Paljonko putkimies maksaa Helsingissä?",
    description:
      "Putkimiehen hinta Helsingissä koostuu tuntihinnasta, minimiveloituksesta, ajoveloituksesta ja tarvikkeista. Katso, miten julkaistut hinnastot eroavat toisistaan.",
    excerpt: "Tuntihinta on vain osa laskua. Näin putkityön kokonaishinta muodostuu.",
    published: "2026-10-09",
    updated: "2026-10-09",
    readingMinutes: 5,
    sections: [
      {
        h2: "Lyhyt vastaus",
        paragraphs: [
          "Helsinkiläisten putkiliikkeiden julkaisemat arkipäivän tuntihinnat olivat tarkistushetkellä noin 63–81 euroa tunnissa arvonlisäveroineen. Koska useimmilla yrityksillä on kahden tunnin minimiveloitus ja erillinen ajoveloitus, pienikin arkityö maksaa käytännössä usein noin 157–207 euroa ennen tarvikkeita.",
          "Ajantasaiset yrityskohtaiset luvut löydät [hintavertailusta](/putkimiehet-helsinki) ja voit laskea oman tilanteesi arvion [laskurilla](/hintavertailu).",
        ],
      },
      {
        h2: "Mistä lasku muodostuu",
        list: [
          "Työ: tuntihinta kertaa laskutettava aika. Monet laskevat työaikaan myös matkat ja tarvikehaut.",
          "Minimiveloitus: usein kaksi tuntia, vaikka työ veisi vähemmän.",
          "Ajo- tai huoltoautoveloitus: kiinteä summa käynniltä, joskus lisäksi kilometrikorvaus.",
          "Lähtö- tai hälytysmaksu: tyypillisesti vain päivystystöissä.",
          "Tarvikkeet ja laitevuokrat: esimerkiksi venttiilit, tiivisteet ja viemärinavauskone.",
          "Arvonlisävero: kuluttajahinnoissa yleensä mukana, mutta tarkista aina merkintä \"sis. alv\".",
        ],
      },
      {
        h2: "Esimerkki: miksi edullisin tuntihinta ei aina ole edullisin lasku",
        paragraphs: [
          "Kuvitellaan tunnin mittainen hanan vaihto arkipäivänä. Jos yrityksellä A on tuntihinta 60 € ja minimiveloitus kaksi tuntia, työn osuus on 120 €. Jos yrityksellä B on tuntihinta 70 € mutta minimiveloitus yksi tunti, työn osuus on 70 €. Kun ajoveloitukset lisätään, korkeamman tuntihinnan yritys voi tulla halvemmaksi.",
          "Esimerkin luvut ovat havainnollistavia. Vertaa aina kokonaisuutta, älä pelkkää tuntihintaa.",
        ],
      },
      {
        h2: "Ilta, viikonloppu ja pyhät",
        paragraphs: [
          "Päivystysajan tuntihinnat olivat julkaistuissa hinnastoissa noin kaksin- tai kolminkertaisia arkihintaan verrattuna, ja niihin lisättiin usein 119–163 euron hälytys- tai lähtömaksu. Jos vuodon saa suljettua turvallisesti, korjauksen siirtäminen arkipäivälle voi säästää satoja euroja. Lue lisää oppaasta [Milloin kannattaa tilata päivystävä putkimies?](/oppaat/milloin-tilata-paivystava-putkimies).",
        ],
      },
      {
        h2: "Kotitalousvähennys",
        paragraphs: [
          "Putkityön työosuus voi oikeuttaa kotitalousvähennykseen. Vähennyksen määrä, omavastuu ja ehdot riippuvat verovuodesta, joten tarkista ne [Verohallinnon sivuilta](https://www.vero.fi/henkiloasiakkaat/vahennykset/kotitalousvahennys/). Pyydä laskulle työn osuus eriteltynä.",
        ],
      },
    ],
    disclaimer: GENERAL,
    related: ["miten-vertailet-putkiliikkeiden-hintoja", "miten-valmistaudut-putkimiehen-kayntiin"],
  },
  {
    slug: "mita-tehda-kun-putki-vuotaa",
    title: "Mitä tehdä, kun putki vuotaa?",
    description:
      "Vesivuoto kotona: sulje vesi, suojaa omaisuus, pysy erossa sähkölaitteista ja ilmoita taloyhtiölle. Selkeät ohjeet ensimmäisiin minuutteihin.",
    excerpt: "Ensimmäiset minuutit ratkaisevat vahingon laajuuden. Näin toimit turvallisesti.",
    published: "2026-10-09",
    updated: "2026-10-09",
    readingMinutes: 4,
    sections: [
      {
        h2: "Toimi heti näin",
        ordered: true,
        list: [
          "Sulje vesi, jos se on turvallista. Laitekohtainen venttiili on yleensä hanan tai koneen alla, huoneistokohtaiset venttiilit usein kylpyhuoneessa, keittiössä tai teknisessä kotelossa.",
          "Pysy erossa sähkölaitteista märissä tiloissa. Jos vettä on pistorasioiden, valaisimien tai sähkökeskuksen lähellä, älä koske niihin.",
          "Suojaa omaisuus: nosta tavarat pois vedestä ja kerää vettä astioihin ja pyyhkeisiin.",
          "Ilmoita taloyhtiön huoltoyhtiölle tai isännöitsijälle. Huoltoyhtiöllä on usein ympärivuorokautinen päivystysnumero porraskäytävän ilmoitustaululla.",
          "Jos vuoto on vakava tai leviää, hanki kiireellinen ammattiapu.",
          "Valokuvaa vahinko ja ilmoita siitä vakuutusyhtiöösi.",
        ],
      },
      {
        h2: "Mistä tunnistat, onko tilanne kiireellinen",
        list: [
          "Kiireellinen: vesi leviää, vuotoa ei saa suljettua, vettä valuu alakertaan tai sähkölaitteiden lähelle.",
          "Ei yleensä kiireellinen: pieni tippuminen, joka loppuu venttiilin sulkemiseen ja jonka voi korjata arkena.",
        ],
      },
      {
        h2: "Kun soitat putkiliikkeeseen",
        paragraphs: [
          "Kerro, mistä vesi tulee, onko se suljettu ja mitä on kastunut. Kysy päivystyksen tuntihinta, hälytysmaksu, minimiveloitus ja arvioitu saapumisaika. Saatavuus, saapumisajat ja lisät vaihtelevat yrityksittäin, ja ne on aina varmistettava suoraan yritykseltä.",
          "Julkaistuja hintoja voit verrata [putkiliikkeiden vertailussa](/putkimiehet-helsinki).",
        ],
      },
      {
        h2: "Vuodon jälkeen",
        paragraphs: [
          "Kosteus voi jäädä rakenteisiin, vaikka pinta näyttäisi kuivalta. Kysy kosteuskartoituksesta ja sovi taloyhtiön kanssa jatkotoimista. Vastuunjaosta kerrotaan oppaassa [Kuka vastaa putkivuodosta taloyhtiössä?](/oppaat/kuka-vastaa-putkivuodosta-taloyhtiossa).",
        ],
      },
    ],
    disclaimer:
      "Ohjeet ovat yleisiä turvallisuusohjeita. Hengen- tai terveydenvaarassa soita hätänumeroon 112. Sivusto ei välitä päivystyspalveluita eikä tiedä yritysten reaaliaikaista saatavuutta.",
    related: ["milloin-tilata-paivystava-putkimies", "kuka-vastaa-putkivuodosta-taloyhtiossa"],
  },
  {
    slug: "milloin-tilata-paivystava-putkimies",
    title: "Milloin kannattaa tilata päivystävä putkimies?",
    description:
      "Päivystys maksaa moninkertaisesti arkityöhön verrattuna. Näin arvioit, kannattaako putkimies tilata heti vai seuraavaksi arkipäiväksi.",
    excerpt: "Päivystyslasku voi olla monta kertaa arkilaskua suurempi. Arvioi tilanne ensin.",
    published: "2026-10-09",
    updated: "2026-10-09",
    readingMinutes: 4,
    sections: [
      {
        h2: "Tilaa päivystys, kun",
        list: [
          "vesi leviää eikä vuotoa saa suljettua",
          "viemäri tulvii jätevettä asuintiloihin",
          "vuoto kastelee rakenteita tai naapurin asuntoa",
          "lämmitys tai vesi on kokonaan poikki niin, että siitä on vaaraa terveydelle tai kiinteistölle",
        ],
      },
      {
        h2: "Odota arkipäivään, kun",
        list: [
          "tippuminen loppuu venttiilin sulkemiseen",
          "viemäri vetää hitaasti, mutta toimii",
          "kodissa on toinen wc tai vesipiste käytettävissä",
        ],
      },
      {
        h2: "Mitä päivystys maksaa",
        paragraphs: [
          "Julkaistuissa hinnastoissa päivystystunnit maksoivat noin 125–245 euroa ajankohdasta riippuen, ja lisäksi veloitettiin usein hälytys- tai lähtömaksu. Esimerkiksi kahden tunnin työ lauantaina voi maksaa julkaistuilla hinnoilla useita satoja euroja ennen tarvikkeita. Laske arvio [laskurilla](/hintavertailu) valitsemalla ajankohdaksi ilta, lauantai, sunnuntai tai pyhä.",
        ],
      },
      {
        h2: "Taloyhtiön huoltoyhtiö ensin?",
        paragraphs: [
          "Kerrostalossa ja rivitalossa yhteisten putkien vika kuuluu yleensä taloyhtiön hoidettavaksi. Soita silloin ensin huoltoyhtiön päivystykseen, joka voi tilata korjaajan. Jos tilaat putkimiehen itse taloyhtiön vastuulle kuuluvaan vikaan, sovi kustannuksista taloyhtiön kanssa mahdollisimman pian.",
        ],
      },
    ],
    disclaimer: GENERAL,
    related: ["mita-tehda-kun-putki-vuotaa", "paljonko-putkimies-maksaa-helsingissa"],
  },
  {
    slug: "miten-vertailet-putkiliikkeiden-hintoja",
    title: "Miten vertailet putkiliikkeiden hintoja?",
    description:
      "Vertaile putkiliikkeitä kokonaishinnan, minimiveloituksen, ajoveloitusten ja laskutusperusteiden avulla. Tarkistuslista tarjouspyyntöön.",
    excerpt: "Vertaa kokonaishintaa, älä tuntihintaa. Käytä tätä tarkistuslistaa.",
    published: "2026-10-09",
    updated: "2026-10-09",
    readingMinutes: 5,
    sections: [
      {
        h2: "Vertaa näitä kuutta asiaa",
        ordered: true,
        list: [
          "Tuntihinta juuri sille ajankohdalle, jolloin työ tehdään",
          "Minimiveloitus tunteina tai euroina",
          "Ajo-, huoltoauto- ja kilometriveloitukset sekä pysäköinti",
          "Lasketaanko matkat ja tarvikehaut työaikaan",
          "Laskutetaanko alkavilta tunneilta",
          "Tarvikkeiden ja laitevuokrien hinnoitteluperuste",
        ],
      },
      {
        h2: "Pyydä kiinteä hinta, kun se on mahdollista",
        paragraphs: [
          "Selkeissä töissä, kuten hanan tai wc-istuimen vaihdossa, osa yrityksistä tarjoaa kiinteähintaisia paketteja. Kiinteä hinta poistaa työajan epävarmuuden. Laajemmissa töissä pyydä kirjallinen tarjous, josta käy ilmi, mitä hintaan sisältyy.",
        ],
      },
      {
        h2: "Tarkista arvonlisävero",
        paragraphs: [
          "Kuluttajille ilmoitetut hinnat sisältävät yleensä arvonlisäveron, mutta osa hinnastoista näyttää myös verottomat hinnat. Arvonlisäveron yleinen verokanta on 25,5 %. Varmista, että vertailet saman verokäsittelyn hintoja.",
        ],
      },
      {
        h2: "Käytä laskuria",
        paragraphs: [
          "[Hintavertailussa](/hintavertailu) voit valita ajankohdan ja työtuntien määrän ja nähdä rinnakkain, mitä työ maksaisi kunkin yrityksen julkaistulla hinnastolla. Jos yritys ei ole julkaissut jotain tarvittavaa erää, laskuri ei arvaa sitä vaan kehottaa pyytämään hinnan yritykseltä.",
        ],
      },
    ],
    disclaimer: GENERAL,
    related: ["paljonko-putkimies-maksaa-helsingissa", "miten-valmistaudut-putkimiehen-kayntiin"],
  },
  {
    slug: "kuka-vastaa-putkivuodosta-taloyhtiossa",
    title: "Kuka vastaa putkivuodosta taloyhtiössä?",
    description:
      "Taloyhtiön ja osakkaan vastuunjako putkivuodoissa: mistä vastuu yleensä määräytyy, mitä vakuutukset korvaavat ja miten toimit vahingon sattuessa.",
    excerpt: "Vastuu riippuu siitä, mistä vuoto alkaa. Yleiset periaatteet selkokielellä.",
    published: "2026-10-09",
    updated: "2026-10-09",
    readingMinutes: 5,
    sections: [
      {
        h2: "Pääsääntö",
        paragraphs: [
          "Asunto-osakeyhtiössä kunnossapitovastuu jakautuu taloyhtiön ja osakkaan kesken asunto-osakeyhtiölain ja yhtiöjärjestyksen mukaan. Yleisesti taloyhtiö vastaa rakenteista ja kiinteistön perusjärjestelmistä, kuten vesi- ja viemärijohdoista, ja osakas huoneiston sisäosista sekä itse asentamistaan laitteista.",
        ],
      },
      {
        h2: "Tyypillisiä esimerkkejä",
        list: [
          "Taloyhtiö vastaa yleensä: rakenteiden sisällä kulkevista käyttövesi- ja viemäriputkista sekä runkolinjoista.",
          "Osakas vastaa yleensä: hanoista, kodinkoneista ja niiden liitännöistä sekä osakkaan itse tekemistä muutoksista.",
          "Vesilukkojen ja lattiakaivojen puhdistus kuuluu yleensä asukkaalle.",
        ],
        paragraphs: [
          "Yhtiöjärjestys voi poiketa lain oletuksista, ja tulkinta riippuu tapauksesta. Taloyhtiöllä voi olla myös oma vastuunjakotaulukkonsa.",
        ],
      },
      {
        h2: "Ilmoitusvelvollisuus",
        paragraphs: [
          "Osakkaan on ilmoitettava huoneistossa havaitsemastaan viasta tai vauriosta, joka kuuluu taloyhtiön kunnossapitovastuulle, viipymättä taloyhtiölle. Ilmoita vahingosta myös omaan kotivakuutukseen.",
        ],
      },
      {
        h2: "Vakuutukset",
        paragraphs: [
          "Taloyhtiön kiinteistövakuutus ja osakkaan kotivakuutus korvaavat eri osia vahingosta ja niissä on omat omavastuunsa. Korvattavuus riippuu vakuutusehdoista ja vahingon syystä. Säilytä kuvat, laskut ja putkiliikkeen vahinkoraportti.",
        ],
      },
      {
        h2: "Mistä saat tapauskohtaista tietoa",
        list: [
          "Isännöitsijä tai taloyhtiön hallitus",
          "Oma vakuutusyhtiö",
          "Kiinteistöalan järjestöjen neuvontapalvelut",
        ],
      },
    ],
    disclaimer:
      "Tämä on yleistä tietoa eikä oikeudellista neuvontaa. Vastuunjako riippuu aina yhtiöjärjestyksestä, vahingon syystä ja vakuutusehdoista.",
    related: ["mita-tehda-kun-putki-vuotaa", "milloin-tilata-paivystava-putkimies"],
  },
  {
    slug: "miten-valmistaudut-putkimiehen-kayntiin",
    title: "Miten valmistaudut putkimiehen käyntiin?",
    description:
      "Hyvä valmistautuminen lyhentää työaikaa ja pienentää laskua. Tarkistuslista ennen putkimiehen käyntiä.",
    excerpt: "Jokainen säästetty puolituntinen näkyy laskussa. Valmistaudu näin.",
    published: "2026-10-09",
    updated: "2026-10-09",
    readingMinutes: 3,
    sections: [
      {
        h2: "Ennen käyntiä",
        ordered: true,
        list: [
          "Kuvaa ongelma ja lähetä kuvat etukäteen, jos yritys sitä pyytää.",
          "Selvitä, missä sulkuventtiilit ovat ja toimivatko ne.",
          "Tyhjennä tila: esimerkiksi tiskialtaan alakaappi tai pesukoneen ympäristö.",
          "Hanki valmiiksi uusi hana, wc-istuin tai laite, jos olet sopinut hankkivasi sen itse.",
          "Varmista pysäköinti. Helsingin kantakaupungissa pysäköintimaksu voidaan veloittaa asiakkaalta.",
          "Kerrostalossa tarkista, tarvitaanko taloyhtiön lupa tai muutostyöilmoitus.",
        ],
      },
      {
        h2: "Kysy etukäteen",
        list: [
          "Tuntihinta, minimiveloitus ja ajoveloitus",
          "Lasketaanko matkat ja tarvikehaut työaikaan",
          "Tarvikkeiden hinnoittelu",
          "Erittely kotitalousvähennystä varten",
        ],
      },
      {
        h2: "Yhdistä pienet työt",
        paragraphs: [
          "Jos minimiveloitus on kaksi tuntia ja itse työ kestää puoli tuntia, samalla käynnillä kannattaa hoitaa muitakin pieniä töitä, kuten tippuvan hanan korjaus tai venttiilien tarkistus. Katso [LVI-huollon](/lvi-huolto) tyypilliset tarkistuskohteet.",
        ],
      },
    ],
    disclaimer: GENERAL,
    related: ["miten-vertailet-putkiliikkeiden-hintoja", "paljonko-putkimies-maksaa-helsingissa"],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
