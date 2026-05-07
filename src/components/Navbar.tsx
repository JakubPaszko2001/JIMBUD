"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#uslugi", label: "Uslugi" },
  { href: "#o-nas", label: "O nas" },
  { href: "#projekty", label: "Realizacje" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] px-8 md:px-16 py-5 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-[rgba(14,13,11,0.95)] backdrop-blur-xl" : ""
          }`}
      >
        <a
          href="#"
          className="font-display text-2xl md:text-3xl tracking-widest text-[var(--text)]"
        >
          JIM<span className="text-[var(--accent)]">BUD</span>
        </a>

        <ul className="hidden md:flex gap-10 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="font-cond text-[0.8rem] tracking-[0.15em] uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61589351493263"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block font-cond text-[0.75rem] tracking-[0.15em] uppercase bg-[var(--accent)] hover:bg-[var(--accent2)] text-white px-6 py-2.5 transition-colors duration-200"
          >
            Wycena projektu
          </a>

          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-full h-[1.5px] bg-[var(--text)] origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-full h-[1.5px] bg-[var(--text)]"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-full h-[1.5px] bg-[var(--text)] origin-center"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-[var(--bg)] flex flex-col items-center justify-center gap-6"
          >
            {links.map(({ href, label }, i) => (
              <motion.a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                className="font-display text-5xl text-[var(--text)] hover:text-[var(--accent)] transition-colors cursor-pointer"
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href="https://www.facebook.com/profile.php?id=61589351493263"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: links.length * 0.07 + 0.05 }}
              className="mt-6 font-cond text-sm tracking-[0.2em] uppercase bg-[var(--accent)] text-white px-10 py-4"
            >
              Wycena projektu
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
