import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 w-[45rem] h-[45rem] bg-violet-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob-horizontal"></div>
        <div className="absolute top-[70%] -right-40 w-[50rem] h-[50rem] bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob-horizontal animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent mb-4 animate-gradient">
              Camilo Sierra
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-light">
              Software Developer - Web Development
            </h2>
          </motion.div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <motion.a 
              href="https://github.com/CAASG" 
              className="text-gray-400 hover:text-violet-600 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/camilo-sierra-b23b51259/" 
              className="text-gray-400 hover:text-violet-600 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a 
              href="mailto:camilosierra860@gmail.com" 
              className="text-gray-400 hover:text-violet-600 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Mail size={24} />
            </motion.a>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a
              href="#about"
              className="inline-block px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-violet-600 to-pink-500 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Know more about me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}