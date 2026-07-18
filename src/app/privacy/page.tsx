import React from "react";
import { Container } from "@/components/ui/Container";
import { Shield } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Stone Circuit",
  description: "Stone Circuit privacy policy and data protection guidelines.",
  alternates: {
    canonical: "https://stonecircuit.in/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex-1 bg-bg-base text-text-primary transition-colors">
      <Container className="py-16 sm:py-24" clean>
        <div className="max-w-3xl mx-auto px-4 space-y-12 animate-in fade-in duration-200">
          
          {/* Header */}
          <PageHeader
            title="Privacy Policy"
            description="Last Updated: July 2026"
            badge={<><Shield className="w-4 h-4" /><span>Trust & Security</span></>}
          />

          {/* Legal Content */}
          <div className="space-y-8 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">1. Introduction</h2>
              <p>
                Stone Circuit (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our software applications (including Operant OS), or otherwise interact with us. Please read this Privacy Policy carefully.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">2. Information We Collect</h2>
              <p>
                To provide our workflow applications and business services, we collect several categories of information:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong>Account information:</strong> When you register for our services, we collect identifiers such as your full name, email address, password hashes, and company affiliation.
                </li>
                <li>
                  <strong>Contact information:</strong> If you reach out to us via our contact form, we collect your name, email address, message contents, and any other details you choose to share.
                </li>
                <li>
                  <strong>Usage data:</strong> We automatically track activity within our application console, including action timings, feature interaction logs, and database metrics.
                </li>
                <li>
                  <strong>Device/browser information:</strong> We collect system telemetry, including your IP address, browser type, operating system version, and system language settings.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">3. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to handle session state, authenticate active logins, and keep track of your user preferences. Most web browsers allow you to modify your cookie settings. However, disabling cookies may prevent you from accessing certain features of our applications.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">4. Analytics</h2>
              <p>
                We use analytics services to monitor, measure, and analyze traffic patterns and user behavior on our platform:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong>Google Analytics 4:</strong> Measures site performance and page engagement.
                </li>
                <li>
                  <strong>Microsoft Clarity:</strong> Analyzes user navigation flows, clicks, and session playbacks to help us improve the overall interface usability.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">5. Third-Party Services</h2>
              <p>
                We collaborate with select third-party service providers (subprocessors) to build and host our platforms:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong>Firebase:</strong> Used for secure user registration, session management, and authentication controls.
                </li>
                <li>
                  <strong>Vercel:</strong> Used to deploy, host, and deliver our web applications and corporate websites.
                </li>
                <li>
                  <strong>AI Providers (when applicable):</strong> For natural language queries, invoice parsing, and automated insights in Operant OS, we utilize secure enterprise APIs (such as the Google Gemini API). Data processed through these enterprise connections is not used to train foundation models.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">6. Data Security</h2>
              <p>
                We employ industry-standard logical controls, transport encryption (TLS/SSL), and role-based access configurations to safeguard your records. However, because no electronic storage or internet transmission is completely secure, we cannot guarantee absolute data protection.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">7. User Rights</h2>
              <p>
                Depending on your location, you may have rights regarding your personal information, including the right to access, correct, export, or request the permanent erasure of your account details. To exercise these rights, please reach out to us.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">8. Changes to this Privacy Policy</h2>
              <p>
                We may revise this Privacy Policy periodically. Any updates will be posted on this page with an updated revision date. Your continued use of our systems following these modifications constitutes your acceptance of the revised terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">9. Contact</h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy or our privacy practices, you can contact us directly through our {" "}
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
