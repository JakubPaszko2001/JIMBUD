"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

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
  const sliderRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);

  const updatePosition = (clientX: number) => {
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  };

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
        PRZED I PO:
      </motion.h2>

      {/* Before / After slider */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center mb-16"
      >
        <div
          ref={sliderRef}
          onMouseMove={(e) => updatePosition(e.clientX)}
          onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
          className="relative w-full max-w-3xl aspect-[4/3] overflow-hidden border border-[var(--border)] select-none"
        >
          {/* PRZED — warstwa bazowa */}
          <Image
            src="/przed.png"
            alt="Stan przed rozbiórką"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover pointer-events-none"
            priority={false}
          />
          <div className="absolute top-4 left-4 z-20 font-cond text-[0.62rem] tracking-[0.28em] uppercase text-white bg-black/60 backdrop-blur-sm px-3 py-1.5">
            Przed
          </div>

          {/* PO — warstwa przycinana clipPath-em */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 0 0 ${position}%)` }}
          >
            <Image
              src="/po.png"
              alt="Stan po rozbiórce"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover pointer-events-none"
              priority={false}
            />
            <div className="absolute top-4 right-4 z-20 font-cond text-[0.62rem] tracking-[0.28em] uppercase text-white bg-[var(--accent)] px-3 py-1.5">
              Po
            </div>
          </div>

          {/* Linia + uchwyt */}
          <div
            className="absolute top-0 bottom-0 w-px bg-[var(--accent)] pointer-events-none z-30"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]/80 backdrop-blur-sm flex items-center justify-center">
              <span className="text-[var(--accent)] text-sm tracking-widest">⇄</span>
            </div>
          </div>
        </div>
      </motion.div>
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
