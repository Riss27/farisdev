"use client";

import { MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const socials = [
    { label: "GitHub", href: "https://github.com/Riss27", handle: "Riss27" },
    { label: "LinkedIn", href: "https://linkedin.com", handle: "muhammad-faris" },
    { label: "Instagram", href: "https://www.instagram.com/farisftr_27/", handle: "@farisftr_27" },
  ];

  return (
    <footer className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-24 border-t border-black/10 dark:border-white/10 overflow-hidden transition-colors duration-500">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 mb-16 lg:mb-24">
        {/* Base of Operations */}
        <div>
          <div className="uppercase tracking-widest text-[10px] sm:text-xs text-gray-500 mb-6 sm:mb-8 font-bold">Base of Operations</div>
          <div className="flex items-start gap-4 text-black dark:text-white group cursor-default">
            <MapPin size={24} className="transition-transform duration-300 group-hover:-translate-y-1 text-gray-400 shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl uppercase tracking-widest font-bold mb-2">Indonesia, ID</span>
              <span className="text-sm font-mono text-gray-500 dark:text-gray-400">GMT+7 / WIB</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <div className="uppercase tracking-widest text-[10px] sm:text-xs text-gray-500 mb-6 sm:mb-8 font-bold">Digital Presence</div>
          <div className="flex flex-col">
            {socials.map((social) => (
              <a 
                key={social.label} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group border-b border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-colors duration-300 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between text-base sm:text-lg font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white gap-2 sm:gap-0 first:border-t"
              >
                <span className="flex items-center gap-4">
                  <span className="group-hover:translate-x-2 transition-transform duration-300">{social.label}</span>
                  <ArrowUpRight size={18} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-black dark:text-white hidden sm:block" />
                </span>
                <span className="text-gray-500 dark:text-gray-600 group-hover:text-black dark:group-hover:text-gray-400 transition-colors uppercase tracking-widest text-[10px] sm:text-xs">{social.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-black dark:text-white font-bold tracking-tighter text-sm sm:text-base">FARISDEV.</span>
          <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</span>
        </div>
        
        <div className="text-left md:text-right flex flex-col gap-2">
          <span className="text-black dark:text-white">Designed for clarity.</span>
          <span>Built with structure.</span>
        </div>
      </div>
    </footer>
  );
}
