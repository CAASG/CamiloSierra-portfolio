import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, navItems } from "../../data/personal";
import { useActiveSection } from "../../hooks/useActiveSection";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export default function Sidebar() {
  const activeSection = useActiveSection(sectionIds);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        {/* Name & Role */}
        <motion.h1
          className="text-4xl font-display font-bold tracking-tight text-heading sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/">{personalInfo.name}</a>
        </motion.h1>

        <motion.h2
          className="mt-3 text-lg font-medium tracking-tight text-accent-light sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {personalInfo.role}
        </motion.h2>

        <motion.p
          className="mt-4 max-w-xs leading-normal text-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {personalInfo.summary.split(".")[0]}.
        </motion.p>

        {/* Navigation */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <motion.ul
            className="mt-16 w-max"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={item.href}>
                  <a
                    className="group flex items-center py-3"
                    href={item.href}
                  >
                    <span
                      className={`mr-4 h-px transition-all duration-300 group-hover:w-16 group-hover:bg-heading group-focus-visible:w-16 group-focus-visible:bg-heading ${
                        isActive
                          ? "w-16 bg-heading"
                          : "w-8 bg-muted"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-heading group-focus-visible:text-heading ${
                        isActive ? "text-heading" : "text-muted"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </motion.ul>
        </nav>
      </div>

      {/* Social Links */}
      <motion.ul
        className="ml-1 mt-8 flex items-center gap-5"
        aria-label="Social media"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <li>
          <a
            className="block text-body hover:text-accent transition-colors duration-200"
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
        </li>
        <li>
          <a
            className="block text-body hover:text-accent transition-colors duration-200"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </li>
        <li>
          <a
            className="block text-body hover:text-accent transition-colors duration-200"
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </li>
      </motion.ul>
    </header>
  );
}
