"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ShoppingBag, Bell, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={targetRef} className="relative min-h-[85vh] flex items-center overflow-hidden py-12 lg:py-20 bg-background">
      {/* Dynamic Background Gradient (Aurora) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-500/10 blur-[100px] animate-blob" />
        <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-300/10 blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <Container className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column - Typography */}
        <motion.div 
          style={{ opacity, y }}
          className="flex flex-col items-start text-left space-y-6 md:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs sm:text-sm font-medium text-primary backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Agence de Performance Ads
          </motion.div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] md:leading-[0.9]">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="block"
            >
              SCALE
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600"
            >
              YOUR
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="block"
            >
              BUSINESS
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground max-w-lg leading-relaxed"
          >
            Des publicités qui ne se contentent pas d&apos;être vues, mais qui <span className="text-foreground font-bold underline decoration-primary/50 underline-offset-4">vendent</span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="h-12 sm:h-14 px-8 text-base sm:text-lg font-bold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-105" asChild>
              <Link href="/contact">
                Réserver un appel
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 sm:h-14 px-8 text-base sm:text-lg font-medium rounded-full border-2 hover:bg-secondary/50" asChild>
              <Link href="/case-studies">Nos résultats</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column - Visual */}
        <motion.div 
          style={{ scale }}
          className="relative mx-auto w-full max-w-[350px] sm:max-w-[500px] lg:max-w-none mt-8 lg:mt-0"
        >
          <div className="relative aspect-[4/5] lg:aspect-square flex items-center justify-center">
             {/* Abstract Composition */}
             <div className="relative w-full h-full">
                {/* Main Shape */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 rounded-[3rem] border border-white/50 shadow-2xl overflow-hidden"
                >
                   {/* Hoodie Abstract Representation - More Artistic */}
                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[70%] bg-[#1e293b] rounded-t-[10rem] shadow-2xl">
                      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[35%] h-[35%] bg-[#FFDcb1] rounded-full shadow-inner border-[6px] border-[#1e293b]" />
                   </div>
                   
                   {/* Laptop/Desk Abstract */}
                   <div className="absolute bottom-0 w-full h-[25%] bg-[#0f172a]/90 backdrop-blur-md border-t border-white/10 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center animate-pulse">
                          <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                      </div>
                   </div>
                </motion.div>

                {/* Floating Elements - Glassmorphism */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute top-[10%] -right-[5%] lg:-right-[10%] bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 flex items-center gap-4 z-20"
                >
                  <div className="bg-green-100/80 p-3 rounded-xl">
                    <ShoppingBag className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Ventes (24h)</p>
                    <p className="text-xl font-bold font-heading text-foreground">+ 1,240€</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute bottom-[30%] -left-[5%] lg:-left-[10%] bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 flex items-center gap-4 z-20"
                >
                  <div className="bg-blue-100/80 p-3 rounded-full">
                    <Bell className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Nouvelle conversion</p>
                    <p className="text-xs text-muted-foreground">Il y a 2 min</p>
                  </div>
                </motion.div>
             </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
