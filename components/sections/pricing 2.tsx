"use client";

import { Container } from "@/components/ui/container";
import { Check, User, TrendingUp, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "49,99€",
    period: "/mois",
    description: "Pour les entrepreneurs qui veulent tester la publicité.",
    features: [
      "1 campagne simple",
      "Création d'ads basique",
      "Suivi mensuel",
      "Support par email",
    ],
    icon: User,
    highlight: false,
  },
  {
    name: "Scaling",
    price: "289,99€",
    period: "/mois",
    description: "L'offre standard pour croître rapidement.",
    features: [
      "Gestion multi-canal",
      "Publicités créatives illimitées",
      "A/B Testing continu",
      "Reporting hebdomadaire",
      "Slack dédié",
    ],
    icon: TrendingUp,
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "499€",
    period: "/mois",
    description: "Pour les marques établies qui veulent dominer.",
    features: [
      "Tout inclus (Scaling)",
      "Studio Créatif dédié (UGC + Motion)",
      "Optimisation CRO du site",
      "Assistance prioritaire 24/7",
      "Consulting Stratégique",
    ],
    icon: Zap,
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" id="tarifs">
      <Container className="relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-6"
          >
            Investissez dans votre <span className="text-muted-foreground">ROI</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground"
          >
            Des tarifs transparents. Pas de frais cachés. Arrêtez quand vous voulez.
          </motion.p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-7xl mx-auto items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={cn(
                "relative flex flex-col p-8 rounded-3xl border transition-all duration-300",
                plan.highlight
                  ? "bg-primary text-primary-foreground border-primary shadow-2xl shadow-primary/30 md:-mt-8 md:mb-8 py-12"
                  : "bg-background border-border hover:border-primary/20"
              )}
            >
              <div className="mb-8">
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center mb-6",
                  plan.highlight ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                )}>
                   <plan.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-2">{plan.name}</h3>
                <p className={cn("text-sm leading-relaxed min-h-[40px]", plan.highlight ? "text-primary-foreground/90" : "text-muted-foreground")}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-5xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                  <span className={cn("font-medium ml-2", plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground")}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-medium">
                    <div className={cn(
                      "mt-0.5 rounded-full p-0.5",
                      plan.highlight ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                    )}>
                      <Check className="h-3 w-3" />
                    </div>
                    <span className={plan.highlight ? "text-primary-foreground/90" : "text-foreground/80"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={cn(
                  "w-full h-12 rounded-full text-base font-bold transition-all hover:scale-105",
                  plan.highlight 
                    ? "bg-white text-primary hover:bg-white/90" 
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
                asChild
              >
                <Link href="/contact">
                  Choisir cette offre
                  {plan.highlight && <ArrowRight className="ml-2 h-4 w-4" />}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
