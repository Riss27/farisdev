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
    description:
      "Specializing in software engineering methodologies, web system architectures, and mobile applications.",
    highlights: [
      "Led client engineering for capstone platforms: Cosmic Bunny (Next.js/TS) and MangTodo (Android Kotlin).",
      "Researched frontend performance, strict type validation, and accessible UI engineering.",
    ],
  },
];

function TimelineCard({ title, subtitle, type, period, description, highlights, delay }) {
  return (
    <FadeIn delay={delay} animationType="scale">
      <article className="card-interactive p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
          <div>
            <h4 className="text-lg sm:text-xl font-semibold tracking-tight text-forest">{title}</h4>
            <span className="text-sm text-forest/75">{subtitle}</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="tag-forest">{type}</span>
            <span className="text-[11px] font-mono text-forest-muted tabular-nums">{period}</span>
          </div>
        </div>
        <p className="text-forest/80 text-sm leading-relaxed mb-4">{description}</p>
        <ul className="space-y-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-forest/80 leading-relaxed">
              <CheckCircle2 size={15} className="text-pink shrink-0 mt-0.5" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </FadeIn>
  );
}

export default function About() {
  return (
    <section id="about" className="section-base">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4">
          <FadeIn direction="right">
            <h2 className="heading-section lg:sticky lg:top-12">Career &amp; Bio</h2>
          </FadeIn>
        </div>

        <div className="lg:col-span-8">
          <FadeIn delay={0.08}>
            <p className="text-lg sm:text-2xl md:text-3xl leading-relaxed font-medium text-forest max-w-3xl mb-12 sm:mb-16 tracking-[-0.02em]">
              I&apos;m <span className="font-semibold">Muhammad Faris Fathur Rohman</span>, a web
              developer based in Bandung, Indonesia. I design and build production-grade web
              applications focused on performance, clean architecture, and intuitive user
              experiences.
            </p>
          </FadeIn>

          <div className="mb-12 sm:mb-16">
            <FadeIn delay={0.12} direction="right">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-forest/15">
                <span className="icon-badge-sm">
                  <Briefcase size={15} aria-hidden="true" />
                </span>
                <h3 className="heading-sub mb-0">Work Experience</h3>
              </div>
            </FadeIn>

            <div className="space-y-5">
              {experiences.map((exp, idx) => (
                <TimelineCard key={exp.company} {...exp} delay={0.16 + idx * 0.08} />
              ))}
            </div>
          </div>

          <div className="mb-12 sm:mb-16">
            <FadeIn delay={0.12} direction="right">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-forest/15">
                <span className="icon-badge-sm">
                  <GraduationCap size={15} aria-hidden="true" />
                </span>
                <h3 className="heading-sub mb-0">Education &amp; Background</h3>
              </div>
            </FadeIn>

            <div className="space-y-5">
              {education.map((edu, idx) => (
                <TimelineCard key={edu.institution} {...edu} delay={0.16 + idx * 0.08} />
              ))}
            </div>
          </div>

          <FadeIn delay={0.2} animationType="scale">
            <div className="card-base p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <span className="icon-badge">
                  <Sparkles size={16} aria-hidden="true" />
                </span>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-forest">
                    Core engineering tenet
                  </h4>
                  <p className="text-xs text-forest/75 mt-0.5 leading-relaxed">
                    Reliable architectural foundations, strict type contracts, and zero-bloat client
                    bundles.
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-forest-muted shrink-0">
                Static &amp; performant
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
