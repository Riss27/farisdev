"use client";

import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Mail, Cpu } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [time, setTime] = useState("");

  const navLinks = [
    { href: "#hero", label: "01. Index", id: "hero" },
    { href: "#about", label: "02. About", id: "about" },
    { href: "#skills", label: "03. Stack", id: "skills" },
    { href: "#projects", label: "04. Work", id: "projects" },
    { href: "#code", label: "05. Spotlight", id: "code" },
    { href: "#contact", label: "06. Contact", id: "contact" },
  ];

  useEffect(() => {
    // System Clock
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour12: false }));
    }, 1000);

    // Section Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 w-full z-50 px-4 py-3 sm:px-6 flex justify-between items-center bg-cream/90 backdrop-blur-xl border-b border-forest/15 transition-colors duration-300">
        <a href="#hero" className="text-lg font-bold tracking-tighter uppercase text-forest flex items-center gap-2">
          <Cpu size={16} className="text-pink" aria-hidden="true" />
          FarisDev.
        </a>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-forest rounded-lg hover:bg-forest/5 focus-visible:outline-2 focus-visible:outline-forest transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 h-full w-[85%] max-w-xs md:w-64 lg:w-80 bg-cream/95 md:bg-cream/80 backdrop-blur-2xl flex flex-col justify-between pt-20 pb-8 px-6 sm:p-8 md:p-8 lg:p-10 z-40 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] border-r border-forest/15 overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          <div className="flex flex-col gap-6 md:gap-10 mb-8 md:mb-16">
            <div className="hidden md:flex items-center justify-between">
              <a href="#hero" className="text-2xl font-black tracking-tighter uppercase text-forest group focus-visible:outline-2 focus-visible:outline-forest">
                <span className="block text-xs uppercase tracking-widest text-forest-muted font-mono mb-1">Portfolio</span>
                FarisDev<span className="text-pink">.</span>
              </a>
            </div>

            <div className="bg-forest/[0.04] border-l-2 border-forest p-3.5 sm:p-4 font-mono">
              <span className="text-[10px] sm:text-xs uppercase text-forest-muted block mb-1">Local_Time [GMT+7]</span>
              <span className="text-base sm:text-lg font-bold text-forest tabular-nums">{time || "00:00:00"}</span>
            </div>
          </div>
          
          <ul className="flex flex-col gap-2 sm:gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative py-2.5 sm:py-3 group flex items-center justify-between transition-all duration-200 ${
                    activeSection === link.id 
                      ? "text-forest translate-x-2 font-bold" 
                      : "text-forest-muted hover:text-forest hover:translate-x-1.5"
                  }`}
                >
                  <span className="uppercase tracking-[0.2em] text-[11px] font-bold z-10">{link.label}</span>
                  <div className={`h-[2px] bg-pink transition-all duration-300 ${
                    activeSection === link.id ? "w-12 opacity-100" : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-90"
                  }`}></div>
                  {activeSection === link.id && (
                    <div className="absolute -left-6 md:-left-10 w-1.5 h-full bg-pink"></div>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 mt-8">
          <div className="flex gap-3 sm:gap-4">
            <a href="https://github.com/riss27" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 sm:p-3 rounded-lg border border-forest/20 text-forest bg-forest/[0.04] hover:bg-forest/[0.12] hover:border-forest/60 hover:text-pink hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-forest">
              <Github size={16} aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/faris-rohman-54873a1a6/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 sm:p-3 rounded-lg border border-forest/20 text-forest bg-forest/[0.04] hover:bg-forest/[0.12] hover:border-forest/60 hover:text-pink hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-forest">
              <Linkedin size={16} aria-hidden="true" />
            </a>
            <a href="mailto:rohmanfaris11@gmail.com" aria-label="Email" className="p-2.5 sm:p-3 rounded-lg border border-forest/20 text-forest bg-forest/[0.04] hover:bg-forest/[0.12] hover:border-forest/60 hover:text-pink hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-forest">
              <Mail size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="text-[9px] text-forest-muted uppercase tracking-[0.3em] font-bold flex flex-col gap-2">
            <div className="flex justify-between items-center border-b border-forest/10 pb-2">
              <span>Status</span>
              <span className="text-pink flex items-center gap-1 font-semibold">
                <span className="w-1.5 h-1.5 bg-pink rounded-full animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.5)]"></span>
                Available
              </span>
            </div>
            <span>© {new Date().getFullYear()} Faris Fathur Rohman</span>
          </div>
        </div>
      </nav>
      
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-forest/40 backdrop-blur-md z-30 md:hidden"
          role="button"
          tabIndex={0}
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setIsMenuOpen(false); }}
        />
      )}
    </>
  );
}
