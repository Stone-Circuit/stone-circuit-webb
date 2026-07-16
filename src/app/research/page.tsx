import React from "react";
import { BookOpen, ShieldCheck, Activity, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import AlignmentTabs from "@/components/research/AlignmentTabs";
import BenchmarkChart from "@/components/research/BenchmarkChart";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Case Studies & Reports | Stone Circuit",
  description: "Read our technical case studies, safety frameworks, and workflow benchmarks for automated business software.",
};

export default function ResearchPage() {
  const publications = [
    {
      title: "Orchestrating AI-Powered Workflows in the Enterprise",
      abstract: "This report evaluates workflow queue routing, resource priority allocation, and platform integration cycles. We examine how replacing manual workflow handoffs with automated orchestration loops reduces completion times by over 70%.",
      date: "June 2026",
      authors: "E. Vance, M. Thorne",
      pages: "14 pages",
    },
    {
      title: "State Caching in Distributed Business Pipelines",
      abstract: "We review integration state cache pipelines that allow distributed business tools to hot-swap planning and execution states in memory. This eliminates traditional filesystem sync delays and database sync lag.",
      date: "November 2025",
      authors: "E. Vance",
      pages: "22 pages",
    },
    {
      title: "Logical Safety Guardrails in Automated Business Systems",
      abstract: "A comprehensive analysis of logical boundaries for executing automated business workflows. We evaluate loop validation rules, database integrity bounds, and secure data egress controls.",
      date: "May 2025",
      authors: "M. Thorne, J. Sterling",
      pages: "18 pages",
    }
  ];

  return (
    <div className="flex-1 bg-bg-base text-text-primary transition-colors">
      <Container className="py-16 sm:py-24" clean>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 animate-in fade-in duration-200">
          
          {/* Page Header */}
          <PageHeader
            title="Case Studies & Reports"
            description="Stone Circuit publishes technical reports, case studies, and performance benchmarks. Our documentation details how we bridge automated business logic with enterprise software reliability."
          />

          {/* Section 1: Publications */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold font-mono tracking-widest text-turquoise-brand uppercase">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Technical Reports</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">White Papers & Case Studies</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {publications.map((p, idx) => (
                <Card
                  key={idx}
                  interactive
                  className="flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-3">
                    <div className="text-[10px] font-mono text-text-muted flex justify-between">
                      <span>{p.date}</span>
                      <span>{p.pages}</span>
                    </div>
                    <h4 className="text-sm font-bold text-text-primary leading-snug">
                      {p.title}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed line-clamp-4">
                      {p.abstract}
                    </p>
                  </div>

                  <div className="border-t border-border-muted pt-4 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-text-disabled">
                      By {p.authors}
                    </span>
                    <button className="flex items-center gap-1 text-[11px] font-mono text-turquoise-brand hover:text-text-primary transition-colors focus-ring rounded p-1 cursor-pointer">
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Section 2: Benchmarks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-border-muted pt-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold font-mono tracking-widest text-turquoise-brand uppercase">
                <Activity className="w-3.5 h-3.5" />
                <span>Performance Auditing</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Operational Metrics</h2>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                We benchmark Operant OS against standard manual workflows and legacy scripting configurations. By engineering software systems specifically for workflow requirements, we drastically reduce coordination delays.
              </p>
              <div className="p-4 bg-bg-panel border border-border-muted rounded-xl font-mono text-xs text-text-secondary space-y-2">
                <div className="flex justify-between">
                  <span>TEST ENVIRONMENT</span>
                  <span className="text-text-primary font-bold">Standard Cloud Infrastructure</span>
                </div>
                <div className="flex justify-between">
                  <span>ACTIVE CONCURRENCY</span>
                  <span className="text-text-primary font-bold">1,000+ Concurrent Task Runs</span>
                </div>
                <div className="flex justify-between">
                  <span>CONNECTOR SPEED</span>
                  <span className="text-text-primary font-bold">Real-Time API Sync</span>
                </div>
              </div>
            </div>

            <div>
              <BenchmarkChart />
            </div>
          </div>

          {/* Section 3: Alignment & Safety */}
          <div className="space-y-8 border-t border-border-muted pt-16">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold font-mono tracking-widest text-turquoise-brand uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Control & Compliance</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Safety & Logic Guardrails</h2>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl">
                Executing automated enterprise processes requires strict compliance controls. Stone Circuit designs logical guardrails and validation systems that monitor execution parameters to protect system database integrity.
              </p>
            </div>

            <AlignmentTabs />
          </div>

        </div>
      </Container>
    </div>
  );
}
