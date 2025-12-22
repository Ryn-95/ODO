"use client";

import { Container } from "@/components/ui/container";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" ref={containerRef}>
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
      
      <Container>
        <div className="mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs font-medium mb-6"
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-[3.25rem] left-[10%] w-[80%] h-[2px]">
             <div className="absolute inset-0 border-t-2 border-dashed border-border" />
             <motion.div 
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="absolute inset-0 border-t-2 border-dashed border-primary origin-left"
             />
          </div>
          
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Step Number with glow effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mx-auto w-24 h-24 mb-8 bg-background border border-border rounded-full flex items-center justify-center z-10 group-hover:border-primary/50 transition-colors duration-500 shadow-lg shadow-black/5"
              >
                <div className="absolute inset-2 rounded-full border border-border/50 group-hover:border-primary/20 transition-colors" />
                <span className="text-2xl font-bold font-mono text-muted-foreground group-hover:text-primary transition-colors">
                  {step.number}
                </span>
                {/* Active Dot */}
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.6)] scale-0 group-hover:scale-100 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
