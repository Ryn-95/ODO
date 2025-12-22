"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Quel budget faut-il pour commencer ?",
    answer: "Nous recommandons un budget média minimum de 1500€/mois pour obtenir des résultats significatifs et permettre à nos algorithmes d'apprendre efficacement. En dessous, l'apprentissage est trop lent.",
  },
  {
    question: "Combien de temps avant de voir les résultats ?",
    answer: "Les premiers résultats sont visibles dès les premiers jours (clics, trafic), mais la phase d'optimisation optimale prend généralement 1 à 3 mois pour atteindre un rythme de croisière (ROAS stable).",
  },
  {
    question: "Êtes-vous certifiés Google & Meta ?",
    answer: "Oui, nous sommes Google Partner Premier et Meta Business Partner. Cela nous garantit une expertise à jour, un support dédié et un accès privilégié aux nouvelles fonctionnalités en bêta.",
  },
  {
    question: "Puis-je arrêter quand je veux ?",
    answer: "Absolument. Nous travaillons sans engagement de durée. Si nous ne sommes pas performants, vous ne devriez pas rester. C'est notre meilleure motivation pour vous satisfaire.",
  },
  {
    question: "Faites-vous aussi les créas (images/vidéos) ?",
    answer: "Oui ! C'est même 80% de la réussite aujourd'hui. Nous avons un studio créatif interne qui produit des UGC, des vidéos motion design et des visuels statiques optimisés pour la conversion.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background relative z-10 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-6">
            Questions Fréquentes
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de scaler.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={cn(
                "group rounded-3xl border transition-all duration-500 overflow-hidden relative",
                openIndex === i
                  ? "border-primary/40 bg-background shadow-2xl shadow-primary/10"
                  : "border-border/50 bg-background/50 hover:border-primary/20 hover:bg-primary/5"
              )}
            >
              {openIndex === i && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />
              )}
              
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="relative flex w-full items-center justify-between p-6 md:p-8 text-left z-10"
              >
                <div className="flex items-center gap-6">
                  <span className={cn(
                    "text-2xl font-mono font-bold transition-colors duration-300 hidden md:block",
                    openIndex === i ? "text-primary/20" : "text-muted-foreground/10 group-hover:text-primary/20"
                  )}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={cn(
                    "text-lg md:text-xl font-bold font-heading transition-colors duration-300", 
                    openIndex === i ? "text-primary" : "text-foreground group-hover:text-primary"
                  )}>
                    {faq.question}
                  </span>
                </div>
                
                <div className={cn(
                  "flex-shrink-0 rounded-full p-2 transition-all duration-500 border ml-4", 
                  openIndex === i 
                    ? "bg-primary text-primary-foreground border-primary rotate-180 shadow-[0_0_15px_rgba(37,99,235,0.4)]" 
                    : "bg-transparent text-muted-foreground border-border group-hover:border-primary/50 group-hover:text-primary"
                )}>
                  {openIndex === i ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="relative z-10"
                  >
                    <div className="p-6 md:p-8 pt-0 pl-6 md:pl-[5.5rem] text-muted-foreground leading-relaxed text-lg max-w-3xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
