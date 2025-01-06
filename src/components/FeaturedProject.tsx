import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Languages, Users, Brain, Clock, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import camilo1sprache from '../data/camilo1sprache.png'
import camilo2sprache from '../data/camilo2sprache.png'
import camilo3sprache from '../data/camilo3sprache.png'



const projectImages = [
  camilo1sprache,
  camilo2sprache,
  camilo3sprache
];

const stats = [
  { icon: Users, value: "N/A", label: "Active users" },
  
  { icon: Award, value: "95%", label: "Satisfaction" },
];

export default function FeaturedProject() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % projectImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={projectImages[currentImage]}
                alt={`SprachApp Screenshot ${currentImage + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImage === index ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 text-violet-600">
              <Languages size={24} />
              <span className="text-lg font-semibold">Smart German Learning</span>
            </div>
            
            <p className="text-lg text-gray-600">
            An innovative platform designed to revolutionize German learning through
            the use of Artificial Intelligence and spaced repetition algorithms. SprachApp
            adapts the content to each student, optimizing their learning process and
            maximizing knowledge retention.
            </p>

            <div className="grid grid-cols-2 gap-4 py-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-violet-100"
                >
                  <stat.icon className="w-6 h-6 text-violet-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex space-x-4 pt-4">
              <a
                href="https://spracheapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors duration-300"
              >
                <ExternalLink size={20} />
                <span>See project</span>
              </a>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}