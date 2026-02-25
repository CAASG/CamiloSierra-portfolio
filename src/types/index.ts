export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
  summary: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  category: ProjectCategory;
  year: number;
}

export type ProjectCategory =
  | "fullstack"
  | "frontend"
  | "ai-ml"
  | "cloud-iot"
  | "design";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
