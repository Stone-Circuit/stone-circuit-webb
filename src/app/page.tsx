import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";
import { 
  Cpu, 
  ArrowRight, 
  ShieldAlert, 
  GitBranch 
} from "lucide-react";

export const metadata = {
  title: "Stone Circuit | Building Intelligent Business Software",
  description: "Stone Circuit builds intelligent software that helps businesses operate more efficiently. Creator of Operant OS, an AI-powered Business Operating System.",
  alternates: {
    canonical: "https://stonecircuit.in",
  },
};

export default function HomePage() {

  return (
    <div className="flex-1 bg-bg-base text-text-primary transition-colors">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
        <Container className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center space-y-8 sm:space-y-10" clean>
          
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-turquoise-brand-light/40 border border-turquoise-brand/20 text-xs font-semibold text-turquoise-brand select-none animate-in fade-in duration-200">
            <span className="w-1.5 h-1.5 rounded-full bg-turquoise-brand" />
            <span>Operant OS Enterprise Release</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 max-w-3xl animate-in fade-in slide-in-from-bottom-2 duration-200 text-center flex flex-col items-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.05]">
              Software built for <span className="text-turquoise-brand">operational clarity</span>.
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl pt-2">
              We design software that coordinates enterprise systems, automates complex workflows, and helps organizations run predictably.
            </p>
          </div>

          {/* CLI box */}
          <div className="w-full max-w-md p-3.5 bg-bg-panel border border-border-muted rounded-xl flex items-center justify-between font-mono text-xs sm:text-sm text-text-secondary hover:border-border-active transition-all group shadow-sm select-none mx-auto">
            <div className="flex items-center gap-2.5 overflow-x-auto">
              <span className="text-turquoise-brand select-none">$</span>
              <code className="text-text-primary select-all">npm install @stone-circuit/operant-sdk</code>
            </div>
            <div className="px-2 py-0.5 rounded-md bg-bg-base border border-border-muted text-text-muted group-hover:text-turquoise-brand text-[9px] uppercase font-sans font-bold">
              Copy
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3.5 pt-2">
            <Link href="/contact">
              <Button variant="turquoise" size="md" className="font-bold flex items-center gap-1.5 group cursor-pointer">
                Request Access
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <a href="https://operant-os.vercel.app" target="_blank" rel="noopener noreferrer">
              <Button variant="yellow" size="md" className="font-bold cursor-pointer">
                Launch Operant OS
              </Button>
            </a>
            <Link href="/products">
              <Button variant="outline" size="md" className="font-semibold cursor-pointer">
                View Products
              </Button>
            </Link>
          </div>

          {/* Hero Screenshot Showcase */}
          <div className="w-full max-w-5xl mt-12 sm:mt-16 border border-border-muted rounded-2xl overflow-hidden shadow-2xl bg-bg-panel/50 p-1.5 animate-in fade-in duration-250 select-none">
            <div className="rounded-xl overflow-hidden border border-border-muted bg-bg-base relative aspect-[16/9]">
              <Image
                src="/dashboard_full.png"
                alt="Operant OS Enterprise Dashboard"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

        </Container>
      </section>

      {/* 2. What We Build */}
      <section className="border-t border-border-muted py-20 sm:py-32 bg-bg-panel/40 backdrop-blur-sm">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16" clean>
          
          <div className="space-y-3 max-w-3xl">
            <div className="text-[10px] font-bold font-mono text-text-disabled uppercase tracking-widest">
              01 / WHAT WE BUILD
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-primary">
              Core tools for modern operations.
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl">
              Enterprise workflows are often fragmented across legacy databases and custom scripts. We build software to coordinate these systems into clean, automated execution paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-bg-base border border-border-muted flex items-center justify-center text-turquoise-brand">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Workflow Orchestration</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Automate multi-step processes from a single dashboard. Enforce dependencies and reduce manual handoffs.
              </p>
            </Card>

            <Card className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-bg-base border border-border-muted flex items-center justify-center text-turquoise-brand">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Data Integration</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Synchronize state variables automatically across databases, CRMs, and internal systems to maintain a single source of truth.
              </p>
            </Card>

            <Card className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-bg-base border border-border-muted flex items-center justify-center text-turquoise-brand">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Logical Guardrails</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Apply validation rules to automated steps. Prevent infinite loops and error states before they impact your operations.
              </p>
            </Card>
          </div>

        </Container>
      </section>

      {/* 3. Flagship Product Section: Meet Operant OS */}
      <section className="border-t border-border-muted py-20 sm:py-32">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16" clean>
          
          <div className="space-y-4 max-w-3xl text-center mx-auto">
            <div className="text-[10px] font-bold font-mono text-text-disabled uppercase tracking-widest">
              02 / FLAGSHIP PLATFORM
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
              Meet Operant OS
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              An AI-powered Business Operating System designed to simplify accounting, inventory, reporting, and everyday business operations.
            </p>
          </div>

          {/* Grid of Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-bg-base border border-border-muted flex items-center justify-center text-turquoise-brand">
                <span className="text-xs font-bold font-mono">01</span>
              </div>
              <h3 className="text-base font-bold text-text-primary">Accounting</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Real-time ledger tracking, invoice parsing, and automated cash flow mapping to keep financial databases unified.
              </p>
            </Card>

            <Card className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-bg-base border border-border-muted flex items-center justify-center text-turquoise-brand">
                <span className="text-xs font-bold font-mono">02</span>
              </div>
              <h3 className="text-base font-bold text-text-primary">Inventory</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Automatic supply cataloging, depletion warnings, and item logistics integrated with vendor operations.
              </p>
            </Card>

            <Card className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-bg-base border border-border-muted flex items-center justify-center text-turquoise-brand">
                <span className="text-xs font-bold font-mono">03</span>
              </div>
              <h3 className="text-base font-bold text-text-primary">AI Copilot</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Translate natural queries into actions, parse incoming documents, and generate insights automatically.
              </p>
            </Card>

            <Card className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-bg-base border border-border-muted flex items-center justify-center text-turquoise-brand">
                <span className="text-xs font-bold font-mono">04</span>
              </div>
              <h3 className="text-base font-bold text-text-primary">Reports</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Dynamic processing metrics, financial summaries, custom CSV/PDF exports, and compliance audits.
              </p>
            </Card>

            <Card className="space-y-4 lg:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-bg-base border border-border-muted flex items-center justify-center text-turquoise-brand">
                <span className="text-xs font-bold font-mono">05</span>
              </div>
              <h3 className="text-base font-bold text-text-primary">Workflow Management</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Multi-step task automation, queue routing, and logical boundaries to coordinate operations without error.
              </p>
            </Card>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap justify-center gap-3.5 pt-4">
            <Link href="/products">
              <Button variant="outline" size="md" className="font-semibold cursor-pointer">
                Learn More
              </Button>
            </Link>
            <a href="https://operant-os.vercel.app" target="_blank" rel="noopener noreferrer">
              <Button variant="turquoise" size="md" className="font-bold flex items-center gap-1.5 group cursor-pointer">
                Launch Operant OS
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </a>
          </div>

        </Container>
      </section>

      {/* 4. Principles Section */}
      <section className="border-t border-border-muted py-20 sm:py-32 bg-bg-panel/20">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16" clean>
          
          <div className="space-y-3 max-w-3xl">
            <div className="text-[10px] font-bold font-mono text-text-disabled uppercase tracking-widest">
              03 / PRINCIPLES
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-primary">
              Engineered for reliability.
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl">
              We design minimal, deterministic tools that solve real operational problems without cosmetic bloat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-sm font-bold font-mono text-turquoise-brand uppercase">1. Simplicity</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                We avoid unnecessary abstractions, focusing on lightweight interfaces and clean APIs.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold font-mono text-turquoise-brand uppercase">2. Predictability</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Software should be calm and deterministic. We enforce boundaries to ensure pipelines execute consistently.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold font-mono text-turquoise-brand uppercase">3. Utility</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Structured layouts, clear typography, and accurate metrics replace empty margins and flashy animations.
              </p>
            </div>
          </div>

        </Container>
      </section>

      {/* 5. Vision Section */}
      <section className="border-t border-border-muted py-20 sm:py-32">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center" clean>
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="text-[10px] font-bold font-mono text-text-disabled uppercase tracking-widest mx-auto">
              04 / VISION
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary leading-relaxed tracking-tight max-w-lg mx-auto">
              &ldquo;Build intelligent software that brings clarity to modern businesses.&rdquo;
            </h2>
          </div>

          <div className="pt-2">
            <Link href="/vision" variant="hover-underline" className="text-xs sm:text-sm font-bold text-turquoise-brand uppercase tracking-wider">
              Read Our Vision &rarr;
            </Link>
          </div>

        </Container>
      </section>

      {/* 6. Final CTA Section */}
      <section className="border-t border-border-muted py-20 sm:py-32 bg-bg-panel/40">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center" clean>
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Bring clarity to your operations.
            </h2>
            <p className="text-sm text-text-secondary max-w-xs mx-auto leading-relaxed">
              Talk to our team to see how Operant OS can secure and automate your pipelines.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3.5 pt-4">
            <Link href="/contact">
              <Button variant="turquoise" size="md" className="font-bold flex items-center gap-1.5 group cursor-pointer">
                Contact Sales
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="outline" size="md" className="font-semibold cursor-pointer">
                Read Documentation
              </Button>
            </Link>
          </div>

        </Container>
      </section>

    </div>
  );
}
