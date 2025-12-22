import { Container } from "@/components/ui/container";

const companies = [
  { name: "TechStart", type: "circle" },
  { name: "GreenLife", type: "leaf" },
  { name: "NovaSoft", type: "square" },
  { name: "BlueWave", type: "wave" },
  { name: "UrbanStyle", type: "diamond" },
  { name: "Foodies", type: "circle" },
  { name: "FitPulse", type: "heart" },
  { name: "TravelGo", type: "plane" },
];

const LogoIcon = ({ type, className }: { type: string; className?: string }) => {
  switch (type) {
    case "circle":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="18" cy="6" r="3" className="opacity-50" />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2C7.5 2 4 5.5 4 10c0 4.5 3.5 8 8 12 4.5-4 8-7.5 8-12 0-4.5-3.5-8-8-8z" />
        </svg>
      );
    case "square":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <rect x="4" y="4" width="8" height="8" rx="2" />
          <rect x="12" y="12" width="8" height="8" rx="2" className="opacity-50" />
        </svg>
      );
    case "wave":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M2 12c3-3 6-3 9 0s6 3 9 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "diamond":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2L2 12l10 10 10-10L12 2z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2L2 22h20L12 2z" />
        </svg>
      );
  }
};

export function TrustedBySection() {
  return (
    <section className="py-12 border-b border-border/40 bg-background/50 backdrop-blur-sm overflow-hidden">
      <Container>
        <p className="text-center text-xs font-bold text-muted-foreground/60 uppercase tracking-widest mb-10">
          Ils scalent avec nous
        </p>
        <div className="relative flex w-full overflow-hidden mask-linear-gradient">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex animate-marquee gap-20 whitespace-nowrap py-2 items-center">
            {[...companies, ...companies, ...companies].map((company, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <LogoIcon type={company.type} className="h-8 w-8 text-foreground group-hover:text-primary transition-colors" />
                <span className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
