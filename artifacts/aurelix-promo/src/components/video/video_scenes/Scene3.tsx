import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sceneTransitions } from '@/lib/video/animations';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),   // Product title
      setTimeout(() => setPhase(2), 800),   // Stats/visuals
      setTimeout(() => setPhase(3), 1500),  // Description
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-end px-[10vw]"
      {...sceneTransitions.splitHorizontal}
    >
      <div className="grid grid-cols-2 gap-16 w-full items-center z-10">
        
        {/* Left: Visual/Data */}
        <motion.div 
          className="relative h-[60vh] w-full flex flex-col justify-center gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Faux data visualization */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-end gap-4 h-12 w-full">
              <div className="text-[1vw] text-text-muted font-mono w-12 text-right">0{i}</div>
              <motion.div 
                className="h-full bg-primary/20 border border-primary/50 relative overflow-hidden"
                initial={{ width: '0%' }}
                animate={phase >= 2 ? { width: `${40 + Math.random() * 60}%` } : { width: '0%' }}
                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
              >
                <motion.div 
                  className="absolute inset-y-0 left-0 w-2 bg-primary"
                  animate={{ x: ['0%', '500%', '0%'] }}
                  transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Right: Content */}
        <div className="text-right flex flex-col items-end">
          <motion.div
            className="flex items-center gap-4 mb-6 flex-row-reverse"
            initial={{ opacity: 0, x: 50 }}
            animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-primary text-[2vw] font-display font-bold">02.</span>
            <div className="h-[2px] w-24 bg-primary/50" />
          </motion.div>

          <motion.h2 
            className="text-[6vw] font-display font-bold leading-none mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            GT<span className="text-primary">Pro</span>
          </motion.h2>

          <motion.p 
            className="text-[2vw] text-text-secondary max-w-xl font-light leading-relaxed text-right"
            initial={{ opacity: 0 }}
            animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            Global Trade Intelligence. 
            <br/><span className="text-white mt-2 block">Advanced analytics for modern finance.</span>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}