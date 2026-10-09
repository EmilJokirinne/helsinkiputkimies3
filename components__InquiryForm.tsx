"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Info, Loader2 } from "lucide-react";
import { TIMING_OPTIONS, WORK_OPTIONS, validateInquiry, type FieldErrors } from "@/lib/inquiry";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "info"; message: string } | { kind: "error"; message: string };

export function InquiryForm() {
  const id = useId();
  const openedAt = useRef<number>(0);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      tyo: String(fd.get("tyo") ?? ""),
      postinumero: String(fd.get("postinumero") ?? "").trim(),
      ajankohta: String(fd.get("ajankohta") ?? ""),
      kuvaus: String(fd.get("kuvaus") ?? ""),
      suostumus: fd.get("suostumus") === "on",
      kotisivu: String(fd.get("kotisivu") ?? ""),
      avattu: openedAt.current,
    };
    const v = validateInquiry(payload);
    setErrors(v);
    if (Object.keys(v).length > 0) {
      setStatus({ kind: "error", message: "Tarkista merkityt kentät." });
      const first = Object.keys(v)[0];
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/tiedustelu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok: boolean; message?: string; errors?: FieldErrors; preview?: boolean };
      if (json.errors) setErrors(json.errors);
      setStatus(
        json.preview
          ? { kind: "info", message: json.message ?? "" }
          : { kind: json.ok ? "info" : "error", message: json.message ?? "Tuntematon virhe." },
      );
    } catch {
      setStatus({ kind: "error", message: "Yhteysvirhe. Yritä myöhemmin uudelleen." });
    }
  }

  const err = (k: keyof FieldErrors) =>
    errors[k] ? (
      <p id={`${id}-${k}-virhe`} className="mt-1.5 text-xs font-semibold text-danger-700">
        {errors[k]}
      </p>
    ) : null;
  const a11y = (k: keyof FieldErrors) => ({
    id: `${id}-${k}`,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${id}-${k}-virhe` : undefined,
  });

  return (
    <form noValidate onSubmit={onSubmit} className="card relative p-5 sm:p-7">
      <div className="mb-6 flex gap-3 rounded-xl border border-warn-700/20 bg-warn-50 p-4 text-sm leading-relaxed">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-warn-700" aria-hidden="true" />
        <p>
          <strong>Lomake on esikatselutilassa.</strong> Tietoja ei toistaiseksi välitetä putkiliikkeille, tallenneta tai
          lähetetä kenellekään. Kiireellisessä tilanteessa ota yhteys suoraan yritykseen{" "}
          <Link href="/putkimiehet-helsinki" className="link">
            putkiliikkeiden listalta
          </Link>
          .
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor={`${id}-tyo`}>
            Työn tyyppi
          </label>
          <select name="tyo" className="field" defaultValue="" {...a11y("tyo")}>
            <option value="" disabled>
              Valitse…
            </option>
            {WORK_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {err("tyo")}
        </div>
        <div>
          <label className="label" htmlFor={`${id}-postinumero`}>
            Postinumero
          </label>
          <input name="postinumero" inputMode="numeric" autoComplete="postal-code" maxLength={5} className="field num" placeholder="00100" {...a11y("postinumero")} />
          {err("postinumero")}
        </div>
        <fieldset className="sm:col-span-2">
          <legend className="label">Toivottu ajankohta</legend>
          <div className="grid gap-2 sm:grid-cols-2" id={`${id}-ajankohta`} tabIndex={-1}>
            {TIMING_OPTIONS.map((o) => (
              <label key={o.value} className="flex items-center gap-2.5 rounded-lg border border-line px-3 py-2.5 text-sm">
                <input type="radio" name="ajankohta" value={o.value} className="accent-teal-700" />
                {o.label}
              </label>
            ))}
          </div>
          {err("ajankohta")}
        </fieldset>
        <div className="sm:col-span-2">
          <label className="label" htmlFor={`${id}-kuvaus`}>
            Lyhyt kuvaus ongelmasta
          </label>
          <textarea name="kuvaus" rows={4} maxLength={1000} className="field" placeholder="Esim. keittiön hana tippuu ja haluaisin vaihtaa sen uuteen." {...a11y("kuvaus")} />
          <p className="mt-1 text-xs text-muted">Älä kirjoita kuvaukseen nimeä, puhelinnumeroa tai osoitetta.</p>
          {err("kuvaus")}
        </div>

        {/* Hunajapurkki: piilotettu ihmisiltä ja ruudunlukijoilta */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Kotisivu
            <input name="kotisivu" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="sm:col-span-2">
          <label className="flex items-start gap-2.5 text-sm leading-relaxed">
            <input type="checkbox" name="suostumus" className="mt-1 h-4 w-4 accent-teal-700" {...a11y("suostumus")} />
            <span>
              Hyväksyn, että antamiani tietoja käsitellään{" "}
              <Link href="/tietosuojaseloste" className="link">
                tietosuojaselosteen
              </Link>{" "}
              mukaisesti tarjouspyynnön käsittelyä varten.
            </span>
          </label>
          {err("suostumus")}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary" disabled={status.kind === "sending"}>
          {status.kind === "sending" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
          Tarkista ja lähetä
        </button>
        <p role="status" aria-live="polite" className={`text-sm ${status.kind === "error" ? "font-semibold text-danger-700" : "text-ink/85"}`}>
          {status.kind === "info" || status.kind === "error" ? status.message : ""}
        </p>
      </div>
    </form>
  );
}
