import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Play } from "lucide-react";
import Section from "../layout/Section";
import { projects } from "../../data/projects";
import type { ProjectMedia } from "../../types";

const spracheImages = import.meta.glob("../../assets/images/projects/sprache/*.png", { eager: true, query: "?url", import: "default" });
const headphonesImages = import.meta.glob("../../assets/images/projects/headphones/*.png", { eager: true, query: "?url", import: "default" });

const projectImageMap: Record<string, string[]> = {
  spracheapp: Object.values(spracheImages) as string[],
  "webflow-headphones": Object.values(headphonesImages) as string[],
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function MediaGallery({ media }: { media: ProjectMedia[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const current = media[activeIndex];

  return (
    <div>
      {/* Main viewer */}
      <div className="relative rounded-lg overflow-hidden bg-dark/60 border border-edge/20">
        {current.type === "video" ? (
          <video
            key={current.src}
            src={current.src}
            poster={current.poster}
            controls
            preload="none"
            playsInline
            className="w-full aspect-video object-contain"
          />
        ) : (
          <img
            src={current.src}
            alt={current.label || "Project screenshot"}
            className="w-full aspect-video object-contain cursor-pointer hover:opacity-90 transition-opacity"
            loading="lazy"
            onClick={() => setLightboxSrc(current.src)}
          />
        )}
      </div>

      {/* Tabs */}
      {media.length > 1 && (
        <div className="mt-2 flex gap-1.5 flex-wrap">
          {media.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition-all ${
                activeIndex === i
                  ? "bg-accent/20 text-accent-light border border-accent/30"
                  : "bg-surface/40 text-muted border border-edge/20 hover:text-body hover:border-edge/40"
              }`}
            >
              {item.type === "video" && <Play size={10} className="shrink-0" />}
              {item.label || (item.type === "video" ? "Video" : `Image ${i + 1}`)}
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 backdrop-blur-sm cursor-pointer p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <img
            src={lightboxSrc}
            alt="Expanded view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightboxSrc(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" title="Projects" number="03.">
      {/* Featured projects */}
      <motion.div
        className="space-y-10 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {featuredProjects.map((project) => {
          const localImages = projectImageMap[project.id];
          const thumbnail = localImages?.[0];
          const mainLink = project.live || project.github;
          const hasMedia = project.media && project.media.length > 0;

          return (
            <motion.div key={project.id} className="group" variants={itemVariants}>
              <div className="card-accent rounded-xl overflow-hidden">
                {/* Media area */}
                {hasMedia ? (
                  <div className="p-4 pb-0">
                    <MediaGallery media={project.media!} />
                  </div>
                ) : thumbnail ? (
                  <div className="p-4 pb-0">
                    <div className="relative rounded-lg overflow-hidden bg-dark/60 border border-edge/20">
                      <img
                        src={thumbnail}
                        alt={`${project.title} preview`}
                        className="w-full aspect-video object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ) : null}

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
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

                      {project.client && (
                        <p className="mt-0.5 text-xs text-accent/70">
                          Client: {project.client}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0 mt-1">
                      <span className="text-xs text-muted">{project.year}</span>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer noopener" className="text-muted hover:text-accent transition-colors" aria-label="GitHub">
                          <Github size={15} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer noopener" className="text-muted hover:text-accent transition-colors" aria-label="Live">
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

      {/* Other projects */}
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
            <motion.div key={project.id} className="group mb-4" variants={itemVariants}>
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
