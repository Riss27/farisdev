"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { supabase } from "../supabaseClient";
import FadeIn from "./FadeIn";

const fallbackProjects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "Personal web presence with focus on typography and structure.",
    image_url: "https://placehold.co/800x600/111111/dddddd?text=Portfolio",
    live_demo_url: "#",
    github_url: "#",
    tags: ["Next.js", "Tailwind", "Design"],
  },
  {
    id: 2,
    name: "E-Commerce System",
    description: "Robust and secure online shopping framework.",
    image_url: "https://placehold.co/800x600/111111/dddddd?text=Commerce",
    live_demo_url: "#",
    github_url: "#",
    tags: ["React", "Supabase", "UI API"],
  },
  {
    id: 3,
    name: "Internal Dashboard",
    description: "Data processing interface for administrative tasks.",
    image_url: "https://placehold.co/800x600/111111/dddddd?text=Dashboard",
    live_demo_url: "#",
    github_url: "#",
    tags: ["JavaScript", "Analytics", "UX"],
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProjects() {
      try {
        const { data, error } = await supabase.from("projects").select("*");
        if (error) throw error;
        setProjects(data?.length > 0 ? data : fallbackProjects);
      } catch {
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    }
    getProjects();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-black/10 dark:border-white/10 transition-colors duration-500">
      <div className="flex flex-col gap-12 sm:gap-16">
        <div className="flex justify-between items-end border-b border-black/10 dark:border-white/10 pb-4 sm:pb-8 relative overflow-hidden">
          <div className="absolute -bottom-4 lg:-bottom-8 left-0 md:left-1/4 opacity-[0.03] select-none pointer-events-none leading-none whitespace-nowrap text-black dark:text-white">
            <span className="text-[6rem] sm:text-[10rem] md:text-[12rem] lg:text-[15rem] font-black tracking-tighter">CASES</span>
          </div>
          <FadeIn direction="right">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase z-10 relative text-black dark:text-white">
              Work
            </h2>
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
            <span className="text-gray-500 uppercase tracking-widest text-xs hidden sm:block z-10 relative">
              Selected Repositories
            </span>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-px bg-black/10 dark:bg-white/20 border border-black/10 dark:border-white/20">
          {(loading ? fallbackProjects : projects).map((project, idx) => (
            <FadeIn key={project.id || idx} delay={idx * 0.15} className="h-full">
              <div className="h-full bg-white dark:bg-black flex flex-col group">
                <div className="relative aspect-[4/3] border-b border-black/10 dark:border-white/20 overflow-hidden bg-gray-100 dark:bg-zinc-900">
                <Image
                  src={project.image_url}
                  alt={project.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 dark:group-hover:grayscale-0 transition-all duration-700 ease-out hover:scale-105"
                />
              </div>
              
              <div className="p-6 sm:p-8 md:p-10 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight uppercase leading-none text-black dark:text-white">{project.name}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 font-light mb-8 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs border border-black/20 dark:border-white/20 uppercase tracking-widest text-gray-700 dark:text-gray-300 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 sm:gap-6 mt-auto">
                  <a href={project.live_demo_url} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden uppercase tracking-widest text-[10px] sm:text-xs font-bold text-white bg-black dark:bg-white dark:text-black px-5 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 group transition-transform hover:-translate-y-1">
                    <span className="absolute inset-0 bg-gray-800 dark:bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] z-0"></span>
                    <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white dark:bg-black block group-hover:scale-[1.5] transition-transform duration-300"></span>
                      Live Preview
                    </span>
                  </a>
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden uppercase tracking-widest text-[10px] sm:text-xs font-bold text-black dark:text-white border border-black/20 dark:border-white/20 px-5 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 group hover:border-black dark:hover:border-white transition-all duration-300">
                    <span className="absolute inset-0 bg-black dark:bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] z-0"></span>
                    <span className="relative z-10 flex items-center gap-2 sm:gap-3 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-transparent border border-black dark:border-white block group-hover:bg-white dark:group-hover:bg-black group-hover:border-white dark:group-hover:border-black transition-all duration-300"></span>
                      Source Code
                    </span>
                  </a>
                </div>
              </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
