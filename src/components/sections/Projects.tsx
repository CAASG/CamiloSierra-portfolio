import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Section from "../layout/Section";
import { projects } from "../../data/projects";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <Section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading mb-8 lg:hidden">Projects</h2>

        <div>
          <ol className="group/list">
            {[...featuredProjects, ...otherProjects].map((project) => (
              <li key={project.id} className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  {/* Hover highlight background */}
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                  {/* Image / Year column */}
                  <div className="z-10 sm:order-2 sm:col-span-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {project.year}
                    </span>
                    {project.featured && (
                      <span className="ml-2 inline-flex items-center rounded-full bg-teal-400/10 px-2 py-0.5 text-[10px] font-medium text-teal-300">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Content column */}
                  <div className="z-10 sm:order-1 sm:col-span-6">
                    <h3>
                      <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 transition-colors text-base">
                        {project.title}
                        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </span>
                    </h3>

                    <p className="mt-2 text-sm leading-normal text-slate-400">
                      {project.description}
                    </p>

                    {/* Links */}
                    <div className="mt-3 flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-slate-400 hover:text-slate-200 transition-colors"
                          aria-label={`${project.title} GitHub`}
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-slate-400 hover:text-slate-200 transition-colors"
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>

                    {/* Tech badges */}
                    <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                      {project.technologies.map((tech) => (
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
        </div>
      </motion.div>
    </Section>
  );
}
