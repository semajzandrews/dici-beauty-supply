"use client";
import { MapPin, Star } from "lucide-react";
import { BIZ } from "../lib/biz";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pt-32 md:pb-24 md:pt-40">
      {/* warm radial wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 78% 8%, rgba(197,138,110,0.20), transparent 55%), radial-gradient(90% 70% at 0% 100%, rgba(139,146,111,0.16), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
        {/* Left — editorial copy */}
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="kicker" style={{ color: "var(--mocha)" }}>
              Est. on Main Street · Orange, NJ
            </span>
            <span className="flex items-center gap-1.5 text-[0.74rem]" style={{ color: "var(--mocha-3)" }}>
              <Star size={13} fill="var(--gold)" stroke="var(--gold)" />
              <span className="tabnum font-semibold">{BIZ.rating.toFixed(1)}</span>
              <span style={{ color: "var(--line-2)" }}>·</span>
              <span>neighborhood favorite</span>
            </span>
          </div>

          <h1 className="font-display text-[2.7rem] leading-[1.02] tracking-[-0.02em] sm:text-[3.6rem] md:text-[4.2rem]" style={{ color: "var(--ink)" }}>
            The beauty counter,
            <br />
            <span style={{ color: "var(--mocha)" }} className="italic">stocked by hand.</span>
          </h1>

          <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed" style={{ color: "var(--mocha-2)" }}>
            Dici is the kind of beauty supply you used to be able to walk to. Cosmetics, skincare,
            hair and fragrance, chosen shelf by shelf and kept honest. Come in, ask, and leave with
            the right thing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#index"
              className="rounded-full px-6 py-3 text-[0.86rem] font-semibold transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--mocha)", color: "var(--paper)" }}
            >
              Browse the aisles
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[0.86rem] font-semibold transition-colors hover:bg-[var(--paper-2)]"
              style={{ border: "1px solid var(--line-2)", color: "var(--ink)" }}
            >
              <MapPin size={15} /> {BIZ.street}
            </a>
          </div>
        </div>

        {/* Right — signature product plate with shelf-light sweep */}
        <div className="reveal relative">
          <figure
            className="relative aspect-[4/5] overflow-hidden rounded-[3px]"
            style={{ boxShadow: "0 30px 70px -34px rgba(42,29,20,0.6)", border: "1px solid var(--line)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.pexels.com/photos/4620843/pexels-photo-4620843.jpeg?auto=compress&cs=tinysrgb&w=1100"
              alt="An artisanal spread of cosmetics, powders and brushes laid out on a dark counter"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <span className="shelf-light" />
            <figcaption
              className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4 text-[0.7rem]"
              style={{ background: "linear-gradient(transparent, rgba(42,29,20,0.78))", color: "var(--paper)" }}
            >
              <span className="kicker" style={{ fontSize: "0.56rem" }}>The morning counter</span>
              <span className="font-mark italic">no. 247</span>
            </figcaption>
          </figure>

          {/* floating wax-seal price chip */}
          <div
            className="drift absolute -left-3 top-6 hidden rounded-full px-4 py-3 text-center sm:block"
            style={{ background: "var(--paper)", border: "1px solid var(--line-2)", boxShadow: "0 12px 30px -16px rgba(42,29,20,0.5)" }}
          >
            <span className="kicker block" style={{ color: "var(--mocha-3)", fontSize: "0.5rem" }}>Open today</span>
            <span className="font-display text-[0.98rem]" style={{ color: "var(--ink)" }}>til 7 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
