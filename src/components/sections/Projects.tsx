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
    transition: { staggerChildren: 0.12 },
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
  const allProjects = [...featuredProjects, ...otherProjects];

  return (
    <Section id="projects">
      <h2 className="section-heading mb-8 lg:hidden">Projects</h2>

      <motion.ol
        className="group/list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {allProjects.map((project) => {
          const images = projectImageMap[project.id];
          const thumbnail = images?.[0];
          const mainLink = project.live || project.github;

          return (
            <motion.li key={project.id} className="mb-12" variants={itemVariants}>
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(139,92,246,0.1)] lg:group-hover:drop-shadow-lg" />

                {/* Thumbnail */}
                <div className="z-10 sm:order-2 sm:col-span-2 flex flex-col gap-2">
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt={`${project.title} preview`}
                      className="rounded border-2 border-edge/30 transition group-hover:border-accent/40 sm:max-w-[200px] aspect-video object-cover"
                      loading="lazy"
                      width={200}
                      height={112}
                    />
                  ) : (
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                        {project.year}
                      </span>
                      {project.featured && (
                        <span className="ml-1 inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent-light">
                          Featured
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="z-10 sm:order-1 sm:col-span-6">
                  <h3>
                    {mainLink ? (
                      <a
                        href={mainLink}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-baseline font-medium leading-tight text-heading group-hover:text-accent-light transition-colors text-base"
                      >
                        {project.title}
                        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    ) : (
                      <span className="inline-flex items-baseline font-medium leading-tight text-heading text-base">
                        {project.title}
                      </span>
                    )}
                  </h3>

                  {thumbnail && (
                    <div className="mt-1 flex items-center gap-2 text-xs text-muted">
                      <span className="font-semibold uppercase tracking-wide">{project.year}</span>
                      {project.featured && (
                        <span className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent-light">
                          Featured
                        </span>
                      )}
                    </div>
                  )}

                  <p className="mt-2 text-sm leading-normal text-body">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="mt-3 flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-body hover:text-accent transition-colors"
                        aria-label={`${project.title} GitHub`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-body hover:text-accent transition-colors"
                        aria-label={`${project.title} live demo`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <li key={tech}>
                        <span className="tech-badge">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          );
        })}
      </motion.ol>
    </Section>
  );
}
