"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const skills = [
  {
    id: 1,
    category: "Frontend Core",
    name: "Next.js & React",
    description: "App Router architectures with Server Components, streaming, and SSR.",
    level: 95,
  },
  {
    id: 2,
    category: "Type System",
    name: "TypeScript",
    description: "End-to-end type safety, generic interfaces, and predictable runtime contracts.",
    level: 90,
  },
  {
    id: 3,
    category: "Styling & Motion",
    name: "Tailwind CSS & Motion",
    description: "Responsive layout systems, design tokens, and accessible micro-interactions.",
    level: 92,
  },
  {
    id: 4,
    category: "Mobile Client",
    name: "Android & Kotlin",
    description: "Native apps using MVVM, Room persistence, and Retrofit HTTP clients.",
    level: 85,
  },
  {
    id: 5,
    category: "Backend & Database",
    name: "Express.js & MySQL",
    description: "Modular REST APIs, Sequelize migrations, and relational schema design.",
    level: 88,
  },
  {
    id: 6,
    category: "Tooling & Workflow",
    name: "Git, Vercel & Playwright",
    description: "Semantic history, CI/CD deploys, and browser-level regression testing.",
    level: 90,
  },
];

export default function Skills() {
  const [active, setActive] = useState(null);

  return (
    <section id="skills" className="section-base">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4">
          <FadeIn direction="right">
            <h2 className="heading-section lg:sticky lg:top-12">Stack</h2>
          </FadeIn>
        </div>

        <div className="lg:col-span-8">
          <FadeIn delay={0.08}>
            <ul className="border-t border-forest/15">
              {skills.map((skill, index) => (
                <li key={skill.id}>
                  <FadeIn delay={index * 0.06}>
                    <div
                      onMouseEnter={() => setActive(skill.id)}
                      onMouseLeave={() => setActive(null)}
                      className="relative grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-2 md:gap-8 py-5 px-3 sm:px-4 border-b border-forest/15 rounded-xl transition-colors duration-200 hover:bg-forest/[0.03]"
                    >
                      <div className="min-w-0">
                        <span className="heading-sub">{skill.category}</span>
                        <div className="flex items-center gap-2.5 text-lg sm:text-xl font-semibold uppercase tracking-tight text-forest">
                          <span
                            className={`w-1.5 h-1.5 rounded-full bg-pink transition-opacity duration-200 ${
                              active === skill.id ? "opacity-100" : "opacity-0"
                            }`}
                            aria-hidden="true"
                          />
                          {skill.name}
                        </div>
                      </div>

                      <div className="flex md:items-center gap-4">
                        <p className="text-xs sm:text-sm leading-relaxed text-forest/70 flex-1">
                          {skill.description}
                        </p>
                        <span className="hidden md:block text-[11px] font-mono text-forest-muted tabular-nums shrink-0">
                          {skill.level}%
                        </span>
                      </div>

                      <span
                        className="absolute bottom-0 left-0 h-px bg-pink transition-[width] duration-500 ease-out"
                        style={{ width: active === skill.id ? `${skill.level}%` : "0%" }}
                        aria-hidden="true"
                      />
                    </div>
                  </FadeIn>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
