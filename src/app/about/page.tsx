import React from "react";
import { Target, Shield, Cpu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "About | Stone Circuit",
  description: "Learn about Stone Circuit, our mission, and why we build intelligent software.",
  alternates: {
    canonical: "https://stonecircuit.in/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex-1 bg-bg-base text-text-primary transition-colors">
      <Container className="py-16 sm:py-24" clean>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-20 animate-in fade-in duration-200">
          
          {/* Page Header */}
          <PageHeader
            title="About Stone Circuit"
            description="We are a young engineering company focused on building reliable business software. We believe that modern enterprise applications must prioritize predictability, simplicity, and operational safety."
            badge="COMPANY OVERVIEW"
          />

          {/* Why We Exist Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <h2 className="text-sm font-bold font-mono text-text-disabled uppercase tracking-widest">
              Why We Were Founded
            </h2>
            <div className="md:col-span-2 space-y-6 text-sm sm:text-base text-text-secondary leading-relaxed">
              <p>
                Stone Circuit was founded to solve a simple problem: business software has become too complicated. Modern organizations rely on fragmented applications, unstable manual processes, and disconnected data silos to run their daily workflows. This results in execution errors, lost time, and operational friction.
              </p>
              <p>
                We set out to build a unified workflow layer that behaves predictably. By orchestrating business tasks, data channels, and logic boundaries, we provide teams with the software tools necessary to simplify their operations and work with absolute clarity. Operant OS is Stone Circuit&rsquo;s first publicly available product designed to achieve this mission.
              </p>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start border-t border-border-muted pt-16">
            <h2 className="text-sm font-bold font-mono text-text-disabled uppercase tracking-widest">
              Our Philosophy
            </h2>
            <div className="md:col-span-2 space-y-8">
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                We believe that software engineering is a discipline of utility. We reject the practice of building superficial features on top of fragile foundations. Instead, our design and development are guided by three core values:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-bg-panel border border-border-muted flex items-center justify-center text-turquoise-brand">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-text-primary">Simplicity</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    We avoid unnecessary abstractions. We build lightweight interfaces and clean APIs that solve real problems without cosmetic bloat.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-bg-panel border border-border-muted flex items-center justify-center text-turquoise-brand">
                    <Shield className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-text-primary">Reliability</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Operational safety is a requirement. We enforce strict logic boundaries and safety limits so automated business processes run consistently without error.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-bg-panel border border-border-muted flex items-center justify-center text-turquoise-brand">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-text-primary">Utility</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Designed for builders and deciders. We prioritize high speed, data-dense interfaces, and clear documentation over empty marketing space.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
