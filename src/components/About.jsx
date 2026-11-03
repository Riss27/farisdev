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
    <section id="about" className="py-24 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-black/10 dark:border-white/10 overflow-hidden transition-colors duration-500">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
        <div className="lg:col-span-4 relative">
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] uppercase sticky top-20 md:top-12 z-10 text-black dark:text-white">About</h2>
          </FadeIn>
          <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none transform -rotate-90 origin-top-right mt-16 md:mt-24 leading-none whitespace-nowrap text-black dark:text-white">
            <span className="text-[4.5rem] sm:text-[6rem] lg:text-[8.5rem] font-black tracking-[-0.04em]">OVER</span>
            <br />
            <span className="text-[4.5rem] sm:text-[6rem] lg:text-[8.5rem] font-black tracking-[-0.04em]">VIEW</span>
          </div>
        </div>

        <div className="lg:col-span-8">
          <FadeIn delay={0.2}>
            <div className="text-xl md:text-3xl leading-8 md:leading-10 font-medium text-black dark:text-white max-w-3xl mb-14 tracking-[-0.02em]">
              I’m <span className="font-semibold">Muhammad Faris Fathur Rohman</span>, a web developer crafting digital products with precision and purpose. Based in Bandung, Indonesia, I bridge thoughtful UI design with robust, scalable engineering.
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={idx} delay={0.2 + idx * 0.1} className="h-full">
                  <div className="h-full group rounded-[24px] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/50 p-6 sm:p-8 flex flex-col justify-between hover:bg-white dark:hover:bg-black transition-colors duration-500 overflow-hidden relative shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
                        <Icon size={16} className="text-emerald-500" aria-hidden="true" />
                        <span>{item.category}</span>
                      </div>
                      <span className="text-xs uppercase tracking-widest text-gray-400 font-mono">{item.period}</span>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-semibold tracking-[-0.02em] mb-2 text-black dark:text-white">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light text-sm group-hover:text-black dark:group-hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
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
