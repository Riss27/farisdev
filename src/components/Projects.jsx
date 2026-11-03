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
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-black/10 dark:border-white/10 transition-colors duration-500">
      <div className="flex flex-col gap-8 sm:gap-16">
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
          {projects.map((project, idx) => (
            <FadeIn key={project.id || idx} delay={idx * 0.15} className="h-full">
              <div className="h-full rounded-[28px] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/50 flex flex-col group overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-zinc-900">
                  <Image src={project.image_url} alt={project.name} fill sizes="(max-width: 1280px) 100vw, 50vw" className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out hover:scale-105" />
                </div>

                <div className="p-5 sm:p-8 flex flex-col flex-1">
                  <div className="flex flex-col mb-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-gray-500 dark:text-gray-400 font-medium">{project.role}</span>
                      <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-medium">{project.type}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] uppercase leading-none text-black dark:text-white">{project.name}</h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 font-light mb-5 sm:mb-6 text-sm leading-6 sm:leading-7">{project.description}</p>

                  <div className="rounded-xl sm:rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 p-3.5 sm:p-4 mb-6 sm:mb-8">
                    <span className="text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-gray-500 dark:text-gray-400 block mb-1 font-semibold">Key Metric</span>
                    <p className="text-xs sm:text-sm font-medium text-black dark:text-white">“{project.impact}”</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8 sm:mb-10">
                    {project.tags?.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-[10px] sm:text-xs rounded-full bg-black/[0.04] dark:bg-white/[0.06] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-gray-500">
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
                        className="rounded-full uppercase tracking-[0.2em] text-[10px] font-semibold text-white bg-black dark:bg-white dark:text-black px-5 py-3 flex items-center justify-center gap-2 group transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
                      >
                        <span className="relative z-10 flex items-center gap-2">View Live</span>
                      </a>
                    )}
                    {project.github_url && project.github_url !== "#" && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full uppercase tracking-[0.2em] text-[10px] font-semibold text-black dark:text-white border border-black/10 dark:border-white/10 px-5 py-3 flex items-center justify-center gap-2 group transition-all duration-300"
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
