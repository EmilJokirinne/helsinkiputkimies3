"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="container-page py-24 text-center">
      <h1 className="text-3xl font-bold">Jokin meni vikaan</h1>
      <p className="mx-auto mt-3 max-w-md text-muted">Sivun lataaminen epäonnistui. Yritä uudelleen hetken kuluttua.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <button type="button" onClick={reset} className="btn-primary">
          Yritä uudelleen
        </button>
        <Link href="/" className="btn-secondary">
          Etusivulle
        </Link>
      </div>
    </div>
  );
}
