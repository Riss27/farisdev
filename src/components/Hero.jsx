import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import FadeIn from "./FadeIn";
import Magnetic from "./Magnetic";

const strengths = ["Next.js App Router", "TypeScript Strict", "Accessible UI (a11y)"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-24 pb-16 sm:py-24 relative overflow-hidden border-b border-forest/15"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 right-0 w-[26rem] h-[26rem] bg-pink/[0.06] rounded-full blur-[140px] animate-float" />
        <div className="absolute bottom-0 -left-24 w-[30rem] h-[30rem] bg-forest/[0.05] rounded-full blur-[160px] animate-float [animation-delay:2s]" />
      </div>

      <div className="w-full flex flex-col xl:flex-row items-center xl:items-start justify-between gap-10 sm:gap-12 xl:gap-16 relative z-10">
        <div className="flex-1 w-full max-w-3xl">
          <FadeIn delay={0.05}>
            <div className="inline-flex items-center rounded-full border border-forest/15 bg-forest/[0.04] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] text-forest-muted mb-6 sm:mb-8 font-semibold">
              <span className="inline-block w-2 h-2 bg-pink rounded-full mr-2.5 animate-pulse" />
              Ready for Opportunities
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-semibold tracking-[-0.04em] leading-[0.88] uppercase mb-6 sm:mb-8 text-forest break-words">
              Faris<span className="text-pink">.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-forest/80 max-w-2xl leading-relaxed sm:leading-8 mb-8 sm:mb-10 font-medium">
              Frontend & Web Developer crafting performant, accessible digital products with modern
              architectures, clean code, and thoughtful interactions.
            </p>
          </FadeIn>

          <FadeIn delay={0.28} fullWidth animationType="scale" direction="none">
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Magnetic>
                <a href="#projects" className="btn-primary group">
                  <span className="relative z-10 flex items-center gap-2">
                    Recent Work
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  href="/cv-faris.pdf"
                  download="CV_Muhammad_Faris_Fathur_Rohman.pdf"
                  className="btn-secondary group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Download CV
                    <Download size={14} className="transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
                  </span>
                </a>
              </Magnetic>

              <Magnetic>
                <a href="#contact" className="btn-accent group">
                  <span className="relative z-10 flex items-center gap-2">
                    Get in Touch
                    <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </span>
                </a>
              </Magnetic>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-12 sm:mt-16 flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-forest-muted font-mono">
              <div className="w-16 h-px bg-forest/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-pink animate-shimmer" />
              </div>
              <span>Scroll to explore</span>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="w-full xl:w-[360px] shrink-0" animationType="scale">
          <div className="w-full card-base overflow-hidden group/card">
            <div className="p-5 sm:p-6 lg:p-7 border-b border-forest/15">
              <span className="heading-sub">Specialization</span>
              <span className="text-lg sm:text-xl font-semibold uppercase tracking-[-0.02em] text-forest leading-tight">
                Web Apps & Interfaces
              </span>
            </div>

            <div className="p-5 sm:p-6 lg:p-7 border-b border-forest/15">
              <span className="heading-sub">Domain Focus</span>
              <span className="text-base font-semibold uppercase tracking-[-0.01em] leading-snug text-forest">
                SaaS, Dashboards & Platforms
              </span>
            </div>

            <div className="p-5 sm:p-6 lg:p-7 border-b border-forest/15">
              <span className="heading-sub">Technical Strengths</span>
              <ul className="text-forest text-xs font-semibold space-y-2 tracking-[0.12em] uppercase font-mono">
                {strengths.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-pink rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-forest text-cream p-5 sm:p-6 lg:p-7 flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/70">Availability</span>
                <span className="text-sm font-semibold uppercase tracking-[0.14em] mt-1">Open for roles</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="absolute inset-0 bg-pink rounded-full animate-ping opacity-40" />
                  <span className="relative w-2.5 h-2.5 bg-pink rounded-full" />
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-cream/80">Live</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
