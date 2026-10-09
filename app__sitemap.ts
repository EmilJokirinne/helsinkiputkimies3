import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";
import { ARTICLES } from "@/data/articles";
import { PROVIDERS_LAST_CHECKED } from "@/data/providers";
import { absoluteUrl, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const d = (iso: string) => new Date(iso + "T00:00:00Z");
  const main = [
    { path: "/", priority: 1, lm: PROVIDERS_LAST_CHECKED },
    { path: "/putkimiehen-hinta", priority: 0.9, lm: PROVIDERS_LAST_CHECKED },
    { path: "/putkimiehet-helsinki", priority: 0.9, lm: PROVIDERS_LAST_CHECKED },
    { path: "/hintavertailu", priority: 0.8, lm: PROVIDERS_LAST_CHECKED },
    { path: "/putkipalvelut", priority: 0.7, lm: SITE.contentReviewed },
    { path: "/oppaat", priority: 0.7, lm: SITE.contentReviewed },
    { path: "/usein-kysyttya", priority: 0.6, lm: SITE.contentReviewed },
    { path: "/yhteystiedot", priority: 0.3, lm: SITE.contentReviewed },
    { path: "/kayttoehdot", priority: 0.2, lm: SITE.contentReviewed },
    { path: "/tietosuojaseloste", priority: 0.2, lm: SITE.contentReviewed },
    { path: "/evasteet", priority: 0.2, lm: SITE.contentReviewed },
  ];
  return [
    ...main.map((m) => ({ url: absoluteUrl(m.path), lastModified: d(m.lm), priority: m.priority })),
    ...SERVICES.map((s) => ({ url: absoluteUrl(`/${s.slug}`), lastModified: d(SITE.contentReviewed), priority: 0.8 })),
    ...ARTICLES.map((a) => ({ url: absoluteUrl(`/oppaat/${a.slug}`), lastModified: d(a.updated), priority: 0.6 })),
  ];
}
