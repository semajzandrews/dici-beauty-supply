import { IMG } from "../lib/biz";

type Band = {
  kicker: string;
  title: string;
  italic: string;
  body: string;
  img: string;
  alt: string;
  chip?: { img: string; alt: string };
  flip?: boolean;
  tone?: "paper" | "deep";
};

const BANDS: Band[] = [
  {
    kicker: "Shelf no. 02 · Skincare",
    title: "Routines that",
    italic: "actually fit your skin.",
    body:
      "The skincare wall is built for real faces, not influencer wishlists. Gentle cleansers, the toner everyone reorders, serums that do one thing well, and a person who will tell you when you already own the right thing.",
    img: IMG.skincareToner,
    alt: "Amber glass serum and dropper bottles arranged on a soft white surface",
    chip: { img: IMG.lip, alt: "A tube of pink lip gloss with its applicator beside a swatch" },
    flip: false,
    tone: "paper",
  },
  {
    kicker: "Shelf no. 03 · Color",
    title: "Color you can",
    italic: "test in the daylight.",
    body:
      "Blush, lip and eye laid out where the window light is honest. Swatch before you commit, compare two shades side by side, and walk out with the one that looks like you instead of the box.",
    img: IMG.cosmetics,
    alt: "A neat flatlay of color cosmetics on warm tan: compact, brushes, lipstick and powder",
    chip: { img: IMG.blush, alt: "A pink blush compact with mirror open beside a matching lipstick" },
    flip: true,
    tone: "deep",
  },
  {
    kicker: "Shelf no. 04 · Tools",
    title: "The small tools",
    italic: "that do the heavy lifting.",
    body:
      "Brushes that hold their shape, rollers and sponges that earn their keep, and the quiet instruments a good routine depends on. Picked so the cheap ones that fall apart never make the shelf.",
    img: IMG.tools,
    alt: "A jade facial roller resting on marble beside eucalyptus sprigs",
    flip: false,
    tone: "paper",
  },
];

function BandRow({ b }: { b: Band }) {
  const deep = b.tone === "deep";
  return (
    <section
      id="shelves"
      className="px-5 py-16 sm:px-8 md:py-24"
      style={{ background: deep ? "var(--mocha)" : "var(--paper)" }}
    >
      <div
        className={`mx-auto grid max-w-[1200px] items-center gap-10 md:gap-16 ${
          b.flip ? "md:grid-cols-[0.95fr_1.05fr]" : "md:grid-cols-[1.05fr_0.95fr]"
        }`}
      >
        {/* image */}
        <div className={`reveal relative ${b.flip ? "md:order-2" : "md:order-1"}`}>
          <figure className="relative aspect-[5/4] overflow-hidden rounded-[3px]" style={{ border: "1px solid var(--line)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.img} alt={b.alt} loading="lazy" className="h-full w-full object-cover" />
          </figure>
          {b.chip && (
            <div
              className="drift absolute -bottom-6 right-4 h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28"
              style={{ border: "3px solid var(--paper)", boxShadow: "0 16px 36px -18px rgba(42,29,20,0.6)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.chip.img} alt={b.chip.alt} loading="lazy" className="h-full w-full object-cover" />
            </div>
          )}
        </div>

        {/* copy */}
        <div className={b.flip ? "md:order-1" : "md:order-2"}>
          <span className="kicker" style={{ color: deep ? "var(--rose)" : "var(--mocha)" }}>
            {b.kicker}
          </span>
          <h2
            className="mt-4 font-display text-[2rem] leading-[1.08] tracking-[-0.02em] sm:text-[2.5rem]"
            style={{ color: deep ? "var(--paper)" : "var(--ink)" }}
          >
            {b.title}{" "}
            <span className="italic" style={{ color: deep ? "var(--rose)" : "var(--mocha)" }}>
              {b.italic}
            </span>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed" style={{ color: deep ? "rgba(244,236,224,0.82)" : "var(--mocha-2)" }}>
            {b.body}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Bands() {
  return (
    <>
      {BANDS.map((b, i) => (
        <BandRow key={i} b={b} />
      ))}
    </>
  );
}
