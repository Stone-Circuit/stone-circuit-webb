export interface ProductCard {
  id: string;
  title: string;
  slug: string;
  status: "active" | "development" | "planning";
  description: string;
  features: string[];
  specs?: Record<string, string>;
  ctaText?: string;
  ctaHref?: string;
}

export interface ResearchPublication {
  id: string;
  title: string;
  slug: string;
  authors: string[];
  date: string;
  abstract: string;
  tags: string[];
  pdfUrl?: string;
  datasetUrl?: string;
  codeUrl?: string;
  citations: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  date: string;
  readingTime: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  department: "systems" | "research" | "design" | "operations";
  avatar?: string;
}

export interface JobOpening {
  id: string;
  title: string;
  team: string;
  location: string;
  type: "Full-time" | "Contract" | "Part-time";
  description: string;
  requirements: string[];
}
