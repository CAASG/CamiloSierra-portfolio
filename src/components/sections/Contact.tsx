import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Section from "../layout/Section";
import { personalInfo } from "../../data/personal";

export default function Contact() {
  return (
    <Section id="contact" className="mb-24 lg:mb-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading mb-4">Get In Touch</h2>

        <p className="max-w-md text-body leading-relaxed">
          I'm currently open to new opportunities and collaborations.
          Whether you have a project in mind, a question, or just want to say hi —
          my inbox is always open.
        </p>

        <a
          href={`mailto:${personalInfo.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-6 py-3 text-sm font-medium text-accent-light transition-all hover:bg-accent/20 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
        >
          <Mail size={16} />
          Say Hello
        </a>
      </motion.div>
    </Section>
  );
}
