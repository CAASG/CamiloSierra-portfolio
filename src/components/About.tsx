import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';

const LanguageCard = ({ language, flag, level }: { language: string; flag: string; level: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-violet-100"
  >
    <div className="flex items-center space-x-3">
      <div className="text-4xl">{flag}</div>
      <div>
        <h4 className="font-medium text-gray-900">{language}</h4>
        <p className="text-sm text-gray-600">{level}</p>
      </div>
    </div>
  </motion.div>
);

export default function About() {
  const languages = [
    { language: "Spanish", flag: "ES", level: "Native" },
    { language: "English", flag: "EN", level: "Advanced" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-50/50 via-transparent to-pink-50/50"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-violet-100/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-pink-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-gray-600">
              <p className="text-lg leading-relaxed">
                I am a software developer passionate about creating innovative technological solutions.
                I specialize in frontend web development with some backend experience and I enjoy working on challenging projects
                that allow me to learn and grow professionally.
              </p>
              <p className="text-lg leading-relaxed">
                With experience in multiple modern technologies and frameworks, I focus on writing
                clean and maintainable code while building scalable and efficient applications.
              </p>
            </div>

            {/* Languages section */}
            <div className="pt-8">
              <div className="flex items-center space-x-2 mb-6">
                <Languages className="text-violet-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Languages</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {languages.map((lang) => (
                  <LanguageCard 
                    key={lang.language}
                    language={lang.language} 
                    flag={lang.flag} 
                    level={lang.level}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                alt="Coding workspace"
                className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}