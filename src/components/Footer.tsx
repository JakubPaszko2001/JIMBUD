export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-8 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-4"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <a
        href="#"
        className="font-display text-xl tracking-widest"
        style={{ color: "var(--text)" }}
      >
        JIM<span style={{ color: "var(--accent)" }}>BUD</span>
      </a>

      <p
        className="font-cond text-[0.65rem] tracking-[0.2em] uppercase text-center"
        style={{ color: "var(--muted)" }}
      >
        © {year} JIMBUD Sp. z o.o. · Profesjonalne Rozbiórki · Białystok
      </p>

      <div className="flex gap-6">
        {["Polityka prywatności", "Regulamin"].map((label) => (
          <a
            key={label}
            href="#"
            className="font-cond text-[0.65rem] tracking-[0.15em] uppercase transition-colors duration-200 hover:text-[var(--text)]"
            style={{ color: "var(--muted)" }}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
