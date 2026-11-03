"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-8 h-8"></div>;

  const isDark = resolvedTheme === "dark";

  return (
    <Magnetic strength={0.4}>
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="p-2 border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white flex items-center justify-center group"
        aria-label="Toggle Theme"
      >
        {isDark ? (
          <Sun size={20} className="text-white group-hover:scale-110 transition-transform" aria-hidden="true" />
        ) : (
          <Moon size={20} className="text-black group-hover:scale-110 transition-transform" aria-hidden="true" />
        )}
      </button>
    </Magnetic>
  );
}
