"use client";

import { Container } from "@/components/ui/container";
import { Image as ImageIcon, TrendingUp, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Création de Publicités",
    description: "Nous produisons des visuels qui arrêtent le scroll. UGC, Motion Design, ou Statique : on teste, on itère, on gagne.",
    icon: ImageIcon,
    href: "/services",
  },
  {
    id: "02",
    title: "Gestion de Campagnes",
    description: "Pilotage quotidien de vos comptes Meta, Google & TikTok. Scaling agressif dès que le ROAS est validé.",
    icon: TrendingUp,
    href: "/services",
  },
  {
    id: "03",
    title: "Consulting & Stratégie",
    description: "Audit complet de votre funnel d'acquisition. On vous dit exactement où vous perdez de l'argent.",
    icon: User,
    href: "/services",
  },
];

export function ServicesSection() {
  return (
    <section className="py-12 md:py-20 bg-background relative z-10">
      <Container>
        <div className="mb-12 md:mb-20">
          <h2 className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest mb-4">Ce que nous faisons</h2>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-tight">
            Une approche <span className="text-primary">360°</span> <br />
            pour votre croissance.
          </p>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative border-t border-border py-8 md:py-16 transition-all hover:bg-secondary/30"
            >
              <Link href={service.href} className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2">
                  <span className="text-3xl font-heading font-bold text-muted-foreground/30 group-hover:text-primary transition-colors">
                    {service.id}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-2xl md:text-3xl font-bold font-heading group-hover:text-primary transition-colors flex items-center gap-3">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                    <ArrowRight className="h-5 w-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </Container>
    </section>
  );
}
