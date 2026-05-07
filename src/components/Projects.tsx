"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Elektrociepłownia Łódź",
    type: "Wyburzenie przemysłowe",
    year: "2024",
    size: "large",
    gradient: "linear-gradient(135deg, #1a0f05 0%, #2d1b0a 50%, #0e0d0b 100%)",
    accent: "rgba(232,92,13,0.15)",
  },
  {
    title: "Most Gdański",
    type: "Wyburzenie kontrolowane",
    year: "2023",
    size: "small",
    gradient: "linear-gradient(135deg, #0a0f1a 0%, #0a1428 100%)",
    accent: "rgba(50,100,232,0.12)",
  },
  {
    title: "Huta Katowice",
    type: "Rozbiórka przemysłowa",
    year: "2023",
    size: "small",
    gradient: "linear-gradient(135deg, #100a0a 0%, #1e0f0f 100%)",
    accent: "rgba(200,50,50,0.12)",
  },
  {
    title: "Wieżowiec Wrocław",
    type: "Wyburzenie wybuchowe",
    year: "2022",
    size: "small",
    gradient: "linear-gradient(135deg, #0a0a10 0%, #141420 100%)",
    accent: "rgba(100,50,200,0.1)",
  },
  {
    title: "Fabryka Warszawa",
    type: "Rozbiórka selektywna",
    year: "2022",
    size: "small",
    gradient: "linear-gradient(135deg, #0a100a 0%, #0f1e0f 100%)",
    accent: "rgba(50,180,80,0.1)",
  },
];

export default function Projects() {
  return (
    <section id="projekty" className="px-8 md:px-16 py-28 md:py-36">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 font-cond text-[0.68rem] tracking-[0.38em] uppercase text-[var(--accent)] mb-3"
      >
        <span className="block w-7 h-px bg-[var(--accent)]" />
        Portfolio
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display leading-[0.9] mb-16"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
      >
        NASZE
        <br />
        REALIZACJE
      </motion.h2>

      {/* Grid */}
      <div
        className="grid gap-[2px]"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "300px 300px",
          background: "var(--border)",
        }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="relative overflow-hidden group cursor-pointer"
            style={{
              gridColumn: i === 0 ? "1 / 2" : undefined,
              gridRow: i === 0 ? "1 / 3" : undefined,
            }}
          >
            {/* BG */}
            <motion.div
              className="absolute inset-0"
              style={{ background: p.gradient }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Accent glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: p.accent }}
            />

            {/* Noise overlay */}
            <div
              className="absolute inset-0 opacity-20 mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
                backgroundSize: "150px",
              }}
            />

            {/* Grid lines */}
            <div className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Content */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <div className="font-cond text-[0.62rem] tracking-[0.28em] uppercase text-[var(--accent)] mb-2">
                {p.type} · {p.year}
              </div>
              <div
                className="font-display leading-tight group-hover:text-[var(--accent)] transition-colors duration-300"
                style={{ fontSize: i === 0 ? "clamp(1.4rem, 2.5vw, 2rem)" : "clamp(1rem, 1.8vw, 1.4rem)" }}
              >
                {p.title}
              </div>
            </div>

            {/* Hover arrow */}
            <motion.div
              className="absolute top-6 right-6 w-8 h-8 border border-[var(--accent)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            >
              <span className="text-[var(--accent)] text-sm">↗</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 flex justify-center"
      >
        <a
          href="#kontakt"
          className="font-cond text-[0.8rem] tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--text)] border border-[var(--border)] hover:border-white/20 px-10 py-4 transition-colors duration-200 inline-block"
        >
          Zobacz wszystkie realizacje →
        </a>
      </motion.div>
    </section>
  );
}
