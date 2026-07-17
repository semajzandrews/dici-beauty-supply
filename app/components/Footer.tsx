import { Phone, MapPin, Clock } from "lucide-react";
import { BIZ, HOURS } from "../lib/biz";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--paper)" }}>
      {/* persistent CTA strip */}
      <div className="px-5 py-12 sm:px-8 md:py-16" style={{ borderBottom: "1px solid rgba(244,236,224,0.12)" }}>
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="font-display text-[1.9rem] leading-tight tracking-tight sm:text-[2.4rem]">
            Come find your shelf.
          </h2>
          <a
            href={BIZ.phoneHref}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[0.9rem] font-semibold transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--rose)", color: "var(--ink)" }}
          >
            <Phone size={16} /> {BIZ.phoneDisplay}
          </a>
        </div>
      </div>

      {/* details */}
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-4 md:py-16">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <span
              className="grid h-9 w-9 place-items-center rounded-full font-display"
              style={{ background: "var(--rose)", color: "var(--ink)" }}
            >
              D
            </span>
            <span className="font-display text-[1.3rem]">Dici Beauty Supply</span>
          </div>
          <p className="mt-4 max-w-xs text-[0.86rem] leading-relaxed" style={{ color: "rgba(244,236,224,0.7)" }}>
            The hand-stocked beauty counter on Main Street. Cosmetics, skincare, hair, and tools,
            picked with care for the City of Orange.
          </p>
        </div>

        <div>
          <span className="kicker" style={{ color: "var(--rose)" }}>
            Visit
          </span>
          <p className="mt-4 flex items-start gap-2 text-[0.9rem]" style={{ color: "rgba(244,236,224,0.85)" }}>
            <MapPin size={15} className="mt-0.5 shrink-0" />
            <span>
              {BIZ.street}
              <br />
              {BIZ.city}, {BIZ.state} {BIZ.zip}
            </span>
          </p>
          <p className="mt-3 flex items-center gap-2 text-[0.9rem]" style={{ color: "rgba(244,236,224,0.85)" }}>
            <Phone size={15} className="shrink-0" />
            <a href={BIZ.phoneHref} className="hover:text-[var(--rose)]">
              {BIZ.phoneDisplay}
            </a>
          </p>
        </div>

        <div>
          <span className="kicker" style={{ color: "var(--rose)" }}>
            Hours
          </span>
          <ul className="mt-4 space-y-1.5">
            {HOURS.map((h) => (
              <li key={h.day} className="flex items-center justify-between gap-4 text-[0.82rem]" style={{ color: "rgba(244,236,224,0.8)" }}>
                <span>{h.day.slice(0, 3)}</span>
                <span className="tabnum">{h.open} – {h.close}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="kicker" style={{ color: "var(--rose)" }}>
            Aisles
          </span>
          <ul className="mt-4 space-y-2 text-[0.88rem]" style={{ color: "rgba(244,236,224,0.85)" }}>
            {["The Counter", "Aisle index", "Shelves", "Visit"].map((l, i) => (
              <li key={l}>
                <a href={["#counter", "#index", "#shelves", "#visit"][i]} className="hover:text-[var(--rose)]">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 flex items-center gap-2 text-[0.78rem]" style={{ color: "rgba(244,236,224,0.55)" }}>
            <Clock size={13} /> Sundays 11 AM – 5 PM
          </p>
        </div>
      </div>

      {/* bysemaj mark — bespoke wax-seal treatment, unique to this site */}
      <div className="px-5 py-7 sm:px-8" style={{ borderTop: "1px solid rgba(244,236,224,0.12)" }}>
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[0.74rem]" style={{ color: "rgba(244,236,224,0.5)" }}>
            © {new Date().getFullYear()} Dici Beauty Supply · {BIZ.city}, {BIZ.state}
          </p>
          <a
            href="https://bysemaj.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 transition-opacity hover:opacity-100"
            style={{ opacity: 0.72 }}
          >
            <span
              className="grid h-7 w-7 place-items-center rounded-full font-mark text-[0.6rem] italic transition-transform group-hover:rotate-12"
              style={{ border: "1px solid var(--rose)", color: "var(--rose)" }}
            >
              bs
            </span>
            <span className="font-mark text-[0.78rem] italic" style={{ color: "rgba(244,236,224,0.8)" }}>
              built bysemaj.com
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
