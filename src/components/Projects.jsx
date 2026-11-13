"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, ChevronUp, Layers } from "lucide-react";
import FadeIn from "./FadeIn";
import Magnetic from "./Magnetic";

const projects = [
  {
    id: 1,
    name: "Cosmic Bunny",
    role: "Frontend Architect & Developer",
    type: "Web Application",
    description:
      "Interactive gaming e-commerce platform featuring cosmic visual aesthetics, dynamic client interactions with Motion, and centralized state handling.",
    impact:
      "Delivered responsive visual components, game catalog browsing, and seamless client-side state handling with strict schema validation.",
    image_url: "/images/projects/cosmic-bunny.png",
    live_demo_url: "https://cosmic-bunny.rezaa.me",
    github_url: "https://github.com/Riss27/cosmic-bunny",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Motion"],
    caseStudy: {
      challenge:
        "Managing frequent multi-item shopping cart state updates and dynamic category filters without triggering wasteful re-renders on low-spec client devices.",
      decisions:
        "Adopted Zustand for atomic client-state slices over bulky Redux, combined with Tailwind CSS v4 design tokens and Next.js SSR for immediate initial paint.",
      outcome:
        "Zero layout shift during state changes, sub-second route transitions, and robust TypeScript contracts across catalog models.",
    },
  },
  {
    id: 2,
    name: "FE MangTodo",
    role: "Android Client Developer",
    type: "Android Application",
    description:
      "Mobile task and workflow management client developed in Android Kotlin, prioritizing clean MVVM architecture, offline storage with Room, and structured API consumption.",
    impact:
      "Implemented responsive mobile screen flows, task progress tracking, and category filtering.",
    image_url: "/images/projects/mangtodo.png",
    live_demo_url: "#",
    github_url: "https://github.com/Riss27/FE-MangTodo",
    tags: ["Android", "Kotlin", "Gradle", "MVVM", "Room", "Retrofit"],
    caseStudy: {
      challenge:
        "Providing seamless offline-first capability so users can create, edit, and organize tasks without internet connection, with reliable sync once reconnected.",
      decisions:
        "Structured with MVVM + Repository pattern, Room SQLite database as the single source of truth, and Retrofit with coroutines for background HTTP operations.",
      outcome:
        "Immediate local UI responsiveness, background persistence without UI thread locks, and strict architectural separation of concerns.",
    },
  },
  {
    id: 3,
    name: "Internship Saptaloka",
    role: "Fullstack Engineering Intern",
    type: "Enterprise Internship",
    description:
      "Enterprise modules engineered during internship at PT Saptaloka Digital, architected with Express.js REST APIs, relational MySQL schemas via Sequelize, and React frontends.",
    impact:
      "Authored production database migrations, modular API routing, and integrated authenticated dashboard views.",
    image_url: "/images/projects/saptaloka.png",
    live_demo_url: "#",
    github_url: "https://github.com/Riss27/internship-learning",
    tags: ["Express.js", "MySQL", "Sequelize", "React", "Tailwind CSS"],
    caseStudy: {
      challenge:
        "Designing relational database entities and secure REST endpoints to handle administrative modules with role-based access constraints.",
      decisions:
        "Used Sequelize ORM migrations for version-controlled DB schemas, structured middleware chains for JWT authentication, and built reusable React dashboards.",
      outcome:
        "Reliable database migration history, clean modular route controllers, and authenticated internal enterprise views.",
    },
  },
  {
    id: 4,
    name: "Neon Pong",
    role: "Interactive Game Developer",
    type: "Canvas Game",
    description:
      "Retro Pong arcade game featuring glowing canvas neon aesthetics, smart AI opponent logic, adaptive keyboard and touch controls, and zero external game engine dependencies.",
    impact:
      "Delivers smooth 60fps physics rendering purely through vanilla HTML5 Canvas and modern ESNext.",
    image_url: "/images/projects/neon-pong.png",
    live_demo_url: "https://riss27.github.io/neon-pong/",
    github_url: "https://github.com/Riss27/neon-pong",
    tags: ["JavaScript", "HTML5 Canvas", "Audio API", "Game Dev"],
    caseStudy: {
      challenge:
        "Achieving constant 60fps physics updates, collision detection, and glowing visual rendering without inflating bundle size with heavy game engines.",
      decisions:
        "Direct requestAnimationFrame loop utilizing vector arithmetic, custom canvas double-buffering logic, and Web Audio API synthesizer for retro sound effects.",
      outcome:
        "Zero third-party library footprint (<15KB total asset size) and consistent 60fps performance across desktop and mobile browsers.",
    },
  },
];

