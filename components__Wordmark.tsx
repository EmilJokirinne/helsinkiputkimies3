import Link from "next/link";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="8" fill="#0b1f3a" />
      <path
        d="M9 9v6.5a3.5 3.5 0 0 0 3.5 3.5H20a3 3 0 0 1 3 3V24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M23 6.5c1.6 2.1 2.4 3.6 2.4 4.6a2.4 2.4 0 0 1-4.8 0c0-1 .8-2.5 2.4-4.6Z" fill="#14a39d" />
    </svg>
  );
}

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 rounded-md"
      aria-label="HelsinkiPutkimies.fi – etusivu"
    >
      <LogoMark />
      <span className={`font-[family-name:var(--font-heading)] text-[17px] font-bold tracking-tight sm:text-lg ${inverted ? "text-white" : "text-navy-900"}`}>
        Helsinki<span className={inverted ? "text-teal-100" : "text-teal-700"}>Putkimies</span>
        <span className={inverted ? "text-white/60" : "text-muted"}>.fi</span>
      </span>
    </Link>
  );
}
