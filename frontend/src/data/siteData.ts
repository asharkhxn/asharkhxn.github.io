export type LinkItem = {
  label: string;
  href: string;
};

export type CareerChapter = {
  id: string;
  number: string;
  organization: string;
  monogram: string;
  role: string;
  theme: string;
  start: string;
  end?: string;
  period: string;
  location: string;
  category: "Work" | "Education";
  current?: boolean;
  summary: string;
  highlights: string[];
  skills: string[];
  impact?: { value: string; label: string };
};

export const profile = {
  name: "Ashar Khan",
  location: "Greater Glasgow, UK",
  intro:
    "I’m a software engineer with nearly six years of experience building thoughtful, reliable products across the stack, at the intersection of product, infrastructure, and AI.",
  focus: "At Kodamai, I focus on bringing LLMs into real-world workflows and building systems that scale without unnecessary complexity.",
  links: [
    { label: "Email", href: "mailto:ashararifkhan@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/asharkhan26/" },
    { label: "GitHub", href: "https://github.com/asharkhxn" },
    { label: "LeetCode", href: "https://leetcode.com/u/Asharkhan26/" },
    { label: "Instagram", href: "https://instagram.com/asharkhn" },
  ] satisfies LinkItem[],
};

// Selected highlights from the LinkedIn experience and education supplied by Ashar.
// Keep chronological order here; the interface can also show newest first.
export const careerChapters: CareerChapter[] = [
  {
    id: "tcs",
    number: "01",
    organization: "Tata Consultancy Services",
    monogram: "tcs",
    role: "Software Engineer",
    theme: "The engineering foundations.",
    start: "2019-05",
    end: "2021-08",
    period: "May 2019 — Aug 2021",
    location: "India",
    category: "Work",
    summary: "Modernizing enterprise software, making data useful, and learning the craft of building with a team.",
    highlights: [
      "Migrated a legacy platform to Angular, improving its performance, scalability, and user experience.",
      "Built automated workflows with Python and Selenium alongside a team of 10+ developers, eliminating 50+ hours of manual work each month.",
      "Created Power BI dashboards and Talend data pipelines for financial and operational reporting.",
      "Recognized with On-the-Spot and Special Achievement awards for delivery excellence.",
    ],
    skills: ["Angular", "Python", "SQL", "Power BI"],
    impact: { value: "50+", label: "hours of manual work saved / month" },
  },
  {
    id: "aston",
    number: "02",
    organization: "Aston University",
    monogram: "au",
    role: "Master’s in Business Analytics",
    theme: "A new place. A wider perspective.",
    start: "2021-09",
    end: "2022-09",
    period: "Sep 2021 — Sep 2022",
    location: "United Kingdom",
    category: "Education",
    summary: "A year focused on understanding data, discovering patterns, and connecting analytical thinking with real-world problems.",
    highlights: [
      "Specialized in Data Analytics, Big Data, and Machine Learning.",
      "Graduated with Merit and was a member of the Aston Student Union.",
    ],
    skills: ["Data Analytics", "Big Data", "Machine Learning"],
    impact: { value: "Merit", label: "master’s degree classification" },
  },
  {
    id: "pwc",
    number: "03",
    organization: "PwC",
    monogram: "pwc",
    role: "Senior Software Engineer",
    theme: "Bigger systems. Meaningful impact.",
    start: "2023-03",
    end: "2026-02",
    period: "Mar 2023 — Feb 2026",
    location: "Belfast, UK",
    category: "Work",
    summary: "Building reliable financial platforms at scale, from high-volume backend pipelines to thoughtful user-facing tools.",
    highlights: [
      "Led the migration of a low-code remediation platform to a scalable React, TypeScript, and Azure web application.",
      "Optimized Python and FastAPI pipelines to process 150K+ financial records with strong data integrity.",
      "Built a reusable LLM-powered chatbot for natural-language retrieval of client and transaction data.",
      "Mentored junior developers, accelerating React ramp-up by 40% and improving engineering practices across the team.",
    ],
    skills: ["React", "TypeScript", "Python", "Azure", "LLMs"],
    impact: { value: "150K+", label: "financial records processed by optimized pipelines" },
  },
  {
    id: "kodamai",
    number: "04",
    organization: "Kodamai",
    monogram: "k",
    role: "AI Researcher — Applied AI & Product Engineering",
    theme: "Making AI something we can trust.",
    start: "2026-02",
    period: "Feb 2026 — Present",
    location: "Greater Glasgow, UK",
    category: "Work",
    current: true,
    summary: "Bringing research into real products, with verified agentic AI systems built for reliability, consistency, and trust.",
    highlights: [
      "Building systems that combine collaborating AI agents with rigorous verification for complex, real-world workflows.",
      "Applying emerging research to improve reasoning, evaluation, and verifiability.",
      "Contributing across backend services, AI infrastructure, and user-facing experiences.",
    ],
    skills: ["Agentic AI", "Responsible AI", "Distributed Systems", "Product Engineering"],
  },
];
