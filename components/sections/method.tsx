import { Container } from "@/components/ui/container";

const steps = [
  {
    number: "01",
    title: "Audit & Stratégie",
    description: "Analyse approfondie de votre existant, définition des KPIs et élaboration d'une feuille de route sur-mesure.",
  },
  {
    number: "02",
    title: "Setup & Tracking",
    description: "Configuration technique impeccable (GTM, Pixel, API CAPI) pour garantir la fiabilité des données.",
  },
  {
    number: "03",
    title: "Lancement & Optimisation",
    description: "Mise en ligne des campagnes et ajustements quotidiens pour maximiser le ROAS.",
  },
  {
    number: "04",
    title: "Scaling & Reporting",
    description: "Augmentation progressive des budgets sur les segments rentables et reporting transparent.",
  },
];

export function MethodSection() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl md:text-5xl">
            La Méthode ODO
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Un processus rigoureux en 4 étapes pour garantir le succès de vos campagnes.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative pt-8">
              <div className="absolute top-0 left-0 text-6xl font-bold text-primary/10 font-heading -z-10">
                {step.number}
              </div>
              <h3 className="text-xl font-bold font-heading mt-4">{step.title}</h3>
              <p className="mt-3 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
