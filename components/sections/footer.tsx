import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <Container className="py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold font-heading text-primary">
              ODO
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Agence de publicité experte en Google Ads, Meta Ads et TikTok Ads.
              Nous propulsons votre croissance grâce à des stratégies d&apos;acquisition performantes.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">Google Ads</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">Meta Ads (Facebook/Instagram)</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">TikTok Ads</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">Audit Gratuit</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Agence</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">À propos</Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-primary transition-colors">Études de cas</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Légal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Mentions légales</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Politique de confidentialité</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">CGV</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ODO. Tous droits réservés.</p>
        </div>
      </Container>
    </footer>
  );
}
