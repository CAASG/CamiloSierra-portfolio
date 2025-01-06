import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About me', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#tech' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-lg shadow-lg border-b border-gray-200/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
              CS
            </span>
            {/* Decorative dot */}
            <span className="absolute -right-1 -top-1 w-2 h-2 bg-violet-500 rounded-full"></span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-lg text-gray-600 hover:text-violet-600 hover:bg-violet-50/50 transition-all duration-300 text-sm font-medium relative group"
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-violet-50 text-violet-600 hover:bg-violet-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg rounded-2xl mt-2 border border-violet-100/20"
          >
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all duration-300 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 8 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}