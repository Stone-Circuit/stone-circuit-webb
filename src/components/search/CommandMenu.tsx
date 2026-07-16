"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { 
  Search, 
  Terminal, 
  Cpu, 
  Layers, 
  Moon, 
  Sun, 
  HelpCircle, 
  Activity, 
  CornerDownLeft,
  X,
  BookOpen
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchItem {
  id: string;
  category: "Documentation" | "API Reference" | "Research" | "Actions";
  title: string;
  subtitle?: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
}

export function CommandMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when menu opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const items: SearchItem[] = [
    // Navigation / Docs
    {
      id: "quickstart",
      category: "Documentation",
      title: "Operant OS Getting Started",
      subtitle: "Get running with Operant OS in 5 minutes",
      icon: Terminal,
      action: () => { router.push("/docs"); onClose(); }
    },
    {
      id: "workflow-architecture",
      category: "Documentation",
      title: "Workflow Architecture Blueprint",
      subtitle: "Process steps and business logic orchestrations",
      icon: Cpu,
      action: () => { router.push("/docs"); onClose(); }
    },
    {
      id: "workflow-orchestrator",
      category: "Documentation",
      title: "Workflow Orchestrator Engine",
      subtitle: "Business task routing and priority logic",
      icon: Layers,
      action: () => { router.push("/docs"); onClose(); }
    },
    {
      id: "flowcapture-ai",
      category: "Documentation",
      title: "FlowCapture AI Ingestion",
      subtitle: "Parsing unstructured emails and documents into system inputs",
      icon: Terminal,
      action: () => { router.push("/products"); onClose(); }
    },
    // API
    {
      id: "api-endpoints",
      category: "API Reference",
      title: "API Reference Index",
      subtitle: "HTTP and WebSocket API endpoints documentation",
      icon: BookOpen,
      action: () => { router.push("/api-reference"); onClose(); }
    },
    {
      id: "api-sdks",
      category: "API Reference",
      title: "Official SDK Interfaces",
      subtitle: "Python, Rust, and TypeScript installation packages",
      icon: Terminal,
      action: () => { router.push("/docs"); onClose(); }
    },
    // Research
    {
      id: "publications",
      category: "Research",
      title: "Scientific Publications",
      subtitle: "Explore our research papers, benchmarks, and models",
      icon: BookOpen,
      action: () => { router.push("/research"); onClose(); }
    },
    {
      id: "safety-alignment",
      category: "Research",
      title: "Alignment & Safety",
      subtitle: "Workflow control loops and logic guardrails",
      icon: Activity,
      action: () => { router.push("/research"); onClose(); }
    },
    // Actions
    {
      id: "action-theme-dark",
      category: "Actions",
      title: "Change Theme: Dark Mode",
      subtitle: "Switch site theme to dark terminal mode",
      icon: Moon,
      action: () => { setTheme("dark"); onClose(); }
    },
    {
      id: "action-theme-light",
      category: "Actions",
      title: "Change Theme: Light Mode",
      subtitle: "Switch site theme to light slate mode",
      icon: Sun,
      action: () => { setTheme("light"); onClose(); }
    },
    {
      id: "action-theme-system",
      category: "Actions",
      title: "Change Theme: Sync with System",
      subtitle: "Synchronize theme with operating system settings",
      icon: Layers,
      action: () => { setTheme("system"); onClose(); }
    },
    {
      id: "action-status",
      category: "Actions",
      title: "View System Status",
      subtitle: "Check system integrations and operational status",
      icon: Activity,
      action: () => { router.push("/status"); onClose(); }
    },
    {
      id: "action-support",
      category: "Actions",
      title: "Contact Support / Sales",
      subtitle: "Connect with our business operations team",
      icon: HelpCircle,
      action: () => { router.push("/contact"); onClose(); }
    }
  ];

  // Filter items based on search input
  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase()) ||
    (item.subtitle && item.subtitle.toLowerCase().includes(search.toLowerCase()))
  );

  // Keyboard navigation inside the menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
          break;
        case "Enter":
          e.preventDefault();
          if (filteredItems[selectedIndex]) {
            filteredItems[selectedIndex].action();
          }
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Group filtered items by category
  const categories: Record<string, (SearchItem & { globalIndex: number })[]> = {};
  filteredItems.forEach((item, index) => {
    const itemWithIndex = { ...item, globalIndex: index };
    if (!categories[item.category]) {
      categories[item.category] = [];
    }
    categories[item.category].push(itemWithIndex);
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 animate-in fade-in duration-200">
      {/* Backdrop with backdrop-blur */}
      <div className="absolute inset-0 bg-bg-base/70 backdrop-blur-sm" aria-hidden="true" onClick={onClose} />

      {/* Modal Container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-2xl bg-bg-panel/95 border border-border-active rounded-xl shadow-2xl overflow-hidden max-h-[480px] flex flex-col scale-100 animate-in slide-in-from-top-4 duration-250 ease-entrance"
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
      >
        {/* Search Input Area */}
        <div className="flex items-center gap-3 px-4.5 border-b border-border-muted h-14 shrink-0">
          <Search className="w-5 h-5 text-text-muted shrink-0" />
          <input
            ref={inputRef}
            type="text"
            className="w-full h-full bg-transparent border-0 text-text-primary placeholder-text-muted text-[15px] focus:outline-none focus:ring-0"
            placeholder="Type a command or search documentation..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-element transition-colors focus-ring cursor-pointer"
            aria-label="Close command menu"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-3.5 space-y-4">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-sm text-text-muted">
              No results found for &ldquo;<span className="text-text-primary font-medium">{search}</span>&rdquo;.
            </div>
          ) : (
            Object.keys(categories).map((catName) => (
              <div key={catName} className="space-y-1">
                <h3 className="px-3 py-1.5 text-[10px] font-bold text-text-disabled uppercase tracking-widest font-mono">
                  {catName}
                </h3>
                <ul className="space-y-0.5" role="listbox">
                  {categories[catName].map((item) => {
                    const isSelected = item.globalIndex === selectedIndex;
                    const Icon = item.icon;
                    return (
                      <li
                        key={item.id}
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(item.globalIndex)}
                        className={cn(
                          "group flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-100 border border-transparent",
                          isSelected 
                            ? "bg-bg-element text-text-primary border-border-active shadow-sm"
                            : "bg-transparent text-text-secondary"
                        )}
                        role="option"
                        aria-selected={isSelected}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className={cn(
                            "p-1.5 rounded-lg bg-bg-panel border border-border-muted transition-colors",
                            isSelected && "text-turquoise-brand border-turquoise-brand/20"
                          )}>
                            <Icon className="w-4.5 h-4.5 shrink-0" />
                          </div>
                          <div className="min-w-0">
                            <div className={cn(
                              "text-sm font-semibold leading-none mb-1 transition-colors",
                              isSelected && "text-turquoise-brand"
                            )}>{item.title}</div>
                            {item.subtitle && (
                              <div className="text-xs text-text-muted line-clamp-1 leading-relaxed">{item.subtitle}</div>
                            )}
                          </div>
                        </div>

                        {isSelected && (
                          <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-text-disabled animate-in fade-in duration-100">
                            <span>Select</span>
                            <CornerDownLeft className="w-3 h-3" />
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4.5 py-3.5 border-t border-border-muted bg-bg-base/50 flex items-center justify-between text-[11px] text-text-muted shrink-0 select-none">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 rounded-md bg-bg-element border border-border-active font-mono text-[9px] font-bold shadow-sm">↑↓</kbd>
              <span>to navigate</span>
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 rounded-md bg-bg-element border border-border-active font-mono text-[9px] font-bold shadow-sm">Enter</kbd>
              <span>to select</span>
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 rounded-md bg-bg-element border border-border-active font-mono text-[9px] font-bold shadow-sm">Esc</kbd>
              <span>to close</span>
            </span>
          </div>
          <div className="hidden sm:block font-medium">
            <span>Powered by Stone Search</span>
          </div>
        </div>
      </div>
    </div>
  );
}
