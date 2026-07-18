import React from "react";
import { Container } from "@/components/ui/Container";
import { FileText } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Stone Circuit",
  description: "Stone Circuit terms of service and software usage agreements.",
};

export default function TermsPage() {
  return (
    <div className="flex-1 bg-bg-base text-text-primary transition-colors">
      <Container className="py-16 sm:py-24" clean>
        <div className="max-w-3xl mx-auto px-4 space-y-12 animate-in fade-in duration-200">
          
          {/* Header */}
          <PageHeader
            title="Terms of Service"
            description="Last Updated: July 2026"
            badge={<><FileText className="w-4 h-4" /><span>Contract Agreement</span></>}
          />

          {/* Legal Content */}
          <div className="space-y-8 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">1. Acceptance of Terms</h2>
              <p>
                By creating an account, browsing our website, or using our software applications (including Operant OS), you agree to comply with and be bound by these Terms of Service. If you are entering these terms on behalf of a legal entity, you represent that you have the authority to bind that entity to these conditions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">2. Website Usage</h2>
              <p>
                You agree to use our website and software platforms solely for lawful purposes. You must not attempt to compromise the integrity of our hosting servers, disrupt network communications, or run automated scrapers or scripts that bypass system rate-limits.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">3. Intellectual Property</h2>
              <p>
                All source code, user interfaces, branding, documents, templates, and design methodologies on our site are the exclusive property of Stone Circuit. We grant you a limited, non-exclusive, non-transferable, and revocable license to access our platform interface for your standard business operations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">4. Disclaimer</h2>
              <p>
                Stone Circuit provides its software and website on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We disclaim all warranties, whether express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the software will be error-free or uninterrupted.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, Stone Circuit shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, or goodwill, arising out of or related to your use of our platforms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">6. Third-Party Services</h2>
              <p>
                Our services integrate and interact with external infrastructure providers (such as Firebase for authentication, Vercel for hosting, and Google Cloud APIs for AI processing). We are not liable for outages, performance issues, or security breaches that originate from these external third-party tools or networks.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">7. Governing Law</h2>
              <p>
                These Terms of Service and any dispute arising from your use of our platforms will be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any legal actions must be initiated in courts of competent jurisdiction located in India.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">8. Contact</h2>
              <p>
                If you have questions or wish to resolve issues regarding these Terms of Service, you can reach us by visiting our {" "}
                <Link href="/contact" className="text-turquoise-brand hover:underline font-semibold transition-colors">
                  Contact page
                </Link>.
              </p>
            </section>
          </div>

        </div>
      </Container>
    </div>
  );
}
