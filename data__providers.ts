/**
 * PUTKILIIKKEIDEN HINTATIEDOT
 * ---------------------------------------------------------------------------
 * Tämä on sivuston ainoa paikka, jossa yritysten hintoja ja ehtoja ylläpidetään.
 * Käyttöliittymä (hakemisto, laskuri, hintavertailu) lukee kaiken täältä.
 *
 * Säännöt:
 *  - Kirjaa vain luku, joka näkyy yrityksen omalla sivulla (priceListUrl).
 *  - Tuntematon arvo = null. Älä koskaan arvaa. null näkyy sivustolla
 *    tekstinä "Hinta pyydettävä yritykseltä" ja laskuri jättää arvion tekemättä.
 *  - 0 tarkoittaa, että hinnastossa ei mainita kyseistä erää kyseiselle ajalle.
 *  - Kaikki euromäärät sisältävät arvonlisäveron (alv 25,5 %), ellei
 *    vatIncluded ole false.
 *  - Päivitä lastChecked aina, kun tarkistat hinnaston (muoto VVVV-KK-PP).
 */

export type Slot = "arki" | "ilta" | "lauantai" | "sunnuntai" | "pyha";

export const SLOT_LABELS: Record<Slot, string> = {
  arki: "Arkipäivä (päiväaika)",
  ilta: "Arki-ilta tai -yö",
  lauantai: "Lauantai",
  sunnuntai: "Sunnuntai",
  pyha: "Arkipyhä",
};

export interface SlotTariff {
  /** Tuntihinta €/h sis. alv. null = ei julkaistu. */
  hourly: number | null;
  /** Kiinteä huoltoauto-/ajoveloitus per käynti. null = ei julkaistu. */
  vehicle: number | null;
  /** Hälytys-/lähtö-/päivystyslisä per käynti. 0 = ei mainita, null = ei tiedossa. */
  callout: number | null;
  /** Minimiveloitus tunteina. null = ei julkaistu. */
  minHours: number | null;
}

export interface ExtraFee {
  label: string;
  amount: number;
  note: string;
}

export interface Provider {
  id: string;
  name: string;
  legalName: string | null;
  businessId: string | null;
  website: string;
  priceListUrl: string | null;
  /** Palvelualue yrityksen oman ilmoituksen mukaan. null = ei varmistettu. */
  serviceArea: string | null;
  /** Palvelut yrityksen sivuilla mainitun mukaan. Tyhjä = ei varmistettu. */
  services: string[];
  /** Yritys ilmoittaa sivuillaan päivystyksestä (oma ilmoitus, ei sivuston varmistama). */
  emergencyAdvertised: boolean | null;
  emergencyNote: string | null;
  vatIncluded: boolean;
  tariffs: Record<Slot, SlotTariff>;
  /** Kilometrikorvaus €/km (lisäksi), jos hinnasto edellyttää. */
  perKm: number | null;
  /** Lyhyt kuvaus ajoveloituksen ehdoista. */
  travelNote: string | null;
  /** Laskutetaanko alkavilta tunneilta (true), täysiltä minuuteilta (false) vai ei tiedossa (null). */
  roundUpToFullHour: boolean | null;
  /** Julkaistu minimiveloitus euroina, jos yritys ilmoittaa sen erikseen. */
  publishedMinimumCharge: number | null;
  minimumNote: string | null;
  extraFees: ExtraFee[];
  materialsNote: string | null;
  notes: string[];
  /** Hinnaston voimaantulo, jos ilmoitettu. */
  priceListValidFrom: string | null;
  lastChecked: string;
  /** Maksettu näkyvyys. Merkitään sivustolla aina selvästi. */
  sponsored: boolean;
  /** Onko tietue valmis julkaistavaksi. false = näytetään "tiedot kesken" -merkinnällä. */
  dataComplete: boolean;
}

const UNKNOWN: SlotTariff = { hourly: null, vehicle: null, callout: null, minHours: null };

