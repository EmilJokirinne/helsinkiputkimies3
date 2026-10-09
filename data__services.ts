export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  symptomsTitle: string;
  symptoms: string[];
  involves: string[];
  /** Suunnittelu-arvio (ei tarkistettu markkinakeskiarvo). null = kohdekohtainen. */
  estimate: string | null;
  /** Laskurin oletustuntimäärä – käyttäjä voi muuttaa. */
  defaultHours: number;
  costFactors: string[];
  checklist: string[];
  urgent: string[];
  related: string[];
  faqs: Faq[];
}

export const SERVICES: Service[] = [
  {
    slug: "putkimies-paivystys",
    navLabel: "Päivystävä putkimies",
    h1: "Päivystävä putkimies Helsingissä",
    metaTitle: "Putkimies päivystys Helsinki – milloin tilata ja mitä se maksaa",
    metaDescription:
      "Milloin päivystävä putkimies kannattaa tilata, mitä päivystyslisät ja hälytysmaksut tarkoittavat ja miten vertailet Helsingin putkiliikkeiden päivystyshintoja.",
    intro:
      "Päivystyspalvelu on tarkoitettu tilanteisiin, joissa vesi leviää, viemäri tulvii tai vedenjakelu on kokonaan poikki eikä korjaus voi odottaa seuraavaan arkiaamuun. Päivystys on huomattavasti arkityötä kalliimpaa, joten ensimmäinen kysymys on aina: onko tilanne todella kiireellinen?",
    symptomsTitle: "Tyypillisiä päivystystilanteita",
    symptoms: [
      "Putki vuotaa eikä vettä saa suljettua huoneisto- tai kiinteistökohtaisesta venttiilistä",
      "Viemäri tulvii lattiakaivosta tai wc-istuimesta",
      "Lämminvesivaraaja vuotaa tai sen varoventtiili valuttaa jatkuvasti",
      "Vesi on talvella jäätynyt putkeen",
      "Vesivahinko on levinnyt rakenteisiin tai alakerran asuntoon",
    ],
    involves: [
      "Puhelinarvio tilanteesta ja ohjeet veden sulkemiseen ennen asentajan tuloa",
      "Hätäkorjaus, jolla vahinko saadaan pysäytettyä – lopullinen korjaus voidaan tehdä myöhemmin arkihinnalla",
      "Tarvittaessa kosteuden kartoitus ja vahinkoraportti vakuutusyhtiötä varten",
    ],
    estimate: null,
    defaultHours: 2,
    costFactors: [
      "Päivystyksen tuntihinta on julkaistuissa hinnastoissa noin kaksin- tai kolminkertainen arkihintaan verrattuna",
      "Hälytys- tai lähtömaksu, joka lisätään jokaiseen päivystyskäyntiin",
      "Ajankohta: arki-ilta, lauantai, sunnuntai ja pyhä hinnoitellaan usein eri tavoin",
      "Minimiveloitus, joka voi olla päivystyksessä sama tai eri kuin arkena",
      "Tarvikkeet ja mahdolliset laitevuokrat, kuten kuivaimet",
    ],
    checklist: [
      "Kysy puhelimessa tuntihinta, hälytysmaksu ja minimiveloitus juuri tälle ajankohdalle",
      "Varmista arvioitu saapumisaika – älä oleta sitä mainoksen perusteella",
      "Kerrostalossa ilmoita vahingosta myös huoltoyhtiölle tai isännöitsijälle",
      "Kysy, riittääkö väliaikainen korjaus ja voiko loput tehdä arkihinnalla",
    ],
    urgent: [
      "Vesi leviää eikä sitä saa suljettua",
      "Vettä valuu sähkölaitteiden, pistorasioiden tai valaisimien lähelle",
      "Viemäri tulvii jätevettä asuintiloihin",
      "Vuoto kastelee alakerran asuntoa tai rakenteita",
    ],
    related: ["vesivuodon-korjaus", "viemarin-avaus", "lvi-huolto"],
    faqs: [
      {
        q: "Paljonko putkimiehen päivystys maksaa?",
        a: "Julkaistuissa hinnastoissa päivystyksen tuntihinta vaihtelee noin 125 eurosta yli 240 euroon tunnissa ajankohdasta riippuen, ja lisäksi veloitetaan usein 119–163 euron hälytys- tai lähtömaksu. Tarkat luvut näet yrityskohtaisesti hintavertailusta.",
      },
      {
        q: "Tuleeko päivystävä putkimies varmasti tunnissa?",
        a: "Ei välttämättä. Saapumisaika riippuu yrityksen tilanteesta sillä hetkellä. Sivusto ei tiedä yritysten reaaliaikaista saatavuutta, joten kysy arvioitu saapumisaika aina puhelimessa.",
      },
      {
        q: "Kannattaako odottaa aamuun?",
        a: "Jos vuodon saa suljettua venttiilistä eikä vesi leviä, korjaus kannattaa usein tilata arkipäivälle. Silloin tuntihinta on selvästi edullisempi eikä hälytysmaksua yleensä peritä.",
      },
    ],
  },
  {
    slug: "viemarin-avaus",
    navLabel: "Tukkeutunut viemäri",
    h1: "Viemärin avaus Helsingissä",
    metaTitle: "Viemärin avaus Helsinki – hinta, syyt ja vertailu",
    metaDescription:
      "Tukkeutunut lavuaari, lattiakaivo tai wc? Lue, mistä viemärin avauksen hinta muodostuu, milloin tukos on taloyhtiön asia ja miten vertailet putkiliikkeitä Helsingissä.",
    intro:
      "Hidas vedenpoisto, kurliseva ääni tai paha haju kertovat yleensä alkavasta tukoksesta. Pieni tukos aukeaa usein itse, mutta jos vesi nousee lattiakaivosta tai tukos uusiutuu, syy voi olla syvemmällä viemäriverkostossa.",
    symptomsTitle: "Merkkejä tukkeutuvasta viemäristä",
    symptoms: [
      "Vesi poistuu hitaasti lavuaarista, suihkusta tai tiskialtaasta",
      "Lattiakaivosta nousee vettä, kun pesukone tai astianpesukone tyhjenee",
      "Viemäristä kuuluu kurlutusta tai tulee pahaa hajua",
      "WC-istuimen vesi nousee tavallista korkeammalle huuhdellessa",
    ],
    involves: [
      "Vesilukon ja lähimmän viemäriosan tarkastus ja puhdistus",
      "Avaus mekaanisella spiraalilla eli viemärinavauskoneella",
      "Laajemmissa tukoksissa painehuuhtelu, jota tehdään usein loka- tai huuhteluautolla",
      "Toistuvissa tukoksissa viemärikuvaus, jolla selvitetään syy (esim. painuma, juuret tai murtuma)",
    ],
    estimate: "150–500 €",
    defaultHours: 1.5,
    costFactors: [
      "Tukoksen sijainti: vesilukko vai syvemmällä runkolinjassa",
      "Tarvittava kalusto – viemärinavauskoneesta tai huuhteluautosta veloitetaan usein erikseen",
      "Onko kyse kiiretilauksesta ilta- tai viikonloppuaikaan",
      "Tarvitaanko viemärikuvaus ja raportti",
    ],
    checklist: [
      "Kokeile ensin vesilukon puhdistusta, jos se on turvallista ja helposti irrotettavissa",
      "Kerrostalossa ja rivitalossa selvitä, koskeeko tukos useampaa asuntoa – silloin ota yhteys huoltoyhtiöön",
      "Kysy, sisältyykö avauskone tuntihintaan vai veloitetaanko se erikseen",
      "Vältä voimakkaita kemikaaleja, jos asentaja on tulossa – ne voivat vaarantaa asentajan ja vaurioittaa putkia",
    ],
    urgent: [
      "Jätevesi nousee lattiakaivosta tai wc:stä asuintiloihin",
      "Talossa on vain yksi wc ja se on kokonaan tukossa",
      "Tukos koskee useaa asuntoa samassa rapussa",
    ],
    related: ["putkimies-paivystys", "lvi-huolto", "putkiremontti"],
    faqs: [
      {
        q: "Paljonko viemärin avaus maksaa Helsingissä?",
        a: "Yksinkertainen avaus arkipäivänä mahtuu usein putkiliikkeen minimiveloitukseen (julkaistuissa hinnastoissa noin 157–207 € sis. alv, ajoveloitus mukaan lukien), mutta kalusto, laitevuokrat ja ilta-aika voivat nostaa laskun selvästi. Pyydä hinta-arvio etukäteen.",
      },
      {
        q: "Kuka maksaa viemärin avauksen taloyhtiössä?",
        a: "Yleensä taloyhtiö vastaa yhteisistä viemärilinjoista ja osakas oman huoneistonsa vesilukoista ja niiden puhdistuksesta. Jos tukos johtuu asukkaan huolimattomuudesta, kustannus voi kuitenkin kohdistua asukkaalle. Tarkista taloyhtiön käytäntö isännöitsijältä.",
      },
    ],
  },
  {
    slug: "vesivuodon-korjaus",
    navLabel: "Vuotava putki",
    h1: "Vesivuodon korjaus Helsingissä",
    metaTitle: "Vesivuodon korjaus Helsinki – toimintaohjeet ja hinnat",
    metaDescription:
      "Putki vuotaa? Näin toimit heti, mistä vesivuodon korjauksen hinta muodostuu ja milloin kyse on taloyhtiön vastuulle kuuluvasta vahingosta.",
    intro:
      "Näkyvä vuoto hanaliitoksesta tai kodinkoneen letkusta on yleensä nopea korjata. Piilossa oleva vuoto seinän, lattian tai kotelon sisällä on hankalampi: sen paikantaminen vaatii mittauksia ja korjaus voi edellyttää rakenteiden avaamista.",
    symptomsTitle: "Merkkejä vesivuodosta",
    symptoms: [
      "Tippuva tai valuva liitos hanan, wc-istuimen tai kodinkoneen alla",
      "Kosteus- tai värjäytymäläiskä seinässä, katossa tai lattiassa",
      "Vesimittari pyörii, vaikka yhtään hanaa ei käytetä",
      "Tunkkainen haju tai irtoavat laatat märkätilassa",
    ],
    involves: [
      "Vuodon sulkeminen ja vuotokohdan paikantaminen",
      "Liitoksen, venttiilin tai putkenosan korjaus tai vaihto",
      "Tarvittaessa kosteuskartoitus ja vahinkoraportti vakuutusyhtiölle",
      "Isommissa vahingoissa rakenteiden kuivatus, joka on yleensä erillinen palvelu",
    ],
    estimate: "200–500 € (näkyvä vuoto); vuodon paikannus 200–500 €",
    defaultHours: 2,
    costFactors: [
      "Onko vuoto näkyvissä vai rakenteiden sisällä",
      "Tarvitaanko kosteusmittausta, kartoitusta tai raporttia",
      "Vaihdettavat osat ja tarvikkeet",
      "Kuivaimet ja muut laitevuokrat, joita veloitetaan usein vuorokausihinnalla",
      "Ajankohta: päivystystyö on moninkertaisesti arkityötä kalliimpaa",
    ],
    checklist: [
      "Sulje vesi huoneistokohtaisesta tai laitekohtaisesta venttiilistä, jos se on turvallista",
      "Valokuvaa vahinko ennen siivoamista – kuvista on hyötyä vakuutusasioissa",
      "Ilmoita vahingosta taloyhtiöön ja omaan kotivakuutukseesi",
      "Kysy, laatiiko putkiliike vahinkoraportin ja mitä se maksaa",
    ],
    urgent: [
      "Vesi leviää eikä sitä saa suljettua",
      "Vettä valuu alakerran asuntoon",
      "Vuoto on sähkölaitteiden lähellä",
    ],
    related: ["putkimies-paivystys", "lvi-huolto", "putkiremontti"],
    faqs: [
      {
        q: "Kuka maksaa vesivuodon korjauksen kerrostalossa?",
        a: "Vastuu riippuu siitä, mistä vuoto alkaa. Taloyhtiö vastaa yleensä rakenteisiin kuuluvista vesi- ja viemäriputkista, osakas esimerkiksi itse asentamistaan laitteista ja niiden liitännöistä. Vakuutukset korvaavat osan vahingoista. Lue tarkemmin oppaastamme taloyhtiön vastuista.",
      },
      {
        q: "Paljonko vuodon paikannus maksaa?",
        a: "Paikannus laskutetaan tavallisesti tuntityönä, ja mittaus- tai kartoitustyö voi olla tavallista asennustyötä kalliimpaa. Esimerkiksi yksi julkaistu hinnasto veloittaa kosteusmittauksesta ja -kartoituksesta 94,13 €/h.",
      },
    ],
  },
  {
    slug: "hanan-vaihto",
    navLabel: "Hanan vaihto",
    h1: "Hanan vaihto – hinta ja vertailu Helsingissä",
    metaTitle: "Hanan vaihto hinta Helsinki – mistä hinta muodostuu",
    metaDescription:
      "Hanan vaihdon hinta muodostuu työstä, minimiveloituksesta ja ajoveloituksesta. Vertaile Helsingin putkiliikkeiden julkaistuja hintoja ja tarkista, mitä kannattaa kysyä ennen tilausta.",
    intro:
      "Keittiön tai kylpyhuoneen hanan vaihto on tyypillinen pieni putkityö, joka valmistuu usein alle tunnissa. Juuri siksi minimiveloitus ja ajoveloitus ratkaisevat lopullisen hinnan enemmän kuin pelkkä tuntihinta.",
    symptomsTitle: "Milloin hana kannattaa vaihtaa",
    symptoms: [
      "Hana tippuu, vaikka se on suljettu",
      "Vipu jumittaa tai lämpötilan säätö ei toimi",
      "Hanan alla on kosteutta tai kalkkisaostumia liitoksissa",
      "Haluat astianpesukoneventtiilillä varustetun hanan tai muun lisätoiminnon",
    ],
    involves: [
      "Veden sulkeminen ja vanhan hanan irrotus",
      "Uuden hanan ja tarvittaessa uusien liitäntäletkujen asennus",
      "Sulkuventtiilien kunnon tarkistus – vanhat venttiilit voi olla järkevää vaihtaa samalla",
      "Tiiviyden koestus",
    ],
    estimate: "100–250 € (ilman hanaa)",
    defaultHours: 1,
    costFactors: [
      "Minimiveloitus: monella yrityksellä vähintään kaksi tuntia, vaikka työ veisi vähemmän",
      "Ajo- tai huoltoautoveloitus",
      "Sulkuventtiilien kunto ja mahdollinen vaihto",
      "Hana itse – hinta vaihtelee kymmenistä euroista satoihin",
      "Kiinteähintaiset asennuspaketit, joita osa yrityksistä tarjoaa",
    ],
    checklist: [
      "Hanki hana itse tai sovi, että asentaja tuo sen – kysy tarvikkeiden hinnoitteluperuste",
      "Tarkista, sopiiko uusi hana tason tai seinän reikäjakoon",
      "Kerrostalossa varmista, sulkeutuuko vesi huoneistokohtaisista venttiileistä",
      "Yhdistä samalle käynnille muita pieniä töitä, jotta minimiveloitus hyödynnetään",
    ],
    urgent: ["Hana tai sen liitos vuotaa jatkuvasti eikä sulkuventtiili pidä"],
    related: ["wc-istuimen-asennus", "astianpesukoneen-asennus", "vesivuodon-korjaus"],
    faqs: [
      {
        q: "Paljonko hanan vaihto maksaa?",
        a: "Arkipäivänä tehty hanan vaihto maksaa usein putkiliikkeen minimiveloituksen verran ajoveloitus mukaan lukien, julkaistuissa hinnastoissa noin 157–207 € sis. alv, minkä lisäksi tulevat hana ja tarvikkeet. Laske tarkempi arvio laskurilla.",
      },
      {
        q: "Saako hanan vaihdosta kotitalousvähennystä?",
        a: "Asennustyö voi oikeuttaa kotitalousvähennykseen, mutta tarvikkeet eivät. Ehdot ja enimmäismäärät riippuvat verovuodesta – tarkista ajantasaiset tiedot Verohallinnolta.",
      },
    ],
  },
  {
    slug: "wc-istuimen-asennus",
    navLabel: "WC-istuimen asennus",
    h1: "WC-istuimen asennus ja vaihto",
    metaTitle: "WC-istuimen asennus hinta Helsinki – vertailu ja vinkit",
    metaDescription:
      "WC-istuimen vaihdon hinta riippuu liitännästä, kiinnityksestä ja lattian kunnosta. Lue, mitä työhön sisältyy ja miten vertailet putkiliikkeiden hintoja Helsingissä.",
    intro:
      "WC-istuimen vaihto tehdään usein vanhan istuimen vuotaessa tai kylpyhuoneen päivityksen yhteydessä. Työ on tavallisesti suoraviivainen, mutta vanha kiinnitys, poikkeava viemäriliitäntä tai vaurioitunut lattia voivat pidentää työaikaa.",
    symptomsTitle: "Tyypillisiä syitä vaihtoon",
    symptoms: [
      "Säiliö valuttaa vettä jatkuvasti istuimeen",
      "Istuimen juuressa on kosteutta tai se heiluu",
      "Posliinissa on halkeama",
      "Haluat vähemmän vettä kuluttavan tai helpommin siivottavan mallin",
    ],
    involves: [
      "Vanhan istuimen irrotus ja liitosten tarkistus",
      "Uuden istuimen kiinnitys, viemäri- ja vesiliitäntä",
      "Sulkuventtiilin tarkistus ja tarvittaessa vaihto",
      "Tiiviys- ja toimintakoe",
      "Vanhan istuimen poisvienti, jos siitä sovitaan",
    ],
    estimate: "150–350 € (ilman istuinta)",
    defaultHours: 2,
    costFactors: [
      "Lattia- vai seinäkiinnitteinen malli ja viemäriliitännän suunta",
      "Vanhan istuimen kiinnitys, esimerkiksi valettu tai liimattu",
      "Tarvittavat liitosputket, venttiilit ja tiivisteet",
      "Vanhan istuimen kierrätys",
    ],
    checklist: [
      "Tarkista uuden istuimen viemäriliitännän tyyppi ennen ostoa",
      "Kysy, sisältyykö vanhan istuimen poisvienti hintaan",
      "Kerrostalossa selvitä, tarvitaanko muutostyöilmoitus taloyhtiölle",
    ],
    urgent: ["Istuimen liitos vuotaa jatkuvasti lattialle", "Talon ainoa wc on käyttökelvoton"],
    related: ["hanan-vaihto", "viemarin-avaus", "vesivuodon-korjaus"],
    faqs: [
      {
        q: "Paljonko WC-istuimen asennus maksaa?",
        a: "Suunnitteluarviomme on noin 150–350 € ilman istuinta, mutta lopullinen hinta riippuu kiinnityksestä, liitännöistä ja yrityksen minimiveloituksesta. Osa yrityksistä tarjoaa asennuksen kiinteähintaisena pakettina.",
      },
      {
        q: "Tarvitaanko WC-istuimen vaihtoon taloyhtiön lupa?",
        a: "Pelkkä samanlaisen istuimen vaihto on usein ilmoitusvelvollinen muutostyö, mutta käytännöt vaihtelevat. Kysy taloyhtiöltä ennen töiden aloittamista.",
      },
    ],
  },
  {
    slug: "astianpesukoneen-asennus",
    navLabel: "Pesukoneen asennus",
    h1: "Astianpesukoneen ja pyykinpesukoneen asennus",
    metaTitle: "Astianpesukoneen asennus Helsinki – vesiliitännän hinta",
    metaDescription:
      "Astianpesukoneen tai pyykinpesukoneen vesi- ja viemäriliitäntä: mitä asennukseen sisältyy, mitä se maksaa ja mitä vesivahinkojen välttämiseksi kannattaa tarkistaa.",
    intro:
      "Kodinkoneiden liitännät ovat yleinen vesivahinkojen lähde, joten asennus kannattaa tehdä huolellisesti. Uusi kone vaatii toimivan sulkuventtiilin, ehjän poistoletkun liitännän ja usein vuotokaukalon.",
    symptomsTitle: "Kun tarvitset asennuksen",
    symptoms: [
      "Uusi astianpesukone tai pyykinpesukone pitää liittää vesijohtoon ja viemäriin",
      "Koneelle ei ole valmista venttiiliä tai liitäntää",
      "Vanhan koneen liitännät tippuvat tai letkut ovat haurastuneet",
    ],
    involves: [
      "Koneventtiilin tai hanan koneventtiilin asennus",
      "Tulo- ja poistoletkun liitäntä",
      "Vuotokaukalon tai vuotovahdin asennus, jos sovitaan",
      "Tiiviyden ja tyhjennyksen koestus",
    ],
    estimate: "Astianpesukone 100–250 €, pyykinpesukone 100–200 € (ilman tarvikkeita)",
    defaultHours: 1,
    costFactors: [
      "Onko valmis venttiili ja viemäriliitäntä olemassa",
      "Tarvitaanko uusi koneventtiili, hana tai vuotokaukalo",
      "Integroitavan koneen sovitus kalusteisiin",
      "Minimiveloitus ja ajoveloitus",
    ],
    checklist: [
      "Tarkista koneen asennusohjeesta vaatimukset ja ota ohje esille",
      "Varmista, että koneelle on sähköpistorasia – sähkötyöt eivät kuulu putkimiehelle",
      "Kysy, kuuluuko vanhan koneen irrotus ja poisvienti hintaan",
      "Selvitä taloyhtiön vaatimukset vuotokaukalosta tai vuotovahdista",
    ],
    urgent: ["Liitäntä vuotaa eikä koneventtiiliä saa suljettua"],
    related: ["hanan-vaihto", "vesivuodon-korjaus", "lvi-huolto"],
    faqs: [
      {
        q: "Voinko asentaa astianpesukoneen itse?",
        a: "Osa valmistajista sallii liittämisen valmiiseen liitäntään, mutta uuden venttiilin tai viemäriliitännän asennus kannattaa teettää ammattilaisella. Kotivakuutus voi rajata korvauksia, jos asennus on tehty puutteellisesti – tarkista oman vakuutuksesi ehdot.",
      },
      {
        q: "Paljonko pesukoneen asennus maksaa?",
        a: "Valmiiseen liitäntään asennus jää usein minimiveloituksen sisään. Jos tarvitaan uusi venttiili tai viemäriliitäntä, työaika ja tarvikkeet lisäävät hintaa.",
      },
    ],
  },
  {
    slug: "putkiremontti",
    navLabel: "Putkiremontti",
    h1: "Putkiremontti Helsingissä – hinta ja valmistautuminen",
    metaTitle: "Putkiremontti Helsinki hinta – mistä kustannukset muodostuvat",
    metaDescription:
      "Putkiremontin hinta määräytyy aina kohdekohtaisesti. Lue, miten linjasaneeraus etenee, mistä kustannukset muodostuvat ja miten vertailet urakoitsijoita.",
    intro:
      "Putkiremontti eli linjasaneeraus on taloyhtiön suurimpia hankkeita. Siinä uusitaan käyttövesi- ja viemäriputket ja usein samalla märkätilat. Hinta lasketaan aina kohdekohtaisesti suunnitelmien ja urakkatarjousten perusteella – tuntihintavertailu ei tähän sovellu.",
    symptomsTitle: "Merkkejä putkiremontin tarpeesta",
    symptoms: [
      "Kiinteistön putket ovat lähellä teknisen käyttöikänsä loppua",
      "Vuotoja ja viemäritukoksia esiintyy toistuvasti",
      "Kuntotutkimus tai viemärikuvaus osoittaa laajoja vaurioita",
      "Taloyhtiön pitkän tähtäimen suunnitelma (PTS) ennakoi saneerausta",
    ],
    involves: [
      "Kuntotutkimus ja hankesuunnittelu",
      "Toteutustavan valinta: perinteinen uusiminen, pinnoitus tai uudet nousulinjat",
      "Urakkatarjousten pyytäminen ja vertailu",
      "Toteutus, valvonta ja vastaanotto",
    ],
    estimate: null,
    defaultHours: 4,
    costFactors: [
      "Kiinteistön koko, ikä ja rakenteet",
      "Valittu menetelmä ja toteutuslaajuus",
      "Märkätilojen uusiminen ja osakkaiden lisätyöt",
      "Suunnittelu, valvonta ja mahdolliset haitta-ainetutkimukset",
    ],
    checklist: [
      "Hanki ajantasainen kuntotutkimus ennen päätöksiä",
      "Käytä riippumatonta suunnittelijaa ja valvojaa",
      "Pyydä vertailukelpoiset urakkatarjoukset samoista suunnitelmista",
      "Selvitä osakkaiden lisä- ja muutostöiden hinnoittelu etukäteen",
    ],
    urgent: ["Putkistossa on vuotoja, jotka aiheuttavat toistuvia vesivahinkoja"],
    related: ["lvi-huolto", "viemarin-avaus", "vesivuodon-korjaus"],
    faqs: [
      {
        q: "Paljonko putkiremontti maksaa Helsingissä?",
        a: "Hinta määräytyy aina kohdekohtaisesti. Emme julkaise neliöhintoja, koska ne vaihtelevat kohteen, menetelmän ja laajuuden mukaan. Luotettavimman arvion saat suunnitelmien perusteella pyydetyistä urakkatarjouksista.",
      },
      {
        q: "Voiko putkiremontista saada kotitalousvähennystä?",
        a: "Taloyhtiön teettämässä remontissa osakas voi tietyin edellytyksin saada vähennystä osuudestaan työn kustannuksiin. Säännöt riippuvat verovuodesta ja toteutustavasta – tarkista ne Verohallinnon sivuilta.",
      },
    ],
  },
  {
    slug: "lvi-huolto",
    navLabel: "LVI-huolto",
    h1: "LVI-huolto ja ennakoiva kunnossapito",
    metaTitle: "LVI-huolto Helsinki – LVI-liikkeen palvelut ja hinnat",
    metaDescription:
      "LVI-huolto ehkäisee vesivahinkoja ja kalliita päivystyskäyntejä. Lue, mitä huoltoon kuuluu, mitä se maksaa ja miten vertailet LVI-liikkeitä Helsingissä.",
    intro:
      "Moni kallis päivystyskäynti olisi vältettävissä tarkistamalla venttiilit, liitännät ja lämminvesivaraaja säännöllisesti. Ennakoiva LVI-huolto on helppo yhdistää muihin pieniin töihin, jolloin minimiveloitus hyödynnetään tehokkaasti.",
    symptomsTitle: "Kohteita, jotka kannattaa tarkistaa",
    symptoms: [
      "Huoneistokohtaiset ja laitekohtaiset sulkuventtiilit eivät sulkeudu kunnolla",
      "Lämminvesivaraajan varoventtiili valuttaa tai varaaja on vanha",
      "Patteriventtiilit jumittavat tai patterit eivät lämpene",
      "Lattiakaivot ja vesilukot tukkeutuvat toistuvasti",
    ],
    involves: [
      "Venttiilien, liitosten ja letkujen kunnon tarkistus",
      "Lämminvesivaraajan tarkistus ja tarvittaessa vaihto",
      "Patteriventtiilien huolto ja lämmitysverkoston tasapainotus",
      "Lattiakaivojen ja vesilukkojen puhdistus",
    ],
    estimate: null,
    defaultHours: 2,
    costFactors: [
      "Tarkistettavien kohteiden määrä",
      "Vaihdettavat osat, kuten venttiilit ja varaaja",
      "Patteriventtiilien vaihto voi vaatia lämmitysverkoston tyhjentämistä tai putken jäädytystä",
    ],
    checklist: [
      "Listaa kaikki tarkistettavat kohteet etukäteen yhdelle käynnille",
      "Selvitä taloyhtiön vastuunjako ennen töitä",
      "Kysy huoltoraportista, jos haluat dokumentin myöhempää käyttöä varten",
    ],
    urgent: ["Lämminvesivaraaja vuotaa", "Lämmitys on kokonaan poikki pakkasella"],
    related: ["vesivuodon-korjaus", "hanan-vaihto", "putkiremontti"],
    faqs: [
      {
        q: "Kuinka usein LVI-laitteet pitäisi tarkistaa?",
        a: "Yleisohjeena venttiilit ja kodinkoneiden liitännät kannattaa tarkistaa silmämääräisesti säännöllisesti, ja lattiakaivot puhdistaa usein. Laitekohtaiset huoltovälit löytyvät valmistajan ohjeista.",
      },
      {
        q: "Mikä on LVI-liike?",
        a: "LVI-liike tekee lämpö-, vesi- ja ilmanvaihtotekniikan töitä. Putkimiehen työt kuuluvat LVI-alaan, ja moni helsinkiläinen putkiliike tarjoaa myös lämmitys- ja ilmanvaihtotöitä.",
      },
    ],
  },
];

