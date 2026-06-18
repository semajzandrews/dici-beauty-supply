const WORDS = [
  "Cosmetics",
  "Skincare",
  "Hair Care",
  "Fragrance",
  "Nails",
  "Brushes & Tools",
  "Lashes",
  "Body",
  "Men's Grooming",
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div
      className="relative overflow-hidden border-y py-3.5"
      style={{ borderColor: "var(--line)", background: "var(--mocha)" }}
      aria-hidden
    >
      <div className="flex w-max animate-[marq_38s_linear_infinite] items-center gap-10 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-[1.05rem] italic" style={{ color: "var(--paper)" }}>
              {w}
            </span>
            <span className="h-1 w-1 rounded-full" style={{ background: "var(--rose)" }} />
          </span>
        ))}
      </div>
      <style>{`@keyframes marq { from { transform: translateX(0) } to { transform: translateX(-50%) } }
      @media (prefers-reduced-motion: reduce){ .animate-\\[marq_38s_linear_infinite\\]{ animation: none } }`}</style>
    </div>
  );
}
