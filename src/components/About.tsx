"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 380, suffix: "+", label: "Realizacji" },
  { value: 0, suffix: "", label: "Wypadków" },
  { value: 25, suffix: "", label: "Lat w branży" },
  { value: 12, suffix: "", label: "Województw" },
];

function useCountUp(target: number, active: boolean) {
  const [val, setVal] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [active, target]);

  return val;
}

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, inView);

  return (
    <div ref={ref} className="text-center py-10 px-6" style={{ background: "var(--bg2)" }}>
      <div
        className="font-display leading-none mb-2"
        style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", color: "var(--text)" }}
      >
        {count}
        <span style={{ color: "var(--accent)" }}>{suffix}</span>
      </div>
      <div className="font-cond text-[0.65rem] tracking-[0.22em] uppercase" style={{ color: "var(--muted)" }}>
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="o-nas"
      className="px-8 md:px-16 py-28 md:py-36 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center"
      style={{ background: "var(--bg2)" }}
    >
      <div>
        <div className="grid grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
          {stats.map((s) => (
            <Counter key={s.label} {...s} />
          ))}
        </div>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 font-cond text-[0.68rem] tracking-[0.38em] uppercase text-[var(--accent)] mb-3"
        >
          <span className="block w-7 h-px bg-[var(--accent)]" />
          O firmie
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-cond text-2xl md:text-3xl leading-[1.35] mb-6"
        >
          Od 2001 roku robimy miejsce na nowe inwestycje.
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="text-[0.95rem] leading-[1.85] mb-4"
          style={{ color: "var(--muted)" }}
        >
          Jesteśmy liderem precyzyjnych rozbiórek w Polsce. Nasz park maszynowy
          i doświadczona kadra pozwalają na realizację zadań w najtrudniejszych
          warunkach urbanistycznych — od centrum Warszawy po tereny poprzemysłowe
          Śląska.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.26 }}
          className="text-[0.95rem] leading-[1.85] mb-8"
          style={{ color: "var(--muted)" }}
        >
          Pracujemy zgodnie z normami ISO 14001 i OHSAS 18001. Każda realizacja
          poprzedzona jest szczegółowym projektem technicznym i audytem
          środowiskowym.
        </motion.p>

        <motion.a
          href="#kontakt"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.33 }}
          className="inline-block font-cond text-[0.82rem] tracking-[0.2em] uppercase bg-[var(--accent)] hover:bg-[var(--accent2)] text-white px-10 py-4 transition-colors duration-200"
        >
          Skontaktuj się z nami
        </motion.a>
      </div>
    </section>
  );
}
