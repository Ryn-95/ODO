"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ShoppingBag, Bell, ArrowRight, TrendingUp } from "lucide-react";
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
    <section ref={targetRef} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden py-20 bg-background">
      {/* Refined Mesh Gradient - Subtle & High End */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-blue-500/20 to-cyan-500/20 blur-[120px]" 
        />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        
        {/* Badge - Apple Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary backdrop-blur-xl"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-primary mr-2 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
          Agence de Performance Ads
        </motion.div>

        {/* Main Heading - Massive & Tight */}
        <h1 className="max-w-5xl font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-foreground mb-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="block"
          >
            SCALE YOUR
          </motion.div>
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="block bg-gradient-to-b from-primary to-primary/60 bg-clip-text text-transparent pb-4"
          >
            BUSINESS.
          </motion.span>
        </h1>
        
        {/* Subtitle - Clean & Balanced */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl leading-relaxed text-balance mb-12 tracking-tight"
        >
          Des publicités qui ne se contentent pas d&apos;être vues. Elles <span className="text-primary font-semibold">convertissent</span>.
        </motion.p>

        {/* CTAs - Minimalist */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-20"
        >
          <Button size="lg" className="h-12 px-8 text-base font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-xl shadow-primary/20" asChild>
            <Link href="/contact">
              Réserver un audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="ghost" className="h-12 px-8 text-base font-medium rounded-full hover:bg-primary/5 text-foreground transition-colors" asChild>
            <Link href="/case-studies">Voir nos résultats</Link>
          </Button>
        </motion.div>

        {/* 3D Dashboard Mockup - The "Tesla/Apple" Shot */}
        <motion.div 
          style={{ rotateX: 10, scale }}
          initial={{ opacity: 0, y: 100, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 10 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="relative w-full max-w-5xl perspective-1000"
        >
           <div className="relative bg-white rounded-xl border border-border shadow-2xl shadow-black/10 overflow-hidden aspect-[16/9] md:aspect-[21/9]">
              {/* Fake Browser Chrome */}
              <div className="absolute top-0 w-full h-8 bg-muted/50 border-b border-border flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              </div>

              {/* Dashboard Content - Abstract */}
              <div className="absolute inset-0 top-8 bg-secondary/20 p-6 md:p-8 grid grid-cols-12 gap-6">
                 {/* Sidebar */}
                 <div className="col-span-2 hidden md:block space-y-4">
                    <div className="h-8 w-24 bg-foreground/5 rounded-md" />
                    <div className="space-y-2">
                       {[1,2,3,4].map(i => (
                         <div key={i} className="h-6 w-full bg-foreground/5 rounded-md" />
                       ))}
                    </div>
                 </div>
                 
                 {/* Main Content */}
                 <div className="col-span-12 md:col-span-10 space-y-6">
                    <div className="flex justify-between items-center">
                       <div className="h-8 w-48 bg-foreground/10 rounded-md" />
                       <div className="flex gap-2">
                          <div className="h-8 w-8 bg-foreground/5 rounded-full" />
                          <div className="h-8 w-8 bg-foreground/5 rounded-full" />
                       </div>
                    </div>
                    
                    {/* Charts Row */}
                    <div className="grid grid-cols-3 gap-6">
                       <div className="col-span-2 h-48 bg-white rounded-lg border border-border shadow-sm p-4 relative overflow-hidden">
                          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/10 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4 h-32 flex items-end justify-between gap-1">
                             {[...Array(20)].map((_, i) => (
                               <motion.div 
                                 key={i} 
                                 initial={{ height: 0 }}
                                 animate={{ height: `${Math.random() * 80 + 20}%` }}
                                 transition={{ duration: 1, delay: 0.5 + (i * 0.05) }}
                                 className="w-full bg-primary/80 rounded-t-sm" 
                               />
                             ))}
                          </div>
                       </div>
                       <div className="col-span-1 h-48 bg-primary text-primary-foreground rounded-lg shadow-sm p-6 flex flex-col justify-between relative overflow-hidden">
                          <div className="relative z-10">
                            <p className="text-sm opacity-90">ROAS Global</p>
                            <p className="text-4xl font-bold mt-1">4.8x</p>
                          </div>
                          <div className="relative z-10 flex items-center gap-2 text-white text-sm font-medium">
                             <TrendingUp className="w-4 h-4" />
                             <span>+24%</span>
                          </div>
                          {/* Decorative */}
                          <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white/20 blur-xl" />
                       </div>
                    </div>

                    {/* Table Row */}
                    <div className="h-32 bg-white rounded-lg border border-border shadow-sm p-4 space-y-3">
                       <div className="flex gap-4 border-b border-border pb-2">
                          <div className="w-1/4 h-4 bg-foreground/5 rounded" />
                          <div className="w-1/4 h-4 bg-foreground/5 rounded" />
                          <div className="w-1/4 h-4 bg-foreground/5 rounded" />
                          <div className="w-1/4 h-4 bg-foreground/5 rounded" />
                       </div>
                       {[1,2].map(i => (
                          <div key={i} className="flex gap-4">
                            <div className="w-1/4 h-3 bg-foreground/5 rounded" />
                            <div className="w-1/4 h-3 bg-foreground/5 rounded" />
                            <div className="w-1/4 h-3 bg-foreground/5 rounded" />
                            <div className="w-1/4 h-3 bg-foreground/5 rounded" />
                          </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Floating Notifications - The "Magic" */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute top-1/4 right-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-border/50 flex items-center gap-4 z-20"
              >
                 <div className="bg-green-100 p-2 rounded-lg">
                   <ShoppingBag className="w-5 h-5 text-green-700" />
                 </div>
                 <div>
                   <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Ventes (24h)</p>
                   <p className="text-lg font-bold text-foreground">+ 1,240€</p>
                 </div>
              </motion.div>
           </div>
        </motion.div>
      </Container>
    </section>
  );
}
