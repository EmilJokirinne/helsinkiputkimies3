import { PageHero } from "./PageHero";
import { formatDateFi } from "@/lib/format";

/** Selvästi merkitty paikkamerkki puuttuvalle tiedolle. Haku: "TÄYDENNÄ". */
export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded bg-warn-50 px-1.5 py-0.5 font-semibold text-warn-700 ring-1 ring-warn-700/25">
      [TÄYDENNÄ: {children}]
    </mark>
  );
}

export function LegalPage({
  title,
  href,
  lead,
  updated,
  children,
}: {
  title: string;
  href: string;
  lead?: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero crumbs={[{ name: title, href }]} title={title} lead={lead} />
      <div className="container-page max-w-3xl">
        <p className="mt-6 text-sm text-muted">Päivitetty {formatDateFi(updated)}</p>
        <div className="prose-fi mt-2">{children}</div>
      </div>
    </>
  );
}
