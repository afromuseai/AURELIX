import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sceneTransitions } from '@/lib/video/animations';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),   // Product title
      setTimeout(() => setPhase(2), 800),   // Visuals
      setTimeout(() => setPhase(3), 1500),  // Description
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-end px-[10vw]"
      {...sceneTransitions.wipe}
    >
      <div className="grid grid-cols-2 gap-16 w-full items-center z-10">
        
        {/* Left: Visual */}
        <div className="relative h-[60vh] w-full flex items-center justify-center">
          <motion.div 
            className="w-[30vw] h-[30vw] rounded-full border-[1px] border-primary/30 flex items-center justify-center relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={phase >= 2 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              className="absolute inset-0 rounded-full border-[2px] border-primary border-dashed"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div 
              className="w-[20vw] h-[20vw] rounded-full border-[1px] border-primary/50 relative"
            >
              <motion.div 
                className="absolute inset-0 rounded-full border-[2px] border-primary border-t-transparent"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
            <div className="absolute w-[10vw] h-[10vw] bg-primary/20 rounded-full blur-[20px]" />
            <div className="absolute text-primary text-[1.5vw] font-mono">SECURE</div>
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="text-right flex flex-col items-end">
          <motion.div
            className="flex items-center gap-4 mb-6 flex-row-reverse"
            initial={{ opacity: 0, x: 50 }}
            animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-primary text-[2vw] font-display font-bold">04.</span>
            <div className="h-[2px] w-24 bg-primary/50" />
          </motion.div>

          <motion.h2 
            className="text-[5vw] font-display font-bold leading-none mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AURELIX <span className="text-primary block mt-2 text-[4vw]">Cyber Intel</span>
          </motion.h2>

          <motion.p 
            className="text-[2vw] text-text-secondary max-w-xl font-light leading-relaxed text-right"
            initial={{ opacity: 0 }}
            animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            Autonomous Security Systems.
            <br/><span className="text-white mt-2 block">Protecting the next generation of tech.</span>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}