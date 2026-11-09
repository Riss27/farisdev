import FadeIn from "./FadeIn";
import { Code, Terminal, Layers, Sparkles, ArrowUpRight } from "lucide-react";

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
    <section id="code" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-forest/15 overflow-hidden transition-colors duration-500">
      <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
        <div className="lg:col-span-12 mb-4 sm:mb-8 min-w-0">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-forest text-cream">
                <Code size={20} aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter uppercase text-forest">Engineering Spotlight</h2>
            </div>
            <p className="text-forest-muted max-w-2xl font-light text-sm sm:text-base">
              Real-world patterns applied in production projects, emphasizing clean abstractions, strict types, and lightweight client state.
            </p>
          </FadeIn>
        </div>

        <div className="lg:col-span-7 min-w-0">
          <FadeIn delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-forest/20 to-forest-light/30 opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 blur"></div>
              <div className="relative bg-forest-dark rounded-none border border-forest/30 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 border-b border-forest/30 bg-forest/50">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink shadow-[0_0_8px_rgba(244,63,94,0.6)]"></span>
                    <span className="text-[11px] sm:text-xs uppercase tracking-widest text-cream/70 font-mono">useResponsive.ts</span>
                  </div>
                  <Terminal size={14} className="text-cream/60" aria-hidden="true" />
                </div>
                <div className="p-3 sm:p-6 overflow-x-auto max-h-[350px] sm:max-h-[500px]">
                  <pre className="text-[10px] sm:text-xs font-mono text-cream/90 leading-normal whitespace-pre">
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
                <div className="mt-1 p-2 border border-forest/15 group-hover:bg-forest group-hover:text-cream transition-colors duration-300">
                  <Layers size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-1 text-forest">Responsive Viewport Hook</h3>
                  <p className="text-forest-muted text-sm leading-relaxed">
                    Zero-dependency viewport observer used in Cosmic Bunny to dynamically adapt complex game grid layouts and drawer navigations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="mt-1 p-2 border border-forest/15 group-hover:bg-forest group-hover:text-cream transition-colors duration-300">
                  <Sparkles size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-1 text-forest">Passive Event Performance</h3>
                  <p className="text-forest-muted text-sm leading-relaxed">
                    Uses passive resize listeners and immediate cleanup to maintain a silky 60fps interaction during browser resizes without layout thrashing.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-forest/10">
                <a
                  href="https://github.com/Riss27/cosmic-bunny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-forest hover:text-pink hover:translate-x-1.5 transition-all duration-200 group"
                >
                  <span>View Cosmic Bunny Repository</span>
                  <div className="w-10 h-px bg-forest group-hover:bg-pink group-hover:w-14 transition-all duration-300"></div>
                  <ArrowUpRight size={15} className="transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
