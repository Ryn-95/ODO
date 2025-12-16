import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/sections/cta";
import { Target, Users, Zap, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos | ODO - Notre Mission",
  description: "Agence de publicité digitale orientée performance. Nous aidons les entreprises ambitieuses à scaler grâce à la publicité en ligne.",
};

const values = [
  {
    title: "Performance",
    description: "Nous sommes obsédés par le ROI. Chaque action doit avoir un impact mesurable sur votre business.",
    icon: Zap,
  },
  {
    title: "Transparence",
    description: "Pas de frais cachés, pas de jargon incompréhensible. Vous avez accès à tout et comprenez tout.",
    icon: ShieldCheck,
  },
  {
    title: "Expertise",
    description: "Nous restons à la pointe de l'innovation publicitaire pour vous donner une longueur d'avance.",
    icon: Target,
  },
  {
    title: "Partenariat",
    description: "Nous ne sommes pas juste des prestataires, mais des partenaires de votre croissance à long terme.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-muted/30 py-20 md:py-32">
        <Container className="text-center">
          <h1 className="text-4xl font-bold font-heading tracking-tight sm:text-5xl md:text-6xl mb-6">
            Notre Mission
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aider les entreprises ambitieuses à atteindre leur plein potentiel grâce à une publicité en ligne intelligente et rentable.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">Pourquoi ODO ?</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Le paysage publicitaire digital est devenu complexe. Les coûts augmentent, le tracking se durcit, et la concurrence est féroce.
                </p>
                <p>
                  Beaucoup d&apos;agences se contentent de &quot;gérer&quot; des campagnes. Chez ODO, nous les <strong>pilotons</strong>. Nous allions expertise technique pointue, créativité stratégique et obsession de la data pour générer de la croissance.
                </p>
                <p>
                  Notre nom, ODO, symbolise le chemin et le voyage. Nous sommes le guide qui vous mène vers vos objectifs de croissance les plus ambitieux.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-primary/5 rounded-2xl flex items-center justify-center">
                <span className="text-9xl font-bold text-primary/10">ODO</span>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-center mb-12">Nos Valeurs</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-background">
                  <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaSection />
    </div>
  );
}
