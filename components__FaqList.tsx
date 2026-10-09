import Link from "next/link";
import { ChevronDown, ExternalLink } from "lucide-react";
import { JsonLd } from "./JsonLd";

export interface FaqItem {
  q: string;
  a: string;
  links?: { href: string; label: string }[];
}

/**
 * Natiivi <details>-haitari: toimii ilman JavaScriptiä ja näppäimistöllä.
 * FAQPage-merkintä lisätään vain, kun withSchema = true (yksi kerta per sivu).
 */
export function FaqList({ items, withSchema = false }: { items: FaqItem[]; withSchema?: boolean }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((f) => (
        <details key={f.q} className="group px-5 py-1 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold text-navy-900 [&::-webkit-details-marker]:hidden">
            <span>{f.q}</span>
            <ChevronDown className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="pb-5 text-[15px] leading-relaxed text-ink/90">
            <p>{f.a}</p>
            {f.links && f.links.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {f.links.map((l) =>
                  l.href.startsWith("/") ? (
                    <li key={l.href}>
                      <Link href={l.href} className="link text-sm">
                        {l.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={l.href}>
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1 text-sm">
                        {l.label}
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        <span className="sr-only">(avautuu uuteen välilehteen)</span>
                      </a>
                    </li>
                  ),
                )}
              </ul>
            )}
          </div>
        </details>
      ))}
      {withSchema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}
    </div>
  );
}
