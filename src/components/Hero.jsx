import { ArrowRight, ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import Magnetic from "./Magnetic";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center border-b border-black/10 dark:border-white/10 px-4 sm:px-8 md:px-12 lg:px-20 py-24 relative overflow-hidden transition-colors duration-500">
      <div className="w-full flex flex-col xl:flex-row items-center xl:items-start justify-between gap-12 xl:gap-16">
        <div className="flex-1 mt-10 xl:mt-0 w-full">
          <FadeIn delay={0.1} viewOnly={false}>
            <div className="inline-flex items-center border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-widest text-gray-500 dark:text-gray-300 mb-8 sm:mb-12 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 transition-colors cursor-default">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-none mr-3 shadow-[0_0_8px_rgba(34,197,94,0.4)] dark:shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"></span>
              Ready for Opportunities
            </div>
          </FadeIn>

          <FadeIn delay={0.2} viewOnly={false}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] 2xl:text-[10rem] font-bold tracking-tighter leading-[0.85] uppercase mb-8 sm:mb-10 text-black dark:text-white">
              Faris<br />
              Fathur<br />
              Rohman
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3} viewOnly={false}>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed mb-12 font-light">
              Frontend developer focused on clean, structured, and timeless digital experiences. Avoiding the noise, amplifying the clarity.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} fullWidth viewOnly={false}>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
              <Magnetic strength={0.3}>
                <a href="#projects" className="relative px-6 sm:px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center gap-3 group w-full sm:w-auto justify-center overflow-hidden border border-black dark:border-white">
                  <span className="absolute inset-0 w-full h-full bg-gray-800 dark:bg-gray-200 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] z-0"></span>
                  <span className="relative z-10 flex items-center gap-3">
                    Selected Work
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a href="#contact" className="relative px-6 sm:px-8 py-4 bg-transparent text-black dark:text-white font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center gap-3 group w-full sm:w-auto justify-center overflow-hidden border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white">
                  <span className="absolute inset-0 w-full h-full bg-black dark:bg-white scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] z-0"></span>
                  <span className="relative z-10 flex items-center gap-3 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                    Get in Touch
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                </a>
              </Magnetic>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} direction="left" className="w-full xl:w-[400px] shrink-0" viewOnly={false}>
          <div className="w-full h-full aspect-square sm:aspect-video xl:aspect-[4/5] border border-black/20 dark:border-white/20 flex flex-col bg-white dark:bg-black transition-colors duration-500">
            <div className="flex-1 p-6 lg:p-8 border-b border-black/20 dark:border-white/20 flex flex-col justify-end hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300">
              <span className="text-xs uppercase tracking-widest text-gray-500 mb-1 lg:mb-2 block">Base of Operations</span>
              <span className="text-xl lg:text-2xl font-bold uppercase tracking-tight text-black dark:text-white">Indonesia</span>
              <span className="text-gray-500 dark:text-gray-400 font-mono text-xs lg:text-sm mt-1">GMT+7 [WIB]</span>
            </div>
            
              <div className="flex-1 p-6 lg:p-8 border-b border-black/20 dark:border-white/20 flex flex-col justify-end hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300">
                <span className="text-xs uppercase tracking-widest text-gray-500 mb-1 lg:mb-2 block">Current Focus</span>
                <span className="text-xl lg:text-2xl font-bold uppercase tracking-tight leading-tight text-black dark:text-white">
                  Design Systems<br />& Seamless UI
                </span>
              </div>

              <div className="flex-1 p-6 lg:p-8 border-b border-black/20 dark:border-white/20 flex flex-col justify-end hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300">
                <span className="text-xs uppercase tracking-widest text-gray-500 mb-1 lg:mb-2 block">Core Strengths</span>
                <ul className="text-gray-600 dark:text-gray-400 text-sm font-mono leading-relaxed">
                  <li>{">"} COMPONENT ARCHITECTURE</li>
                  <li>{">"} TYPOGRAPHIC HIERARCHY</li>
                  <li>{">"} PERFORMATIVE RENDER</li>
                </ul>
              </div>

              <div className="h-20 lg:h-24 bg-black dark:bg-white text-white dark:text-black px-6 lg:px-8 flex items-center justify-between group hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors duration-300 cursor-default">
                <span className="text-sm font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform duration-300">System Status</span>
                <span className="flex items-center gap-2 lg:gap-3 text-sm font-bold uppercase tracking-widest">
                  <span className="w-2.5 h-2.5 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] dark:shadow-[0_0_10px_rgba(34,197,94,1)] animate-pulse"></span>
                  Online
                </span>
              </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
