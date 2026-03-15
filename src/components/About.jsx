"use client";

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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase sticky top-12 z-10 text-black dark:text-white">
              About
            </h2>
          </FadeIn>
          {/* Decorative Background Text */}
          <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none transform -rotate-90 origin-top-right mt-16 md:mt-32 leading-none whitespace-nowrap text-black dark:text-white">
            <span className="text-[6rem] sm:text-[9rem] lg:text-[12rem] font-black tracking-tighter">OVER</span>
            <br />
            <span className="text-[6rem] sm:text-[9rem] lg:text-[12rem] font-black tracking-tighter">VIEW</span>
          </div>
        </div>
        
        <div className="lg:col-span-8">
          <FadeIn delay={0.2}>
            <div className="text-2xl md:text-4xl leading-tight font-medium text-black dark:text-white max-w-3xl mb-16 tracking-tight">
              I am a web developer driven by structural clarity and timeless design. I construct digital tools that prioritize performance, usability, and robustness over arbitrary decoration.
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-px bg-black/10 dark:bg-white/20 border border-black/10 dark:border-white/20">
            {qualities.map((item, idx) => (
              <FadeIn key={idx} delay={0.2 + (idx * 0.1)} className="h-full">
                <div className="h-full group bg-white dark:bg-black p-6 sm:p-8 xl:p-10 flex flex-col justify-between hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors duration-500 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-black/5 dark:bg-white/5 translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] flex items-center justify-center">
                  <ArrowUpRight size={24} className="text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                </div>
                <span className="text-xs uppercase tracking-widest text-gray-500 mb-6 sm:mb-8 block group-hover:text-black dark:group-hover:text-white transition-colors duration-300">0{idx + 1}</span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-3 sm:mb-4 group-hover:-translate-y-1 transition-transform duration-300 text-black dark:text-white">{item.title}</h3>
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
