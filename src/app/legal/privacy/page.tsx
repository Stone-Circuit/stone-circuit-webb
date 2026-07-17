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
            description="Last Updated: July 16, 2026"
            badge={<><Shield className="w-4 h-4" /><span>Trust & Security</span></>}
          />

          {/* Legal Content */}
          <div className="space-y-8 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">1. Information We Collect</h2>
              <p>
                To provide Operant OS and our business workflow applications, Stone Circuit collects the following categories of information:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>
                  <strong>Account Details:</strong> Full name, email address, password hashes, and company affiliation. Account registration, verification, and authentication services are securely handled by <em>Firebase Authentication</em>.
                </li>
                <li>
                  <strong>Business Operations Data:</strong> Financial ledger transactions, inventory logs, accounting metadata, supply chain details, and workflow configurations stored inside the Operant OS cloud environment.
                </li>
                <li>
                  <strong>System Telemetry & Logs:</strong> IP addresses, browser agents, access times, and request timings collected via our web hosting client <em>Vercel</em>, as well as optional analytics identifiers that may be integrated in the future.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">2. How We Process and Subprocess Your Data</h2>
              <p>
                We process your business data deterministically to execute workflows and sync information across integrations. We share information with the following service providers (subprocessors) to deliver our services:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>
                  <strong>Vercel:</strong> Used to host our corporate website, database dashboard, and web client consoles.
                </li>
                <li>
                  <strong>Firebase:</strong> Used for account creation, validation, session storage, and security authentication.
                </li>
                <li>
                  <strong>Google Gemini API:</strong> Powers our natural language queries, invoice and receipt document parsing, and accounting insights generation. Business data sent to the Gemini API is processed securely under Google Cloud enterprise terms (data is not used to train foundation models).
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">3. Information Security</h2>
              <p>
                We secure your business metrics, transaction logs, and system credentials using industry-standard databases, encrypted connections (TLS/SSL), and role-based access control (RBAC). While we deploy protective logic boundaries, no data transmission over the Internet is 100% immune to breach; we do not guarantee absolute system invulnerability.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">4. Data Ownership & Sharing</h2>
              <p>
                You retain ownership of all business records and documents processed inside Operant OS. Stone Circuit does not sell, license, or lease customer business data to advertising networks or third-party brokers. We disclose data to external parties only when legally required by subpoena, court order, or national safety mandates.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">5. Your Choices & Data Erasure</h2>
              <p>
                Authorized administrators can request copies, corrections, or full deletion of their account credentials and business databases at any time. Upon deletion, data is removed from active tables, though cached backups may persist for up to 30 days before permanent erasure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">6. Inquiries</h2>
              <p>
                For data protection questions or privacy policy concerns, please contact our compliance desk at{" "}
                <span className="text-turquoise-brand font-mono">compliance@stonecircuit.in</span>.
              </p>
            </section>
          </div>

        </div>
      </Container>
    </div>
  );
}
