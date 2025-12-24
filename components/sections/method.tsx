"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Audit & Stratégie",
    description: "Analyse approfondie de votre existant. Nous identifions les fuites dans votre funnel et définissons une feuille de route claire pour atteindre vos objectifs.",
  },
  {
    number: "02",
    title: "Setup & Tracking",
    description: "Configuration technique impeccable (GTM, CAPI, Pixel). Sans données fiables, pas de croissance. Nous construisons les fondations de votre scale.",
  },
  {
    number: "03",
    title: "Lancement & Optimisation",
    description: "Mise en ligne des campagnes. A/B testing constant des créas et des audiences. Nous coupons ce qui ne marche pas, nous scalons ce qui performe.",
  },
  {
    number: "04",
    title: "Scaling & Reporting",
    description: "Augmentation des budgets sur les segments rentables. Reporting transparent en temps réel. Vous savez exactement où va chaque euro.",
  },
];

export function MethodSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex items-center gap-12 px-4 md:px-24">
          
          {/* Intro Section - Fixed at start of scroll */}
          <div className="min-w-[90vw] md:min-w-[40vw] flex flex-col justify-center pr-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs font-medium mb-6 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-foreground" />
              PROCESSUS
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-6"
            >
              La Méthode <span className="text-muted-foreground">ODO</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Un framework rigoureux en 4 étapes pour transformer votre acquisition en machine de guerre.
            </motion.p>
          </div>

          {/* Steps Cards */}
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="group relative h-[450px] w-[85vw] md:w-[400px] flex-shrink-0 overflow-hidden rounded-3xl bg-secondary/5 border border-border/50 p-8 flex flex-col justify-between hover:bg-secondary/10 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <span className="text-6xl md:text-8xl font-bold font-mono text-muted-foreground/10 group-hover:text-primary/20 transition-colors duration-500 block mb-8">
                  {step.number}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
              </div>

              <div className="relative z-10">
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {step.description}
                </p>
                
                <div className="w-full h-[1px] bg-border/50 mt-8 group-hover:bg-primary/30 transition-colors duration-500" />
                <div className="flex items-center gap-2 mt-4 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  <span>En savoir plus</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
