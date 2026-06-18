"use client";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { BIZ } from "../lib/biz";

const LINKS = [
  { label: "The Counter", href: "#counter" },
  { label: "Aisles", href: "#index" },
  { label: "Shelves", href: "#shelves" },
  { label: "Visit", href: "#visit" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
      style={{
        background: solid ? "rgba(244,236,224,0.92)" : "transparent",
        backdropFilter: solid ? "blur(10px)" : "none",
        borderBottom: solid ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3.5 sm:px-8">
        {/* Brand mark */}
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Dici Beauty Supply, home">
          <span
            className="grid h-9 w-9 place-items-center rounded-full text-[0.95rem] font-display"
            style={{ background: "var(--mocha)", color: "var(--paper)" }}
          >
            D
          </span>
          <span className="leading-none">
            <span className="block font-display text-[1.12rem] tracking-tight" style={{ color: "var(--ink)" }}>
              Dici
            </span>
            <span className="kicker block" style={{ color: "var(--mocha-3)", fontSize: "0.5rem", letterSpacing: "0.34em" }}>
              Beauty Supply
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.82rem] font-medium tracking-wide transition-colors hover:text-[var(--mocha)]"
                style={{ color: "var(--ink)" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Call affordance: full pill on >=sm, 46px icon on phones */}
        <div className="flex items-center gap-2">
          <a
            href={BIZ.phoneHref}
            className="hidden items-center gap-2 rounded-full px-4 py-2 text-[0.8rem] font-semibold transition-transform hover:-translate-y-0.5 sm:inline-flex"
            style={{ background: "var(--mocha)", color: "var(--paper)" }}
          >
            <Phone size={14} /> {BIZ.phoneDisplay}
          </a>
          <a
            href={BIZ.phoneHref}
            aria-label={`Call ${BIZ.name}`}
            className="grid h-[46px] w-[46px] place-items-center rounded-full transition-transform hover:-translate-y-0.5 sm:hidden"
            style={{ background: "var(--mocha)", color: "var(--paper)" }}
          >
            <Phone size={18} />
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-[46px] w-[46px] place-items-center rounded-full md:hidden"
            style={{ border: "1px solid var(--line-2)", color: "var(--ink)" }}
          >
            <span className="relative block h-3 w-4">
              <span className="absolute left-0 top-0 h-[1.5px] w-full" style={{ background: "currentColor" }} />
              <span className="absolute left-0 top-1.5 h-[1.5px] w-full" style={{ background: "currentColor" }} />
              <span className="absolute left-0 top-3 h-[1.5px] w-full" style={{ background: "currentColor" }} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden" style={{ background: "var(--paper)", borderTop: "1px solid var(--line)" }}>
          <ul className="mx-auto flex max-w-[1200px] flex-col px-5 py-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-lg"
                  style={{ color: "var(--ink)", borderBottom: "1px solid var(--line)" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
