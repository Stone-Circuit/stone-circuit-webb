"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { CommandMenu } from "@/components/search/CommandMenu";

export default function ShellLayout({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global hotkeys listener for CMD+K / CTRL+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-bg-base text-text-primary selection:bg-turquoise-brand/20 selection:text-turquoise-brand">
      
      {/* Accessibility: Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:px-4.5 focus:py-2.5 focus:bg-bg-panel focus:text-turquoise-brand focus:border focus:border-turquoise-brand/20 focus:rounded-xl focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-warm-yellow-accent focus:ring-offset-2 font-semibold"
      >
        Skip to main content
      </a>

      {/* Global Navbar */}
      <Navbar />

      {/* Main Page Area */}
      <main
        id="main-content"
        className="flex-1 w-full flex flex-col focus:outline-none"
        tabIndex={-1}
      >
        {children}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Command Menu Modal */}
      <CommandMenu key={isSearchOpen ? "open" : "closed"} isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
