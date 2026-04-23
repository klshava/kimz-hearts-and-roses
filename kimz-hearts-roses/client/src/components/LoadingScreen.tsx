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
             <img 
              src="https://res.cloudinary.com/drz47afmg/image/upload/v1776973529/logo_omsgcm.png"
              alt="Logo"
              width="512"
              height="640"
              className="object-contain"
              />
          </motion.div>

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
