import type { PersonalInfo, NavItem } from "../types";

export const personalInfo: PersonalInfo = {
  name: "Camilo Sierra",
  role: "Full Stack Developer",
  email: "camilosierra860@gmail.com",
  phone: "+57 304 524 1314",
  location: "Bucaramanga, Colombia",
  linkedin: "https://www.linkedin.com/in/camilo-sierra",
  github: "https://github.com/CAASG",
  portfolio: "https://camilo-sierra-portfolio.vercel.app",
  summary:
    "Full-stack developer with 2+ years of experience building scalable, cloud-based web applications. I work with Next.js, TypeScript, PostgreSQL, and AWS — delivering robust solutions with clean architecture, TDD practices, and CI/CD automation.",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
];
