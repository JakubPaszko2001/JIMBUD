"use client";

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
      className="min-h-screen flex flex-col px-8 md:px-16 pt-24 pb-12 relative overflow-hidden"
    >
      {/* Background video — desktop */}
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover hidden md:block"
        src="/dekstop-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Background video — mobile */}
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover block md:hidden"
        src="/mobile-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Background gradient overlay (darkens video for legibility) */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(160deg, rgba(14,13,11,0.55) 0%, rgba(14,13,11,0.85) 100%)",
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

      {/* Translucent blurred panel — full section height, fades out toward center */}
      <div
        className="absolute left-0 top-0 bottom-0 z-[2] w-full md:w-[56%] backdrop-blur-md bg-[rgba(14,13,11,0.35)] pointer-events-none"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Left content strip — text and CTA, vertically centered */}
      <motion.div
        className="relative z-[3] flex flex-col justify-center self-stretch flex-1 w-full md:max-w-[52%] md:pr-16"
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
