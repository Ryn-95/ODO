"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Augmenter vos ventes grâce à la publicité",
    description: "Nous déployons des campagnes d'acquisition ultra-ciblées pour toucher vos clients idéaux au bon moment et maximiser votre volume de conversions.",
  },
  {
    number: "02",
    title: "Transformer vos visiteurs en clients",
    description: "Nous optimisons chaque étape de votre tunnel de vente. Landing pages, créas, copywriting : tout est calibré pour faire passer votre taux de conversion au niveau supérieur.",
  },
  {
    number: "03",
    title: "Scaler sans exploser vos coûts d’acquisition",
    description: "Notre structure de compte et nos stratégies d'enchères nous permettent d'augmenter les budgets tout en maintenant un ROAS stable et profitable.",
  },
  {
    number: "04",
    title: "Optimiser chaque euro investi",
    description: "Grâce à un tracking précis et des reportings transparents, nous coupons ce qui ne marche pas et réinvestissons uniquement sur ce qui génère du profit.",
  },
];

export function MethodSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <Container>
        {/* Intro Section */}
        <div className="mb-16 md:mb-24 max-w-3xl">
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

        {/* Grid Layout - Mobile Friendly */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-secondary/5 border border-border/50 p-8 md:p-10 flex flex-col justify-between hover:bg-secondary/10 transition-all duration-500 hover:border-primary/20"
            >
              <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-500" />
              
              <div className="relative z-10 mb-8">
                <span className="text-5xl md:text-6xl font-bold font-mono text-muted-foreground/10 group-hover:text-primary/20 transition-colors duration-500 block mb-6">
                  {step.number}
                </span>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {step.title}
                </h3>
              </div>

              <div className="relative z-10">
                <p className="text-muted-foreground leading-relaxed text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
