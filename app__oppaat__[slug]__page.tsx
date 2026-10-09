import Link from "next/link";
import { notFound } from "next/navigation";
import { Info, ArrowRight } from "lucide-react";
import { ARTICLES, getArticle } from "@/data/articles";
import { formatDateFi } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RichText } from "@/components/RichText";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return pageMetadata({
    title: a.title,
    description: a.description,
    path: `/oppaat/${a.slug}`,
    type: "article",
    publishedTime: a.published,
    modifiedTime: a.updated,
  });
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const related = a.related.map((s) => getArticle(s)).filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.description,
          datePublished: a.published,
          dateModified: a.updated,
          inLanguage: "fi-FI",
          mainEntityOfPage: absoluteUrl(`/oppaat/${a.slug}`),
          author: { "@type": "Organization", name: `${SITE.name} – toimitus`, url: SITE.url },
          publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
        }}
      />
      <div className="border-b border-line bg-surface">
        <div className="container-page max-w-3xl py-8 sm:py-12">
          <Breadcrumbs items={[{ name: "Oppaat", href: "/oppaat" }, { name: a.title, href: `/oppaat/${a.slug}` }]} />
          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">{a.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{a.description}</p>
          <p className="mt-4 text-sm text-muted">
            Päivitetty <time dateTime={a.updated}>{formatDateFi(a.updated)}</time> · {a.readingMinutes} min lukuaika
          </p>
        </div>
      </div>

      <article className="container-page max-w-3xl">
        <div className="prose-fi mt-4">
          {a.sections.map((s) => (
            <section key={s.h2}>
              <h2>{s.h2}</h2>
              {s.paragraphs?.map((p, i) => (
                <p key={i}>
                  <RichText text={p} />
                </p>
              ))}
              {s.list &&
                (s.ordered ? (
                  <ol>
                    {s.list.map((li) => (
                      <li key={li}>
                        <RichText text={li} />
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul>
                    {s.list.map((li) => (
                      <li key={li}>
                        <RichText text={li} />
                      </li>
                    ))}
                  </ul>
                ))}
            </section>
          ))}
        </div>

        <aside className="mt-10 flex gap-3 rounded-2xl border border-line bg-surface p-5 text-sm leading-relaxed text-ink/85">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
          <p>{a.disclaimer}</p>
        </aside>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/putkimiehet-helsinki" className="btn-primary">
            Vertaile putkiliikkeitä
          </Link>
          <Link href="/hintavertailu" className="btn-secondary">
            Arvioi kokonaishinta
          </Link>
        </div>

        {related.length > 0 && (
          <nav aria-label="Lue myös" className="mt-12">
            <h2 className="text-xl font-semibold">Lue myös</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/oppaat/${r.slug}`} className="card flex items-center justify-between gap-3 p-4 font-semibold text-navy-900 hover:border-teal-600">
                    {r.title}
                    <ArrowRight className="h-4 w-4 shrink-0 text-teal-700" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </article>
    </>
  );
}
