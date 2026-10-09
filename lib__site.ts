export const SITE = {
  name: "HelsinkiPutkimies.fi",
  domain: "helsinkiputkimies.fi",
  url: "https://helsinkiputkimies.fi",
  locale: "fi_FI",
  description:
    "Riippumaton tietopalvelu putkitöiden hinnoista Helsingissä ja pääkaupunkiseudulla: julkaistut hinnastot, kokonaishinta-arvio ja käytännön oppaat.",
  /** Päivä, jolloin sivuston yleissisältö on viimeksi tarkistettu (ISO). */
  contentReviewed: "2026-10-09",
};

export const NAV = [
  { href: "/", label: "Etusivu" },
  { href: "/putkimiehen-hinta", label: "Putkimiehen hinnat" },
  { href: "/putkimiehet-helsinki", label: "Vertaile putkiliikkeitä" },
  { href: "/putkipalvelut", label: "Putkipalvelut" },
  { href: "/oppaat", label: "Oppaat" },
  { href: "/usein-kysyttya", label: "Usein kysyttyä" },
] as const;

export const VERO_KOTITALOUSVAHENNYS_URL =
  "https://www.vero.fi/henkiloasiakkaat/vahennykset/kotitalousvahennys/";

export function absoluteUrl(path: string): string {
  if (path === "/") return SITE.url + "/";
  return SITE.url + path;
}
