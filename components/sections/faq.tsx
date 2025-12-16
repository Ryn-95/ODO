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
    <section className="py-12 md:py-20 bg-background relative z-10">
      <Container className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight md:text-5xl mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-muted-foreground text-lg">
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
                "rounded-2xl border transition-all duration-300 overflow-hidden",
                openIndex === i
                  ? "border-primary/50 bg-primary/5 shadow-lg shadow-primary/5"
                  : "border-border/50 bg-white/50 hover:border-primary/30 hover:bg-white/80"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className={cn("text-lg font-bold font-heading transition-colors", openIndex === i ? "text-primary" : "text-foreground")}>
                  {faq.question}
                </span>
                <div className={cn("rounded-full p-1 transition-all duration-300", openIndex === i ? "bg-primary text-white rotate-180" : "bg-muted text-muted-foreground")}>
                  {openIndex === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
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
