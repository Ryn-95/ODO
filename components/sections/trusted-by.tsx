import { Container } from "@/components/ui/container";

const companies = [
  "TechStart",
  "GreenLife",
  "NovaSoft",
  "BlueWave",
  "UrbanStyle",
  "Foodies",
  "FitPulse",
  "TravelGo",
];

export function TrustedBySection() {
  return (
    <section className="py-8 md:py-10 border-y border-border/40 bg-muted/20 overflow-hidden">
      <Container>
        <p className="text-center text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6 md:mb-8">
          Ils nous font confiance pour scaler
        </p>
        <div className="relative flex w-full overflow-hidden mask-linear-gradient">
          <div className="flex animate-marquee gap-12 whitespace-nowrap py-2">
            {[...companies, ...companies, ...companies].map((company, i) => (
              <div
                key={i}
                className="text-2xl font-bold text-muted-foreground/50 flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 hover:text-primary cursor-default"
              >
                {/* Placeholder Icon */}
                <div className="h-8 w-8 rounded-full bg-current opacity-20" />
                <span>{company}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
