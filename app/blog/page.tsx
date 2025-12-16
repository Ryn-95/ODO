import { Container } from "@/components/ui/container";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CtaSection } from "@/components/sections/cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog ODO | Conseils & Stratégies Publicitaires",
  description: "Nos meilleurs conseils pour optimiser vos campagnes Google Ads, Facebook Ads et TikTok Ads. Veille, tutos et études de cas.",
};

const posts = [
  {
    title: "Guide complet : Scaling TikTok Ads en 2024",
    excerpt: "Découvrez les stratégies qui fonctionnent aujourd'hui pour scaler vos campagnes TikTok sans tuer votre ROAS.",
    date: "15 Mai 2024",
    category: "TikTok Ads",
    slug: "guide-scaling-tiktok-ads",
  },
  {
    title: "Google Ads Performance Max : Le guide ultime",
    excerpt: "Comment tirer profit de l'automatisation de Google sans perdre le contrôle de vos budgets.",
    date: "02 Mai 2024",
    category: "Google Ads",
    slug: "guide-performance-max",
  },
  {
    title: "Pourquoi vos publicités Facebook ne convertissent plus ?",
    excerpt: "Analyse des changements d'algorithme et solutions concrètes pour relancer vos performances.",
    date: "20 Avril 2024",
    category: "Meta Ads",
    slug: "facebook-ads-conversion",
  },
  {
    title: "Tracking Server-Side (CAPI) : Pourquoi c'est obligatoire",
    excerpt: "La fin des cookies tiers approche. Voici comment sécuriser vos données avec le tracking server-side.",
    date: "10 Avril 2024",
    category: "Tracking",
    slug: "tracking-server-side",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-muted/30 py-20 md:py-32">
        <Container className="text-center">
          <h1 className="text-4xl font-bold font-heading tracking-tight sm:text-5xl md:text-6xl mb-6">
            Le Blog ODO
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Conseils, stratégies et analyses de nos experts pour booster vos performances.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full transition-colors hover:border-primary/50">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <CardTitle className="font-heading group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <span className="text-sm font-medium text-primary underline-offset-4 group-hover:underline">
                      Lire l&apos;article
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </div>
  );
}
