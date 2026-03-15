"use client";

import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import FadeIn from "./FadeIn";

const fallbackSkills = [
  { id: 1, name: "React", description: "UI Library for dynamic and reactive interfaces." },
  { id: 2, name: "Next.js", description: "Production framework with SSR, SSG, and robust routing." },
  { id: 3, name: "TypeScript", description: "Strict syntactical superset of JavaScript." },
  { id: 4, name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI building." },
  { id: 5, name: "Supabase", description: "Open source Firebase alternative with PostgreSQL." },
  { id: 6, name: "Git", description: "Distributed version control system." },
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase sticky top-12 z-10 text-black dark:text-white">
              Stack
            </h2>
          </FadeIn>
          {/* Decorative Background Text */}
          <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none transform -rotate-90 origin-top-right mt-16 md:mt-32 leading-none whitespace-nowrap text-black dark:text-white">
            <span className="text-[6rem] sm:text-[9rem] lg:text-[12rem] font-black tracking-tighter">TECH</span>
            <br />
            <span className="text-[6rem] sm:text-[9rem] lg:text-[12rem] font-black tracking-tighter">CORE</span>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ul className="flex flex-col border-t border-black/10 dark:border-white/10">
            {(loading ? fallbackSkills : skillsData).map((skill, index) => (
              <FadeIn key={skill.id || index} delay={index * 0.1}>
                <li 
                  className="py-6 sm:py-8 md:py-10 border-b border-black/10 dark:border-white/10 grid md:grid-cols-2 gap-2 sm:gap-4 group hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200 px-4 sm:px-6 -mx-4 sm:-mx-6 cursor-default"
                >
                  <div className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter uppercase text-gray-400 group-hover:text-black dark:group-hover:text-white transition-all duration-300 break-words group-hover:translate-x-2 flex items-center gap-4">
                    <span className="w-0 h-0 group-hover:w-3 group-hover:h-3 bg-black dark:bg-white block transition-all duration-300"></span>
                    {skill.name}
                  </div>
                  {skill.description && (
                    <div className="text-gray-500 font-light group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200 flex items-center text-sm md:text-base">
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
