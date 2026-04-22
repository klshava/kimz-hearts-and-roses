/* ScrollReveal — Animate children on scroll into view */
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) {
  const initial: Record<string, number> = { opacity: 0 };
  if (direction === "up") initial.y = 40;
  if (direction === "left") initial.x = -40;
  if (direction === "right") initial.x = 40;

  const animate: Record<string, number> = { opacity: 1, y: 0, x: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
