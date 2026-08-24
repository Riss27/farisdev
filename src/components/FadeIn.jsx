"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children, delay = 0, className = "", direction = "up", fullWidth = false, viewOnly = true }) {
  const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [visible, setVisible] = useState(!viewOnly || prefersReduced);
  const ref = useRef(null);

  const directions = {
    up: "translate3d(0, 40px, 0)",
    down: "translate3d(0, -40px, 0)",
    left: "translate3d(40px, 0, 0)",
    right: "translate3d(-40px, 0, 0)",
    none: "translate3d(0, 0, 0)",
  };

  useEffect(() => {
    if (!viewOnly || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [viewOnly]);

  return (
    <div
      ref={ref}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0, 0, 0)" : directions[direction],
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
