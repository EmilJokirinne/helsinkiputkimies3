import type { Provider, Slot } from "@/data/providers";

export interface CalcInput {
  slot: Slot;
  hours: number;
  materials: number;
  /** Edestakainen ajomatka km, null = ei syötetty. */
  km: number | null;
}

export interface CalcLine {
  label: string;
  amount: number;
}

export type CalcResult =
  | { ok: true; total: number; lines: CalcLine[]; billedHours: number; notes: string[] }
  | { ok: false; missing: string[]; knownLines: CalcLine[] };

/**
 * Arvioitu kokonaishinta = työ + lähtö-/hälytysmaksu + ajoveloitus + km-korvaus + tarvikkeet.
 * Arvio lasketaan vain, jos kaikki tarvittavat erät on julkaistu.
 */
export function estimateForProvider(p: Provider, input: CalcInput): CalcResult {
  const t = p.tariffs[input.slot];
  const missing: string[] = [];
  const known: CalcLine[] = [];

  if (t.hourly === null) missing.push("tuntihinta tälle ajankohdalle");
  if (t.minHours === null) missing.push("minimiveloitus");
  if (t.vehicle === null) missing.push("ajo- tai huoltoautoveloitus");
  if (t.callout === null) missing.push("lähtö- tai hälytysmaksu");
  if (p.perKm !== null && input.km === null) missing.push("ajomatka (km) kilometrikorvausta varten");

  const hours = Math.max(0, input.hours);
  let billed = hours;
  const notes: string[] = [];

  if (t.hourly !== null) {
    if (t.minHours !== null && billed < t.minHours) {
      billed = t.minHours;
      notes.push(`Minimiveloitus ${t.minHours} h nostaa laskutettavaa aikaa.`);
    }
    if (p.roundUpToFullHour) {
      const rounded = Math.ceil(billed - 1e-9);
      if (rounded !== billed) notes.push("Laskutus alkavilta tunneilta.");
      billed = rounded;
    }
    known.push({ label: `Työ ${formatHours(billed)} × ${t.hourly.toFixed(2).replace(".", ",")} €/h`, amount: billed * t.hourly });
  }
  if (t.callout !== null && t.callout > 0) known.push({ label: "Lähtö- tai hälytysmaksu", amount: t.callout });
  if (t.vehicle !== null && t.vehicle > 0) known.push({ label: "Ajo- tai huoltoautoveloitus", amount: t.vehicle });
  if (p.perKm !== null && input.km !== null && input.km > 0)
    known.push({ label: `Kilometrikorvaus ${input.km} km`, amount: input.km * p.perKm });
  if (input.materials > 0) known.push({ label: "Tarvikkeet (oma arvio)", amount: input.materials });

  if (missing.length > 0) return { ok: false, missing, knownLines: known };

  if (p.extraFees.length > 0)
    notes.push("Hinnastossa on lisäksi eriä, joiden soveltuvuus on tarkistettava: " + p.extraFees.map((f) => f.label).join(", ") + ".");

  const total = known.reduce((s, l) => s + l.amount, 0);
  return { ok: true, total, lines: known, billedHours: billed, notes };
}

export function formatHours(h: number): string {
  return `${String(h).replace(".", ",")} h`;
}

/** Arkipäivän kokonaishinta julkaistuilla hinnastoilla (ilman tarvikkeita ja km-korvausta), vain laskettavissa olevat. */
export function weekdayTotals(providers: Provider[], hours: number) {
  return providers
    .map((p) => ({ p, r: estimateForProvider(p, { slot: "arki", hours, materials: 0, km: p.perKm !== null ? 0 : null }) }))
    .filter((x): x is { p: Provider; r: Extract<CalcResult, { ok: true }> } => x.r.ok);
}
