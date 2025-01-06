import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import type { ProjectType } from '../types/project';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: ProjectType) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-pink-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          These projects focus more on AI, Image Recognition, Cloud usage and tools such as AWS and Azure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}