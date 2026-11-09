import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import FadeIn from "./FadeIn";
import Magnetic from "./Magnetic";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center border-b border-forest/15 px-4 sm:px-8 md:px-12 lg:px-20 pt-28 pb-16 sm:py-28 lg:py-32 relative overflow-hidden transition-colors duration-500">
      <div className="w-full flex flex-col xl:flex-row items-center xl:items-start justify-between gap-10 sm:gap-12 xl:gap-16">
        <div className="flex-1 mt-4 sm:mt-10 xl:mt-0 w-full max-w-3xl">
          <FadeIn delay={0.1} viewOnly={false}>
            <div className="inline-flex items-center rounded-full border border-forest/15 bg-forest/[0.04] px-4 py-2 text-[10px] sm:text-xs uppercase tracking-[0.24em] text-forest-muted mb-6 sm:mb-10 font-semibold">
              <span className="inline-block w-2 h-2 bg-pink rounded-full mr-3 shadow-[0_0_8px_rgba(244,63,94,0.45)]"></span>
              Ready for Opportunities
            </div>
          </FadeIn>

          <FadeIn delay={0.2} viewOnly={false}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8.5rem] 2xl:text-[10rem] font-semibold tracking-[-0.04em] leading-[0.9] uppercase mb-6 sm:mb-8 text-forest">
              Faris<span className="text-pink">.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} viewOnly={false}>
            <p className="text-base sm:text-lg md:text-xl text-forest/80 max-w-2xl leading-7 sm:leading-8 mb-8 sm:mb-12 font-medium">
              Frontend & Web Developer crafting performant, accessible digital products with modern architectures, clean code, and thoughtful interactions.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} fullWidth viewOnly={false}>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-4">
              <Magnetic strength={0.25}>
                <a 
                  href="#projects" 
                  className="rounded-full px-6 py-3.5 bg-forest text-cream font-semibold uppercase tracking-[0.2em] text-[11px] hover:bg-forest-light hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(22,46,32,0.25)] active:translate-y-0 active:scale-[0.98] transition-all duration-200 flex items-center gap-3 group w-full sm:w-auto justify-center shadow-[0_6px_18px_rgba(22,46,32,0.14)]"
                >
                  <span className="relative z-10 flex items-center gap-2 text-cream">
                    Recent Work
                    <ArrowRight size={15} className="transition-all duration-200 group-hover:translate-x-1 group-hover:text-pink text-cream/70" aria-hidden="true" />
                  </span>
                </a>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a 
                  href="/cv-faris.pdf" 
                  download="CV_Muhammad_Faris_Fathur_Rohman.pdf" 
                  className="rounded-full px-6 py-3.5 bg-forest/[0.04] text-forest border border-forest/25 hover:bg-forest/[0.12] hover:border-forest/60 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(22,46,32,0.08)] active:translate-y-0 active:scale-[0.98] font-semibold uppercase tracking-[0.2em] text-[11px] transition-all duration-200 flex items-center gap-3 group w-full sm:w-auto justify-center"
                >
                  <span className="relative z-10 flex items-center gap-2 text-forest">
                    Download CV
                    <Download size={14} className="transition-all duration-200 group-hover:translate-y-0.5 group-hover:text-pink text-forest/70" aria-hidden="true" />
                  </span>
                </a>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a 
                  href="#contact" 
                  className="rounded-full px-6 py-3.5 bg-pink text-white hover:bg-pink-hover hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(244,63,94,0.4)] active:translate-y-0 active:scale-[0.98] font-semibold uppercase tracking-[0.2em] text-[11px] transition-all duration-200 flex items-center gap-3 group w-full sm:w-auto justify-center shadow-[0_8px_22px_rgba(244,63,94,0.28)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get in Touch
                    <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                  </span>
                </a>
              </Magnetic>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} direction="left" className="w-full xl:w-[360px] shrink-0" viewOnly={false}>
          <div className="w-full rounded-[28px] border border-forest/15 bg-cream-surface/90 backdrop-blur-xl overflow-hidden shadow-[0_20px_50px_rgba(22,46,32,0.06)] transition-colors duration-500">
            <div className="p-5 sm:p-6 lg:p-8 border-b border-forest/15 flex flex-col justify-end bg-gradient-to-br from-forest/[0.04] to-transparent">
              <span className="text-xs uppercase tracking-[0.2em] text-forest-muted mb-2 block font-semibold">Specialization</span>
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold uppercase tracking-[-0.02em] text-forest leading-tight">
                Web Apps & Interfaces
              </span>
            </div>

            <div className="p-5 sm:p-6 lg:p-8 border-b border-forest/15 flex flex-col justify-end">
              <span className="text-xs uppercase tracking-[0.2em] text-forest-muted mb-2 block font-semibold">Domain Focus</span>
              <span className="text-base lg:text-lg font-semibold uppercase tracking-[-0.01em] leading-snug text-forest">
                SaaS, Dashboards & Platforms
              </span>
            </div>

            <div className="p-5 sm:p-6 lg:p-8 border-b border-forest/15 flex flex-col justify-end">
              <span className="text-xs uppercase tracking-[0.2em] text-forest-muted mb-2 block font-semibold">Technical Strengths</span>
              <ul className="text-forest text-xs font-semibold space-y-1.5 tracking-[0.12em] uppercase">
                <li>• Next.js App Router</li>
                <li>• TypeScript Strict</li>
                <li>• Accessible UI (a11y)</li>
              </ul>
            </div>

            <div className="bg-forest text-cream p-5 sm:p-6 lg:p-8 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">Availability</span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] mt-1">Open for roles</span>
              </div>
              <div className="relative">
                <span className="absolute inset-0 bg-pink rounded-full animate-ping opacity-30"></span>
                <span className="w-3 h-3 bg-pink rounded-full shadow-[0_0_20px_rgba(244,63,94,0.8)] block relative z-10"></span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
