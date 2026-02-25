import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "../layout/Section";
import { experiences } from "../../data/experience";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
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

export default function Experience() {
  return (
    <Section id="experience" title="Experience" number="02.">
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="group relative pl-8 pb-12 last:pb-0"
            variants={itemVariants}
          >
            {/* Timeline line */}
            {index < experiences.length - 1 && (
              <div className="timeline-line" />
            )}

            {/* Timeline dot */}
            <div className="timeline-dot" />

            {/* Card */}
            <div className="card-accent rounded-lg p-5 -mt-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-medium leading-snug text-heading">
                  <span className="inline-flex items-baseline font-medium leading-tight text-heading group-hover:text-accent-light transition-colors text-base">
                    {exp.title} · {exp.company}
                    <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </span>
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wide text-muted whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="mt-1 text-xs text-muted">{exp.location}</p>

              <ul className="mt-3 space-y-1.5 text-sm leading-normal">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-body">{item}</li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                {exp.technologies.map((tech) => (
                  <li key={tech}>
                    <span className="tech-badge">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-8 pl-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a
          className="group inline-flex items-center font-medium leading-tight text-heading hover:text-accent-light transition-colors"
          href="https://www.linkedin.com/in/camilo-sierra-b23b51259/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="border-b border-transparent pb-px group-hover:border-accent-light transition-colors">
            View Full Résumé
          </span>
          <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </motion.div>
    </Section>
  );
}
