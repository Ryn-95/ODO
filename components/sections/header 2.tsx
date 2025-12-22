"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Études de cas", href: "/case-studies" },
  { name: "À propos", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );
  
  const borderOpacity = useTransform(
    scrollY,
    [0, 50],
    [0, 0.4]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header 
      style={{ 
        backgroundColor,
        backdropFilter: backdropBlur,
        borderBottomColor: `rgba(229, 231, 235, ${borderOpacity.get()})`
      }}
      className="sticky top-0 z-50 w-full transition-all duration-300"
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-3xl font-bold font-heading text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">ODO</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative z-10 py-2",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
                {pathname === item.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-primary"
                  />
                )}
                <div className="absolute left-0 right-0 -bottom-1 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
            <Button asChild className="rounded-full px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300 text-base font-medium">
              <Link href="/contact">Audit Gratuit</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center justify-center rounded-full p-3 text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-b border-border/40 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <Container className="py-8">
              <nav className="flex flex-col space-y-6">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary block py-2 border-l-2 pl-4",
                      pathname === item.href
                        ? "text-primary border-primary"
                        : "text-muted-foreground border-transparent hover:border-primary/30"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="w-full rounded-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                  <Link href="/contact">Audit Gratuit</Link>
                </Button>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
