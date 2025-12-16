import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Wallet } from "lucide-react";
import Link from "next/link";
import { CtaSection } from "@/components/sections/cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Études de Cas | ODO - Résultats & Performances",
  description: "Découvrez comment nous avons aidé nos clients à scaler leur business grâce à Google Ads, Meta Ads et TikTok Ads.",
};

const caseStudies = [
  {
    title: "E-commerce Mode : x4 ROAS en 3 mois",
    client: "Marque de Prêt-à-porter",
    description: "Comment nous avons restructuré le compte Google Ads et lancé une stratégie TikTok Ads agressive pour une marque de vêtements.",
    results: [
      { label: "ROAS", value: "4.2", icon: Wallet },
      { label: "CA généré", value: "+120k€", icon: TrendingUp },
      { label: "CPA", value: "-35%", icon: Users },
    ],
    tags: ["Google Ads", "TikTok Ads", "E-commerce"],
    href: "/contact", // In a real app, this would link to a detailed case study page
  },
  {
    title: "SaaS B2B : +200% de leads qualifiés",
    client: "Logiciel RH",
    description: "Mise en place d'une stratégie LinkedIn Ads et Google Search pour capter des décideurs RH.",
    results: [
      { label: "Leads/mois", value: "+200%", icon: Users },
      { label: "Coût/Lead", value: "-20%", icon: Wallet },
      { label: "Taux Conv.", value: "5.8%", icon: TrendingUp },
    ],
    tags: ["Google Ads", "LinkedIn Ads", "B2B"],
    href: "/contact",
  },
  {
    title: "Formation en ligne : Scaling à 50k€/mois",
    client: "Organisme de Formation",
    description: "Scaling horizontal sur Facebook & Instagram Ads pour vendre des formations CPF.",
    results: [
      { label: "Budget", value: "x5", icon: Wallet },
      { label: "ROAS", value: "3.5", icon: TrendingUp },
      { label: "Inscrits", value: "+450", icon: Users },
    ],
    tags: ["Meta Ads", "Formation", "Scaling"],
    href: "/contact",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-muted/30 py-20 md:py-32">
        <Container className="text-center">
          <h1 className="text-4xl font-bold font-heading tracking-tight sm:text-5xl md:text-6xl mb-6">
            Nos Résultats
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous ne vendons pas du rêve, nous vendons de la performance. Découvrez les résultats obtenus pour nos clients.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <CardTitle className="font-heading text-xl">{study.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{study.client}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-6">{study.description}</p>
                  <div className="grid grid-cols-3 gap-2 border-t border-border pt-4">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <div className="flex justify-center mb-1 text-primary">
                          <result.icon className="h-4 w-4" />
                        </div>
                        <p className="font-bold text-lg">{result.value}</p>
                        <p className="text-xs text-muted-foreground">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full group" asChild>
                    <Link href={study.href}>
                      Lire l&apos;étude de cas
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </div>
  );
}
