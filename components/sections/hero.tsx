"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ShoppingBag, ArrowRight, TrendingUp, Users, Wallet } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  // Prevent hydration mismatch by only rendering complex motion components on client
  if (!isMounted) {
    return (
      <section ref={targetRef} className="relative min-h-screen flex flex-col justify-start pt-24 md:pt-32 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
          {/* Static fallback for gradient */}
          <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/20 blur-[120px]" />
        </div>
        <Container className="relative z-10 flex flex-col items-center text-center w-full">
           <div className="flex flex-col items-center max-w-5xl mx-auto w-full">
              <div className="h-96 w-full flex items-center justify-center">
                 {/* Loading state or simple static content */}
              </div>
           </div>
        </Container>
      </section>
    );
  }

  return (
    <section ref={targetRef} className="relative min-h-screen flex flex-col justify-start pt-24 md:pt-32 overflow-hidden bg-background">
      {/* Refined Mesh Gradient - Subtle & High End */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
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

      <Container className="relative z-10 flex flex-col items-center text-center w-full">
        
        {/* Content Wrapper */}
        <div className="flex flex-col items-center max-w-5xl mx-auto w-full">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary backdrop-blur-xl"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary mr-2 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
            Agence de Performance Ads
          </motion.div>

          {/* Main Heading - Compacted */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] text-foreground mb-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              SCALE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">BUSINESS</span>
            </motion.div>
          </h1>
          
          {/* Subtitle - Compacted */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-base md:text-lg font-medium text-muted-foreground max-w-xl leading-relaxed text-balance mb-6"
          >
            Des publicités qui ne se contentent pas d&apos;être vues. Elles <span className="text-primary font-semibold">convertissent</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-row gap-3 items-center justify-center mb-8"
          >
            <Button size="lg" className="h-10 px-6 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/20" asChild>
              <Link href="https://calendly.com/odo-veoremy/30min?month=2025-12" target="_blank">
                Réserver un audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" className="h-10 px-6 text-sm font-medium rounded-full hover:bg-primary/5 text-foreground transition-colors" asChild>
              <Link href="/case-studies">Voir nos résultats</Link>
            </Button>
          </motion.div>

          {/* Dashboard Mockup - Highly Optimized & Modern */}
          <motion.div 
            style={{ rotateX: 10, scale }}
            initial={{ opacity: 0, y: 40, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 10 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative w-full max-w-[900px] perspective-1000 z-20"
          >
             {/* Main Container - Frosted Glass & Border Glow */}
             <div className="relative bg-white/90 backdrop-blur-2xl rounded-2xl border border-white/40 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden h-auto md:aspect-[2/1]">
                
                {/* Header Bar */}
                <div className="absolute top-0 w-full h-12 bg-white/50 border-b border-black/5 flex items-center justify-between px-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80 shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80 shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400/80 shadow-sm" />
                  </div>
                  <div className="h-2 w-32 bg-black/5 rounded-full" />
                </div>

                {/* Dashboard Grid */}
                <div className="relative md:absolute inset-0 pt-12 md:pt-12 p-4 md:p-8 bg-gradient-to-br from-slate-50/50 to-white/80">
                   <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-full">
                      
                      {/* Left Sidebar - Navigation (Hidden on mobile) */}
                      <div className="col-span-1 hidden md:flex flex-col items-center gap-6 py-2 border-r border-black/5 pr-6">
                         <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                            <TrendingUp className="w-4 h-4" />
                         </div>
                         {[1,2,3,4].map(i => (
                           <div key={i} className="w-8 h-8 rounded-lg bg-black/5 hover:bg-black/10 transition-colors" />
                         ))}
                      </div>

                      {/* Main Content Area */}
                      <div className="col-span-1 md:col-span-11 flex flex-col gap-4 md:gap-6">
                         
                         {/* Top Stats Row */}
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Stat 1 - Budget */}
                            <div className="bg-white rounded-2xl p-5 border border-black/5 shadow-sm relative overflow-hidden group flex flex-col justify-between min-h-[140px]">
                               <div className="flex justify-between items-start mb-2">
                                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                                     <Wallet className="w-4 h-4" />
                                  </div>
                                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-bold">
                                     Global
                                  </span>
                               </div>
                               <div>
                                  <div className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-1">50M€+</div>
                                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Budget Géré</div>
                                  <p className="text-[10px] leading-tight text-muted-foreground/80">
                                    De dépenses publicitaires rentables pilotées par nos équipes.
                                  </p>
                               </div>
                            </div>

                            {/* Stat 2 - ROAS */}
                            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-5 text-white shadow-lg shadow-primary/20 relative overflow-hidden group flex flex-col justify-between min-h-[140px]">
                               <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8 blur-xl transition-transform duration-700 group-hover:scale-150" />
                               <div className="relative z-10 flex justify-between items-start mb-2">
                                  <div className="p-2 rounded-lg bg-white/20 text-white backdrop-blur-sm">
                                     <TrendingUp className="w-4 h-4" />
                                  </div>
                                  <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                                     +24%
                                  </span>
                               </div>
                               <div className="relative z-10">
                                  <div className="text-3xl md:text-4xl font-bold tracking-tight mb-1">4.5x</div>
                                  <div className="text-xs text-blue-100 font-medium uppercase tracking-wider mb-1">ROAS Moyen</div>
                                  <p className="text-[10px] leading-tight text-blue-100/80">
                                    Retour sur investissement publicitaire moyen sur nos comptes.
                                  </p>
                               </div>
                            </div>

                            {/* Stat 3 - Clients */}
                            <div className="bg-white rounded-2xl p-5 border border-black/5 shadow-sm relative overflow-hidden group flex flex-col justify-between min-h-[140px]">
                               <div className="flex justify-between items-start mb-2">
                                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                                     <Users className="w-4 h-4" />
                                  </div>
                                  <div className="flex -space-x-2">
                                     <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />
                                     <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-300" />
                                     <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-400 flex items-center justify-center text-[8px] font-bold text-white">+99</div>
                                  </div>
                               </div>
                               <div>
                                  <div className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-1">100+</div>
                                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Clients Satisfaits</div>
                                  <p className="text-[10px] leading-tight text-muted-foreground/80">
                                    E-commerçants et marques qui nous font confiance.
                                  </p>
                               </div>
                            </div>
                         </div>

                         {/* Bottom Section - Chart & Live Feed */}
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full md:min-h-[140px]">
                            {/* Main Chart */}
                            <div className="col-span-1 md:col-span-2 bg-white rounded-2xl border border-black/5 shadow-sm p-5 relative overflow-hidden min-h-[140px]">
                               <div className="flex justify-between items-center mb-4">
                                  <div className="h-2 w-24 bg-slate-100 rounded-full" />
                                  <div className="h-2 w-12 bg-slate-100 rounded-full" />
                               </div>
                               <div className="flex items-end justify-between gap-2 h-[80px] md:h-[100px] w-full">
                                  {[45, 72, 38, 91, 55, 67, 82, 49, 75, 63, 88, 52].map((height, i) => (
                                    <motion.div 
                                      key={i}
                                      initial={{ height: "10%" }}
                                      animate={{ height: `${height}%` }}
                                      transition={{ duration: 2, delay: i * 0.05 }}
                                      className={`flex-1 rounded-t-md opacity-80 ${i % 2 === 0 ? 'bg-primary' : 'bg-primary/30'}`}
                                    />
                                  ))}
                               </div>
                            </div>

                            {/* Live Feed / Notification Area */}
                            <div className="col-span-1 bg-slate-50 rounded-2xl border border-black/5 p-4 flex flex-col gap-3 min-h-[140px]">
                               <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Live Feed</div>
                               {[1, 2].map((i) => (
                                  <div key={i} className="bg-white p-3 rounded-xl border border-black/5 shadow-sm flex gap-3 items-center">
                                     <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <ShoppingBag className="w-3 h-3" />
                                     </div>
                                     <div className="flex-1">
                                        <div className="h-1.5 w-12 bg-slate-200 rounded-full mb-1.5" />
                                        <div className="h-1.5 w-8 bg-slate-100 rounded-full" />
                                     </div>
                                  </div>
                               ))}
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

             </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
