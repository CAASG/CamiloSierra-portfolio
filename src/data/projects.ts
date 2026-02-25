import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "spracheapp",
    title: "SpracheApp",
    description:
      "An innovative platform designed for German learning through AI and spaced repetition algorithms, adapting content to each student's progress.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "REST API"],
    featured: true,
    category: "frontend",
    year: 2024,
  },
  {
    id: "sisl-pro-unab",
    title: "Integral System for Engineering Projects — UNAB",
    description:
      "Comprehensive software for the evaluation and monitoring of engineering projects in academic environments, strengthening curriculum management.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com/ing-fabiansuarez/sistema-integral-proyectos-ingenieria-unab.git",
    featured: true,
    category: "fullstack",
    year: 2024,
  },
  {
    id: "techvault",
    title: "TechVault eCommerce",
    description:
      "Modern eCommerce platform for electronics with product browsing, detail views, shopping cart, and Firebase integration for real-time data.",
    technologies: ["React", "Vite", "Firebase", "CSS", "Responsive Design"],
    github: "https://github.com/CAASG/Mini-eCommerce-Project.git",
    live: "https://techvault-ecommerce.netlify.app",
    featured: true,
    category: "frontend",
    year: 2025,
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
    id: "azure-iot-farm",
    title: "Poultry Farm — Azure IoT Hub",
    description:
      "Implementation of 15 sensors connected to Azure IoT Hub for real-time environmental monitoring, optimizing poultry welfare and egg production.",
    technologies: ["Azure IoT Hub", "Python", "Azure Cosmos DB", "Azure Functions"],
    github: "https://parcial.azureiotcentral.com/dashboards/dtmi%3AhomepageView%3Ajozgjm6jr",
    featured: false,
    category: "cloud-iot",
    year: 2024,
  },
  {
    id: "webflow-headphones",
    title: "Headphones Landing Page",
    description:
      "Clean and responsive landing page for a headphones brand, built with Webflow and designed in Figma with custom interactions and animations.",
    technologies: ["Webflow", "Figma", "CSS", "Animations"],
    live: "https://preview.webflow.com/preview/headphones-fec2ab?utm_medium=preview_link&utm_source=designer&utm_content=headphones-fec2ab&preview=d4e29e2f71f935107040e5ecd2a7618b&workflow=preview",
    featured: false,
    category: "design",
    year: 2025,
  },
];
