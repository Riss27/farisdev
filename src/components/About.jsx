import { ArrowUpRight, GraduationCap, Briefcase, Code2, Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";

const highlights = [
  {
    category: "Education",
    icon: GraduationCap,
    title: "Universitas Pasundan",
    period: "2022 — Present",
    desc: "Informatics Engineering undergraduate focusing on software engineering, web architectures, and mobile systems development.",
  },
  {
    category: "Experience",
    icon: Briefcase,
    title: "PT Saptaloka Digital",
    period: "Internship 2025",
    desc: "Fullstack Engineering Intern developing production Express.js REST APIs, relational MySQL schemas with Sequelize, and React frontends.",
  },
  {
    category: "Key Projects",
    icon: Code2,
    title: "Cosmic Bunny & MangTodo",
    period: "Campus Projects",
    desc: "Led frontend development for Cosmic Bunny (Next.js, TypeScript, Zustand) and MangTodo Android client (Kotlin, MVVM, Room).",
  },
  {
    category: "Engineering Focus",
    icon: Sparkles,
    title: "Performance & a11y",
    period: "Core Philosophy",
    desc: "Dedicated to accessible (WCAG compliant), type-safe, and zero-bloat web interfaces with measurable performance.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-forest/15 overflow-hidden transition-colors duration-500">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-8">
        <div className="lg:col-span-4 relative">
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] uppercase lg:sticky lg:top-12 z-10 text-forest mb-2 lg:mb-0">About</h2>
          </FadeIn>
          <div className="hidden lg:block absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none transform -rotate-90 origin-top-right mt-16 md:mt-24 leading-none whitespace-nowrap text-forest">
            <span className="text-[4.5rem] sm:text-[6rem] lg:text-[8.5rem] font-black tracking-[-0.04em]">OVER</span>
            <br />
            <span className="text-[4.5rem] sm:text-[6rem] lg:text-[8.5rem] font-black tracking-[-0.04em]">VIEW</span>
          </div>
        </div>

        <div className="lg:col-span-8">
          <FadeIn delay={0.2}>
            <div className="text-lg sm:text-2xl md:text-3xl leading-relaxed sm:leading-10 font-medium text-forest max-w-3xl mb-8 sm:mb-14 tracking-[-0.02em]">
              I’m <span className="font-semibold">Muhammad Faris Fathur Rohman</span>, a web developer crafting digital products with precision and purpose. Based in Bandung, Indonesia, I bridge thoughtful UI design with robust, scalable engineering.
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={idx} delay={0.2 + idx * 0.1} className="h-full">
                  <div className="h-full group rounded-[24px] border border-forest/15 bg-cream-surface/90 p-6 sm:p-8 flex flex-col justify-between hover:bg-cream-card hover:border-forest/30 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(22,46,32,0.08)] transition-all duration-300 overflow-hidden relative shadow-[0_10px_30px_rgba(22,46,32,0.03)]">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-forest-muted font-semibold">
                        <Icon size={16} className="text-pink" aria-hidden="true" />
                        <span>{item.category}</span>
                      </div>
                      <span className="text-xs uppercase tracking-widest text-forest-muted/70 font-mono">{item.period}</span>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-semibold tracking-[-0.02em] mb-2 text-forest">{item.title}</h3>
                      <p className="text-forest/75 leading-relaxed font-light text-sm group-hover:text-forest transition-colors duration-300">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
