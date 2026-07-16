"use client";

import React, { useState } from "react";
import { ShieldAlert, Cpu, Network } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AlignmentTabs() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    {
      label: "Process Isolation",
      icon: ShieldAlert,
      title: "Isolated Logic Environments",
      content: "All automated processes execute within sandboxed logical environments with strict data access parameters. This prevents workflows from modifying unrelated system databases, guaranteeing absolute containment."
    },
    {
      label: "Resource Quota Limits",
      icon: Cpu,
      title: "Predictable Execution Priorities",
      content: "Operant OS enforces logical resource budget allocations. Workflows are assigned maximum operation steps and run time parameters. Runaway logic loops are automatically throttled or halted, preventing API overuse."
    },
    {
      label: "Data Access Controls",
      icon: Network,
      title: "Granular Access Controls",
      content: "Workflows cannot arbitrarily access external networks or private databases. All outbound queries route through an access gateway, filtering domain lookups, payload sizes, and connection protocols to prevent data exfiltration."
    }
  ];

  return (
    <div className="bg-bg-panel border border-border-muted rounded-xl p-6 sm:p-8 space-y-6">
      {/* Tab Buttons */}
      <div className="flex border-b border-border-muted overflow-x-auto gap-2 p-0.5" role="tablist">
        {tabs.map((tab, idx) => {
          const Icon = tab.icon;
          const isActive = activeTab === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={cn(
                "flex items-center gap-2 px-4.5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border transition-all duration-150 shrink-0 focus-ring cursor-pointer",
                isActive
                  ? "bg-bg-base text-turquoise-brand border-border-active shadow-sm"
                  : "text-text-secondary hover:text-text-primary border-transparent hover:bg-bg-element"
              )}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${idx}`}
              id={`tab-${idx}`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      {tabs.map((tab, idx) => {
        if (activeTab !== idx) return null;
        return (
          <div
            key={idx}
            id={`panel-${idx}`}
            role="tabpanel"
            aria-labelledby={`tab-${idx}`}
            className="space-y-4 animate-in fade-in slide-in-from-bottom-1 duration-200"
          >
            <h4 className="text-base font-bold text-text-primary">
              {tab.title}
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-3xl">
              {tab.content}
            </p>
          </div>
        );
      })}
    </div>
  );
}
