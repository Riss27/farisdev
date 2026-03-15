"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Magnetic from "./Magnetic";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { href: "#hero", label: "Index", id: "hero" },
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Stack", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  // Intersection Observer to trace scrolling and highlight active menu
  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile Menu Button & Theme Toggle */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center pointer-events-none">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="pointer-events-auto bg-black dark:bg-white text-white dark:text-black p-3 rounded-none shadow-lg focus:outline-none flex items-center justify-center transition-transform hover:scale-105"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="pointer-events-auto bg-white dark:bg-black p-1 shadow-lg border border-black/10 dark:border-white/10">
          <ThemeToggle />
        </div>
      </div>

      <nav
        className={`fixed top-0 left-0 h-full w-full md:w-64 lg:w-80 bg-white dark:bg-black flex flex-col justify-between p-8 z-40 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] border-r border-black/10 dark:border-white/10 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          <div className="flex justify-between items-start mb-24">
            <a href="#hero" className="text-3xl font-bold tracking-tighter uppercase inline-block hover:text-gray-600 dark:hover:text-gray-300 transition-colors dark:text-white">
              FarisDev.
            </a>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </div>
          
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Magnetic strength={0.25} className="w-full">
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`uppercase tracking-widest text-sm font-semibold transition-all duration-300 flex items-center gap-4 py-2 ${
                      activeSection === link.id 
                        ? "text-black dark:text-white translate-x-2" 
                        : "text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white hover:translate-x-1"
                    }`}
                  >
                    {/* Dynamic Line indicator */}
                    <span 
                      className={`h-px bg-black dark:bg-white transition-all duration-500 ease-out ${
                        activeSection === link.id ? "w-8 opacity-100" : "w-0 opacity-0"
                      }`}
                    ></span>
                    {link.label}
                  </a>
                </Magnetic>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-xs text-gray-500 uppercase tracking-widest leading-relaxed">
          <div className="w-8 h-px bg-black/20 dark:bg-white/20 mb-6"></div>
          Available for work
          <br />
          <a href="mailto:rohmanfaris11@gmail.com" className="text-black dark:text-white hover:underline mt-2 inline-block lowercase tracking-normal">
            rohmanfaris11@gmail.com
          </a>
        </div>
      </nav>
      
      {/* Mobile overlay backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
