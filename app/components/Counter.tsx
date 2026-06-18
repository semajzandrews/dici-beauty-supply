import { IMG } from "../lib/biz";

// First alternating band: image-left, story-right. Establishes the artisanal counter ethos.
export default function Counter() {
  return (
    <section id="counter" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="reveal relative order-2 md:order-1">
          <figure className="relative aspect-[5/6] overflow-hidden rounded-[3px]" style={{ border: "1px solid var(--line)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG.counter}
              alt="A working beauty counter: open palettes, brushes upright in a cup, eyeshadow trays catching the light"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </figure>
          <span
            className="absolute -bottom-4 -right-3 rotate-[-4deg] rounded-full px-4 py-2 font-mark text-[0.78rem] italic"
            style={{ background: "var(--paper)", color: "var(--mocha)", border: "1px solid var(--line-2)" }}
          >
            since the corner of Main
          </span>
        </div>

        <div className="order-1 md:order-2">
          <span className="kicker" style={{ color: "var(--mocha)" }}>
            The Dici way
          </span>
          <h2 className="mt-4 font-display text-[2.1rem] leading-[1.08] tracking-[-0.02em] sm:text-[2.7rem]" style={{ color: "var(--ink)" }}>
            A supply store that
            <span className="italic" style={{ color: "var(--mocha)" }}> still answers questions.</span>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed" style={{ color: "var(--mocha-2)" }}>
            Big-box aisles leave you to guess. Dici does the opposite. The shelves are read,
            edited, and restocked by people who use the products, so when you ask for a foundation
            match or a leave-in that behaves, you get a real answer, not a shrug.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Shades and textures you can compare in the daylight by the window",
              "Brands the neighborhood actually keeps coming back for",
              "Honest swaps when the thing you wanted is the wrong thing",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-[0.95rem]" style={{ color: "var(--ink)" }}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--rose)" }} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
