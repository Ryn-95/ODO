import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Search, Facebook, Video } from "lucide-react";
import Link from "next/link";
import { CtaSection } from "@/components/sections/cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services | ODO - Agence Ads Performance",
  description: "Découvrez nos expertises en Google Ads, Meta Ads et TikTok Ads. Des stratégies d'acquisition sur-mesure pour scaler votre business.",
};

const services = [
  {
    id: "google-ads",
    title: "Google Ads",
    description: "Le levier incontournable pour capter l'intention d'achat.",
    icon: Search,
    content: "Nous optimisons vos campagnes Search, Shopping, YouTube et Display pour maximiser votre ROAS. Notre approche granulaire (SKAG/STAG) permet de réduire vos coûts d'acquisition tout en augmentant le volume de conversions qualifiées.",
    features: [
      "Audit complet de compte",
      "Restructuration de campagnes",
      "Optimisation du Quality Score",
      "Gestion des enchères automatisée",
      "Suivi des conversions avancé (GTM/GA4)",
      "Campagnes Performance Max"
    ]
  },
  {
    id: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    description: "Ciblez votre audience idéale là où elle passe son temps.",
    icon: Facebook,
    content: "Une stratégie créative forte couplée à une structure de compte rigoureuse. Nous testons continuellement de nouveaux angles marketing et formats publicitaires pour lutter contre la fatigue publicitaire et scaler vos résultats.",
    features: [
      "Stratégie créative & Copywriting",
      "A/B Testing rigoureux",
      "Retargeting dynamique (DPA)",
      "Scaling horizontal & vertical",
      "Configuration Pixel & API CAPI",
      "Analyse des cohortes"
    ]
  },
  {
    id: "tiktok-ads",
    title: "TikTok Ads",
    description: "La plateforme virale pour une croissance explosive.",
    icon: Video,
    content: "Ne manquez pas le train TikTok. Nous créons des campagnes qui s'intègrent naturellement dans le feed des utilisateurs pour générer de l'engagement et des ventes. Une approche 'TikTok-native' indispensable pour performer.",
    features: [
      "Création de contenu UGC",
      "Gestion des Spark Ads",
      "Collaborations influenceurs",
      "Tracking Pixel avancé",
      "Stratégie full-funnel",
      "Veille de tendances"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-muted/30 py-20 md:py-32">
        <Container className="text-center">
          <h1 className="text-4xl font-bold font-heading tracking-tight sm:text-5xl md:text-6xl mb-6">
            Nos Expertises Ads
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous maîtrisons les leviers d&apos;acquisition les plus puissants du marché pour propulser votre croissance.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid gap-12 lg:grid-cols-2 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold font-heading mb-4">{service.title}</h2>
                  <p className="text-xl text-muted-foreground mb-6">{service.description}</p>
                  <p className="text-foreground/80 mb-8 leading-relaxed">
                    {service.content}
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/contact">Demander un audit {service.title}</Link>
                    </Button>
                  </div>
                </div>
                <div className={`bg-muted rounded-2xl aspect-video lg:aspect-square flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  {/* Placeholder for service illustration */}
                  <div className="text-muted-foreground text-sm">Illustration {service.title}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </div>
  );
}
