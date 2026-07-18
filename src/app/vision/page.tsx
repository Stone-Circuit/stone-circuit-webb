import React from "react";
import { Container } from "@/components/ui/Container";
import { Link } from "@/components/ui/Link";
import { ChevronRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Vision | Stone Circuit",
  description: "Learn the long-term vision behind Stone Circuit and the future of intelligent business software.",
  alternates: {
    canonical: "https://stonecircuit.in/vision",
  },
};

export default function VisionPage() {
  const principles = [
    {
      label: "SIMPLICITY",
      title: "Solving for Entropy",
      description: "As businesses grow, their processes naturally become more complex. Our goal is to consolidate disparate workflows into a clean, predictable logical queue."
    },
    {
      label: "DURABILITY",
      title: "Built to Outlast",
      description: "Software should outlast the trends of its creation. We design our platforms with a focus on core utility, standard compliance, and long-term maintainability."
    },
    {
      label: "PREDICTABILITY",
      title: "Deterministic Results",
      description: "Automation must be reliable. We implement strict logical boundaries and safety guardrails to ensure business operations run consistently day after day."
    }
  ];

  return (
    <div className="flex-1 bg-bg-base text-text-primary transition-colors">
      <Container className="py-20 sm:py-32" clean>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-24 animate-in fade-in duration-200">
          
          {/* Main Statement */}
          <PageHeader
            title="Software should reduce operational complexity, not increase it."
            description="Modern enterprise technology often introduces more friction than it resolves. Stone Circuit builds software systems designed to bring order, structure, and predictability back to corporate operations."
            badge="VISION & PHILOSOPHY"
          />

          {/* Three Column Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-[9px] font-mono font-bold text-turquoise-brand tracking-widest">
                  {p.label}
                </div>
                <h3 className="text-lg font-bold text-text-primary tracking-tight">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          {/* Timelessness Callout Quote */}
          <div className="border-t border-border-muted pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <h2 className="text-sm font-bold font-mono text-text-disabled uppercase tracking-widest md:col-span-1">
              Long-term Commitment
            </h2>
            <div className="md:col-span-2 space-y-6">
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                We believe that software engineering is a discipline of utility. We reject the practice of building cosmetic overlays on top of fragile foundations, and we do not chase speculative technology cycles. Our commitment is to the underlying business execution systems—the workflow orchestrators and data conduits—that support organization pipelines for the long horizon.
              </p>
              <div>
                <Link href="/products" className="inline-flex items-center gap-1 text-xs font-bold text-turquoise-brand hover:underline">
                  <span>Explore our software</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
