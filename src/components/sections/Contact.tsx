import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import Section from "../layout/Section";
import { personalInfo } from "../../data/personal";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" number="05." className="mb-24 lg:mb-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="max-w-lg text-body leading-relaxed">
          I'm always interested in hearing about new projects and opportunities.
          Whether you're looking for a developer to bring your ideas to life,
          want to collaborate on something creative, or just want to connect
          — feel free to reach out.
        </p>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
          {/* Gradient border CTA */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="gradient-border inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-accent-light transition-all hover:text-heading hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
          >
            <Mail size={16} />
            Say Hello
          </a>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-body hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="text-body hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-muted">
          <MapPin size={14} />
          <span>{personalInfo.location}</span>
        </div>
      </motion.div>
    </Section>
  );
}
