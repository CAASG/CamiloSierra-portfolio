import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "riskhub",
    title: "RiskHub — Regional Risk Management Platform",
    description:
      "A modular digital platform serving as a regional hub for risk management, integrating tools, models, and resources. Features intelligent search, multilingual support (EN/ES), community forums, and an admin panel for content management.",
    media: [
      { type: "video", src: "/videos/riskhub/RiskMain.mp4", label: "Public Flow", poster: "/videos/riskhub/Logo_BID.png" },
      { type: "image", src: "/videos/riskhub/RiskAdmin.png", label: "Admin Dashboard" },
      { type: "image", src: "/videos/riskhub/RiskAdmin1.png", label: "Resource Management" },
      { type: "image", src: "/videos/riskhub/RiskAdmin2.png", label: "Category Filters" },
      { type: "image", src: "/videos/riskhub/RiskAdmin3.png", label: "User Management" },
      { type: "image", src: "/videos/riskhub/RiskAdmin4.png", label: "Content Editor" },
    ],
    technologies: ["Next.js", "TypeScript", "AWS", "PostgreSQL", "Prisma", "i18n"],
    featured: true,
    category: "fullstack",
    year: 2025,
    client: "Inter-American Development Bank (IDB)",
  },
  {
    id: "aura",
    title: "Aura — Epilepsy Monitoring Platform",
    description:
      "Web platform and PWA for epilepsy patients to log seizure episodes and medication. Doctors can request patient access for clinical analysis, with PDF report generation and medication reminders.",
    media: [
      { type: "video", src: "/videos/aura/PacienteAura.mp4", label: "Patient Module", poster: "/videos/aura/neurologico (2).png" },
      { type: "video", src: "/videos/aura/MedicoAura.mp4", label: "Doctor Module", poster: "/videos/aura/neurologico (2).png" },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PWA", "PostgreSQL", "Prisma"],
    featured: true,
    category: "fullstack",
    year: 2025,
    client: "Instituto Neurológico de Colombia",
  },
  {
    id: "mayflyventures",
    title: "Mayfly Ventures — Venture Studio Website",
    description:
      "Corporate website for a Melbourne-based venture studio that builds AI and software ventures. Features smooth scroll-driven animations, responsive design, and a modern visual identity showcasing their portfolio and process.",
    media: [
      { type: "video", src: "/videos/mayflyventures/mayflyventures.mp4", label: "Site Walkthrough", poster: "/videos/mayflyventures/mayfly_ventures_logo.jpg" },
    ],
    technologies: ["Webflow", "Figma", "CSS", "Animations", "Responsive Design"],
    live: "https://www.mayflyventures.com",
    featured: true,
    category: "design",
    year: 2025,
    client: "Mayfly Ventures",
  },
  {
    id: "spracheapp",
    title: "SpracheApp",
    description:
      "An innovative platform designed for German learning through AI and spaced repetition algorithms, adapting content to each student's progress.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "REST API"],
    live: "https://spracheapp.com",
    featured: true,
    category: "frontend",
    year: 2024,
  },
  {
    id: "face-detection",
    title: "Face Detection Model",
    description:
      "Facial recognition system to automate classroom attendance, detecting individual and group faces in real time using computer vision.",
    technologies: ["Python", "Streamlit", "OpenCV", "TensorFlow"],
    github: "https://github.com/CAASG/ModeloDeteccionRostros.git",
    live: "https://modelodeteccionrostros-xjr8u8nhbamhwefkmheri4.streamlit.app",
    featured: false,
    category: "ai-ml",
    year: 2024,
  },
  {
    id: "webflow-headphones",
    title: "UX/UI Exploration — Webflow Landing",
    description:
      "Exploratory UX/UI design project built in Webflow to practice layout composition, micro-interactions, and scroll-driven animations with a product-focused landing page.",
    technologies: ["Webflow", "Figma", "CSS", "Animations"],
    live: "https://preview.webflow.com/preview/headphones-fec2ab?utm_medium=preview_link&utm_source=designer&utm_content=headphones-fec2ab&preview=d4e29e2f71f935107040e5ecd2a7618b&workflow=preview",
    featured: false,
    category: "design",
    year: 2025,
  },
];
