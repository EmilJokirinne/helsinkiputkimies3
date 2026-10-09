import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  children,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-b border-line bg-surface">
      <div className="container-page py-8 sm:py-12">
        <Breadcrumbs items={crumbs} />
        {eyebrow && <p className="eyebrow mt-6">{eyebrow}</p>}
        <h1 className={`${eyebrow ? "mt-2" : "mt-6"} max-w-3xl text-3xl font-bold leading-tight sm:text-4xl`}>{title}</h1>
        {lead && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>}
        {children}
      </div>
    </div>
  );
}