export const PROVIDERS: Provider[] = [
  {
    id: "lvi-uno",
    name: "LVI-palvelu Uno Oy",
    legalName: "LVI-palvelu Uno Oy",
    businessId: null,
    website: "https://www.lviuno.fi/",
    priceListUrl: "https://www.lviuno.fi/lvi-tyot",
    serviceArea: "Helsinki, Vantaa, Espoo ja muu Uusimaa",
    services: [
      "Hanojen ja wc-istuinten asennus",
      "Putkivuotojen korjaus",
      "Kodinkoneiden liitännät",
      "Viemärikuvaus",
      "Putkiremontit",
      "Lämpöpumput",
    ],
    emergencyAdvertised: null,
    emergencyNote:
      "Hinnastossa on kiire- ja päivystystöiden hälytyskorvaus. Päivystyksen saatavuus on varmistettava yritykseltä.",
    vatIncluded: true,
    tariffs: {
      arki: { hourly: 62.75, vehicle: 31.38, callout: 0, minHours: 2 },
      ilta: { hourly: 125.5, vehicle: null, callout: 150.75, minHours: 2 },
      lauantai: { hourly: 125.5, vehicle: null, callout: 150.75, minHours: 2 },
      sunnuntai: { hourly: 188.25, vehicle: null, callout: 150.75, minHours: 2 },
      pyha: { hourly: 188.25, vehicle: null, callout: 150.75, minHours: 2 },
    },
    perKm: null,
    travelNote:
      "Huoltoautoveloitus 31,38 € arkisin klo 7–16 alle 30 km:n kohteisiin, yli 30 km 50,20 €. Muiden aikojen ajoveloitusta ei ole julkaistu.",
    roundUpToFullHour: true,
    publishedMinimumCharge: 156.88,
    minimumNote: "Minimiveloitus 156,88 € sisältää 2 tuntia työtä ja huoltoautoveloituksen.",
    extraFees: [],
    materialsNote: "Tarvikkeet tukkuhinnaston ja menekin mukaan.",
    notes: [
      "Arkisin klo 16 jälkeen ja lauantaisin 125,50 €/h, sunnuntaisin ja pyhinä 188,25 €/h.",
      "Hälytysraha 150,75 € kiire- ja päivystystöissä (laskurissa lisätty ilta-, viikonloppu- ja pyhäaikoihin).",
      "Työaika lasketaan konttorilta lähdöstä paluuseen, myös tarvikehaut.",
    ],
    priceListValidFrom: null,
    lastChecked: "2026-10-09",
    sponsored: false,
    dataComplete: true,
  },
  {
    id: "lvi-kroger",
    name: "LVI Kröger",
    legalName: "V.J Group Oy",
    businessId: "3211549-4",
    website: "https://www.lvikroger.fi/",
    priceListUrl: "https://www.lvikroger.fi/hinnasto/",
    serviceArea: "Helsinki, Espoo, Vantaa (pääkaupunkiseutu)",
    services: ["Putkityöt kotitalouksille", "Asennuspaketit (esim. hana, wc-istuin)", "LVI-suunnittelu", "Kaukolämpöpaketin vaihto"],
    emergencyAdvertised: true,
    emergencyNote: "Yritys mainostaa LVI-apua 24/7 ja julkaisee päivystyshinnat. Saatavuus varmistettava yritykseltä.",
    vatIncluded: true,
    tariffs: {
      arki: { hourly: 67.5, vehicle: 25, callout: 0, minHours: 2 },
      ilta: { hourly: 135, vehicle: 25, callout: 119, minHours: 2 },
      lauantai: { hourly: 135, vehicle: 25, callout: 119, minHours: 2 },
      sunnuntai: UNKNOWN,
      pyha: { hourly: 168.75, vehicle: 25, callout: 119, minHours: 2 },
    },
    perKm: null,
    travelNote:
      "Lähiajo alle 20 km 25 €, yli 20 km 1,24 €/km. Jos kohteessa ei ole maksutonta pysäköintiä, pysäköintimaksu veloitetaan työajan mukaan.",
    roundUpToFullHour: null,
    publishedMinimumCharge: null,
    minimumNote: "Minimiveloitus 2 tuntia per käynti (myös päivystyksessä).",
    extraFees: [],
    materialsNote: "Tarvikkeet käytön mukaan; erikoistyökaluista voidaan veloittaa vuokra.",
    notes: [
      "Kotitalouden putkityö arkisin klo 7–16: 67,50 €/h.",
      "Päivystys arkisin klo 16–06 ja lauantaisin 135 €/h, pyhinä 168,75 €/h. Sunnuntain hintaa ei ole eritelty.",
      "Hälytyslisä 119 € lisätään jokaiseen päivystystilaukseen.",
      "Verkkokaupassa on myös kiinteähintaisia asennuspaketteja.",
    ],
    priceListValidFrom: null,
    lastChecked: "2026-10-09",
    sponsored: false,
    dataComplete: true,
  },
  {
    id: "toolon-putkiliike",
    name: "Töölön Putkiliike Oy",
    legalName: "Töölön Putkiliike Oy",
    businessId: "0196714-1",
    website: "https://www.putki-lvis.fi/",
    priceListUrl: "https://www.putki-lvis.fi/hinnasto",
    serviceArea: "Helsinki ja pääkaupunkiseutu",
    services: ["LVI-huollot ja korjaukset", "Viemärityöt", "Kodinkoneasennukset", "LVI-asennukset ja remontit", "LVI-päivystys"],
    emergencyAdvertised: true,
    emergencyNote: "Yritys ilmoittaa 24/7-päivystyksestä ja julkaisee päivystyshinnat.",
    vatIncluded: true,
    tariffs: {
      arki: { hourly: 81.44, vehicle: 43.93, callout: 0, minHours: 2 },
      ilta: { hourly: 162.87, vehicle: 0, callout: 162.87, minHours: null },
      lauantai: { hourly: 162.87, vehicle: 0, callout: 162.87, minHours: null },
      sunnuntai: { hourly: 244.31, vehicle: 0, callout: 162.87, minHours: null },
      pyha: { hourly: 244.31, vehicle: 0, callout: 162.87, minHours: null },
    },
    perKm: 1.69,
    travelNote:
      "Huoltoauton lähtöveloitus 43,93 € arkisin, päivystyksessä lähtöveloitus 162,87 €. Lisäksi kilometrikorvaus 1,69 €/km toteutuneen ajomatkan mukaan.",
    roundUpToFullHour: true,
    publishedMinimumCharge: 206.8,
    minimumNote:
      "Arkityön minimiveloitus kaksi työtuntia ja lähtöveloitus, yhteensä 206,80 €, lisäksi kilometrikorvaus. Päivystystyön minimiveloitusta ei ole ilmoitettu.",
    extraFees: [],
    materialsNote: "Tarvikkeet toteutuneen menekin mukaan; hinta tai peruste ilmoitetaan ennen tilausta.",
    notes: [
      "Hinnasto voimassa 1.6.2026 alkaen.",
      "Päivystysaika arkisin klo 16–7 sekä lauantaisin, sunnuntaisin ja arkipyhinä.",
      "Työaikaan sisältyvät matkat toimipisteestä kohteeseen ja takaisin sekä tarvikehankinnat.",
      "Alihankinnoista veloitetaan toteutunut kustannus + 12 % yleiskustannuslisä.",
    ],
    priceListValidFrom: "2026-06-01",
    lastChecked: "2026-10-09",
    sponsored: false,
    dataComplete: true,
  },
  {
    id: "kh-suomi-putki",
    name: "KH-Suomi Putki",
    legalName: null,
    businessId: null,
    website: "https://www.suomiputki.fi/",
    priceListUrl: "https://www.suomiputki.fi/",
    serviceArea: "Helsinki, Espoo, Vantaa ja Kauniainen",
    services: [
      "Putkiasennukset ja huollot",
      "Viemärin avaus",
      "Vuotokorjaukset",
      "Hanat ja wc-asennukset",
      "Pesukoneet ja lämminvesivaraajat",
    ],
    emergencyAdvertised: true,
    emergencyNote: "Yritys mainostaa päivystystä 24/7. Päivystyshintoja ei ole julkaistu.",
    vatIncluded: true,
    tariffs: {
      arki: { hourly: 70, vehicle: 25, callout: 0, minHours: null },
      ilta: UNKNOWN,
      lauantai: UNKNOWN,
      sunnuntai: UNKNOWN,
      pyha: UNKNOWN,
    },
    perKm: null,
    travelNote: "Huoltoajo 25 € koko pääkaupunkiseudulla.",
    roundUpToFullHour: null,
    publishedMinimumCharge: null,
    minimumNote: null,
    extraFees: [],
    materialsNote: "Tarvikkeet tukkuhinnaston mukaan.",
    notes: [
      "Etusivulla ilmoitettu tuntityö 70 €/h (sis. alv 25,5 %, vuosi 2026). Hinnan voimassaoloaikaa (arki/ilta) ei ole eritelty.",
      "Yrityksen virallinen nimi ja Y-tunnus eivät näkyneet tarkistetulla sivulla.",
    ],
    priceListValidFrom: null,
    lastChecked: "2026-10-09",
    sponsored: false,
    dataComplete: false,
  },
  {
    id: "lvi-express",
    name: "LVI-Express (Cheffi-Group Oy)",
    legalName: "Cheffi-Group Oy",
    businessId: null,
    website: "https://www.lvi-express.fi/",
    priceListUrl: "https://www.lvi-express.fi/hinnasto/",
    serviceArea: "Helsinki, Espoo, Vantaa ja Kauniainen",
    services: ["LVI- ja putkityöt", "Kylpyhuoneremontit", "Loka-autopalvelut", "Vesivahinkotyöt", "Viemärikuvaus"],
    emergencyAdvertised: true,
    emergencyNote: "Yritys mainostaa päivystystä 24/7. Ilta- ja viikonloppuhintoja ei ole julkaistu.",
    vatIncluded: true,
    tariffs: {
      arki: { hourly: 69.03, vehicle: 31.38, callout: 0, minHours: null },
      ilta: UNKNOWN,
      lauantai: UNKNOWN,
      sunnuntai: UNKNOWN,
      pyha: UNKNOWN,
    },
    perKm: null,
    travelNote: "Ajo Helsingin alueella 31,38 €, Espoossa, Vantaalla ja Kauniaisissa 43,93 €.",
    roundUpToFullHour: null,
    publishedMinimumCharge: null,
    minimumNote: null,
    extraFees: [
      {
        label: "Huoltoauto",
        amount: 12.55,
        note: "Hinnastossa oma rivinsä ajoveloituksen lisäksi; soveltuvuus tarkistettava yritykseltä.",
      },
      {
        label: "Hälytyskorvaus",
        amount: 138.05,
        note: "Hinnastossa per kerta; käyttöehdot (esim. päivystys) tarkistettava yritykseltä.",
      },
    ],
    materialsNote: null,
    notes: [
      "Asennustyö 69,03 €/h, tekninen asennustyö 94,13 €/h.",
      "Laitevuokrat (esim. viemärinavauskone 37,65–50,20 €/kerta) veloitetaan erikseen.",
    ],
    priceListValidFrom: null,
    lastChecked: "2026-10-09",
    sponsored: false,
    dataComplete: true,
  },
  {
    id: "helsingin-putkimies",
    name: "Helsingin Putkimies Oy",
    legalName: "Helsingin Putkimies Oy",
    businessId: null,
    website: "https://helsinginputkimies.fi/",
    priceListUrl: null,
    serviceArea: null,
    services: [],
    emergencyAdvertised: true,
    emergencyNote: "Yritys ilmoittaa 24 tunnin päivystyksestä. Hintoja ei ole julkaistu etusivulla.",
    vatIncluded: true,
    tariffs: { arki: UNKNOWN, ilta: UNKNOWN, lauantai: UNKNOWN, sunnuntai: UNKNOWN, pyha: UNKNOWN },
    perKm: null,
    travelNote: "Huoltoautomaksu veloitetaan; summaa ei ole julkaistu etusivulla.",
    roundUpToFullHour: true,
    publishedMinimumCharge: null,
    minimumNote: "Pienin veloitus yksi tunti (yrityksen etusivun mukaan).",
    extraFees: [],
    materialsNote: null,
    notes: [
      "Tuntiveloitukseen lasketaan myös matkoihin ja tavaran hankintaan käytetty aika.",
      "Normaali työaika arkisin klo 7.30–15.30.",
      "Etusivu on päivitetty viimeksi 2024; tarkista ajantasaiset tiedot yritykseltä.",
    ],
    priceListValidFrom: null,
    lastChecked: "2026-10-09",
    sponsored: false,
    dataComplete: false,
  },
];

export function getProvider(id: string): Provider | undefined {
  return PROVIDERS.find((p) => p.id === id);
}

/** Viimeisin tarkistuspäivä kaikista tietueista. */
export const PROVIDERS_LAST_CHECKED = PROVIDERS.map((p) => p.lastChecked).sort().at(-1) ?? "";