const caseStudySections = [
  { key: "challenge", label: "Problem & Context" },
  { key: "decisions", label: "Architectural Decisions" },
  { key: "outcome", label: "Measurable Outcome" },
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="projects" className="section-base">
      <div className="flex flex-col gap-8 sm:gap-12">
        <div className="flex justify-between items-end gap-6 border-b border-forest/15 pb-4 sm:pb-6">
          <FadeIn direction="right">
            <h2 className="heading-section">Work</h2>
          </FadeIn>
          <FadeIn direction="left" delay={0.08}>
            <span className="text-forest-muted uppercase tracking-[0.24em] text-[10px] hidden sm:block font-mono">
              Selected repositories
            </span>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const isExpanded = expandedId === project.id;

            return (
              <FadeIn key={project.id} delay={idx * 0.08} className="h-full">
                <article className="card-interactive group h-full flex flex-col overflow-hidden">
                  <div className="relative aspect-video overflow-hidden bg-cream-card">
                    <Image
                      src={project.image_url}
                      alt={`${project.name} interface preview`}
                      fill
                      sizes="(max-width: 1280px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-4 left-4 tag-pink">{project.type}</span>
                  </div>

                  <div className="p-5 sm:p-7 flex flex-col flex-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-forest-muted font-mono">
                      {project.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] uppercase text-forest mt-1 mb-3">
                      {project.name}
                    </h3>

                    <p className="text-forest/75 text-sm leading-6 mb-5">{project.description}</p>

                    <div className="rounded-2xl bg-forest/[0.04] border border-forest/12 p-4 mb-5">
                      <span className="heading-sub">Key metric</span>
                      <p className="text-xs sm:text-sm text-forest leading-relaxed">{project.impact}</p>
                    </div>

                    {project.caseStudy && (
                      <div className="mb-5 rounded-2xl border border-forest/12 bg-forest/[0.02] overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setExpandedId(isExpanded ? null : project.id)}
                          aria-expanded={isExpanded}
                          aria-controls={`case-${project.id}`}
                          className="w-full px-4 py-3 flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-forest hover:bg-forest/[0.05] transition-colors duration-200"
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="icon-badge-sm w-7 h-7 rounded-lg">
                              <Layers size={13} aria-hidden="true" />
                            </span>
                            {isExpanded ? "Hide case study" : "Architecture case study"}
                          </span>
                          {isExpanded ? (
                            <ChevronUp size={16} aria-hidden="true" />
                          ) : (
                            <ChevronDown size={16} aria-hidden="true" />
                          )}
                        </button>

                        {isExpanded && (
                          <div
                            id={`case-${project.id}`}
                            className="animate-slide-up-fade border-t border-forest/10 px-4 py-4 space-y-3.5"
                          >
                            {caseStudySections.map(({ key, label }) => (
                              <div key={key}>
                                <span className="heading-sub">{label}</span>
                                <p className="text-xs leading-relaxed text-forest/80">
                                  {project.caseStudy[key]}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-forest">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2.5 mt-auto">
                      {project.live_demo_url !== "#" && (
                        <Magnetic strength={0.15}>
                          <a
                            href={project.live_demo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                          >
                            View live
                            <ArrowUpRight size={13} aria-hidden="true" />
                          </a>
                        </Magnetic>
                      )}
                      <Magnetic strength={0.15}>
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                        >
                          Inspect code
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                      </Magnetic>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
