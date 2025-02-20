import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { ProjectType } from '../types/project';

type ProjectModalProps = {
  project: ProjectType | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-20 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-gray-600 hover:bg-gray-100 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="flex-1 overflow-auto">
              {/* Image Gallery */}
              <div className="relative h-64 md:h-96 bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                  <div className="flex space-x-4">
                    <a
                      href= {project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>See demo</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                    >
                      <Github size={18} />
                      <span>See code</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Description</h3>
                  <p className="text-gray-600">{project.fullDescription}</p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="w-2 h-2 mt-2 bg-violet-500 rounded-full"></span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tech Stack</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.techStack.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg"
                      >
                        <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                        <span className="text-sm text-gray-600">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}