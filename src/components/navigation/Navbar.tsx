"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";
import { NAVBAR_ITEMS } from "@/constants/navigation";
import Image from "next/image";


export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScroll(12);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(href + "/");
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 border-b",
        scrolled
          ? "bg-bg-panel/85 backdrop-blur-md border-border-active shadow-sm"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo sits on the left */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3">
  <Image
    src="/logo.jpg"
    alt="Stone Circuit"
    width={40}
    height={40}
    priority
  />

  <span className="font-bold text-xl">
    Stone Circuit
  </span>
</Link>

          {/* Desktop minimal nav links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {NAVBAR_ITEMS.map((item) => {
              const active = isLinkActive(item.href);
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200",
                    active
                      ? "text-turquoise-brand bg-turquoise-brand-light/40"
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-element"
                  )}
                >
                  {item.title}
                  {active && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-warm-yellow-accent" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Global Controls & CTA on the right */}
        <div className="flex items-center gap-4">
          
          {/* Subtle Theme Selector (desktop) */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Primary CTA on the right: Launch Operant OS */}
          <div className="hidden sm:block">
            <a 
              href="https://operant-os.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="turquoise" size="sm" className="font-bold flex items-center gap-1.5 group">
                <span>Launch Operant OS</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary hover:bg-bg-element rounded-xl focus-ring cursor-pointer transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Slide down/fade in overlay) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-30 md:hidden animate-in fade-in duration-200">
          {/* Backdrop blur */}
          <div className="absolute inset-0 bg-bg-base/95 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          
          {/* Drawer Menu */}
          <nav className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-bg-panel border-l border-border-active py-6 px-6 flex flex-col h-[calc(100vh-4rem)] animate-in slide-in-from-right duration-250">
            <div className="flex-1 overflow-y-auto space-y-6">
              
              {/* Mobile Theme Preference Selector */}
              <div className="space-y-2 border-b border-border-muted pb-4">
                <h3 className="text-[10px] font-bold text-text-disabled uppercase tracking-widest font-mono">
                  Theme preference
                </h3>
                <ThemeToggle />
              </div>

              {/* Navigation items listing */}
              <div className="space-y-2">
                <h3 className="text-[10px] font-bold text-text-disabled uppercase tracking-widest font-mono">
                  Navigation
                </h3>
                <ul className="space-y-1.5">
                  {NAVBAR_ITEMS.map((item) => {
                    const active = isLinkActive(item.href);
                    return (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all duration-150",
                            active
                              ? "text-turquoise-brand bg-turquoise-brand-light/40 border border-turquoise-brand/10"
                              : "text-text-secondary hover:bg-bg-element"
                          )}
                        >
                          <span>{item.title}</span>
                          {active && (
                            <span className="w-1.5 h-1.5 rounded-full bg-warm-yellow-accent" />
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

            </div>

            {/* Mobile primary CTA */}
            <div className="border-t border-border-muted pt-6">
              <a 
                href="https://operant-os.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full"
              >
                <Button variant="turquoise" className="w-full font-bold flex items-center justify-center gap-1.5">
                  <span>Launch Operant OS</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
