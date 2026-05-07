"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Ile trwa wyburzenie domu jednorodzinnego?",
    a: "Standardowa rozbiórka wraz z uporządkowaniem terenu zajmuje zazwyczaj od 3 do 10 dni roboczych.",
  },
  {
    q: "Jak przygotować budynek do rozbiórki?",
    a: "Przed przyjazdem ciężkiego sprzętu należy odłączyć wszystkie media: prąd, gaz, wodę oraz kanalizację.",
  },
  {
    q: "Czy utylizujecie materiały niebezpieczne (np. azbest)?",
    a: "Tak, zapewniamy bezpieczny demontaż, transport i utylizację materiałów wymagających specjalistycznych uprawnień.",
  },
  {
    q: "Czy oferujecie wycenę za darmo?",
    a: "Tak, przyjeżdżamy na miejsce, oceniamy stopień skomplikowania prac i przygotowujemy bezpłatny kosztorys.",
  },
  {
    q: "Czy wyburzacie również mniejsze obiekty, jak garaże czy wiaty?",
    a: "Tak, podejmujemy się zarówno dużych zleceń przemysłowych, jak i drobnych rozbiórek na prywatnych posesjach.",
  },
  {
    q: "Co z drzewami i roślinnością na działce?",
    a: "Na życzenie klienta zabezpieczamy istniejącą zieleń lub wykonujemy profesjonalną wycinkę i karczowanie kolidujących drzew.",
  },
  {
    q: "Czy muszę być obecny podczas prac?",
    a: "Nie jest to wymagane. Po przekazaniu placu budowy i formalnościach, możemy realizować zlecenie samodzielnie, raportując postępy.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="px-8 md:px-16 py-28 md:py-36" style={{ background: "var(--bg)" }}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 font-cond text-[0.68rem] tracking-[0.38em] uppercase text-[var(--accent)] mb-3"
      >
        <span className="block w-7 h-px bg-[var(--accent)]" />
        Pomoc
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display leading-[0.9] mb-14"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
      >
        PYTANIA
      </motion.h2>

      <div className="max-w-3xl">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            className="border-b border-[var(--border)]"
          >
            <button
              onClick={() => setActive(active === i ? null : i)}
              className="w-full py-7 flex justify-between items-center gap-6 text-left group cursor-pointer"
            >
              <span
                className="font-cond text-[1.1rem] font-bold tracking-wide transition-colors duration-200"
                style={{ color: active === i ? "var(--accent)" : "var(--text)" }}
              >
                {faq.q}
              </span>
              <motion.span
                animate={{ rotate: active === i ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="font-cond text-xl shrink-0 leading-none"
                style={{ color: "var(--accent)" }}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {active === i && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <p
                    className="pb-7 text-[0.95rem] leading-[1.75]"
                    style={{ color: "var(--muted)" }}
                  >
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
