import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/sections/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez ODO | Audit Gratuit de vos Campagnes",
  description: "Discutons de vos objectifs de croissance. Demandez votre audit gratuit Google Ads, Meta Ads ou TikTok Ads.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-muted/30 py-20 md:py-32">
        <Container className="text-center">
          <h1 className="text-4xl font-bold font-heading tracking-tight sm:text-5xl md:text-6xl mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discutez de votre projet avec un de nos experts et obtenez un audit gratuit.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">Parlons de votre projet</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Notre équipe d&apos;experts est prête à analyser vos comptes publicitaires et à identifier les opportunités de croissance inexploitées.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">hello@odo.fr</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Téléphone</h3>
                    <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Bureaux</h3>
                    <p className="text-muted-foreground">123 Avenue des Champs-Élysées<br />75008 Paris, France</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
