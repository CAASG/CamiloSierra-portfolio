import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Languages, Users, Brain, Clock, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import camilo1sprache from '../data/camilo1sprache.png'
import camilo2sprache from '../data/camilo2sprache.png'
import camilo3sprache from '../data/camilo3sprache.png'
import sislPro1 from '../data/sislPro1.png'
import sislPro2 from '../data/sislPro2.png'
import sislPro3 from '../data/sislPro3.png'
import sislPro4 from '../data/sislPro4.png'
import sislPro5 from '../data/sislPro5.png'
import sislPro6 from '../data/sislPro6.png'
import sislPro7 from '../data/sislPro7.png'
import sislPro8 from '../data/sislPro8.png'



const projectImages = [
  camilo1sprache,
  camilo2sprache,
  camilo3sprache
];
const projectImages2 = [
  sislPro1,
  sislPro2,
  sislPro3,
  sislPro4,
  sislPro5,
  sislPro6,
  sislPro7,
  sislPro8
];


const stats = [
  { icon: Users, value: "N/A", label: "Active users" },
  
  { icon: Award, value: "95%", label: "Satisfaction" },
];

export default function FeaturedProject() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % projectImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer2 = setInterval(() => {
      setCurrentImage2((prev) => (prev + 1) % projectImages2.length);
    }, 5000);
  
    return () => clearInterval(timer2);
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

        {/* Primer Proyecto */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group"
            onClick={() => setSelectedImage(projectImages[currentImage])}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={projectImages[currentImage]}
                alt={`SprachApp Screenshot ${currentImage + 1}`}
                className="w-full h-full object-contain"
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
                  onClick={(e) => {e.stopPropagation(); setCurrentImage(index);}}
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
             {/* Button */}            
            <div className="flex space-x-4 pt-4">
              <a
                href="https://spracheapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors duration-300 mb-14"
              >
                <ExternalLink size={20} />
                <span>See project</span>
              </a>
              
            </div>
          </motion.div>
        </div>
      </div>
       {/* ------------------------------------ other ----------------------------------- */} 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group"
            onClick={() => setSelectedImage(projectImages2[currentImage2])}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage2}
                src={projectImages2[currentImage2]}
                alt={`System Screenshot ${currentImage2 + 1}`}
                className="w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {projectImages2.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setCurrentImage2(index); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImage2 === index ? 'bg-white w-4' : 'bg-white/50'
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
              <span className="text-lg font-semibold"> Contributor to the project - Integral System for the Evaluation of Engineering Projects at UNAB</span>
            </div>
            
            <p className="text-lg text-gray-600">
            The present study focuses on investigating the effectiveness of the implementation of a comprehensive software for 
            the evaluation and monitoring of engineering projects in the academic environment, strengthening curriculum management at UNAB.

            The evaluation and grading of class projects in educational environments has been the subject of analysis and discussion in various 
            contexts. The need for a clear, coherent and standardized evaluation process is considered fundamental to guarantee educational 
            quality and equity. Previous research has highlighted the importance of adequate planning and control mechanisms in project design; 
            sound and detailed planning allows the establishment of clear objectives, the identification of necessary resources and the definition 
            of project milestones. In addition, a rigorous approach to control mechanisms contributes to effective monitoring and accurate evaluation 
            of project progress and results.
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
             {/* Button */}            
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/ing-fabiansuarez/sistema-integral-proyectos-ingenieria-unab.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors duration-300"
              >
                <ExternalLink size={20} />
                <span>See project on GitHub</span>
              </a>
              
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal de Imagen Expandida */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 2 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Expanded"
              className="max-w-4xl max-h-[90vh] object-contain rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}