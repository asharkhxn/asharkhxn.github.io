export type Project = {
  title: string;
  href?: string;
  summary: string;
  stack: string;
  year: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export const profile = {
  name: "ashar khan",
  intro:
    "I'm a software engineer from London. I build thoughtful products and web experiences with a focus on clarity, detail, and performance.",
  education:
    "I study Computer Science and spend most of my time exploring frontend systems, product design, and clean user interfaces.",
  links: [
    { label: "Email", href: "mailto:hello@asharkhan.dev" },
    { label: "GitHub", href: "https://github.com/asharkhxn" },
    { label: "Instagram", href: "https://instagram.com/asharkhn" },
  ] satisfies LinkItem[],
};

export const projects: Project[] = [
  {
    title: "Signal Desk",
    href: "#",
    summary:
      "A product dashboard that helps small teams monitor releases, priorities, and delivery health in one focused interface.",
    stack: "React, TypeScript and Tailwind CSS.",
    year: "2026",
  },
  {
    title: "Northstar",
    href: "#",
    summary:
      "Analytics workspace for measuring product performance, user behaviour, and campaign outcomes with concise reporting.",
    stack: "Next.js, Data Visualisation and Design Systems.",
    year: "2025 - 26",
  },
  {
    title: "Quiet Notes",
    href: "#",
    summary:
      "Minimal writing tool designed for drafting, organising, and publishing notes in a calm distraction-free environment.",
    stack: "Vite, React and Local-first patterns.",
    year: "2025",
  },
  {
    title: "Canvas Commerce",
    href: "#",
    summary:
      "Editorial ecommerce concept for premium products with an emphasis on storytelling, spacing, and art direction.",
    stack: "Shopify, Custom UI and Content Design.",
    year: "2024",
  },
  {
    title: "Studio Atlas",
    href: "#",
    summary:
      "Portfolio platform concept for designers and makers to present selected projects with lightweight publishing tools.",
    stack: "Full-stack TypeScript.",
    year: "2024",
  },
  {
    title: "Motion Library",
    href: "#",
    summary:
      "Internal component showcase documenting transition patterns, spacing rules, and interaction examples.",
    stack: "Framer Motion and Storybook.",
    year: "2023",
  },
  {
    title: "Field Journal",
    href: "#",
    summary:
      "Mobile-first concept for capturing notes, imagery, and location-based observations during research sessions.",
    stack: "React Native and Firebase.",
    year: "2023",
  },
  {
    title: "Open Brief",
    href: "#",
    summary:
      "A lightweight workflow for collecting client requirements, aligning priorities, and sharing project milestones.",
    stack: "Node.js and PostgreSQL.",
    year: "2022",
  },
  {
    title: "Frame & Form",
    href: "#",
    summary:
      "Visual research archive for collecting references, categorising ideas, and presenting curated moodboards.",
    stack: "Frontend Prototyping.",
    year: "2022",
  },
];
