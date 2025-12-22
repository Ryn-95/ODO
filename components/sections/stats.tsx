"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";

const stats = [
  {
    value: 50,
    suffix: "M€+",
    label: "Budget Géré",
    description: "De dépenses publicitaires rentables pilotées par nos équipes."
  },
  {
    value: 4.5,
    suffix: "x",
    label: "ROAS Moyen",
    description: "Retour sur investissement publicitaire moyen sur nos comptes actifs.",
    decimals: 1
  },
  {
    value: 100,
    suffix: "+",
    label: "Clients Satisfaits",
    description: "E-commerçants et marques qui nous font confiance pour leur croissance."
  }
];

function Counter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimals);
      }
    });
  }, [springValue, decimals]);

  return <span ref={ref} />;
}

export function StatsSection() {
  return (
    <section className="py-24 border-b border-border/40 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center p-8 rounded-3xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group overflow-hidden hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/20 rounded-tl-3xl transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/20 rounded-br-3xl transition-all duration-500" />

              <div className="relative z-10">
                <div className="flex items-baseline justify-center text-5xl md:text-7xl font-bold font-heading text-foreground mb-4 tracking-tight drop-shadow-sm group-hover:text-primary transition-colors duration-500">
                  <Counter value={stat.value} decimals={stat.decimals} />
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>
                <p className="text-muted-foreground/80 text-sm max-w-[240px] mx-auto leading-relaxed group-hover:text-muted-foreground transition-colors duration-300">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
