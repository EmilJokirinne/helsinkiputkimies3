"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Calculator, Building2 } from "lucide-react";
import { NAV } from "@/lib/site";
import { Wordmark } from "./Wordmark";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <a
        href="#sisalto"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Siirry sisältöön
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Wordmark />

        <nav aria-label="Päävalikko" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-3 py-2 text-[14.5px] font-medium transition-colors ${
                      active ? "bg-navy-50 text-navy-900" : "text-muted hover:text-navy-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/hintavertailu" className="btn-accent hidden !px-4 !py-2.5 sm:inline-flex">
            <Calculator className="h-4 w-4" aria-hidden="true" />
            Vertaile hintoja
          </Link>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-navy-900 lg:hidden"
            aria-expanded={open}
            aria-controls="mobiilivalikko"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            <span className="sr-only">{open ? "Sulje valikko" : "Avaa valikko"}</span>
          </button>
        </div>
      </div>

      <div id="mobiilivalikko" hidden={!open} className="border-t border-line bg-white lg:hidden">
        <nav aria-label="Mobiilivalikko" className="container-page py-3">
          <ul className="grid gap-1">
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-lg px-3 py-3 text-base font-medium ${active ? "bg-navy-50 text-navy-900" : "text-ink"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2 grid grid-cols-2 gap-2">
              <Link href="/hintavertailu" className="btn-accent">
                <Calculator className="h-4 w-4" aria-hidden="true" />
                Hintalaskuri
              </Link>
              <Link href="/tarjouspyynto" className="btn-secondary">
                <Building2 className="h-4 w-4" aria-hidden="true" />
                Tarjouspyyntö
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function MobileActionBar() {
  return (
    <nav
      aria-label="Pikatoiminnot"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden"
    >
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <Link href="/hintavertailu" className="btn-accent !py-2.5 text-sm">
          <Calculator className="h-4 w-4" aria-hidden="true" />
          Vertaile hintoja
        </Link>
        <Link href="/putkimiehet-helsinki" className="btn-primary !py-2.5 text-sm">
          <Building2 className="h-4 w-4" aria-hidden="true" />
          Putkiliikkeet
        </Link>
      </div>
    </nav>
  );
}
