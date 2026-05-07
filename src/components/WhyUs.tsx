"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    num: "01",
    title: "Ponad 20 lat doświadczenia",
    body: "Działamy na rynku od 2001 roku. W tym czasie zrealizowaliśmy ponad 380 projektów — od rozbiórki domów jednorodzinnych po wyburzenia wielohektarowych zakładów przemysłowych.",
  },
  {
    num: "02",
    title: "Bezpłatna wycena w 24h",
    body: "Kontaktujemy się z każdym zleceniodawcą w ciągu jednej doby roboczej. Wizja lokalna i szczegółowy kosztorys są całkowicie bezpłatne i niezobowiązujące.",
  },
  {
    num: "03",
    title: "Pełna obsługa formalna",
    body: "Przygotowujemy dokumentację techniczną, uzyskujemy pozwolenia na rozbiórkę i prowadzimy nadzór budowlany. Klient nie musi martwić się o żaden etap formalny.",
  },
  {
    num: "04",
    title: "Ubezpieczenie OC 5 mln zł",
    body: "Każda realizacja jest objęta polisą OC na kwotę 5 mln zł. Dla projektów o wyższej wartości wystawiamy dodatkowe ubezpieczenie indywidualne.",
  },
  {
    num: "05",
    title: "Zero wypadków w historii",
    body: "Rygorystyczne procedury BHP i regularne szkolenia kadry to podstawa naszej działalności. Od początku istnienia firmy nie odnotowaliśmy ani jednego wypadku przy pracy.",
  },
  {
    num: "06",
    title: "Ekologiczna gospodarka odpadami",
    body: "Gruz, złom i materiały budowlane są segregowane i kierowane do recyklingu. Współpracujemy z certyfikowanymi zakładami utylizacji odpadów niebezpiecznych.",
  },
];

export default function WhyUs() {
  return (
    <section
      className="px-8 md:px-16 py-28 md:py-36"
      style={{ background: "var(--bg2)" }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 font-cond text-[0.68rem] tracking-[0.38em] uppercase text-[var(--accent)] mb-3"
      >
        <span className="block w-7 h-px bg-[var(--accent)]" />
        Dlaczego my
      </motion.div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display leading-[0.9]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
        >
          DLACZEGO
          <br />
          <span style={{ color: "var(--accent)" }}>JIMBUD</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-sm text-[0.95rem] leading-relaxed md:text-right"
          style={{ color: "var(--muted)" }}
        >
          Wybierają nas inwestorzy, deweloperzy i samorządy, którym zależy
          na terminowości, bezpieczeństwie i profesjonalnej obsłudze od A do Z.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
        {reasons.map((r, i) => (
          <motion.div
            key={r.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.07, duration: 0.6 }}
            className="group p-10 transition-colors duration-300 hover:bg-[var(--surface)] relative overflow-hidden"
            style={{ background: "var(--bg2)" }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "linear-gradient(135deg, rgba(232,92,13,0.05) 0%, transparent 60%)" }}
            />
            <div className="font-display text-[4rem] leading-none mb-6 select-none" style={{ color: "rgba(232,92,13,0.12)" }}>
              {r.num}
            </div>
            <h3
              className="font-cond text-lg font-bold uppercase tracking-wide mb-3 group-hover:text-[var(--accent)] transition-colors duration-200"
              style={{ color: "var(--text)" }}
            >
              {r.title}
            </h3>
            <p className="text-[0.875rem] leading-[1.75]" style={{ color: "var(--muted)" }}>
              {r.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
