"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="py-12 md:py-20">
      <Container>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-primary px-6 py-12 md:px-20 md:py-24 text-center shadow-2xl shadow-blue-500/30"
        >
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6 md:space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold font-heading tracking-tight md:text-5xl lg:text-6xl text-white"
            >
              Prêt à faire décoller <br/> vos ventes ?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
            >
              Ne laissez pas vos concurrents prendre vos parts de marché. Obtenez votre plan d&apos;action personnalisé et commencez à scaler dès aujourd&apos;hui.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105" asChild>
                <Link href="/contact">
                  Demander mon Audit Gratuit
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold rounded-xl bg-transparent border-2 border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40" asChild>
                <Link href="/case-studies">
                  Voir nos résultats
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-sm text-blue-200 mt-6"
            >
              Réponse sous 24h • Sans engagement
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
