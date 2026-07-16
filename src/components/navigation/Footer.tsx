"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Laptop } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/navigation/Icons";
import { cn } from "@/lib/utils";

export function Footer() {
  const { theme, setTheme } = useTheme();

  const links = [
    { title: "Products", href: "/products" },
    { title: "Vision", href: "/vision" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Launch Operant OS", href: "https://operant-os.vercel.app" },
    { title: "Privacy", href: "/legal/privacy" },
    { title: "Terms", href: "/legal/terms" }
  ];

  const socials = [
    { icon: GithubIcon, href: "https://github.com/stone-circuit", label: "GitHub" },
    { icon: TwitterIcon, href: "https://x.com/stone_circuit", label: "X (Twitter)" },
    { icon: LinkedinIcon, href: "https://linkedin.com/company/stone-circuit", label: "LinkedIn" }
  ];

  return (
    <footer className="w-full bg-bg-base border-t border-border-muted py-8 mt-auto" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Navigation & Brand Links Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Brand Mark Wordmark */}
          <div className="flex items-center gap-2 select-none shrink-0">
            <svg
              className="w-4.5 h-4.5 text-turquoise-brand"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <path d="M7 21V3" />
              <circle cx="12" cy="12" r="1" className="fill-turquoise-brand" />
            </svg>
            <span className="font-sans font-bold tracking-tight text-text-primary text-xs">
              STONE <span className="text-turquoise-brand font-semibold">CIRCUIT</span>
            </span>
          </div>

          {/* Minimal Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
            {links.map((link) => {
              const isExternal = link.href.startsWith("http");
              return isExternal ? (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-text-secondary hover:text-turquoise-brand transition-colors focus-ring rounded"
                >
                  {link.title}
                </a>
              ) : (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-xs font-semibold text-text-secondary hover:text-turquoise-brand transition-colors focus-ring rounded"
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Separator Line */}
        <div className="h-px bg-border-muted w-full" />

        {/* Copyright, Socials & Theme Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          
          {/* Copyright notice */}
          <div className="text-[11px] font-mono text-text-disabled">
            &copy; {new Date().getFullYear()} Stone Circuit Inc. All rights reserved.
          </div>

          {/* Controls: Social icons + Theme Toggle */}
          <div className="flex items-center gap-6">
            
            {/* Social Channels */}
            <div className="flex items-center gap-1.5">
              {socials.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-text-muted hover:text-turquoise-brand hover:bg-bg-element border border-transparent hover:border-border-muted rounded-xl transition-all duration-150 focus-ring cursor-pointer"
                    aria-label={s.label}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>

            {/* Minimal theme switcher */}
            <div className="flex items-center bg-bg-element border border-border-muted rounded-xl p-0.5 select-none">
              {[
                { name: "light", icon: Sun, label: "Light Theme" },
                { name: "dark", icon: Moon, label: "Dark Theme" },
                { name: "system", icon: Laptop, label: "System Theme" }
              ].map((t) => {
                const Icon = t.icon;
                const isSelected = theme === t.name;
                return (
                  <button
                    key={t.name}
                    onClick={() => setTheme(t.name as "light" | "dark" | "system")}
                    className={cn(
                      "p-1.5 rounded-lg transition-all duration-150 focus-ring cursor-pointer",
                      isSelected 
                        ? "bg-bg-base text-turquoise-brand shadow-sm border border-border-muted"
                        : "text-text-muted hover:text-text-primary"
                    )}
                    aria-label={t.label}
                    title={t.label}
                  >
                    <Icon className="w-3 h-3" />
                  </button>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
