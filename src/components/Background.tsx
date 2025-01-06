import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-purple-50"></div>
      
      {/* Animated patterns */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-[40rem] h-[40rem] bg-gradient-to-br from-violet-400/10 via-teal-300/10 to-purple-300/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/4 w-[40rem] h-[40rem] bg-gradient-to-tr from-teal-300/10 via-purple-300/10 to-violet-300/10 rounded-full blur-3xl"
        />
      </div>

      {/* Enhanced subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: `linear-gradient(to right, #0D9488 1px, transparent 1px),
                           linear-gradient(to bottom, #8B5CF6 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 border border-teal-200/30 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 border border-purple-200/30 rounded-full"
        />
      </div>
    </div>
  );
}