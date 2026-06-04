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
  name: "Ashar khan",
  intro:
    "I'm a software engineer from London. I build thoughtful products and web experiences with a focus on clarity, detail, and performance.",
  education:
    "I study Computer Science and spend most of my time exploring frontend systems, product design, and clean user interfaces.",
  links: [
    { label: "Email", href: "mailto:ashararifkhan@gmail.com" },
    { label: "GitHub", href: "https://github.com/asharkhxn" },
    { label: "LeetCode", href: "https://leetcode.com/u/Asharkhan26/" },
    { label: "Instagram", href: "https://instagram.com/asharkhn" },
  ] satisfies LinkItem[],
};

export const projects: Project[] = [];
