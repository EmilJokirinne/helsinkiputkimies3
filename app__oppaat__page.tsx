import Link from "next/link";
import { BookOpen } from "lucide-react";
import { ARTICLES } from "@/data/articles";
import { formatDateFi } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";

export const metadata = pageMetadata({
  title: "Oppaat – putkivuodot, hinnat ja taloyhtiön vastuut",
  description:
    "Käytännön oppaat putkiongelmiin Helsingissä: mitä tehdä vesivuodossa, milloin tilata päivystys, miten vertailla hintoja ja kuka vastaa vuodosta taloyhtiössä.",
  path: "/oppaat",
});

export default function GuidesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Oppaat", href: "/oppaat" }]}
        eyebrow="Oppaat"
        title="Oppaat putkiongelmiin ja hintoihin"
        lead="Selkeää yleistietoa vuodoista, tukoksista, hinnoista ja vastuista. Oppaat eivät korvaa tapauskohtaista neuvontaa."
      />
      <div className="container-page mt-10">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <li key={a.slug}>
              <article className="card flex h-full flex-col p-6">
                <BookOpen className="h-5 w-5 text-teal-700" aria-hidden="true" />
                <h2 className="mt-3 text-lg font-semibold leading-snug">
                  <Link href={`/oppaat/${a.slug}`} className="hover:underline">
                    {a.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.excerpt}</p>
                <p className="mt-auto pt-4 text-xs text-muted">
                  Päivitetty <time dateTime={a.updated}>{formatDateFi(a.updated)}</time> · {a.readingMinutes} min lukuaika
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
