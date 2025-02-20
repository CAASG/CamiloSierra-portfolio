import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock } from 'lucide-react';
import { ProjectType } from '../types/project';

type ProjectCardProps = {
  project: ProjectType;
  onClick: () => void;
  isComingSoon?: boolean;
};

export default function ProjectCard({ project, onClick, isComingSoon }: ProjectCardProps) {
  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        onClick={onClick}
        className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
              isComingSoon ? 'filter grayscale' : ''
            }`}
          />
        </div>
        {isComingSoon ? (
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-transparent">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4">
              <Lock className="w-12 h-12" />
              <div className="text-2xl font-bold">Coming Soon</div>
              <div className="px-4 py-2 bg-white/20 rounded-full text-sm">
                Próximamente Disponible
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-t from-violet-900/90 via-teal-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-200 mb-4 line-clamp-2">{project.description}</p>
              <div className="flex items-center space-x-4">
                <a
                  href={project.github}
                  onClick={(e) => e.stopPropagation()}
                  className="text-white hover:text-teal-400 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.live}
                  onClick={(e) => e.stopPropagation()}
                  className="text-white hover:text-teal-400 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
                <button className="ml-auto px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white text-sm transition-colors">
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
      
      {/* Project Title Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white/80 to-teal-50/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-teal-100"
      >
        <h3 className="text-lg font-semibold text-gray-900 text-center">{project.title}</h3>
        <p className="text-sm text-gray-600 text-center mt-1">{project.description}</p>
      </motion.div>
    </div>
  );
}