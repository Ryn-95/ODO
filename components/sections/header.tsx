"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navigation = [
  { name: "Services", href: "/#services" },
  { name: "Études de cas", href: "/#case-studies" },
  { name: "À propos", href: "/#about" },
  { name: "Contact", href: "/#contact" },
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
    ["rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.9)"]
  );
  
  const borderColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(229, 231, 235, 0.2)", "rgba(229, 231, 235, 0.6)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(8px)", "blur(16px)"]
  );

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.header 
        style={isOpen ? {
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(16px)",
          borderColor: "rgba(229, 231, 235, 0.6)"
        } : { 
          backgroundColor,
          backdropFilter: backdropBlur,
          borderColor
        }}
        className={cn(
          "w-full max-w-5xl border border-transparent shadow-lg transition-all duration-300",
          isOpen ? "rounded-3xl" : "rounded-full"
        )}
      >
        <div className="px-6 md:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center space-x-2 group">
                <span className="text-2xl font-bold font-heading text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">ODO</span>
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
              <Button asChild className="rounded-full px-6 h-10 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300 text-sm font-medium">
                <Link href="https://calendly.com/odo-veoremy/30min?month=2025-12" target="_blank">Audit Gratuit</Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="flex items-center justify-center rounded-full p-2 text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t border-border/10 bg-background/50 backdrop-blur-xl overflow-hidden rounded-b-3xl"
            >
              <div className="px-6 py-6">
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-base font-medium transition-colors hover:text-primary block py-2 px-4 rounded-lg",
                        pathname === item.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-primary/5"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button asChild className="w-full rounded-full h-10 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 mt-4">
                    <Link href="/contact">Audit Gratuit</Link>
                  </Button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
