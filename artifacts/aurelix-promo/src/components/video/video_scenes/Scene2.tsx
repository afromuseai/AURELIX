import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sceneTransitions } from '@/lib/video/animations';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),   // Product title
      setTimeout(() => setPhase(2), 800),   // Image scales up
      setTimeout(() => setPhase(3), 1500),  // Tagline/features
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center px-[10vw]"
      {...sceneTransitions.clipPolygon}
    >
      <div className="grid grid-cols-2 gap-16 w-full items-center z-10">
        
        {/* Left: Content */}
        <div>
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-primary text-[2vw] font-display font-bold">01.</span>
            <div className="h-[2px] w-24 bg-primary/50" />
          </motion.div>

          <motion.h2 
            className="text-[6vw] font-display font-bold leading-none mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AfroMuse <span className="text-primary">AI</span>
          </motion.h2>

          <motion.p 
            className="text-[2vw] text-text-secondary max-w-xl font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            AI-Powered Creative Intelligence. 
            <br/><span className="text-white mt-2 block">Redefining music and creative workflows.</span>
          </motion.p>
        </div>

        {/* Right: Visual */}
        <motion.div 
          className="relative h-[60vh] w-full border border-primary/20 bg-black/40 backdrop-blur-sm overflow-hidden flex items-center justify-center p-12"
          initial={{ scale: 0.8, opacity: 0, rotateY: 15 }}
          animate={phase >= 2 ? { scale: 1, opacity: 1, rotateY: 0 } : { scale: 0.8, opacity: 0, rotateY: 15 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: 1000 }}
        >
          {/* Logo placeholder - assuming we use the provided image if possible, else standard text */}
          <motion.div
            className="text-[4vw] font-display font-bold text-white tracking-widest text-center"
            initial={{ filter: 'blur(10px)' }}
            animate={phase >= 2 ? { filter: 'blur(0px)' } : { filter: 'blur(10px)' }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            AFROMUSE
            <div className="text-[1.5vw] text-primary tracking-widest mt-4">CREATIVE LABS</div>
          </motion.div>

          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}