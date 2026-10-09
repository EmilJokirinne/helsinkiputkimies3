import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { SERVICES } from "@/data/services";
import { SITE } from "@/lib/site";
import { formatDateFi } from "@/lib/format";
import { PROVIDERS_LAST_CHECKED } from "@/data/providers";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy-950 pb-24 text-white/80 lg:pb-0">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <Wordmark inverted />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Riippumaton tietopalvelu putkitöiden hinnoista Helsingissä ja pääkaupunkiseudulla. Emme ole putkiliike
            emmekä tee putkitöitä. Hintatiedot perustuvat yritysten itse julkaisemiin hinnastoihin.
          </p>
          <p className="mt-3 text-sm text-white/60">
            Yritystiedot tarkistettu viimeksi {formatDateFi(PROVIDERS_LAST_CHECKED)}.
          </p>
        </div>

        <FooterCol title="Palvelut">
          {SERVICES.map((s) => (
            <FooterLink key={s.slug} href={`/${s.slug}`}>
              {s.navLabel}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Hinnat ja vertailu">
          <FooterLink href="/putkimiehen-hinta">Putkimiehen hinnat</FooterLink>
          <FooterLink href="/putkimiehet-helsinki">Putkiliikkeet Helsingissä</FooterLink>
          <FooterLink href="/hintavertailu">Hintalaskuri</FooterLink>
          <FooterLink href="/oppaat">Oppaat</FooterLink>
          <FooterLink href="/usein-kysyttya">Usein kysyttyä</FooterLink>
          <FooterLink href="/tarjouspyynto">Tarjouspyyntö</FooterLink>
        </FooterCol>

        <FooterCol title="Tietoa">
          <FooterLink href="/yhteystiedot">Yhteystiedot ja toimintamalli</FooterLink>
          <FooterLink href="/kayttoehdot">Käyttöehdot</FooterLink>
          <FooterLink href="/tietosuojaseloste">Tietosuojaseloste</FooterLink>
          <FooterLink href="/evasteet">Evästeet</FooterLink>
        </FooterCol>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}</p>
          <p>Hinnat ja yritystiedot voivat muuttua. Varmista lopullinen hinta aina suoraan palveluntarjoajalta.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold text-white">{title}</h2>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-white/70 hover:text-white hover:underline">
        {children}
      </Link>
    </li>
  );
}
