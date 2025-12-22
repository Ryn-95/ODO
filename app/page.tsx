import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { PricingSection } from "@/components/sections/pricing";
import { MethodSection } from "@/components/sections/method";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { TrustedBySection } from "@/components/sections/trusted-by";
import { StatsSection } from "@/components/sections/stats";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustedBySection />
      <StatsSection />
      <ServicesSection />
      <MethodSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
