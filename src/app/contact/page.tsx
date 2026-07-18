import React from "react";
import { Terminal } from "lucide-react";
import { Container } from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Contact | Stone Circuit",
  description: "Get in touch with Stone Circuit.",
  alternates: {
    canonical: "https://stonecircuit.in/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex-1 bg-bg-base text-text-primary transition-colors">
      <Container className="py-16 sm:py-24" clean>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-in fade-in duration-200">
          
          {/* Page Header */}
          <PageHeader
            title="Get in touch"
            description="Interested in using Operant OS for your business? Get in touch and we'll help you get started."
            badge={<><Terminal className="w-3.5 h-3.5" /><span>Contact Gateway</span></>}
            align="center"
            border={false}
          />

          {/* Contact Form Container */}
          <ContactForm />

        </div>
      </Container>
    </div>
  );
}
