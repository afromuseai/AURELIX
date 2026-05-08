import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';
import { Scene6 } from './video_scenes/Scene6';

export const SCENE_DURATIONS: Record<string, number> = {
  intro: 4500,
  afromuse: 4000,
  gtpro: 4000,
  stageone: 4000,
  cyber: 4000,
  outro: 5000,
};

const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  intro: Scene1,
  afromuse: Scene2,
  gtpro: Scene3,
  stageone: Scene4,
  cyber: Scene5,
  outro: Scene6,
};

const bgGradientPos = [
  { x: '50vw', y: '50vh', scale: 1, opacity: 0.15 },
  { x: '20vw', y: '20vh', scale: 1.5, opacity: 0.1 },
  { x: '80vw', y: '80vh', scale: 1.2, opacity: 0.1 },
  { x: '30vw', y: '70vh', scale: 1.8, opacity: 0.1 },
  { x: '70vw', y: '30vh', scale: 1.4, opacity: 0.15 },
  { x: '50vw', y: '50vh', scale: 2, opacity: 0.2 },
];

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentScene, currentSceneKey } = useVideoPlayer({ durations, loop });

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '') as keyof typeof SCENE_DURATIONS;
  const sceneIndex = Object.keys(SCENE_DURATIONS).indexOf(baseSceneKey);
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-bg-dark text-text-primary font-body">
      {/* Background Video Layer */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen">
        <video
          src={`${import.meta.env.BASE_URL}videos/constellation.mp4`}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Persistent Animated Gradient Midground */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[100px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
        animate={bgGradientPos[sceneIndex] ?? bgGradientPos[0]}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)',
          backgroundSize: '4vw 4vw',
          backgroundPosition: 'center center',
        }}
      />

      <AnimatePresence mode="popLayout">
        {SceneComponent && <SceneComponent key={currentSceneKey} />}
      </AnimatePresence>
    </div>
  );
}
