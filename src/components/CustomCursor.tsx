"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  const dotX = useSpring(mx, { stiffness: 2000, damping: 60 });
  const dotY = useSpring(my, { stiffness: 2000, damping: 60 });
  const ringX = useSpring(mx, { stiffness: 200, damping: 28 });
  const ringY = useSpring(my, { stiffness: 200, damping: 28 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <>
      <motion.div
        className="fixed w-3 h-3 rounded-full pointer-events-none z-[9999] hidden md:block -translate-x-1/2 -translate-y-1/2"
        style={{ left: dotX, top: dotY, backgroundColor: "var(--accent)" }}
      />
      <motion.div
        className="fixed w-9 h-9 rounded-full pointer-events-none z-[9998] hidden md:block -translate-x-1/2 -translate-y-1/2"
        style={{
          left: ringX,
          top: ringY,
          border: "1px solid rgba(232,92,13,0.5)",
        }}
      />
    </>
  );
}
