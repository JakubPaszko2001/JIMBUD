"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    name: "Zabezpieczenie terenu",
    desc: "Przed przystąpieniem do prac stawiamy ogrodzenie ochronne wokół całego placu rozbiórki. Montujemy tablice ostrzegawcze i informacyjne zgodnie z przepisami BHP. W razie potrzeby organizujemy całodobowy nadzór terenu.",
  },
  {
    num: "02",
    name: "Odłączenie instalacji",
    desc: "We współpracy z dostawcami mediów przeprowadzamy formalne odcięcie dopływu prądu, gazu, wody i kanalizacji. Weryfikujemy również obecność instalacji teletechnicznych i centralnego ogrzewania, aby żaden przewód nie stanowił zagrożenia podczas rozbiórki.",
  },
  {
    num: "03",
    name: "Prace przygotowawcze",
    desc: "Przed właściwym wyburzeniem demontujemy okna, drzwi, stolarkę oraz elementy wyposażenia wnętrz nadające się do ponownego użycia lub sprzedaży. Etap ten znacząco redukuje ilość odpadów i może obniżyć całkowity koszt inwestycji.",
  },
  {
    num: "04",
    name: "Wyburzanie właściwe",
    desc: "Prowadzone mechanicznie przy użyciu koparek z wysięgnikiem wyburzeniowym lub ręcznie w miejscach o ograniczonym dostępie. Rozbieramy ściany nośne, stropy, konstrukcję dachu i fundamenty w ściśle określonej kolejności, eliminując ryzyko niekontrolowanego zawalenia.",
  },
  {
    num: "05",
    name: "Gospodarka odpadami",
    desc: "Na bieżąco segregujemy beton, cegłę, drewno, metal oraz materiały niebezpieczne takie jak azbest czy smoła. Posiadamy wszelkie zezwolenia na transport i przekazywanie odpadów do certyfikowanych instalacji przetwarzania.",
  },
  {
    num: "06",
    name: "Uporządkowanie placu",
    desc: "Po zakończeniu rozbiórki usuwamy wszelkie pozostałości, wyrównujemy teren i — jeśli wymaga tego projekt — wykonujemy jego profilowanie pod nową inwestycję. Przekazujemy plac z protokołem odbioru gotowym do dalszych prac budowlanych.",
  },
];


export default function Services() {
  return (
    <section id="uslugi" className="px-8 md:px-16 py-28 md:py-36">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 font-cond text-[0.68rem] tracking-[0.38em] uppercase text-[var(--accent)] mb-3"
      >
        <span className="block w-7 h-px bg-[var(--accent)]" />
        Zakres prac
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display leading-[0.9] mb-16 md:mb-20"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
      >
        CO
        <br />
        ROBIMY
      </motion.h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[var(--border)]"
      >
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: "easeOut" }}
            className="p-10 border-r border-b border-[var(--border)] group transition-colors duration-300 hover:bg-[var(--surface)] relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "linear-gradient(135deg, rgba(232,92,13,0.04) 0%, transparent 60%)" }}
            />
            <div className="font-cond text-[0.68rem] tracking-[0.2em] text-[var(--accent)] mb-8">
              {s.num}
            </div>
            <div className="font-cond text-xl font-bold uppercase tracking-wide mb-3 group-hover:text-[var(--accent)] transition-colors duration-200">
              {s.name}
            </div>
            <p className="text-[0.875rem] leading-[1.75] text-[var(--muted)]">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
