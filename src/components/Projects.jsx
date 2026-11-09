"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

const projects = [
  {
    id: 1,
    name: "Cosmic Bunny",
    role: "Frontend Developer (Campus Project)",
    type: "Web Application",
    description: "Interactive gaming e-commerce platform featuring cosmic visual aesthetics, dynamic client interactions with Framer Motion, and global client-state management via Zustand.",
    impact: "Delivered responsive visual components, game catalog browsing, and seamless client-side state handling with strict schema validation.",
    image_url: "/images/projects/cosmic-bunny.png",
    live_demo_url: "https://cosmic-bunny.rezaa.me",
    github_url: "https://github.com/Riss27/cosmic-bunny",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Motion"],
  },
  {
    id: 2,
    name: "FE MangTodo",
    role: "Frontend Developer (Campus Project)",
    type: "Android Application",
    description: "Mobile task and workflow management client developed in Android Kotlin, prioritizing clean MVVM architecture, offline storage with Room, and structured API consumption.",
    impact: "Implemented responsive mobile screen flows, task progress tracking, and category filtering.",
    image_url: "/images/projects/mangtodo.png",
    live_demo_url: "#",
    github_url: "https://github.com/Riss27/FE-MangTodo",
    tags: ["Android", "Kotlin", "Gradle", "MVVM", "Room", "Retrofit"],
  },
  {
    id: 3,
    name: "Internship Saptaloka",
    role: "Fullstack Engineering Intern",
    type: "Enterprise Internship",
    description: "Enterprise modules engineered during internship at PT Saptaloka Digital, architected with Express.js REST APIs, relational MySQL schemas via Sequelize, and React Tailwind frontends.",
    impact: "Authored production database migrations, modular API routing, and integrated authenticated dashboard views.",
    image_url: "/images/projects/saptaloka.png",
    live_demo_url: "#",
    github_url: "https://github.com/Riss27/internship-learning",
    tags: ["Express.js", "MySQL", "Sequelize", "React", "Tailwind CSS"],
  },
  {
    id: 4,
    name: "Neon Pong Web Game",
    role: "Frontend Game Developer",
    type: "Interactive Canvas Game",
    description: "Retro Pong arcade game featuring glowing canvas neon aesthetics, smart AI opponent logic, adaptive keyboard/touch controls, and zero external game engine dependencies.",
    impact: "Delivers smooth 60fps physics rendering purely through vanilla HTML5 Canvas and modern ESNext.",
    image_url: "/images/projects/neon-pong.png",
    live_demo_url: "https://riss27.github.io/neon-pong/",
    github_url: "https://github.com/Riss27/neon-pong",
    tags: ["JavaScript", "HTML5 Canvas", "Audio API", "Game Dev"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-forest/15 transition-colors duration-500">
      <div className="flex flex-col gap-8 sm:gap-16">
        <div className="flex justify-between items-end border-b border-forest/15 pb-4 sm:pb-8 relative overflow-hidden">
          <div className="absolute -bottom-4 lg:-bottom-8 left-0 md:left-1/4 opacity-[0.03] select-none pointer-events-none leading-none whitespace-nowrap text-forest">
            <span className="text-[4rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-black tracking-[-0.04em]">CASES</span>
          </div>
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] uppercase z-10 relative text-forest">Work</h2>
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
            <span className="text-forest-muted uppercase tracking-[0.24em] text-[10px] hidden sm:block z-10 relative">Selected Repositories</span>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <FadeIn key={project.id || idx} delay={idx * 0.15} className="h-full">
              <div className="h-full rounded-[28px] border border-forest/15 bg-cream-surface/90 flex flex-col group overflow-hidden shadow-[0_16px_40px_rgba(22,46,32,0.04)] hover:border-forest/30 transition-colors backdrop-blur-xl">
                <div className="relative aspect-video overflow-hidden bg-cream-card">
                  <Image src={project.image_url} alt={project.name} fill sizes="(max-width: 1280px) 100vw, 50vw" className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out hover:scale-105" />
                </div>

                <div className="p-5 sm:p-8 flex flex-col flex-1">
                  <div className="flex flex-col mb-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-forest-muted font-medium">{project.role}</span>
                      <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pink/10 text-pink border border-pink/20 font-mono font-semibold">{project.type}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] uppercase leading-none text-forest">{project.name}</h3>
                  </div>

                  <p className="text-forest/75 font-light mb-5 sm:mb-6 text-sm leading-6 sm:leading-7">{project.description}</p>

                  <div className="rounded-xl sm:rounded-2xl bg-forest/[0.04] border border-forest/10 p-3.5 sm:p-4 mb-6 sm:mb-8">
                    <span className="text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-forest-muted block mb-1 font-semibold">Key Metric</span>
                    <p className="text-xs sm:text-sm font-medium text-forest">“{project.impact}”</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8 sm:mb-10">
                    {project.tags?.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-[10px] sm:text-xs rounded-full bg-forest/[0.05] border border-forest/10 uppercase tracking-[0.16em] sm:tracking-[0.2em] text-forest-muted font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-auto">
                    {project.live_demo_url && project.live_demo_url !== "#" && (
                      <a
                        href={project.live_demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full uppercase tracking-[0.2em] text-[10px] font-semibold text-cream bg-forest hover:bg-forest-light hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(22,46,32,0.25)] active:translate-y-0 active:scale-[0.98] px-5 py-3 flex items-center justify-center gap-2 group transition-all duration-200 shadow-[0_6px_18px_rgba(22,46,32,0.12)]"
                      >
                        <span className="relative z-10 flex items-center gap-1.5 text-cream">
                          View Live
                          <ArrowUpRight size={13} className="transition-all duration-200 group-hover:text-pink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-cream/70" aria-hidden="true" />
                        </span>
                      </a>
                    )}
                    {project.github_url && project.github_url !== "#" && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full uppercase tracking-[0.2em] text-[10px] font-semibold text-forest border border-forest/25 bg-forest/[0.04] hover:bg-forest/[0.12] hover:border-forest/60 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(22,46,32,0.08)] active:translate-y-0 active:scale-[0.98] px-5 py-3 flex items-center justify-center gap-2 group transition-all duration-200"
                      >
                        <span className="relative z-10 flex items-center gap-1.5 text-forest">
                          Inspeksi Code
                          <ArrowUpRight size={13} className="transition-all duration-200 group-hover:text-pink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-forest/70" aria-hidden="true" />
                        </span>
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
