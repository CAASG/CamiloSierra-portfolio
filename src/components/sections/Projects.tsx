import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Section from "../layout/Section";
import { projects } from "../../data/projects";

const spracheImages = import.meta.glob("../../assets/images/projects/sprache/*.png", { eager: true, query: "?url", import: "default" });
const sislProImages = import.meta.glob("../../assets/images/projects/sisl-pro/*.png", { eager: true, query: "?url", import: "default" });
const techvaultImages = import.meta.glob("../../assets/images/projects/techvault/*.png", { eager: true, query: "?url", import: "default" });
const headphonesImages = import.meta.glob("../../assets/images/projects/headphones/*.png", { eager: true, query: "?url", import: "default" });

const projectImageMap: Record<string, string[]> = {
  spracheapp: Object.values(spracheImages) as string[],
  "sisl-pro-unab": Object.values(sislProImages) as string[],
  techvault: Object.values(techvaultImages) as string[],
  "webflow-headphones": Object.values(headphonesImages) as string[],
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" title="Projects" number="03.">
      {/* Bento grid for featured projects */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {featuredProjects.map((project, index) => {
          const images = projectImageMap[project.id];
          const thumbnail = images?.[0];
          const mainLink = project.live || project.github;
          const isLarge = index === 0;

          return (
            <motion.div
              key={project.id}
              className={`group ${isLarge ? "sm:col-span-2" : ""}`}
              variants={itemVariants}
            >
              <div className="card-accent rounded-xl overflow-hidden h-full">
                {/* Image */}
                {thumbnail && (
                  <div className={`overflow-hidden ${isLarge ? "aspect-[21/9]" : "aspect-video"}`}>
                    <img
                      src={thumbnail}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3>
                      {mainLink ? (
                        <a
                          href={mainLink}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-baseline font-medium leading-tight text-heading group-hover:text-accent-light transition-colors"
                        >
                          {project.title}
                          <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </a>
                      ) : (
                        <span className="font-medium text-heading">{project.title}</span>
                      )}
                    </h3>

                    <div className="flex items-center gap-2 shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-muted hover:text-accent transition-colors"
                          aria-label={`${project.title} GitHub`}
                        >
                          <Github size={15} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-muted hover:text-accent transition-colors"
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mt-2 text-sm leading-normal text-body">
                    {project.description}
                  </p>

                  <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <li key={tech}>
                        <span className="tech-badge">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Other projects — compact list */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted">
          Other Projects
        </h3>

        {otherProjects.map((project) => {
          const mainLink = project.live || project.github;

          return (
            <motion.div
              key={project.id}
              className="group mb-4"
              variants={itemVariants}
            >
              <div className="card-accent rounded-lg p-4">
                <div className="flex items-center justify-between gap-2">
                  <h4>
                    {mainLink ? (
                      <a
                        href={mainLink}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-baseline font-medium text-sm leading-tight text-heading group-hover:text-accent-light transition-colors"
                      >
                        {project.title}
                        <ArrowUpRight className="ml-1 inline-block h-3.5 w-3.5 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    ) : (
                      <span className="font-medium text-sm text-heading">{project.title}</span>
                    )}
                  </h4>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-muted">{project.year}</span>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer noopener" className="text-muted hover:text-accent transition-colors" aria-label="GitHub">
                        <Github size={14} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer noopener" className="text-muted hover:text-accent transition-colors" aria-label="Live">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-1.5 text-sm text-body">{project.description}</p>

                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <li key={tech}>
                      <span className="tech-badge text-[11px] px-2 py-0.5">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
