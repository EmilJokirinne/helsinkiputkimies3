const eur = new Intl.NumberFormat("fi-FI", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const eurRounded = new Intl.NumberFormat("fi-FI", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

/** 62,75 € */
export function formatEur(value: number): string {
  return eur.format(value);
}

/** 157 € */
export function formatEurRounded(value: number): string {
  return eurRounded.format(Math.round(value));
}

/** 62,75 €/h */
export function formatHourly(value: number): string {
  return `${formatEur(value)}/h`;
}

/** 9.10.2026 */
export function formatDateFi(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d}.${m}.${y}`;
}
