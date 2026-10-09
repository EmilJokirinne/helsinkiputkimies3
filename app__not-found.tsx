import Link from "next/link";

export const metadata = { title: "Sivua ei löytynyt", robots: { index: false } };

export default function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-3xl font-bold">Sivua ei löytynyt</h1>
      <p className="mx-auto mt-3 max-w-md text-muted">Etsimääsi sivua ei ole tai se on siirretty.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">
          Etusivulle
        </Link>
        <Link href="/putkimiehet-helsinki" className="btn-secondary">
          Vertaile putkiliikkeitä
        </Link>
      </div>
    </div>
  );
}
