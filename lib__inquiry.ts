import { SERVICES } from "@/data/services";

export const TIMING_OPTIONS = [
  { value: "heti", label: "Mahdollisimman pian" },
  { value: "viikko", label: "Tämän viikon aikana" },
  { value: "kuukausi", label: "Kuukauden sisällä" },
  { value: "joustava", label: "Ajankohta on joustava" },
] as const;

export const WORK_OPTIONS = [...SERVICES.map((s) => ({ value: s.slug, label: s.navLabel })), { value: "muu", label: "Muu putkityö" }];

export interface InquiryPayload {
  tyo: string;
  postinumero: string;
  ajankohta: string;
  kuvaus: string;
  suostumus: boolean;
  /** Hunajapurkki – ihmiskäyttäjä ei täytä tätä. */
  kotisivu?: string;
  /** Lomakkeen avausaika (ms) – liian nopea lähetys hylätään. */
  avattu?: number;
}

export type FieldErrors = Partial<Record<"tyo" | "postinumero" | "ajankohta" | "kuvaus" | "suostumus", string>>;

/** Sama validointi ajetaan selaimessa ja palvelimella. */
export function validateInquiry(d: Partial<InquiryPayload>): FieldErrors {
  const e: FieldErrors = {};
  if (!d.tyo || !WORK_OPTIONS.some((o) => o.value === d.tyo)) e.tyo = "Valitse työn tyyppi.";
  if (!d.postinumero || !/^\d{5}$/.test(d.postinumero.trim())) e.postinumero = "Syötä viisinumeroinen postinumero.";
  if (!d.ajankohta || !TIMING_OPTIONS.some((o) => o.value === d.ajankohta)) e.ajankohta = "Valitse toivottu ajankohta.";
  const k = (d.kuvaus ?? "").trim();
  if (k.length < 10) e.kuvaus = "Kuvaile ongelma lyhyesti (vähintään 10 merkkiä).";
  else if (k.length > 1000) e.kuvaus = "Kuvaus on liian pitkä (enintään 1000 merkkiä).";
  if (d.suostumus !== true) e.suostumus = "Hyväksy tietojen käsittely tietosuojaselosteen mukaisesti.";
  return e;
}
