import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Section from "../layout/Section";
import { certifications } from "../../data/certifications";

export default function Certifications() {
  return (
    <Section id="certifications">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading mb-8 lg:hidden">Certifications</h2>

        <div>
          <ol className="group/list">
            {certifications.map((cert) => (
              <li key={cert.id} className="mb-8">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  {/* Hover highlight */}
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                  {/* Date */}
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                    {cert.date}
                  </header>

                  {/* Content */}
                  <div className="z-10 sm:col-span-6">
                    <h3 className="flex items-center gap-2 font-medium leading-snug text-slate-200 group-hover:text-teal-300 transition-colors">
                      <Award size={16} className="shrink-0 text-teal-300/70" />
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {cert.issuer}
                    </p>
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
