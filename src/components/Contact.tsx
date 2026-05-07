"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1600));
    setStatus("sent");
    setForm({ name: "", phone: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass =
    "w-full px-5 py-4 text-[0.92rem] outline-none transition-colors duration-200 font-body placeholder:text-[var(--muted)]";

  return (
    <section
      id="kontakt"
      className="px-8 md:px-16 py-28 md:py-36 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
      style={{ background: "var(--bg2)" }}
    >
      {/* Left */}
      <div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 font-cond text-[0.68rem] tracking-[0.38em] uppercase text-[var(--accent)] mb-3"
        >
          <span className="block w-7 h-px bg-[var(--accent)]" />
          Kontakt
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display leading-[0.88] mt-4"
          style={{ fontSize: "clamp(3rem, 6vw, 6.5rem)" }}
        >
          ZACZNIJ
          <br />
          <span style={{ color: "var(--accent)" }}>PROJEKT</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 space-y-5"
          style={{ color: "var(--muted)" }}
        >
          {[
            { label: "Adres", value: "ul. Przemysłowa 14, Białystok" },
            { label: "Telefon", value: "+48 85 123 45 67" },
            { label: "Email", value: "kontakt@jimbud.pl" },
            { label: "Godziny", value: "Pon–Pt · 7:00–17:00" },
          ].map(({ label, value }) => (
            <div key={label} className="flex gap-6">
              <span className="font-cond text-[0.7rem] tracking-[0.2em] uppercase text-[var(--accent)] w-16 shrink-0 pt-0.5">
                {label}
              </span>
              <span className="text-[0.95rem] leading-relaxed">{value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-col gap-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Imię i nazwisko"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          />
          <input
            type="tel"
            placeholder="Telefon"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          />
        </div>

        <input
          type="email"
          placeholder="Adres email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--text)",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
        />

        <textarea
          placeholder="Opis obiektu — lokalizacja, typ budynku, orientacyjna powierzchnia..."
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputClass + " resize-none"}
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--text)",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
        />

        <AnimatePresence mode="wait">
          <motion.button
            key={status}
            type="submit"
            disabled={status !== "idle"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="font-cond text-[0.82rem] tracking-[0.2em] uppercase text-white py-4 px-8 transition-colors duration-200 cursor-pointer disabled:cursor-default"
            style={{
              background:
                status === "sent"
                  ? "#22a24a"
                  : status === "sending"
                  ? "var(--muted)"
                  : "var(--accent)",
            }}
          >
            {status === "idle" && "Wyślij zapytanie →"}
            {status === "sending" && "Wysyłanie..."}
            {status === "sent" && "Wysłano pomyślnie ✓"}
          </motion.button>
        </AnimatePresence>

        <p className="text-[0.75rem] leading-relaxed" style={{ color: "var(--muted)" }}>
          Odpowiadamy w ciągu 24 godzin w dni robocze. Wycena jest bezpłatna.
        </p>
      </motion.form>
    </section>
  );
}
