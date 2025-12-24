import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { PricingSection } from "@/components/sections/pricing";
import { MethodSection } from "@/components/sections/method";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { TrustedBySection } from "@/components/sections/trusted-by";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustedBySection />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="about">
        <MethodSection />
      </div>
      <PricingSection />
      <div id="case-studies">
        <TestimonialsSection />
      </div>
      <FaqSection />
      <div id="contact">
        <CtaSection />
      </div>
    </div>
  );
}
