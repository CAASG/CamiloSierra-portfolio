import { motion } from 'framer-motion';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <FeaturedProject />
      <Projects />
      <TechStack />
      <Contact />
    </motion.div>
  );
}

export default App;