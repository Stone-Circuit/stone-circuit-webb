import { NavItem, NavSection } from "@/types/navigation";

export const PRODUCTS_MENU: NavItem[] = [
  {
    title: "Operant OS",
    href: "/products",
    description: "Orchestrate and automate complex enterprise workflows and processes.",
    badge: "v1.0"
  }
];

export const DEVELOPERS_MENU: NavItem[] = [
  {
    title: "Documentation",
    href: "/docs",
    description: "Comprehensive installation guides, API mappings, and setup steps."
  },
  {
    title: "API Reference",
    href: "/api-reference",
    description: "REST & WebSocket endpoints specification for remote workflow integration."
  },
  {
    title: "SDKs & Libraries",
    href: "/docs",
    description: "Official developer clients for Python, TypeScript, and Rust."
  },
  {
    title: "System Status",
    href: "/status",
    description: "Real-time service health, task execution metrics, and updates."
  }
];

export const RESEARCH_MENU: NavItem[] = [
  {
    title: "Case Studies",
    href: "/research",
    description: "First-party case studies, execution analyses, and white papers."
  },
  {
    title: "Safety & Guardrails",
    href: "/research",
    description: "Ethical alignment frameworks, logical safety policies, and audit records."
  },
  {
    title: "Benchmarks",
    href: "/research",
    description: "Standardized workflow execution speed and process accuracy results."
  }
];

export const COMPANY_MENU: NavItem[] = [
  {
    title: "About Us",
    href: "/about",
    description: "Learn about the mission, timeline milestones, and company updates."
  },
  {
    title: "Careers",
    href: "/careers",
    description: "Explore open software engineering, design, and product roles.",
    badge: "We're Hiring"
  },
  {
    title: "Engineering Blog",
    href: "/blog",
    description: "Deep-dives into workflow architectures, process engines, and UI designs."
  }
];

export const FOOTER_COLUMNS: NavSection[] = [
  {
    title: "Products",
    items: [
      { title: "Operant OS", href: "/products" }
    ]
  },
  {
    title: "Developers",
    items: [
      { title: "Documentation", href: "/docs" },
      { title: "API Reference", href: "/api-reference" },
      { title: "SDKs & Clients", href: "/docs" },
      { title: "System Status", href: "/status" }
    ]
  },
  {
    title: "Research",
    items: [
      { title: "Case Studies", href: "/research" },
      { title: "Safety & Guardrails", href: "/research" }
    ]
  },
  {
    title: "Company",
    items: [
      { title: "About Us", href: "/about" },
      { title: "Careers", href: "/careers" },
      { title: "Engineering Blog", href: "/blog" }
    ]
  },
  {
    title: "Legal & Trust",
    items: [
      { title: "Terms of Service", href: "/legal/terms" },
      { title: "Privacy Policy", href: "/legal/privacy" }
    ]
  }
];

export const NAVBAR_ITEMS = [
  { title: "Products", href: "/products" },
  { title: "Vision", href: "/vision" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" }
];
