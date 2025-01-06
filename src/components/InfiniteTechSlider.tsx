import { motion } from 'framer-motion';

type Technology = {
  name: string;
  icon: string;
};

const technologies: Technology[] = [
  { name: "AWS EC2", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "AWS Lambda", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "ElastiCache", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg" },
  { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
  { name: "Jenkins", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg" },
  { name: "Spring Boot", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" },
  { name: "Spring Security", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" },
  { name: "Swagger", icon: "https://raw.githubusercontent.com/swagger-api/swagger.io/wordpress/images/assets/SW-logo-clr.png" },
  { name: "Maven", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg" },
  { name: "Nginx", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" },
  { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
  { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
];

export default function InfiniteTechSlider() {
  return (
    <div className="relative overflow-hidden py-4">
      <div className="flex space-x-8">
        <motion.div
          className="flex space-x-8"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center space-y-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-sm"
            >
              <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
              <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}