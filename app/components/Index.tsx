"use client";
import { useState } from "react";
import { IMG } from "../lib/biz";

// Signature interactive moment: an "apothecary index" of aisles.
// Hovering / tapping a numbered row swaps the plate image and the note.
// Reads like the index card taped behind a heritage counter.
const AISLES = [
  {
    no: "01",
    name: "Cosmetics",
    note: "Foundations, concealers, lip and eye. Drugstore staples to the colors people drive in for.",
    img: IMG.cosmetics,
    alt: "A full flatlay of cosmetics on a warm tan surface: foundation, powder, brushes and lipstick",
  },
  {
    no: "02",
    name: "Skincare",
    note: "Cleansers, toners, serums and creams. The shelf for getting your routine honest again.",
    img: IMG.skincareJars,
    alt: "A set of skincare jars and bottles with gold lids resting on soft fur",
  },
  {
    no: "03",
    name: "Tools & Rituals",
    note: "Brushes, rollers, sponges and the small instruments that make the rest work.",
    img: IMG.tools,
    alt: "A jade facial roller held in one hand with a second roller and eucalyptus on marble",
  },
  {
    no: "04",
    name: "Daily Care",
    note: "Hand and body, the everyday creams and balms you restock without thinking.",
    img: IMG.care,
    alt: "A dab of cream blended across the back of a hand against a warm tan backdrop",
  },
];

export default function Index() {
  const [active, setActive] = useState(0);
  const cur = AISLES[active];

  return (
    <section id="index" className="px-5 py-20 sm:px-8 md:py-28" style={{ background: "var(--paper-2)" }}>
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="kicker" style={{ color: "var(--mocha)" }}>
              The aisle index
            </span>
            <h2 className="mt-3 font-display text-[2.1rem] leading-[1.05] tracking-[-0.02em] sm:text-[2.8rem]" style={{ color: "var(--ink)" }}>
              Four shelves, read by hand.
            </h2>
          </div>
          <span className="seal-turn hidden h-16 w-16 shrink-0 rounded-full sm:grid place-items-center font-mark text-[0.62rem] italic"
            style={{ border: "1px solid var(--line-2)", color: "var(--mocha-3)" }}>
            est · orange
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:gap-12">
          {/* index list */}
          <ul className="reveal">
            {AISLES.map((a, i) => {
              const on = i === active;
              return (
                <li key={a.no}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group flex w-full items-center gap-5 py-5 text-left transition-colors"
                    style={{ borderTop: "1px solid var(--line)" }}
                  >
                    <span
                      className="tabnum font-mark text-[0.8rem] transition-colors"
                      style={{ color: on ? "var(--mocha)" : "var(--mocha-3)" }}
                    >
                      {a.no}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className="font-display text-[1.6rem] leading-tight tracking-tight transition-transform duration-300 sm:text-[2rem]"
                        style={{
                          color: on ? "var(--mocha)" : "var(--ink)",
                          display: "inline-block",
                          transform: on ? "translateX(8px)" : "none",
                        }}
                      >
                        {a.name}
                      </span>
                      <span
                        className="block overflow-hidden text-[0.9rem] leading-relaxed transition-all duration-500"
                        style={{
                          color: "var(--mocha-2)",
                          maxHeight: on ? "5rem" : "0rem",
                          opacity: on ? 1 : 0,
                          marginTop: on ? "0.4rem" : 0,
                        }}
                      >
                        {a.note}
                      </span>
                    </span>
                    <span
                      className="shrink-0 text-[1.4rem] transition-all duration-300"
                      style={{ color: "var(--mocha)", opacity: on ? 1 : 0.25, transform: on ? "rotate(0deg)" : "rotate(-30deg)" }}
                    >
                      →
                    </span>
                  </button>
                </li>
              );
            })}
            <li style={{ borderTop: "1px solid var(--line)" }} />
          </ul>

          {/* live plate */}
          <div className="reveal" data-delay="120ms">
            <figure
              className="relative aspect-[4/5] overflow-hidden rounded-[3px]"
              style={{ border: "1px solid var(--line)", boxShadow: "0 24px 60px -34px rgba(42,29,20,0.55)" }}
            >
              {AISLES.map((a, i) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={a.no}
                  src={a.img}
                  alt={a.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
                  style={{ opacity: i === active ? 1 : 0 }}
                />
              ))}
              <span className="shelf-light" />
              <figcaption
                className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4"
                style={{ background: "linear-gradient(transparent, rgba(42,29,20,0.8))", color: "var(--paper)" }}
              >
                <span className="font-display text-[1.05rem]">{cur.name}</span>
                <span className="font-mark text-[0.72rem] italic">aisle {cur.no}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
