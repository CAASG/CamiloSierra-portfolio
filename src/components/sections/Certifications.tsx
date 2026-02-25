import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Section from "../layout/Section";
import { certifications } from "../../data/certifications";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Certifications() {
  return (
    <Section id="certifications">
      <h2 className="section-heading mb-8 lg:hidden">Certifications</h2>

      <motion.ol
        className="group/list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {certifications.map((cert) => (
          <motion.li key={cert.id} className="mb-8" variants={itemVariants}>
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(139,92,246,0.1)] lg:group-hover:drop-shadow-lg" />

              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2">
                {cert.date}
              </header>

              <div className="z-10 sm:col-span-6">
                <h3 className="flex items-center gap-2 font-medium leading-snug text-heading group-hover:text-accent-light transition-colors">
                  <Award size={16} className="shrink-0 text-accent/70" />
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-body">
                  {cert.issuer}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
