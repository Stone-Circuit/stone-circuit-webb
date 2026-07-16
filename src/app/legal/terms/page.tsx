import React from "react";
import { Container } from "@/components/ui/Container";
import { FileText } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Terms of Service | Stone Circuit",
  description: "Stone Circuit terms of service and software licensing agreements.",
};

export default function TermsPage() {
  return (
    <div className="flex-1 bg-bg-base text-text-primary transition-colors">
      <Container className="py-16 sm:py-24" clean>
        <div className="max-w-3xl mx-auto px-4 space-y-12 animate-in fade-in duration-200">
          
          {/* Header */}
          <PageHeader
            title="Terms of Service"
            description="Last Updated: July 15, 2026"
            badge={<><FileText className="w-4 h-4" /><span>Contract Agreement</span></>}
          />

          {/* Legal Content */}
          <div className="space-y-8 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">1. Acceptable Use</h2>
              <p>
                Stone Circuit licensing agreements govern the execution of Operant OS instances, workflow actions, and integration connections. Customers must not execute malicious workloads, attempt unauthorized data extraction, or bypass system resource limits.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">2. Priority Quota Budgets</h2>
              <p>
                Workflow execution and priority parameters are subject to the service allocations defined in our licensing agreements. Stone Circuit reserves the right to throttle or suspend processes that exceed usage limits or threaten system stability.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">3. Intellectual Property</h2>
              <p>
                The software frameworks, workflow algorithms, and visual UI libraries remain the exclusive property of Stone Circuit Inc. Customers are granted a limited, non-exclusive license to access and deploy our software in accordance with their agreement.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">4. Warranty Disclaimer</h2>
              <p>
                Stone Circuit software is provided &ldquo;as is&rdquo;, without warranty of any kind, express or implied. We do not guarantee uninterrupted operation or compatibility with all third-party enterprise platforms and systems.
              </p>
            </section>
          </div>

        </div>
      </Container>
    </div>
  );
}
