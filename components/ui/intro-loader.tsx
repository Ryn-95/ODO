"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function IntroLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds intro

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          {/* Background Abstract Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/40 via-background to-background"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Animation */}
            <div className="relative mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 h-[2px] bg-primary"
              />
              <motion.h1
                  initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-7xl md:text-9xl font-heading font-bold tracking-tighter text-white"
                >
                  ODO
                </motion.h1>
            </div>

            {/* Loading Status / Text */}
            <div className="flex flex-col items-center gap-4">
              <motion.div 
                className="h-1 w-48 bg-secondary/20 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </motion.div>
              
              <div className="flex gap-2 overflow-hidden h-6 relative">
                 <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xs font-mono tracking-[0.2em] text-muted-foreground"
                 >
                    AGENCE PERFORMANCE
                 </motion.span>
              </div>
            </div>
          </div>

          {/* Glitch/Noise Overlay (Optional) */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
