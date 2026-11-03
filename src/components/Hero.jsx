import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import FadeIn from "./FadeIn";
import Magnetic from "./Magnetic";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center border-b border-black/10 dark:border-white/10 px-4 sm:px-8 md:px-12 lg:px-20 pt-28 pb-16 sm:py-28 lg:py-32 relative overflow-hidden transition-colors duration-500">
      <div className="w-full flex flex-col xl:flex-row items-center xl:items-start justify-between gap-10 sm:gap-12 xl:gap-16">
        <div className="flex-1 mt-4 sm:mt-10 xl:mt-0 w-full max-w-3xl">
          <FadeIn delay={0.1} viewOnly={false}>
            <div className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.06] px-4 py-2 text-[10px] sm:text-xs uppercase tracking-[0.24em] text-gray-600 dark:text-gray-300 mb-6 sm:mb-10">
              <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mr-3 shadow-[0_0_8px_rgba(16,185,129,0.35)]"></span>
              Ready for Opportunities
            </div>
          </FadeIn>

          <FadeIn delay={0.2} viewOnly={false}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8.5rem] 2xl:text-[10rem] font-semibold tracking-[-0.04em] leading-[0.9] uppercase mb-6 sm:mb-8 text-black dark:text-white">
              Faris<span className="text-outline-thin text-transparent dark:text-transparent">.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} viewOnly={false}>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl leading-7 sm:leading-8 mb-8 sm:mb-12 font-medium">
              Frontend & Web Developer crafting performant, accessible digital products with modern architectures, clean code, and thoughtful interactions.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} fullWidth viewOnly={false}>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-4">
              <Magnetic strength={0.25}>
                <a href="#projects" className="rounded-full px-6 py-3.5 bg-black dark:bg-white text-white dark:text-black font-semibold uppercase tracking-[0.2em] text-[11px] transition-all duration-300 flex items-center gap-3 group w-full sm:w-auto justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                  <span className="relative z-10 flex items-center gap-2">
                    Recent Work
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </a>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a href="/cv-faris.pdf" download="CV_Muhammad_Faris_Fathur_Rohman.pdf" className="rounded-full px-6 py-3.5 bg-black/[0.04] dark:bg-white/[0.08] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white font-semibold uppercase tracking-[0.2em] text-[11px] transition-all duration-300 flex items-center gap-3 group w-full sm:w-auto justify-center border border-black/10 dark:border-white/10">
                  <span className="relative z-10 flex items-center gap-2">
                    Download CV
                    <Download size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
                  </span>
                </a>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a href="#contact" className="rounded-full px-6 py-3.5 bg-white/70 dark:bg-white/10 text-black dark:text-white font-semibold uppercase tracking-[0.2em] text-[11px] transition-all duration-300 flex items-center gap-3 group w-full sm:w-auto justify-center border border-black/10 dark:border-white/10 backdrop-blur-xl">
                  <span className="relative z-10 flex items-center gap-2">
                    Get in Touch
                    <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                  </span>
                </a>
              </Magnetic>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} direction="left" className="w-full xl:w-[360px] shrink-0" viewOnly={false}>
          <div className="w-full rounded-[28px] border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-colors duration-500">
            <div className="p-5 sm:p-6 lg:p-8 border-b border-black/10 dark:border-white/10 flex flex-col justify-end bg-gradient-to-br from-black/[0.03] to-transparent dark:from-white/[0.05]">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 block font-semibold">Specialization</span>
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold uppercase tracking-[-0.02em] text-black dark:text-white leading-tight">
                Web Apps & Interfaces
              </span>
            </div>

            <div className="p-5 sm:p-6 lg:p-8 border-b border-black/10 dark:border-white/10 flex flex-col justify-end">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 block font-semibold">Domain Focus</span>
              <span className="text-base lg:text-lg font-semibold uppercase tracking-[-0.01em] leading-snug text-black dark:text-white">
                SaaS, Dashboards & Platforms
              </span>
            </div>

            <div className="p-5 sm:p-6 lg:p-8 border-b border-black/10 dark:border-white/10 flex flex-col justify-end">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 block font-semibold">Technical Strengths</span>
              <ul className="text-black dark:text-white text-xs font-semibold space-y-1.5 tracking-[0.12em] uppercase">
                <li>• Next.js App Router</li>
                <li>• TypeScript Strict</li>
                <li>• Accessible UI (a11y)</li>
              </ul>
            </div>

            <div className="bg-black dark:bg-white text-white dark:text-black p-5 sm:p-6 lg:p-8 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-75">Availability</span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] mt-1">Open for roles</span>
              </div>
              <div className="relative">
                <span className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20"></span>
                <span className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.6)] block relative z-10"></span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
