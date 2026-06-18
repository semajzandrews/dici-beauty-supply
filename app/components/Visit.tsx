import { MapPin, Phone, Navigation } from "lucide-react";
import { BIZ } from "../lib/biz";

export default function Visit() {
  return (
    <section id="visit" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 max-w-xl">
          <span className="kicker" style={{ color: "var(--mocha)" }}>
            Find the counter
          </span>
          <h2 className="mt-3 font-display text-[2.2rem] leading-[1.05] tracking-[-0.02em] sm:text-[3rem]" style={{ color: "var(--ink)" }}>
            On Main Street,
            <span className="italic" style={{ color: "var(--mocha)" }}> in the City of Orange.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
          <div className="reveal map-frame" style={{ height: "clamp(300px, 42vw, 460px)", border: "1px solid var(--line)" }}>
            <iframe
              title={`${BIZ.name} location · ${BIZ.street}, ${BIZ.city}, ${BIZ.state} ${BIZ.zip}`}
              src={`https://www.google.com/maps?q=${BIZ.mapsQuery}&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="reveal flex flex-col gap-4" data-delay="100ms">
            <div className="rounded-[3px] p-6" style={{ background: "var(--mocha)", color: "var(--paper)" }}>
              <span className="kicker" style={{ color: "var(--rose)" }}>
                Address
              </span>
              <p className="mt-3 font-display text-[1.5rem] leading-snug">
                {BIZ.street}
                <br />
                {BIZ.city}, {BIZ.state} {BIZ.zip}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={BIZ.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.86rem] font-semibold transition-transform hover:-translate-y-0.5"
                  style={{ background: "var(--paper)", color: "var(--mocha)" }}
                >
                  <Phone size={15} /> {BIZ.phoneDisplay}
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${BIZ.mapsQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.86rem] font-semibold transition-colors"
                  style={{ border: "1px solid rgba(244,236,224,0.4)", color: "var(--paper)" }}
                >
                  <Navigation size={15} /> Get directions
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-[3px] p-5" style={{ border: "1px solid var(--line)" }}>
              <MapPin size={18} style={{ color: "var(--mocha)", marginTop: 2 }} />
              <p className="text-[0.9rem] leading-relaxed" style={{ color: "var(--mocha-2)" }}>
                Walk in any day. The team is happiest when you bring the hard question, the shade you
                can never match, or the product that quit working. That is what the counter is for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
