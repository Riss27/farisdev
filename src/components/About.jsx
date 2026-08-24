import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

const qualities = [
  {
    title: "Structure First",
    desc: "Writing code that prioritizes legibility, maintainability, and logical architecture over fleeting trends.",
  },
  {
    title: "Problem Solver",
    desc: "Transforming complex requirements into solid, performing systems with exactness.",
  },
  {
    title: "Adaptability",
    desc: "Continuously refining methods and adopting optimal tools for robust solutions.",
  },
  {
    title: "Detail Driven",
    desc: "Executing developments with a rigorous eye for alignment, performance, and accessibility.",
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
              I’m <span className="font-semibold">Muhammad Faris Fathur Rohman</span>, a web developer crafting digital products with precision and purpose. Currently pursuing my degree at{" "}
              <span className="font-semibold border-b border-emerald-500/50">Universitas Pasundan</span>, I believe great software is defined by <span className="text-gray-500 dark:text-gray-400">clarity</span>, <span className="text-gray-500 dark:text-gray-400">performance</span>,
              and <span className="text-gray-500 dark:text-gray-400">attention to detail</span>.
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-3">
            {qualities.map((item, idx) => (
              <FadeIn key={idx} delay={0.2 + idx * 0.1} className="h-full">
                <div className="h-full group rounded-[24px] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/50 p-6 sm:p-8 xl:p-10 flex flex-col justify-between hover:bg-white dark:hover:bg-black transition-colors duration-500 overflow-hidden relative shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-black/[0.03] dark:bg-white/[0.05] translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] flex items-center justify-center rounded-bl-[24px]">
                    <ArrowUpRight size={20} className="text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" aria-hidden="true" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-gray-500 mb-6 sm:mb-8 block group-hover:text-black dark:group-hover:text-white transition-colors duration-300">0{idx + 1}</span>
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-semibold uppercase tracking-[-0.02em] mb-3 sm:mb-4 text-black dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light text-sm sm:text-base group-hover:text-black dark:group-hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
