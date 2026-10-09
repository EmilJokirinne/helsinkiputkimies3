import { Droplet, Waves, ShowerHead, Bath, WashingMachine, Wrench, Siren, Settings2 } from "lucide-react";

const MAP = {
  droplet: Droplet,
  drain: Waves,
  faucet: ShowerHead,
  toilet: Bath,
  washer: WashingMachine,
  wrench: Wrench,
  siren: Siren,
  settings: Settings2,
} as const;

export type ServiceIconName = keyof typeof MAP;

export const SLUG_ICON: Record<string, ServiceIconName> = {
  "putkimies-paivystys": "siren",
  "viemarin-avaus": "drain",
  "vesivuodon-korjaus": "droplet",
  "hanan-vaihto": "faucet",
  "wc-istuimen-asennus": "toilet",
  "astianpesukoneen-asennus": "washer",
  putkiremontti: "wrench",
  "lvi-huolto": "settings",
};

export function ServiceIcon({ name, className = "h-5 w-5" }: { name: ServiceIconName; className?: string }) {
  const Icon = MAP[name];
  return <Icon className={className} aria-hidden="true" />;
}
