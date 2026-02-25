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
    <Section id="certifications" title="Certifications" number="04.">
      <motion.div
        className="grid gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {certifications.map((cert) => (
          <motion.div key={cert.id} className="group" variants={itemVariants}>
            <div className="card-accent rounded-lg p-4 flex items-start gap-4">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <Award size={18} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm leading-snug text-heading group-hover:text-accent-light transition-colors">
                  {cert.title}
                </h3>
                <div className="mt-1 flex items-center gap-2 text-xs text-muted">
                  <span>{cert.issuer}</span>
                  <span className="text-edge">·</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
