"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

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
    <section className="py-12 md:py-20 bg-secondary/30 overflow-hidden relative">
      <Container>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold font-heading text-center mb-12 md:mb-16 tracking-tight md:text-5xl"
        >
          Ils ont <span className="text-primary">scalé</span> avec nous
        </motion.h2>
      </Container>
      
      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-secondary/30 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-secondary/30 to-transparent pointer-events-none" />
        
        <div className="flex animate-marquee gap-6 whitespace-normal py-4 pl-4">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] flex flex-col rounded-2xl bg-background p-8 shadow-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 flex gap-1 text-primary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="flex-1 text-foreground/80 italic text-lg leading-relaxed mb-6">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold font-heading text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
