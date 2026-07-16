import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Products | Stone Circuit",
  description: "Explore Stone Circuit's suite of intelligent business software, designed to simplify complex operations.",
};

interface Product {
  name: string;
  description: string;
  launchUrl: string;
  launchText: string;
  status: "stable" | "beta" | "development";
  badgeText: string;
  screenshotUrl: string;
  features: string[];
  specs: { label: string; value: string }[];
}

const PRODUCTS_DATA: Product[] = [
  {
    name: "Operant OS",
    description: "Operant OS is a workflow orchestration platform. It acts as an operational management layer that coordinates processes, automates task routing, and balances queues across business systems.",
    launchUrl: "/contact",
    launchText: "Request Access",
    status: "stable",
    badgeText: "Available Today",
    screenshotUrl: "/dashboard_full.png",
    features: [
      "Automates complex, multi-step business pipelines (What it does)",
      "Helps Operations and Engineering teams scale (Who it helps)",
      "Eliminates manual coordination and handoff delays (Problems it solves)",
      "Brings predictability and safety to automated tasks (Benefits)"
    ],
    specs: [
      { label: "WHO IT HELPS", value: "Operations & Tech Teams" },
      { label: "PRIMARY BENEFIT", value: "Predictable, Safe Workflows" },
      { label: "SOLVES", value: "Manual Handoffs & Silos" },
      { label: "DEPLOYMENT", value: "Cloud / On-Premise" },
      { label: "STATUS", value: "Available" }
    ]
  },
  {
    name: "Additional Stone Circuit software",
    description: "We are continuously designing new tools to simplify business operations, reduce integration friction, and help modern teams work with absolute clarity.",
    launchUrl: "/contact",
    launchText: "Get Updates",
    status: "development",
    badgeText: "In Pipeline",
    screenshotUrl: "/inventory.png",
    features: [
      "Focuses on resolving complex corporate data flows (What it does)",
      "Helps digital-first growth enterprises scale (Who it helps)",
      "Eliminates operational bloat and tool overload (Problems it solves)",
      "Built for seamless, out-of-the-box compatibility (Benefits)"
    ],
    specs: [
      { label: "WHO IT HELPS", value: "Modern Digital Enterprises" },
      { label: "PRIMARY BENEFIT", value: "Operational Simplification" },
      { label: "SOLVES", value: "Enterprise Software Bloat" },
      { label: "PHILOSOPHY", value: "Simplicity & Utility" },
      { label: "STATUS", value: "Planning" }
    ]
  }
];

export default function ProductsPage() {
  return (
    <div className="flex-1 bg-bg-base text-text-primary transition-colors">
      <Container className="py-16 sm:py-24" clean>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <PageHeader
            title="Business Software Products"
            description="Stone Circuit designs reliable software products to automate workflows and bring operational clarity to enterprise teams."
          />

          {/* Dynamic Products Grid Stack */}
          <div className="space-y-12">
            {PRODUCTS_DATA.map((product) => (
              <Card 
                key={product.name}
                className="p-8 sm:p-12 shadow-md relative overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200"
              >
                {/* Brand Line Accent */}
                <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-turquoise-brand" />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
                  
                  {/* Left Column: Info & Action */}
                  <div className="lg:col-span-3 space-y-6">
                    <div className="flex items-center gap-2">
                      <Badge variant="turquoise">{product.badgeText}</Badge>
                      <Badge variant={product.status === "stable" ? "success" : "yellow"}>
                        {product.status === "stable" ? "ACTIVE" : "COMING SOON"}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-primary">
                        {product.name}
                      </h2>
                      <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Product Features Checklist */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-[10px] font-bold font-mono text-text-disabled uppercase tracking-widest">
                        Product Details
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start">
                            <CheckCircle2 className="w-4.5 h-4.5 text-turquoise-brand shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3.5 pt-4">
                      {product.name === "Operant OS" ? (
                        <>
                          <a href="https://operant-os.vercel.app" target="_blank" rel="noopener noreferrer">
                            <Button 
                              variant="turquoise" 
                              size="md" 
                              className="font-bold flex items-center gap-1.5 group cursor-pointer"
                            >
                              <span>Launch App</span>
                              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                            </Button>
                          </a>
                          <Link href="/contact">
                            <Button variant="outline" size="md" className="font-semibold cursor-pointer">
                              Learn More
                            </Button>
                          </Link>
                        </>
                      ) : (
                        <Link href={product.launchUrl}>
                          <Button 
                            variant="turquoise" 
                            size="md" 
                            className="font-bold flex items-center gap-1.5 group cursor-pointer"
                          >
                            <span>{product.launchText}</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                          </Button>
                        </Link>
                      )}
                    </div>

                    {/* Visual Screenshot Preview */}
                    <div className="mt-8 border border-border-muted rounded-xl overflow-hidden shadow-sm bg-bg-base relative aspect-[16/9] w-full max-w-2xl select-none">
                      <Image
                        src={product.screenshotUrl}
                        alt={`${product.name} Interface Screenshot`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Right Column: Specification details */}
                  <div className="lg:col-span-2 bg-bg-base border border-border-muted rounded-xl p-6 space-y-4">
                    <h3 className="text-[10px] font-bold text-text-muted uppercase tracking-widest font-mono">
                      Overview
                    </h3>
                    <div className="space-y-3.5 font-mono text-[11px] text-text-secondary">
                      {product.specs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between border-b border-border-muted pb-1.5">
                          <span>{spec.label}</span>
                          <span className="text-text-primary font-bold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </Card>
            ))}
          </div>

        </div>
      </Container>
    </div>
  );
}
