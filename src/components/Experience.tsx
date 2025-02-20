import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "FrontEnd Developer ",
      company: "SpracheApp.com",
      period: "2023 July - 2025 Present",
      description: `-Developed the front-end of the Spracheapp.com web portal, implementing various functionalities, animations, connections with the backend, and performance optimization.
      -Worked closely with designers and developers to achieve the client's objectives.
      -Contributor in a master project “Integral System for the Evaluation of Engineering Projects at UNAB”, currently updating the project giving it new functionalities to make use of it in my degree project.`
    },
    {
      title: "Developer Freelancer ",
      company: "Autonomous",
      period: "2022- 2023",
      description: `- I implemented front-end web solutions for various clients of the university where I studied.
      - This included the creation of responsive sites, SEO optimization, and the development of applications using languages ​​and technologies such as Javascript, CSS, Html, Angular, among others.`
    }
  ];
  

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Interactive background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/30 to-transparent"></div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-violet-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-violet-200/20 to-pink-200/20 rounded-full blur-3xl"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-pink-500 mx-auto"></div>
        </motion.div>
        
        <div className="relative space-y-12">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-600 via-pink-500 to-violet-600"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-16"
            >
              <div className="absolute left-0 top-0">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-16 h-16 bg-white rounded-full shadow-lg border-2 border-violet-200 flex items-center justify-center"
                >
                  <Briefcase className="w-8 h-8 text-violet-600" />
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-violet-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                <p className="text-violet-600 text-lg mb-2">{exp.company}</p>
                <p className="text-gray-500 mb-4">{exp.period}</p>
                <p className="text-gray-600 whitespace-pre-line">{exp.description}</p>
                </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}