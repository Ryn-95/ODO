"use client";

import { Container } from "@/components/ui/container";
import { TrendingUp, BarChart3, Rocket, Palette, Target, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "ROI Obsession",
    description: "Chaque euro investi doit rapporter. Nous coupons ce qui ne marche pas et scalons ce qui performe.",
    icon: TrendingUp,
    className: "md:col-span-2 md:row-span-2",
    variant: "primary",
  },
  {
    title: "Creative Studio",
    description: "Des visuels qui stoppent le scroll et convertissent.",
    icon: Palette,
    className: "md:col-span-1 md:row-span-1",
    variant: "secondary",
  },
  {
    title: "Data-Driven",
    description: "Pas d'intuition, que de la data précise.",
    icon: BarChart3,
    className: "md:col-span-1 md:row-span-1",
    variant: "secondary",
  },
  {
    title: "Scaling Rapide",
    description: "Accélération agressive une fois la rentabilité prouvée.",
    icon: Rocket,
    className: "md:col-span-1 md:row-span-1",
    variant: "secondary",
  },
  {
    title: "Ciblage Précis",
    description: "On trouve vos clients idéaux, où qu'ils soient.",
    icon: Target,
    className: "md:col-span-1 md:row-span-1",
    variant: "secondary",
  },
  {
    title: "Vitesse d'exécution",
    description: "Lancement de campagnes en 48h chrono.",
    icon: Zap,
    className: "md:col-span-2 md:row-span-1",
    variant: "outlined",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-12 md:py-20 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold font-heading tracking-tight md:text-5xl mb-4"
          >
            Pourquoi choisir ODO ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            Une approche radicalement différente des agences classiques.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 lg:gap-6 h-auto md:h-[600px]">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl p-6 lg:p-8 transition-all duration-300",
                benefit.className,
                benefit.variant === "primary"
                  ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20"
                  : benefit.variant === "outlined"
                  ? "bg-background/50 border-2 border-primary/10 hover:border-primary/30 backdrop-blur-sm"
                  : "bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-border/50 backdrop-blur-sm"
              )}
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div
                  className={cn(
                    "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110 duration-300",
                    benefit.variant === "primary"
                      ? "bg-white/20 text-white backdrop-blur-md"
                      : "bg-primary/10 text-primary"
                  )}
                >
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className={cn("text-xl font-bold font-heading mb-2", benefit.variant === "primary" ? "text-white" : "text-foreground")}>
                    {benefit.title}
                  </h3>
                  <p className={cn("text-sm leading-relaxed", benefit.variant === "primary" ? "text-primary-foreground/90" : "text-muted-foreground")}>
                    {benefit.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative gradient blob for primary card */}
              {benefit.variant === "primary" && (
                <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-blue-400/30 blur-3xl group-hover:bg-blue-300/40 transition-colors animate-pulse" />
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
