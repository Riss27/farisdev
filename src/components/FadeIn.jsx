"use client";

import { useEffect, useRef, useState } from "react";

const OFFSETS = {
  up: "translate3d(0, 32px, 0)",
  down: "translate3d(0, -32px, 0)",
  left: "translate3d(32px, 0, 0)",
  right: "translate3d(-32px, 0, 0)",
  none: "translate3d(0, 0, 0)",
};

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
  fullWidth = false,
  viewOnly = true,
  animationType = "fade",
  threshold = 0.01,
  rootMargin = "0px 0px 50px 0px",
  style = {},
}) {
  const [visible, setVisible] = useState(!viewOnly);
  const ref = useRef(null);

  useEffect(() => {
    if (!viewOnly || !ref.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [viewOnly, threshold, rootMargin]);

  const hiddenTransform = animationType === "scale" ? "scale(0.96)" : OFFSETS[direction];

  return (
    <div
      ref={ref}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0, 0, 0)" : hiddenTransform,
        transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
