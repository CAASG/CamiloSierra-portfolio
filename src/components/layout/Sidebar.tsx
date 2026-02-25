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
        <h1 className="text-4xl font-display font-bold tracking-tight text-heading sm:text-5xl">
          <a href="/">{personalInfo.name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-accent-light sm:text-xl">
          {personalInfo.role}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-body">
          {personalInfo.summary.split(".")[0]}.
        </p>

        {/* Navigation */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
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
                      className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-heading group-focus-visible:w-16 group-focus-visible:bg-heading ${
                        isActive
                          ? "w-16 bg-heading"
                          : "w-8 bg-muted"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest group-hover:text-heading group-focus-visible:text-heading ${
                        isActive ? "text-heading" : "text-muted"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Social Links */}
      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        <li>
          <a
            className="block text-body hover:text-accent transition-colors"
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
            className="block text-body hover:text-accent transition-colors"
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
            className="block text-body hover:text-accent transition-colors"
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </li>
      </ul>
    </header>
  );
}
