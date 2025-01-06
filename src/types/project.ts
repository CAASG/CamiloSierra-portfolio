export type ProjectType = {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  github: string;
  live: string;
  features: string[];
  techStack: Array<{ name: string; icon: string; }>;
};