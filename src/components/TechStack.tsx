import { motion } from 'framer-motion';

type Technology = {
  name: string;
  icon: string;
};

type TechCategory = {
  name: string;
  technologies: Technology[];
};

type CloudItem = {
  name: string;
  icon: string;
};

type CloudSection = {
  name: string;
  items: CloudItem[];
};

export default function TechStack() {
  const frontendStack = {
    name: "Frontend Development",
    technologies: [
      { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
      { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
      { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
      { name: "React Native", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
      { name: "Angular", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" }
    ]
  };

  const cloudAndDevOps = {
    name: "Cloud ",
    sections: [
      {
        name: "AWS",
        items: [
          { name: "Lambda Functions", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" },
          { name: "EC2", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" },
          { name: "Security Rules", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" }
        ]
      },
      {
        name: "Azure",
        items: [
          { name: "IoT Hub", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
          { name: "CosmosDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
          { name: "Azure Insights", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" }
        ]
      }
    ]
  };

  const databases = {
    name: "Databases",
    technologies: [
      { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
      { name: "Oracle", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" },
      { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
      { name: "Microsoft SQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" }
    ]
  };

  const otherTools = {
    name: "Other Tools",
    technologies: [
      { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
      { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" }
    ]
  };

  const renderTechCategory = (category: TechCategory) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-violet-100"
    >
      <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
        {category.name}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {category.technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-12 h-12 object-contain"
              />
            </div>
            <p className="mt-4 text-gray-600 font-medium text-center">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tech Stack</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {renderTechCategory(frontendStack)}

          {/* Cloud & DevOps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-violet-100"
          >
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
              {cloudAndDevOps.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cloudAndDevOps.sections.map((section) => (
                <div key={section.name} className="space-y-4">
                  <h4 className="text-xl font-semibold text-violet-600 text-center mb-4">
                    {section.name}
                  </h4>
                  <div className="space-y-3">
                    {section.items.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 text-gray-700"
                      >
                        <img 
                          src={item.icon} 
                          alt={item.name}
                          className="w-5 h-5 object-contain"
                        />
                        <span>{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {renderTechCategory(databases)}
          {renderTechCategory(otherTools)}
        </div>
      </div>
    </section>
  );
}