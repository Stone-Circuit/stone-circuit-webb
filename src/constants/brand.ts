import { TeamMember, JobOpening } from "@/types/brand";

export const COMPANY_NAME = "Stone Circuit";
export const MISSION = "Build intelligent software that brings clarity to modern businesses.";
export const TAGLINE = "Clarity through Intelligence";
export const CONTACT_EMAIL = "contact@stonecircuit.com";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Elena Vance",
    role: "Founder & Lead Architect",
    bio: "Formerly Principal Engineer at Vercel. Designing reliable software architecture to coordinate modern business workflows.",
    department: "systems"
  },
  {
    name: "Marcus Thorne",
    role: "Principal AI Safety Engineer",
    bio: "Specialist in logic safety and workflow validation controls. Formerly led operations safety pipelines at Anthropic.",
    department: "research"
  },
  {
    name: "Julian Sterling",
    role: "Director of Product Design",
    bio: "Focused on designing high-density data views, process flows, and building the Stone Design Language (SDL).",
    department: "design"
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "snr-workflow-eng",
    title: "Senior Software Engineer (Workflows)",
    team: "Workflow Infrastructure",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    description: "Help build and optimize the core business workflow engine inside Operant OS to handle high-volume enterprise processes.",
    requirements: [
      "5+ years programming in TypeScript, Go, or Rust",
      "Deep understanding of distributed systems, queues, and concurrency",
      "Experience with cloud architecture and enterprise API integrations"
    ]
  },
  {
    id: "snr-safety-eng",
    title: "Senior AI Safety Engineer",
    team: "Safety & Guardrails",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Design secure execution boundaries and logical policies to ensure business workflows run safely without unexpected execution loops or data errors.",
    requirements: [
      "Degree in Computer Science or equivalent industry experience",
      "Experience in API threat modeling, vulnerability detection, and secure system design",
      "Familiarity with enterprise compliance standards and data protection protocols"
    ]
  },
  {
    id: "prod-designer",
    title: "Product Designer",
    team: "Design & UX",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Own the UX for developer integration interfaces, analytics dashboards, and high-density data visualizations.",
    requirements: [
      "Strong portfolio demonstrating complex dashboard layouts and developer/enterprise tooling",
      "Flawless CSS/HTML implementation skills and familiarity with design systems",
      "Obsessive attention to detail, typography, and motion easing"
    ]
  }
];
