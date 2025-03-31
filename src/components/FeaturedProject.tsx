import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Languages, Users, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

const spracheImages = import.meta.glob('../data/spracheImages/*.png', { eager: true, as: 'url' });
const sislProImages = import.meta.glob('../data/sislProImages/*.png', { eager: true, as: 'url' });
const techVaultImages = import.meta.glob('../data/techvaultImages/*.png', { eager: true, as: 'url' });
const webflowImages = import.meta.glob('../data/headphones/*.png', { eager: true, as: 'url' });

const projectImages = Object.values(spracheImages);
const projectImages2 = Object.values(sislProImages);
const projectImages3 = Object.values(techVaultImages);
const projectImages4 = Object.values(webflowImages);


const stats = [
  { icon: Users, value: "N/A", label: "Active users" },
  
  { icon: Award, value: "95%", label: "Satisfaction" },
];

export default function FeaturedProject() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);
  const [currentImage3, setCurrentImage3] = useState(0);
  const [currentImage4, setCurrentImage4] = useState(0);
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

  useEffect(() => {
    const timer3 = setInterval(() => {
      setCurrentImage3((prev) => (prev + 1) % projectImages3.length);
    }, 5000);
  
    return () => clearInterval(timer3);
  }, []);

  useEffect(() => {
    const timer4 = setInterval(() => {
      setCurrentImage4((prev) => (prev + 1) % projectImages4.length);
    }, 5000);
  
    return () => clearInterval(timer4);
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
                className="inline-flex items-center space-x-2 px-6 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors duration-300 mb-14"
              >
                <ExternalLink size={20} />
                <span>See project on GitHub</span>
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
           onClick={() => setSelectedImage(projectImages3[currentImage3])}
         >
           <AnimatePresence mode="wait">
             <motion.img
               key={currentImage3}
               src={projectImages3[currentImage3]}
               alt={`System Screenshot ${currentImage3 + 1}`}
               className="w-full h-full object-contain"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.5 }}
             />
           </AnimatePresence>
           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
             {projectImages3.map((_, index) => (
               <button
                 key={index}
                 onClick={(e) => { e.stopPropagation(); setCurrentImage3(index); }}
                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
                   currentImage3 === index ? 'bg-white w-4' : 'bg-white/50'
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
             <span className="text-lg font-semibold"> TechVault eCommerce Project</span>
           </div>
           
           <p className="text-lg text-gray-600">
            TechVault is a modern eCommerce platform designed for seamless browsing and purchasing of electronic products. 
            Built with React and Vite, this project delivers a fast, responsive, and user-friendly shopping experience.
           </p>

           <div className="mt-6">
             <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h3>
             <ul className="list-disc list-inside space-y-2 text-gray-600">
               <li>Product Browsing: Users can explore a variety of electronics, audio devices, and accessories through a categorized layout</li>
               <li>Product Detail Views: Each product page includes comprehensive descriptions and technical specifications</li>
               <li>Shopping Cart: Shoppers can add, remove, and adjust item quantities for a smooth checkout process</li>
               <li>Responsive Design: Optimized for both desktop and mobile users</li>
               <li>Firebase Integration: Product data is managed dynamically using Firebase for real-time updates</li>
               <li>Contact Form: Includes validation to ensure accurate customer inquiries</li>
             </ul>
           </div>

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
               href="https://techvault-ecommerce.netlify.app"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center space-x-2 px-6 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors duration-300"
             >
               <ExternalLink size={20} />
               <span>See project on Netlify</span>
             </a>
             <a
               href="https://github.com/CAASG/Mini-eCommerce-Project.git"
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
     {/* ------------------------------------ Webflow project ----------------------------------- */} 
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
       

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
         <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group"
           onClick={() => setSelectedImage(projectImages4[currentImage4])}
         >
           <AnimatePresence mode="wait">
             <motion.img
               key={currentImage4}
               src={projectImages4[currentImage4]}
               alt={`System Screenshot ${currentImage4 + 1}`}
               className="w-full h-full object-cover"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.5 }}
             />
           </AnimatePresence>
           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
             {projectImages4.map((_, index) => (
               <button
                 key={index}
                 onClick={(e) => { e.stopPropagation(); setCurrentImage4(index); }}
                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
                   currentImage4 === index ? 'bg-white w-4' : 'bg-white/50'
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
             <span className="text-lg font-semibold"> Webflow Project - Headphones</span>
           </div>
           
           <p className="text-lg text-gray-600">
           This project is a simple and clean landing page for headphones. 
           It was created using Webflow and figma, a platform that allows you to create responsive and beautiful 
           websites using a drag-and-drop interface.
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
               href="https://preview.webflow.com/preview/headphones-fec2ab?utm_medium=preview_link&utm_source=designer&utm_content=headphones-fec2ab&preview=d4e29e2f71f935107040e5ecd2a7618b&workflow=preview"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center space-x-2 px-6 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors duration-300 mb-14"
             >
               <ExternalLink size={20} />
               <span>See project on Webflow</span>
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
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Expanded"
              className="max-w-4xl max-h-[90vh] object-cover rounded-lg shadow-lg"
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