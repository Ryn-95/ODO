"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Depuis que nous travaillons avec ODO, notre coût d'acquisition a baissé de 40% tout en doublant le volume de leads. C'est juste bluffant.",
    author: "Thomas D.",
    role: "CMO, SaaS B2B",
    initials: "TD",
  },
  {
    quote: "Une expertise rare sur TikTok Ads. Ils ont su créer des créas UGC qui convertissent vraiment. On a fait x3 en 2 mois.",
    author: "Sarah L.",
    role: "Fondatrice, E-commerce Mode",
    initials: "SL",
  },
  {
    quote: "Transparents, réactifs et orientés résultats. Enfin une agence qui ne se cache pas derrière des vanity metrics.",
    author: "Marc B.",
    role: "Directeur Marketing, Retail",
    initials: "MB",
  },
  {
    quote: "L'équipe est super proactive. Ils proposent sans cesse de nouveaux angles d'attaque pour nos pubs Facebook.",
    author: "Julie R.",
    role: "CEO, App Mobile",
    initials: "JR",
  },
  {
    quote: "On a testé 3 agences avant eux. ODO est la seule qui a réussi à rentabiliser nos campagnes Google Ads.",
    author: "Karim H.",
    role: "Gérant, Service Local",
    initials: "KH",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden relative border-t border-border/50">
      <Container>
        <div className="text-center mb-16 md:mb-24 max-w-2xl mx-auto">
           <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
             <div className="flex items-center justify-center gap-1">
               {[1, 2, 3, 4, 5].map((i) => (
                 <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
               ))}
             </div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6"
          >
            Ils ont scalé avec <span className="text-muted-foreground">nous</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground"
          >
            La confiance ne se demande pas, elle se gagne par les résultats.
          </motion.p>
        </div>
      </Container>
      
      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        
        <div className="flex animate-marquee gap-8 whitespace-normal py-4 pl-4">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[350px] md:w-[400px] flex flex-col rounded-3xl bg-background/50 backdrop-blur-sm p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group"
            >
              <div className="mb-6 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="flex-1 text-foreground text-lg font-medium leading-relaxed mb-8 group-hover:text-primary/90 transition-colors">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg ring-2 ring-primary/20">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold font-heading">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
