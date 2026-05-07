"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" as const } },
};

const stats = [
  { num: "380", suffix: "+", label: "Realizacji" },
  { num: "25", suffix: " lat", label: "Doświadczenia" },
  { num: "0", suffix: "", label: "Wypadków" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-24 pb-12 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(160deg, transparent 40%, rgba(14,13,11,0.97) 100%), radial-gradient(ellipse at 70% 25%, #2d1b0a 0%, #0e0d0b 65%)",
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 z-[1] opacity-30 pointer-events-none"
        style={{ backgroundImage: NOISE_SVG, backgroundSize: "200px" }}
      />

      {/* Animated accent line */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 0.4 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
        className="absolute top-0 left-[35%] w-px h-full z-[2] origin-top"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--accent) 30%, rgba(232,92,13,0.3) 70%, transparent)",
        }}
      />

      {/* Wall image — right side, like the screenshot */}
      <motion.div
        initial={{ opacity: 0, x: 80, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.25 }}
        className="absolute right-[-1%] top-0 bottom-0 z-[2] pointer-events-none hidden md:block"
        style={{ width: "40%", height: "100%" }}
      >
        <Image
          src="/wall.png"
          alt="Wyburzona ściana — JIMBUD"
          fill
          style={{ objectFit: "contain", objectPosition: "right center" }}
          priority
          sizes="60vw"
        />
      </motion.div>

      {/* Main text content — left side */}
      <motion.div
        className="relative z-[3] max-w-full md:max-w-[48%]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={item}
          className="flex items-center gap-4 mb-6 font-cond text-[0.72rem] tracking-[0.32em] uppercase text-[var(--accent)]"
        >
          <span className="block w-10 h-px bg-[var(--accent)]" />
          Profesjonalne wyburzenia
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display leading-[0.85] tracking-[-0.02em] text-[var(--text)]"
          style={{ fontSize: "clamp(4rem, 10vw, 11rem)" }}
        >
          BURZY
          <br />
          <span style={{ color: "var(--accent)" }}>MY</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="font-cond font-light tracking-[0.1em] uppercase text-[var(--muted)] mt-6 max-w-[420px] leading-relaxed"
          style={{ fontSize: "clamp(0.9rem, 2vw, 1.2rem)" }}
        >
          Kompleksowe wyburzanie budynków przemysłowych i mieszkalnych
          z najwyższą precyzją.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap gap-4 items-center mt-12"
        >
          <a
            href="https://www.facebook.com/profile.php?id=61589351493263"
            target="_blank"
            rel="noopener noreferrer"
            className="font-cond text-[0.82rem] tracking-[0.2em] uppercase bg-[var(--accent)] hover:bg-[var(--accent2)] text-white px-10 py-4 transition-colors duration-200 inline-block"
          >
            Zamów wycenę
          </a>
          <a
            href="#projekty"
            className="font-cond text-[0.82rem] tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--text)] border border-[var(--border)] hover:border-white/20 px-10 py-4 transition-colors duration-200 inline-block"
          >
            Realizacje
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
