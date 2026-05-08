import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sceneTransitions } from '@/lib/video/animations';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),   // Box reveals
      setTimeout(() => setPhase(2), 1200),  // Text reveals
      setTimeout(() => setPhase(3), 2000),  // Subtitle reveals
      setTimeout(() => setPhase(4), 3800),  // Exit begins
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center"
      {...sceneTransitions.morphExpand}
    >
      <div className="relative z-10 flex flex-col items-center">
        {/* Brand symbol */}
        <motion.div 
          className="w-32 h-32 border-2 border-primary flex items-center justify-center mb-8 rotate-45"
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={phase >= 1 ? { scale: 1, opacity: 1, rotate: 45 } : { scale: 0, opacity: 0, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <motion.div 
            className="w-16 h-16 bg-primary"
            initial={{ scale: 0 }}
            animate={phase >= 1 ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.3, type: 'spring' }}
          />
        </motion.div>

        {/* Title */}
        <div className="overflow-hidden">
          <motion.h1 
            className="text-[8vw] font-display font-bold tracking-widest text-text-primary leading-none uppercase"
            initial={{ y: '100%' }}
            animate={phase >= 2 ? { y: '0%' } : { y: '100%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Aurelix
          </motion.h1>
        </div>
        
        {/* Subtitle */}
        <motion.div 
          className="mt-6 flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-[1px] w-12 bg-primary" />
          <p className="text-[1.5vw] text-primary tracking-[0.3em] uppercase font-display">Systems</p>
          <div className="h-[1px] w-12 bg-primary" />
        </motion.div>
      </div>
    </motion.div>
  );
}