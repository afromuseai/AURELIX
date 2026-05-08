import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sceneTransitions } from '@/lib/video/animations';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),   // Product title
      setTimeout(() => setPhase(2), 800),   // 3D cards
      setTimeout(() => setPhase(3), 1500),  // Description
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center px-[10vw]"
      {...sceneTransitions.perspectiveFlip}
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
            <span className="text-primary text-[2vw] font-display font-bold">03.</span>
            <div className="h-[2px] w-24 bg-primary/50" />
          </motion.div>

          <motion.h2 
            className="text-[5.5vw] font-display font-bold leading-none mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            STAGE<span className="text-primary">ONE</span>
          </motion.h2>

          <motion.p 
            className="text-[2vw] text-text-secondary max-w-xl font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            Business Infrastructure Intelligence. 
            <br/><span className="text-white mt-2 block">Scaling startups with precision.</span>
          </motion.p>
        </div>

        {/* Right: Visual */}
        <div className="relative h-[60vh] w-full flex items-center justify-center" style={{ perspective: 1200 }}>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-[60%] h-[40%] border border-primary/40 bg-black/60 backdrop-blur-md flex items-center justify-center"
              initial={{ opacity: 0, z: -500, y: 0 }}
              animate={phase >= 2 ? { 
                opacity: 1 - (i * 0.3), 
                z: i * -200, 
                y: i * 40,
                rotateX: 20
              } : { opacity: 0, z: -500, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {i === 0 && (
                <div className="text-primary text-[2vw] font-mono opacity-50 tracking-widest">
                  INFRASTRUCTURE_READY
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}