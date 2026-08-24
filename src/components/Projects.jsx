"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { supabase } from "../supabaseClient";
import FadeIn from "./FadeIn";

const fallbackProjects = [
  {
    id: 1,
    name: "Lumina POS System",
    role: "Lead Frontend Developer",
    description: "Cloud-based point of sale for small businesses that synchronizes data in real-time across multiple devices and locations.",
    impact: "Reduced data synchronization latency by 45% using optimized real-time listeners and caching strategies.",
    image_url: "https://images.unsplash.com/photo-1556742049-04ff4f476c28?auto=format&fit=crop&q=80&w=800",
    live_demo_url: "#",
    github_url: "#",
    tags: ["React", "Supabase", "TanStack Query", "Tailwind CSS"],
  },
  {
    id: 2,
    name: "EduFlow LMS",
    role: "Fullstack Developer",
    description: "Comprehensive learning management system designed for tutoring centers with interactive lesson builders and student tracking.",
    impact: "Scaled to support 500+ active students with a 99.9% uptime record during peak examination seasons.",
    image_url: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    live_demo_url: "#",
    github_url: "#",
    tags: ["Next.js", "PostgreSQL", "Framer Motion", "AWS"],
  },
  {
    id: 3,
    name: "NexHealth Dashboard",
    role: "UI/UX & Frontend Engineer",
    description: "Analytical dashboard for healthcare providers to visualize patient demographics and treatment outcomes efficiently.",
    impact: "Shortened doctor-decision time by 30% through intuitive data visualization and streamlined navigation.",
    image_url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    live_demo_url: "#",
    github_url: "#",
    tags: ["TypeScript", "D3.js", "React", "Node.js"],
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
            <span className="text-[4rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-black tracking-[-0.04em]">CASES</span>
          </div>
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] uppercase z-10 relative text-black dark:text-white">Work</h2>
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
            <span className="text-gray-500 uppercase tracking-[0.24em] text-[10px] hidden sm:block z-10 relative">Selected Repositories</span>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {(loading ? fallbackProjects : projects).map((project, idx) => (
            <FadeIn key={project.id || idx} delay={idx * 0.15} className="h-full">
              <div className="h-full rounded-[28px] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/50 flex flex-col group overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-zinc-900">
                  <Image src={project.image_url} alt={project.name} fill sizes="(max-width: 1280px) 100vw, 50vw" className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out hover:scale-105" />
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex flex-col mb-4">
                    <span className="text-[9px] uppercase tracking-[0.24em] text-gray-400 mb-1">{project.role}</span>
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] uppercase leading-none text-black dark:text-white">{project.name}</h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 font-light mb-6 text-sm leading-7">{project.description}</p>

                  <div className="rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 p-4 mb-8">
                    <span className="text-[9px] uppercase tracking-[0.24em] text-gray-400 block mb-1 font-semibold">Key Metric</span>
                    <p className="text-sm font-medium text-black dark:text-white">“{project.impact}”</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags?.map((tag) => (
                      <span key={tag} className="px-2.5 py-1.5 text-[8px] rounded-full bg-black/[0.04] dark:bg-white/[0.06] uppercase tracking-[0.24em] text-gray-500">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.live_demo_url && project.live_demo_url !== "#" && (
                      <a
                        href={project.live_demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full uppercase tracking-[0.2em] text-[10px] font-semibold text-white bg-black dark:bg-white dark:text-black px-5 py-3 flex items-center gap-2 group transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
                      >
                        <span className="relative z-10 flex items-center gap-2">View Live</span>
                      </a>
                    )}
                    {project.github_url && project.github_url !== "#" && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full uppercase tracking-[0.2em] text-[10px] font-semibold text-black dark:text-white border border-black/10 dark:border-white/10 px-5 py-3 flex items-center gap-2 group transition-all duration-300"
                      >
                        <span className="relative z-10 flex items-center gap-2">Inspeksi Code</span>
                      </a>
                    )}
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
