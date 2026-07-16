import React from "react";
import { Container } from "@/components/ui/Container";
import { Shield } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Privacy Policy | Stone Circuit",
  description: "Stone Circuit privacy policy and data protection guidelines.",
};

export default function PrivacyPage() {
  return (
    <div className="flex-1 bg-bg-base text-text-primary transition-colors">
      <Container className="py-16 sm:py-24" clean>
        <div className="max-w-3xl mx-auto px-4 space-y-12 animate-in fade-in duration-200">
          
          {/* Header */}
          <PageHeader
            title="Privacy Policy"
            description="Last Updated: July 15, 2026"
            badge={<><Shield className="w-4 h-4" /><span>Trust & Security</span></>}
          />

          {/* Legal Content */}
          <div className="space-y-8 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">1. Information Collection</h2>
              <p>
                Stone Circuit collects minimal information required to verify identity and deliver our systems infrastructure software services. This includes corporate contact details, organization identifiers, and account credentials.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">2. Data Isolation & Processing</h2>
              <p>
                All processing of customer data, model context references, and execution thread logs occurs in isolated, hardened virtual environments. We do not inspect, catalog, or serialize data processed inside customers&rsquo; VPC sandbox nodes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or share user or operational data with third-party advertising companies or telemetry brokers. Data is shared only when required by law or as necessary to maintain infrastructure safety.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">4. Security Infrastructure</h2>
              <p>
                Stone Circuit enforces strict physical and logical access controls across all software and database layers. We deploy industry-standard encryption, multi-factor authentication, and logical network boundaries to safeguard enterprise information.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">5. Contact Information</h2>
              <p>
                For data protection or policy inquiries, please contact our compliance desk at{" "}
                <span className="text-turquoise-brand font-mono">compliance@stonecircuit.com</span>.
              </p>
            </section>
          </div>

        </div>
      </Container>
    </div>
  );
}
