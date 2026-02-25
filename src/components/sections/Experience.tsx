import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "../layout/Section";
import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading mb-8 lg:hidden">Experience</h2>

        <div>
          <ol className="group/list">
            {experiences.map((exp) => (
              <li key={exp.id} className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  {/* Hover highlight background */}
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                  {/* Date column */}
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label={exp.period}
                  >
                    {exp.period}
                  </header>

                  {/* Content column */}
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 transition-colors text-base">
                        {exp.title} · {exp.company}
                        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </span>
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">{exp.location}</p>

                    <ul className="mt-2 space-y-1.5 text-sm leading-normal">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-slate-400">
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tech badges */}
                    <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                      {exp.technologies.map((tech) => (
                        <li key={tech}>
                          <span className="tech-badge">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Resume link */}
          <div className="mt-4">
            <a
              className="group inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 transition-colors"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="border-b border-transparent pb-px group-hover:border-teal-300 transition-colors">
                View Full Résumé
              </span>
              <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
