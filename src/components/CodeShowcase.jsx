import FadeIn from "./FadeIn";
import { Code, Terminal, Layers, Sparkles } from "lucide-react";

const snippet = `// hooks/useResponsive.ts — Cosmic Bunny Architecture
import { useEffect, useState } from "react";

interface ResponsiveState {
  windowWidth: number;
  isDesiredWidth: boolean;
}

export const useResponsive = (minWidth: number): boolean => {
  const [state, setState] = useState<ResponsiveState>({
    windowWidth: 0,
    isDesiredWidth: false,
  });

  useEffect(() => {
    const updateWidth = () => {
      const current = window.innerWidth;
      setState({ windowWidth: current, isDesiredWidth: current > minWidth });
    };

    updateWidth();
    window.addEventListener("resize", updateWidth, { passive: true });
    return () => window.removeEventListener("resize", updateWidth);
  }, [minWidth]);

  return state.isDesiredWidth;
};`;

export default function CodeShowcase() {
  return (
    <section id="code" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-black/10 dark:border-white/10 overflow-hidden transition-colors duration-500">
      <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
        <div className="lg:col-span-12 mb-4 sm:mb-8 min-w-0">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-black dark:bg-white text-white dark:text-black">
                <Code size={20} aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter uppercase text-black dark:text-white">Engineering Spotlight</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl font-light text-sm sm:text-base">
              Real-world patterns applied in production projects, emphasizing clean abstractions, strict types, and lightweight client state.
            </p>
          </FadeIn>
        </div>

        <div className="lg:col-span-7 min-w-0">
          <FadeIn delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-zinc-800 dark:to-zinc-900 opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 blur"></div>
              <div className="relative bg-[#0d1117] rounded-none border border-white/10 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 border-b border-white/10 bg-[#161b22]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[11px] sm:text-xs uppercase tracking-widest text-gray-400 font-mono">useResponsive.ts</span>
                  </div>
                  <Terminal size={14} className="text-gray-400" aria-hidden="true" />
                </div>
                <div className="p-3 sm:p-6 overflow-x-auto max-h-[350px] sm:max-h-[500px]">
                  <pre className="text-[10px] sm:text-xs font-mono text-gray-300 leading-normal whitespace-pre">
                    <code>{snippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center min-w-0">
          <FadeIn delay={0.4} direction="left">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex gap-4 items-start group">
                <div className="mt-1 p-2 border border-black/10 dark:border-white/10 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
                  <Layers size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-1 text-black dark:text-white">Responsive Viewport Hook</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    Zero-dependency viewport observer used in Cosmic Bunny to dynamically adapt complex game grid layouts and drawer navigations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="mt-1 p-2 border border-black/10 dark:border-white/10 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
                  <Sparkles size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-1 text-black dark:text-white">Passive Event Performance</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    Uses passive resize listeners and immediate cleanup to maintain a silky 60fps interaction during browser resizes without layout thrashing.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-black/5 dark:border-white/5">
                <a
                  href="https://github.com/Riss27/cosmic-bunny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-black dark:text-white hover:translate-x-2 transition-transform duration-300"
                >
                  View Cosmic Bunny Repository
                  <div className="w-12 h-px bg-black dark:bg-white"></div>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
