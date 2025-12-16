"use client";

import { Container } from "@/components/ui/container";
import { Check, User, TrendingUp, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
    popular: false,
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
    popular: true,
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
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-12 md:py-20 bg-secondary/20 relative overflow-hidden" id="tarifs">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-6">
            Investissez dans votre <span className="text-primary">ROI</span>.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Des tarifs transparents. Pas de frais cachés. Arrêtez quand vous voulez.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-7xl mx-auto items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-6 md:p-8 rounded-[2rem] border transition-all duration-300 hover:scale-[1.02] ${
                plan.popular
                  ? "bg-background border-primary/20 shadow-2xl shadow-primary/10 ring-1 ring-primary/20 z-10 md:-mt-8 md:mb-8"
                  : "bg-background/50 border-border/50 hover:bg-background hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg">
                  Le plus populaire
                </div>
              )}

              <div className="mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${plan.popular ? "bg-primary text-white" : "bg-secondary text-primary"}`}>
                   <plan.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed min-h-[40px]">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground font-medium ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                    <div className={`mt-0.5 rounded-full p-0.5 ${plan.popular ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                      <Check className="h-3 w-3" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full h-12 rounded-xl text-base font-bold ${plan.popular ? "shadow-lg shadow-primary/25" : ""}`}
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <Link href="/contact">
                  Choisir cette offre
                  {plan.popular && <ArrowRight className="ml-2 h-4 w-4" />}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
