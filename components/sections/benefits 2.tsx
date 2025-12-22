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
    variant: "default",
  },
  {
    title: "Data-Driven",
    description: "Pas d'intuition, que de la data précise.",
    icon: BarChart3,
    className: "md:col-span-1 md:row-span-1",
    variant: "default",
  },
  {
    title: "Scaling Rapide",
    description: "Accélération agressive une fois la rentabilité prouvée.",
    icon: Rocket,
    className: "md:col-span-1 md:row-span-1",
    variant: "default",
  },
  {
    title: "Ciblage Précis",
    description: "On trouve vos clients idéaux, où qu'ils soient.",
    icon: Target,
    className: "md:col-span-1 md:row-span-1",
    variant: "default",
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
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6"
          >
            Pourquoi choisir <span className="text-primary">ODO</span> ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground"
          >
            Une approche radicalement différente des agences classiques.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[600px]">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl p-8 transition-all duration-300",
                benefit.className,
                benefit.variant === "primary"
                  ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/30"
                  : "bg-background border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
              )}
            >
              {/* Card Hover Gradient for non-primary */}
              {benefit.variant !== "primary" && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div
                  className={cn(
                    "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 duration-500",
                    benefit.variant === "primary"
                      ? "bg-white/20 text-white backdrop-blur-sm"
                      : "bg-primary/10 text-primary"
                  )}
                >
                  <benefit.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className={cn("text-2xl font-bold font-heading mb-3", benefit.variant === "primary" ? "text-white" : "text-foreground")}>
                    {benefit.title}
                  </h3>
                  <p className={cn("text-base leading-relaxed", benefit.variant === "primary" ? "text-white/90" : "text-muted-foreground group-hover:text-foreground/80 transition-colors")}>
                    {benefit.description}
                  </p>
                </div>
              </div>
              
              {/* Subtle Texture for Primary Card */}
              {benefit.variant === "primary" && (
                <>
                  <div className="absolute inset-0 bg-noise opacity-20 mix-blend-soft-light" />
                  <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/20 blur-[80px] rounded-full pointer-events-none" />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
