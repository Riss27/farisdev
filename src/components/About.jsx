import { GraduationCap, Briefcase, Sparkles, CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";

const experiences = [
  {
    role: "Fullstack Engineering Intern",
    company: "PT Saptaloka Digital",
    period: "2025",
    type: "Industry Internship",
    description: "Engineered scalable web services and modernized enterprise interface modules.",
    highlights: [
      "Architected modular RESTful APIs using Express.js with Sequelize ORM and MySQL schemas.",
      "Integrated authenticated client-side dashboards using React and responsive Tailwind CSS.",
      "Implemented database migrations and optimized query execution across relational tables.",
    ],
  },
];

const education = [
  {
    degree: "Undergraduate in Informatics Engineering",
    institution: "Universitas Pasundan",
    period: "2022 — Present",
    type: "Bachelor of Computer Science",
    description: "Specializing in software engineering methodologies, web system architectures, and mobile applications.",
    highlights: [
      "Led client engineering for capstone platforms: Cosmic Bunny (Next.js/TS) and MangTodo (Android Kotlin).",
      "Actively researched modern frontend performance, strict type validation, and accessible UI engineering.",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 border-b border-forest/15 overflow-hidden transition-colors duration-500">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4 relative">
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] uppercase lg:sticky lg:top-12 z-10 text-forest mb-2 lg:mb-0">
              Career & Bio
            </h2>
          </FadeIn>
          <div className="hidden lg:block absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none transform -rotate-90 origin-top-right mt-16 md:mt-24 leading-none whitespace-nowrap text-forest">
            <span className="text-[4.5rem] sm:text-[6rem] lg:text-[8.5rem] font-black tracking-[-0.04em]">PROFILE</span>
          </div>
        </div>

        <div className="lg:col-span-8">
          <FadeIn delay={0.2}>
            <div className="text-lg sm:text-2xl md:text-3xl leading-relaxed sm:leading-10 font-medium text-forest max-w-3xl mb-12 sm:mb-16 tracking-[-0.02em]">
              I’m <span className="font-semibold text-forest">Muhammad Faris Fathur Rohman</span>, a web developer based in Bandung, Indonesia. I design and build production-grade web applications focusing on performance, clean architecture, and intuitive user experiences.
            </div>
          </FadeIn>

          {/* Work Experience */}
          <div className="mb-12 sm:mb-16">
            <FadeIn delay={0.25}>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-forest/15">
                <div className="w-8 h-8 rounded-xl bg-forest/[0.05] border border-forest/15 flex items-center justify-center text-pink shrink-0">
                  <Briefcase size={16} aria-hidden="true" />
                </div>
                <h3 className="text-xs uppercase tracking-[0.24em] font-bold text-forest">Work Experience</h3>
              </div>
            </FadeIn>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <FadeIn key={idx} delay={0.3 + idx * 0.1}>
                  <div className="rounded-3xl border border-forest/15 bg-cream-surface/90 p-6 sm:p-8 shadow-[0_12px_36px_rgba(22,46,32,0.04)] hover:border-forest/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-xl sm:text-2xl font-semibold text-forest tracking-tight">{exp.role}</h4>
                        <span className="text-sm font-medium text-forest/80">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-forest/[0.05] border border-forest/15 text-forest font-semibold">{exp.type}</span>
                        <span className="text-xs font-mono text-forest-muted">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-forest/75 text-sm font-light leading-relaxed mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-forest/85 leading-relaxed font-normal">
                          <CheckCircle2 size={15} className="text-pink shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Education & Leadership */}
          <div className="mb-12 sm:mb-16">
            <FadeIn delay={0.35}>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-forest/15">
                <div className="w-8 h-8 rounded-xl bg-forest/[0.05] border border-forest/15 flex items-center justify-center text-pink shrink-0">
                  <GraduationCap size={16} aria-hidden="true" />
                </div>
                <h3 className="text-xs uppercase tracking-[0.24em] font-bold text-forest">Education & Background</h3>
              </div>
            </FadeIn>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <FadeIn key={idx} delay={0.4 + idx * 0.1}>
                  <div className="rounded-3xl border border-forest/15 bg-cream-surface/90 p-6 sm:p-8 shadow-[0_12px_36px_rgba(22,46,32,0.04)] hover:border-forest/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-xl sm:text-2xl font-semibold text-forest tracking-tight">{edu.degree}</h4>
                        <span className="text-sm font-medium text-forest/80">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-forest/[0.05] border border-forest/15 text-forest font-semibold">{edu.type}</span>
                        <span className="text-xs font-mono text-forest-muted">{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-forest/75 text-sm font-light leading-relaxed mb-4">{edu.description}</p>
                    <ul className="space-y-2">
                      {edu.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-forest/85 leading-relaxed font-normal">
                          <CheckCircle2 size={15} className="text-pink shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Engineering Value Proposition */}
          <FadeIn delay={0.45}>
            <div className="rounded-2xl border border-forest/15 bg-forest/[0.03] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-forest border border-forest flex items-center justify-center text-pink shrink-0">
                  <Sparkles size={16} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-forest">Core Engineering Tenet</h4>
                  <p className="text-xs text-forest-muted mt-0.5">Reliable architectural foundations, strict type contracts, and zero-bloat client bundles.</p>
                </div>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-forest/70 font-semibold shrink-0">Static & Performant</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
