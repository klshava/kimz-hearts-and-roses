/* LoadingScreen — Full-screen branded intro with animated progress bar */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 2800;
    const interval = 30;
    const steps = duration / interval;
    let current = 0;
    const timer = setInterval(() => {
      current += 100 / steps;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(() => setFadeOut(true), 300);
        setTimeout(() => onComplete(), 800);
      }
      setProgress(Math.min(Math.round(current), 100));
    }, interval);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Crown */}
              <path d="M15 30 L25 10 L35 25 L40 5 L45 25 L55 10 L65 30 Z" fill="#C0002A" />
              <rect x="15" y="28" width="50" height="6" rx="1" fill="#C9A96E" />
              {/* K letter */}
              <path d="M30 45 L30 85 M30 65 L50 45 M35 65 L55 85" stroke="#C0002A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-serif text-2xl tracking-[0.3em] text-white mb-1"
          >
            KIMZ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-[#C9A96E] text-xs tracking-[0.5em] font-sans font-light mb-12"
          >
            LUXURY EVENTS
          </motion.p>

          {/* Progress Bar */}
          <div className="w-48 relative">
            <div className="h-[2px] bg-white/10 w-full">
              <motion.div
                className="h-full bg-[#C0002A]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-white/60 text-xs font-sans tracking-widest mt-3 text-center">
              {progress}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
