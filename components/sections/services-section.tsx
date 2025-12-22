"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, TrendingUp, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-background p-8 transition-colors duration-300",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(37,99,235,0.1), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="py-24 bg-secondary/30 relative z-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <Container>
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-sm"
          >
             <span className="text-xs font-bold text-primary uppercase tracking-widest">Notre Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6"
          >
            Une approche <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">360°</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground leading-relaxed text-balance"
          >
            Nous combinons créativité data-driven et stratégie d&apos;acquisition agressive pour scaler votre business.
          </motion.p>
        </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 - Creative (Large) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 min-h-[320px]"
            >
              <SpotlightCard className="h-full group">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <ImageIcon className="w-40 h-40 -rotate-12" />
                 </div>
                 
                 <div className="flex flex-col justify-between h-full relative z-10">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        <ImageIcon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 font-heading">Studio Créatif</h3>
                      <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                        Des visuels qui stoppent le scroll. UGC, Motion Design, ou Statique : nous produisons des créas optimisées pour la performance.
                      </p>
                    </div>
                    
                    {/* Visual Representation */}
                    <div className="flex gap-4 mt-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                       <div className="h-24 w-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl -rotate-6 transform group-hover:-translate-y-2 transition-transform border border-primary/10 backdrop-blur-sm" />
                       <div className="h-24 w-16 bg-gradient-to-br from-primary/40 to-primary/10 rounded-xl rotate-3 z-10 transform group-hover:-translate-y-4 transition-transform delay-75 border border-primary/20 backdrop-blur-sm" />
                       <div className="h-24 w-16 bg-gradient-to-br from-primary to-primary/60 rounded-xl -rotate-2 transform group-hover:-translate-y-2 transition-transform delay-150 shadow-lg shadow-primary/20" />
                    </div>
                 </div>
              </SpotlightCard>
            </motion.div>

            {/* Card 2 - Media Buying (Standard) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-1 min-h-[320px]"
            >
              <SpotlightCard className="h-full group">
                 <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        <TrendingUp className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 font-heading">Media Buying</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Pilotage expert de vos campagnes Meta, Google & TikTok.
                      </p>
                    </div>
                    <div className="mt-8 bg-background/50 p-4 rounded-xl border border-border/50">
                       <div className="flex justify-between text-sm mb-2 font-medium">
                          <span>ROAS Target</span>
                          <span className="text-primary">4.0x+</span>
                       </div>
                       <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "85%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]" 
                          />
                       </div>
                    </div>
                 </div>
              </SpotlightCard>
            </motion.div>

            {/* Card 3 - Tracking (Standard) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-1 min-h-[320px]"
            >
               <SpotlightCard className="h-full group">
                  <div className="flex flex-col justify-between h-full">
                     <div>
                       <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                         <div className="relative">
                           <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full animate-pulse" />
                           <TrendingUp className="w-7 h-7 text-primary relative z-10" />
                         </div>
                       </div>
                       <h3 className="text-2xl font-bold mb-3 font-heading">Tracking CAPI</h3>
                       <p className="text-muted-foreground leading-relaxed">
                         Installation serveur-to-serveur pour remonter 100% des conversions.
                       </p>
                     </div>
                     <div className="mt-4 flex gap-2">
                        <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold border border-green-500/20">GTM</div>
                        <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold border border-blue-500/20">GA4</div>
                     </div>
                  </div>
               </SpotlightCard>
            </motion.div>

            {/* Card 4 - Consulting (Large) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-2 min-h-[320px] relative group overflow-hidden rounded-3xl border border-primary bg-primary text-primary-foreground p-8 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500"
            >
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
               <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-white/30 transition-colors duration-500" />
               
               <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
                      <User className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-3 font-heading text-white">Consulting Stratégique</h3>
                    <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-lg">
                      Audit complet de votre funnel. Nous identifions les points de friction et débloquons votre croissance.
                    </p>
                    <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary transition-all rounded-full px-8 h-12 text-base font-medium backdrop-blur-sm" asChild>
                       <a href="/contact">
                         Réserver un audit <ArrowRight className="ml-2 h-4 w-4" />
                       </a>
                    </Button>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="hidden md:block relative w-48 h-48">
                    <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-4 border-2 border-white/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <span className="text-4xl font-bold text-white">ODO</span>
                    </div>
                  </div>
               </div>
            </motion.div>

          </div>
      </Container>
    </section>
  );
}
