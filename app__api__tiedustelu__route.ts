import { NextResponse } from "next/server";
import { validateInquiry, type InquiryPayload } from "@/lib/inquiry";

/**
 * Tarjouspyyntöjen vastaanotto.
 *
 * TÄRKEÄÄ: Välitystä yrityksille ei ole toteutettu. Endpoint validoi pyynnön ja
 * palauttaa tiedon, ettei mitään lähetetty eikä tallennettu. Kun välitys
 * (esim. sähköposti tai CRM) on rakennettu, testattu ja tietosuojaseloste
 * päivitetty, aseta ympäristömuuttuja LEADS_ENABLED=true ja toteuta
 * forwardInquiry() alla.
 */

export const dynamic = "force-dynamic";

const MIN_FILL_MS = 3000;
const MAX_BODY_BYTES = 8_000;

export async function POST(req: Request) {
  const len = Number(req.headers.get("content-length") ?? "0");
  if (len > MAX_BODY_BYTES) return NextResponse.json({ ok: false, message: "Pyyntö on liian suuri." }, { status: 413 });

  let data: Partial<InquiryPayload>;
  try {
    data = (await req.json()) as Partial<InquiryPayload>;
  } catch {
    return NextResponse.json({ ok: false, message: "Virheellinen pyyntö." }, { status: 400 });
  }

  // Roskapostisuojaus: hunajapurkki ja täyttöaika. Vastataan neutraalisti.
  if ((data.kotisivu ?? "") !== "" || (typeof data.avattu === "number" && Date.now() - data.avattu < MIN_FILL_MS)) {
    return NextResponse.json({ ok: false, message: "Pyyntöä ei voitu käsitellä." }, { status: 400 });
  }

  const errors = validateInquiry(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors, message: "Tarkista lomakkeen tiedot." }, { status: 422 });
  }

  if (process.env.LEADS_ENABLED !== "true") {
    return NextResponse.json(
      {
        ok: false,
        preview: true,
        message:
          "Lomake toimii esikatselutilassa. Tietosi tarkistettiin, mutta niitä ei tallennettu eikä lähetetty kenellekään.",
      },
      { status: 503 },
    );
  }

  // await forwardInquiry(data as InquiryPayload);
  return NextResponse.json(
    { ok: false, message: "Välitystä ei ole vielä toteutettu. Tietoja ei lähetetty." },
    { status: 501 },
  );
}
