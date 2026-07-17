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
            description="Last Updated: July 16, 2026"
            badge={<><FileText className="w-4 h-4" /><span>Contract Agreement</span></>}
          />

          {/* Legal Content */}
          <div className="space-y-8 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">1. Acceptance of Terms</h2>
              <p>
                By creating an account, launching Operant OS, or utilizing Stone Circuit software services, you agree to comply with and be bound by these Terms of Service. If you are entering these terms on behalf of a company, you warrant that you have authority to bind that organization.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">2. Account Registration & Security</h2>
              <p>
                Access to Operant OS requires registering a profile. Your identity and session credentials are secure and processed via <em>Firebase Authentication</em>. You are solely responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized usage.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">3. Acceptable Use of Operant OS</h2>
              <p>
                Operant OS is designed to orchestrate and store your business records, inventories, and accounting workflows. You agree not to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Reverse engineer, decompile, or attempt to extract source code from our software systems.</li>
                <li>Utilize scripts or bots to bypass system rate-limits or compromise execution nodes.</li>
                <li>Upload malicious code, execute infinite loops that threaten server stability, or store legally prohibited materials.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">4. AI Features & Subprocessors Disclaimer</h2>
              <p>
                Our AI Copilot and parsing utilities use the <em>Google Gemini API</em>. While we aim to provide accurate transaction mappings and analytical reports, AI predictions are non-deterministic and can generate errors. You are responsible for auditing and validating all outputs before executing financial ledger logs or inventory updates.
              </p>
              <p>
                Application hosting and front-end delivery are supplied via <em>Vercel</em>. We are not liable for outages, delays, or downtime originating from Vercel, Google Cloud, Firebase, or other third-party integrations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">5. Intellectual Property</h2>
              <p>
                Stone Circuit retains all rights, titles, and interests in and to our proprietary platforms, databases, templates, and trademarks. You are granted a limited, revocable, non-transferable license to access the web application interface for your business operations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">6. Disclaimer of Warranties</h2>
              <p>
                Stone Circuit software is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of any kind, whether express, implied, or statutory. We do not guarantee that the software will be error-free, uninterrupted, or fully compatible with legacy enterprise systems.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">7. Termination & Updates</h2>
              <p>
                We reserve the right to suspend or terminate accounts that breach these terms or degrade system performance. We may modify these terms at any time by posting updates on this page.
              </p>
            </section>
          </div>

        </div>
      </Container>
    </div>
  );
}