export function getService(slug: string): Service {
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) throw new Error(`Tuntematon palvelu: ${slug}`);
  return s;
}

/** Etusivun pikanavigointi. */
export const QUICK_LINKS: { label: string; href: string; icon: "droplet" | "drain" | "faucet" | "toilet" | "washer" | "wrench" | "siren" }[] = [
  { label: "Vuotava putki", href: "/vesivuodon-korjaus", icon: "droplet" },
  { label: "Tukkeutunut viemäri", href: "/viemarin-avaus", icon: "drain" },
  { label: "Hanan vaihto", href: "/hanan-vaihto", icon: "faucet" },
  { label: "WC-istuimen asennus", href: "/wc-istuimen-asennus", icon: "toilet" },
  { label: "Pesukoneen asennus", href: "/astianpesukoneen-asennus", icon: "washer" },
  { label: "Putkiremontti", href: "/putkiremontti", icon: "wrench" },
  { label: "Päivystävä putkimies", href: "/putkimies-paivystys", icon: "siren" },
];

/** Hintaoppaan suunnittelu-arviot (EI tarkistettuja markkinakeskiarvoja). */
export const ESTIMATE_TABLE: { work: string; range: string; href?: string }[] = [
  { work: "Hanan vaihto", range: "100–250 €", href: "/hanan-vaihto" },
  { work: "WC-istuimen vaihto", range: "150–350 €", href: "/wc-istuimen-asennus" },
  { work: "Astianpesukoneen vesiliitäntä", range: "100–250 €", href: "/astianpesukoneen-asennus" },
  { work: "Pyykinpesukoneen vesiliitäntä", range: "100–200 €", href: "/astianpesukoneen-asennus" },
  { work: "Viemärin avaus", range: "150–500 €", href: "/viemarin-avaus" },
  { work: "Näkyvän vesivuodon korjaus", range: "200–500 €", href: "/vesivuodon-korjaus" },
  { work: "Vuodon paikannus", range: "200–500 €", href: "/vesivuodon-korjaus" },
  { work: "Putkiremontti", range: "Kohdekohtainen tarjous", href: "/putkiremontti" },
];
