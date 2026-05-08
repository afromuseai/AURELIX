import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sceneTransitions } from '@/lib/video/animations';

export function Scene6() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),   // Full logo
      setTimeout(() => setPhase(2), 1500),  // Tagline
      setTimeout(() => setPhase(3), 4000),  // Exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm"
      {...sceneTransitions.morphExpand}
    >
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Full Lockup */}
        <motion.div
          className="flex items-center gap-8 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Brand symbol */}
          <div className="w-20 h-20 border-2 border-primary flex items-center justify-center rotate-45">
            <div className="w-10 h-10 bg-primary" />
          </div>
          
          <h1 className="text-[6vw] font-display font-bold tracking-widest text-white leading-none uppercase">
            Aurelix
          </h1>
        </motion.div>
        
        {/* Final Tagline */}
        <motion.div 
          className="mt-6 flex flex-col items-center overflow-hidden"
        >
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={phase >= 2 ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6"
          >
            <div className="h-[2px] w-16 bg-primary" />
            <p className="text-[2.5vw] text-white tracking-[0.2em] font-display font-light">
              Intelligence. <span className="text-primary font-medium">Engineered.</span>
            </p>
            <div className="h-[2px] w-16 bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}