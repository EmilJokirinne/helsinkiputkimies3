import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header, MobileActionBar } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

const body = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-body", display: "swap" });
const heading = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-heading", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Putkimies Helsinki – hinnat ja vertailu | HelsinkiPutkimies.fi", template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  formatDetection: { telephone: false },
  openGraph: { type: "website", locale: SITE.locale, siteName: SITE.name },
};

export const viewport: Viewport = {
  themeColor: "#0b1f3a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fi" className={`${body.variable} ${heading.variable}`}>
      <body className="min-h-dvh overflow-x-hidden font-sans">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE.name,
            url: SITE.url + "/",
            inLanguage: "fi-FI",
            description: SITE.description,
          }}
        />
        <Header />
        <main id="sisalto" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
