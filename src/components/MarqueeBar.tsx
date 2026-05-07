const items = [
  "Wyburzenia przemysłowe",
  "Rozbiórki mieszkalne",
  "Wyburzenia kontrolowane",
  "Recykling gruzu",
  "Rozbiórki selektywne",
  "Utylizacja odpadów",
];

export default function MarqueeBar() {
  const doubled = [...items, ...items];

  return (
    <div
      className="py-4 overflow-hidden relative"
      style={{ background: "var(--accent)" }}
    >
      <div
        className="flex gap-16 w-max"
        style={{
          animation: "marquee 28s linear infinite",
        }}
      >
        {doubled.map((text, i) => (
          <span
            key={i}
            className="font-cond text-[0.72rem] tracking-[0.3em] uppercase text-white whitespace-nowrap flex items-center gap-4"
          >
            <span className="opacity-60">✕</span>
            {text}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
