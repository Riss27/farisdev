import { MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const socials = [
    { label: "GitHub", href: "https://github.com/Riss27", handle: "Riss27" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/faris-rohman-54873a1a6/", handle: "muhammad-faris" },
    { label: "Instagram", href: "https://www.instagram.com/farisftr_27/", handle: "@farisftr_27" },
  ];

  return (
    <footer className="px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-20 lg:py-24 border-t border-forest/15 overflow-hidden transition-colors duration-500">
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-32 mb-10 sm:mb-16 lg:mb-24">
        {/* Base of Operations */}
        <div>
          <div className="uppercase tracking-widest text-[10px] sm:text-xs text-forest-muted mb-6 sm:mb-8 font-bold">Base of Operations</div>
          <div className="flex items-start gap-4 text-forest group cursor-default">
            <MapPin size={24} className="transition-transform duration-300 group-hover:-translate-y-1 text-forest-muted shrink-0 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl uppercase tracking-widest font-bold mb-2">Indonesia, ID</span>
              <span className="text-sm font-mono text-forest-muted">GMT+7 / WIB</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <div className="uppercase tracking-widest text-[10px] sm:text-xs text-forest-muted mb-6 sm:mb-8 font-bold">Digital Presence</div>
          <div className="flex flex-col">
            {socials.map((social) => (
              <a 
                key={social.label} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group border-b border-forest/15 hover:border-forest/30 hover:bg-forest/[0.03] px-2 sm:px-3 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between text-base sm:text-lg font-medium text-forest/75 hover:text-forest transition-all duration-200 gap-2 sm:gap-0 first:border-t rounded-xl"
              >
                <span className="flex items-center gap-4">
                  <span className="group-hover:translate-x-2 transition-transform duration-200 font-semibold">{social.label}</span>
                  <ArrowUpRight size={18} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-pink hidden sm:block" aria-hidden="true" />
                </span>
                <span className="text-forest-muted group-hover:text-forest transition-colors uppercase tracking-widest text-[10px] sm:text-xs font-mono">{social.handle}</span>
              </a>
            ))}
          </div>
        </div>
        {/* Built With */}
        <div className="lg:col-span-2 pt-16 border-t border-forest/10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8">
          <div className="flex flex-col gap-4">
            <div className="uppercase tracking-widest text-[10px] text-forest-muted font-bold">Stack Core</div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-forest-muted font-mono text-xs uppercase">
              <span>Next.js 16</span>
              <span>React 19</span>
              <span>Tailwind CSS 4</span>
              <span>Local-First</span>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end">
            <span className="text-[10px] uppercase tracking-[0.2em] text-forest-muted mb-2 font-bold">Architecture</span>
            <span className="text-xl font-bold uppercase tracking-tighter text-forest">Static & Accessible</span>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-forest/15 flex flex-col md:flex-row justify-between items-start md:items-center text-xs uppercase tracking-[0.2em] text-forest-muted font-medium gap-8">
        <div className="flex items-center gap-6">
          <span className="text-forest font-black tracking-tighter text-lg">FARISDEV<span className="text-pink">.</span></span>
          <span className="hidden sm:inline text-forest/20">/</span>
          <span>© {new Date().getFullYear()} Faris Fathur Rohman</span>
        </div>
        
        <div className="text-left md:text-right flex items-center gap-8">
          <div className="flex flex-col text-[11px] normal-case tracking-normal text-forest-muted">
             <span>Crafted with Next.js & Tailwind</span>
          </div>
          <div className="hidden md:block w-12 h-px bg-forest/20"></div>
          <a href="#hero" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-forest/15 text-forest hover:border-pink hover:text-pink hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 transition-all duration-200 uppercase font-mono text-xs">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
