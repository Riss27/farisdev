"use client";

import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import FadeIn from "./FadeIn";

const fallbackSkills = [
  { id: 1, category: "Architecture", name: "Next.js & React", description: "Building scalable, performant, and SEO-optimized frontend architectures." },
  { id: 2, category: "Logic", name: "TypeScript", description: "Ensuring system stability with strict type-safety and modern ESNext patterns." },
  { id: 3, category: "Interface", name: "Tailwind & CSS", description: "Crafting fluid, responsive, and high-fidelity user interfaces with precision." },
  { id: 4, category: "Data", name: "Supabase & SQL", description: "Designing robust database schemas and managing real-time data orchestration." },
  { id: 5, category: "Infrastructure", name: "Git & CI/CD", description: "Maintaining clean code history and automated deployment workflows." },
];

export default function Skills() {
  const [skillsData, setSkillsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSkills() {
      try {
        const { data, error } = await supabase.from("skills").select("*");
        if (error) throw error;
        setSkillsData(data?.length > 0 ? data : fallbackSkills);
      } catch {
        setSkillsData(fallbackSkills);
      } finally {
        setLoading(false);
      }
    }
    getSkills();
  }, []);

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-black/10 dark:border-white/10 overflow-hidden transition-colors duration-500">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
        <div className="lg:col-span-4 relative">
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase sticky top-20 md:top-12 z-10 text-black dark:text-white">
              Stack
            </h2>
          </FadeIn>
          {/* Decorative Background Text */}
          <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none transform -rotate-90 origin-top-right mt-16 md:mt-32 leading-none whitespace-nowrap text-black dark:text-white">
            <span className="text-[4rem] sm:text-[6rem] lg:text-[9rem] font-black tracking-tighter">TECH</span>
            <br />
            <span className="text-[4rem] sm:text-[6rem] lg:text-[9rem] font-black tracking-tighter">CORE</span>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ul className="flex flex-col border-t border-black/10 dark:border-white/10">
            {(loading ? fallbackSkills : skillsData).map((skill, index) => (
              <FadeIn key={skill.id || index} delay={index * 0.1}>
                <li 
                  className="py-4 sm:py-6 border-b border-black/10 dark:border-white/10 grid md:grid-cols-2 gap-2 sm:gap-4 group hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-200 px-4 sm:px-6 -mx-4 sm:-mx-6 cursor-default"
                >
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-widest text-gray-500 mb-1 font-bold">{skill.category}</span>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter uppercase text-gray-400 group-hover:text-black dark:group-hover:text-white transition-all duration-300 break-words group-hover:translate-x-2 flex items-center gap-4">
                      <span className="w-0 h-0 group-hover:w-2 group-hover:h-2 bg-black dark:bg-white block transition-all duration-300"></span>
                      {skill.name}
                    </div>
                  </div>
                  {skill.description && (
                    <div className="text-gray-500 font-light group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200 flex items-center text-xs md:text-sm leading-relaxed">
                      {skill.description}
                    </div>
                  )}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
