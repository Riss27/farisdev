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
    <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-black/10 dark:border-white/10 overflow-hidden transition-colors duration-500">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-8">
        <div className="lg:col-span-4 relative">
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase lg:sticky lg:top-12 z-10 text-black dark:text-white mb-2 lg:mb-0">
              Stack
            </h2>
          </FadeIn>
          {/* Decorative Background Text */}
          <div className="hidden lg:block absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none transform -rotate-90 origin-top-right mt-16 md:mt-32 leading-none whitespace-nowrap text-black dark:text-white">
            <span className="text-[4rem] sm:text-[6rem] lg:text-[9rem] font-black tracking-tighter">TECH</span>
            <br />
            <span className="text-[4rem] sm:text-[6rem] lg:text-[9rem] font-black tracking-tighter">CORE</span>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ul className="flex flex-col border-t border-black/10 dark:border-white/10">
            {skillsData.map((skill, index) => (
              <FadeIn key={skill.id || index} delay={index * 0.1}>
                <li 
                  className="py-4 sm:py-6 border-b border-black/10 dark:border-white/10 grid md:grid-cols-2 gap-2 sm:gap-4 group hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-200 px-2 sm:px-4 cursor-default"
                >
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-gray-500 mb-1 font-bold">{skill.category}</span>
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
