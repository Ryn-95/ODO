"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Custom easing counter
    let current = 0;
    const timer = setInterval(() => {
      // Non-linear increment for organic feel
      const jump = Math.floor(Math.random() * 15) + 5;
      current += jump;
      
      if (current >= 100) {
        current = 100;
        setCount(100);
        clearInterval(timer);
        setTimeout(() => setIsLoading(false), 800); // Wait a bit at 100%
      } else {
        setCount(current);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white px-4 md:px-8"
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] } 
          }}
        >
          <div className="w-full h-full max-w-[1800px] mx-auto flex flex-col justify-between py-8 md:py-12">
            
            {/* Top Bar */}
            <div className="flex justify-between items-start overflow-hidden">
               <motion.span 
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 0.5, delay: 0.2 }}
                 className="text-[10px] md:text-xs font-mono text-white/40 uppercase tracking-[0.2em]"
               >
                 Est. 2024
               </motion.span>
               <motion.span 
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 0.5, delay: 0.2 }}
                 className="text-[10px] md:text-xs font-mono text-white/40 uppercase tracking-[0.2em] text-right"
               >
                 Paris — France
               </motion.span>
            </div>

            {/* Center Content - Massive Typography */}
            <div className="flex flex-col items-center justify-center flex-1">
              <div className="overflow-hidden relative">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
                  className="text-[18vw] leading-[0.8] font-bold tracking-tighter text-white mix-blend-difference select-none"
                >
                  ODO
                </motion.h1>
                {/* Subtle Glow Behind */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute inset-0 bg-white blur-[100px] rounded-full z-[-1]"
                />
              </div>
            </div>

            {/* Bottom Bar & Counter */}
            <div className="flex justify-between items-end overflow-hidden">
               <div className="flex flex-col gap-2">
                 <motion.div 
                   initial={{ y: "100%" }}
                   animate={{ y: 0 }}
                   transition={{ duration: 0.5, delay: 0.3 }}
                   className="text-xs md:text-sm text-white/60 font-medium tracking-wide"
                 >
                   Agence de Performance
                 </motion.div>
                 <motion.div 
                   initial={{ scaleX: 0 }}
                   animate={{ scaleX: 1 }}
                   transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
                   className="h-[1px] w-full md:w-32 bg-white/30 origin-left"
                 />
               </div>

               <motion.div 
                  className="text-7xl md:text-9xl font-light tracking-tighter tabular-nums leading-[0.8]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
               >
                 {count}%
               </motion.div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
