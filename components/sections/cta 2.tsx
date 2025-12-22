"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="py-24">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden bg-primary text-primary-foreground px-6 py-20 md:px-20 md:py-32 text-center shadow-2xl shadow-primary/30"
        >
          {/* Subtle Noise Texture */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay pointer-events-none" />
          
          {/* Subtle Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold font-heading tracking-tight md:text-7xl text-white"
            >
              Prêt à scaler ?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed"
            >
              Ne laissez pas vos concurrents prendre vos parts de marché. Obtenez votre plan d&apos;action et commencez à dominer.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Button size="lg" className="h-16 px-10 text-lg font-bold rounded-full bg-white text-primary hover:bg-white/90 transition-all hover:scale-105 shadow-xl" asChild>
                <Link href="/contact">
                  Audit Gratuit
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold rounded-full bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 transition-all" asChild>
                <Link href="/case-studies">
                  Nos Résultats
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
