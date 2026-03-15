"use client";

import { motion } from "framer-motion";

export default function FadeIn({ 
  children, 
  delay = 0, 
  className = "", 
  direction = "up", 
  fullWidth = false,
  viewOnly = true // If true, animates on scroll. If false, animates on load.
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      animate={!viewOnly ? { opacity: 1, y: 0, x: 0 } : undefined}
      whileInView={viewOnly ? { opacity: 1, y: 0, x: 0 } : undefined}
      viewport={{ once: true, amount: 0.1 }} 
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
