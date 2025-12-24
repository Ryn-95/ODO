import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background relative overflow-hidden">
      {/* Large Decorative Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 text-[20vw] font-bold font-heading text-primary/5 pointer-events-none select-none tracking-tighter leading-none">
        ODO
      </div>

      <Container className="py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-20">
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-bold font-heading tracking-tight text-primary">
              ODO
            </Link>
            <p className="text-base text-muted-foreground max-w-xs leading-relaxed">
              Agence de publicité performance-driven. <br/>
              Nous transformons vos dépenses publicitaires en revenus mesurables.
            </p>
          </div>
          
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground">Services</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/#services" className="group flex items-center gap-2 hover:text-primary transition-colors duration-300 w-fit">
                  Google Ads
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/#services" className="group flex items-center gap-2 hover:text-primary transition-colors duration-300 w-fit">
                  Meta Ads
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/#services" className="group flex items-center gap-2 hover:text-primary transition-colors duration-300 w-fit">
                  TikTok Ads
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link href="https://calendly.com/odo-veoremy/30min?month=2025-12" target="_blank" className="group flex items-center gap-2 hover:text-primary transition-colors duration-300 w-fit">
                  Audit Gratuit
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground">Agence</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/#about" className="group flex items-center gap-2 hover:text-primary transition-colors duration-300 w-fit">
                  À propos
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/#case-studies" className="group flex items-center gap-2 hover:text-primary transition-colors duration-300 w-fit">
                  Études de cas
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="group flex items-center gap-2 hover:text-primary transition-colors duration-300 w-fit">
                  Contact
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground">Légal</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-300">Mentions légales</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-300">Politique de confidentialité</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-300">CGV</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border/50 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ODO. Tous droits réservés.</p>
          <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:border-primary/50 transition-colors duration-300">
             <span className="text-xs font-medium opacity-70">Site conçu par</span>
             <Link href="https://www.9secondes.com/" target="_blank" className="text-sm font-bold text-primary hover:text-primary/80 transition-colors duration-300 flex items-center gap-1">
               9secondes.com
               <ArrowUpRight className="h-3 w-3" />
             </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
