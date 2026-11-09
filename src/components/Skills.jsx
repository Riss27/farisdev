"use client";

import FadeIn from "./FadeIn";

const skillsData = [
  { id: 1, category: "Frontend Core", name: "Next.js & React", description: "Building scalable, performant App Router architectures with Server Components and SSR." },
  { id: 2, category: "Type System", name: "TypeScript", description: "Enforcing end-to-end type safety, generic interfaces, and resilient runtime predictability." },
  { id: 3, category: "Styling & Motion", name: "Tailwind CSS & Motion", description: "Crafting fluid responsive layouts, micro-interactions, and accessible design token systems." },
  { id: 4, category: "Mobile Client", name: "Android & Kotlin", description: "Developing native mobile apps using MVVM patterns, Room persistence, and Retrofit HTTP client." },
  { id: 5, category: "Backend & Database", name: "Express.js & MySQL", description: "Architecting modular RESTful APIs, Sequelize ORM migrations, and relational schemas." },
  { id: 6, category: "Tooling & Workflow", name: "Git, Vercel & Playwright", description: "Maintaining clean semantic commit history, CI/CD automated deployment, and browser testing." },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-forest/15 overflow-hidden transition-colors duration-500">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-8">
        <div className="lg:col-span-4 relative">
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase lg:sticky lg:top-12 z-10 text-forest mb-2 lg:mb-0">
              Stack
            </h2>
          </FadeIn>
          {/* Decorative Background Text */}
          <div className="hidden lg:block absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none transform -rotate-90 origin-top-right mt-16 md:mt-32 leading-none whitespace-nowrap text-forest">
            <span className="text-[4rem] sm:text-[6rem] lg:text-[9rem] font-black tracking-tighter">TECH</span>
            <br />
            <span className="text-[4rem] sm:text-[6rem] lg:text-[9rem] font-black tracking-tighter">CORE</span>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ul className="flex flex-col border-t border-forest/15">
            {skillsData.map((skill, index) => (
              <FadeIn key={skill.id || index} delay={index * 0.1}>
                <li 
                  className="py-4 sm:py-6 border-b border-forest/15 grid md:grid-cols-2 gap-2 sm:gap-4 group hover:bg-forest/[0.03] transition-colors duration-200 px-2 sm:px-4 cursor-default"
                >
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-forest-muted mb-1 font-bold">{skill.category}</span>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter uppercase text-forest/60 group-hover:text-forest transition-all duration-300 break-words group-hover:translate-x-2 flex items-center gap-4">
                      <span className="w-0 h-0 group-hover:w-2 group-hover:h-2 bg-pink block transition-all duration-300"></span>
                      {skill.name}
                    </div>
                  </div>
                  {skill.description && (
                    <div className="text-forest-muted font-light group-hover:text-forest transition-colors duration-200 flex items-center text-xs md:text-sm leading-relaxed">
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
