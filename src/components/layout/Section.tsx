import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  number: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, number, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 ${className}`}
      aria-label={title}
    >
      <motion.div
        className="mb-8 flex items-center gap-3"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <span className="font-mono text-sm text-accent">{number}</span>
        <span className="section-heading">{title}</span>
        <span className="h-px flex-1 bg-edge/40 max-w-[200px]" />
      </motion.div>

      {children}
    </section>
  );
}
