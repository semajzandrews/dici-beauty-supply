"use client";
import { HOURS } from "../lib/biz";

// Client-side "open now" derived from the verified weekly table.
function todayState() {
  const now = new Date();
  const idx = now.getDay() === 0 ? 6 : now.getDay() - 1; // table is Mon-first, JS Sun=0
  const row = HOURS[idx];
  const to24 = (s: string) => {
    const m = s.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!m) return 0;
    let h = parseInt(m[1], 10);
    const min = parseInt(m[2], 10);
    if (/pm/i.test(m[3]) && h !== 12) h += 12;
    if (/am/i.test(m[3]) && h === 12) h = 0;
    return h * 60 + min;
  };
  const cur = now.getHours() * 60 + now.getMinutes();
  const open = cur >= to24(row.open) && cur < to24(row.close);
  return { row, open };
}

export default function Hours() {
  const { row, open } = todayState();
  const todayName = row.day;
  return (
    <section className="px-5 py-16 sm:px-8 md:py-20" style={{ background: "var(--paper-2)" }}>
      <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div className="reveal">
          <span className="kicker" style={{ color: "var(--mocha)" }}>
            Hours
          </span>
          <h2 className="mt-3 font-display text-[2rem] leading-tight tracking-tight" style={{ color: "var(--ink)" }}>
            Open six full days,
            <br /> and Sunday afternoons.
          </h2>
          <span
            className="mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.8rem] font-semibold"
            style={{
              background: open ? "var(--sage)" : "var(--paper)",
              color: open ? "var(--paper)" : "var(--mocha-2)",
              border: open ? "none" : "1px solid var(--line-2)",
            }}
          >
            <span className="h-2 w-2 rounded-full" style={{ background: open ? "var(--paper)" : "var(--mocha-3)" }} />
            {open ? `Open now · until ${row.close}` : `Closed now · ${todayName} ${row.open} – ${row.close}`}
          </span>
        </div>

        <ul className="reveal" data-delay="100ms">
          {HOURS.map((h) => {
            const isToday = h.day === todayName;
            return (
              <li
                key={h.day}
                className="flex items-center justify-between py-3.5"
                style={{
                  borderTop: "1px solid var(--line)",
                  color: isToday ? "var(--mocha)" : "var(--ink)",
                }}
              >
                <span className={`font-display text-[1.15rem] ${isToday ? "italic" : ""}`}>{h.day}</span>
                <span className="tabnum text-[0.92rem]" style={{ color: isToday ? "var(--mocha)" : "var(--mocha-2)" }}>
                  {h.open} – {h.close}
                </span>
              </li>
            );
          })}
          <li style={{ borderTop: "1px solid var(--line)" }} />
        </ul>
      </div>
    </section>
  );
}
