interface SkillCategory {
  name: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "GraphQL", "REST APIs"],
  },
  {
    name: "Tools & Infra",
    skills: ["Git", "Docker", "CI/CD", "PostgreSQL", "Redis"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm font-mono text-violet-400">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100">
            Skills & Technologies
          </h2>
          <div className="flex-1 h-px bg-zinc-800 ml-4 hidden sm:block" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.name}>
              <h3 className="text-xs font-mono text-violet-400 uppercase tracking-widest mb-4">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-zinc-400"
                  >
                    <span className="w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Currently learning */}
        <div className="mt-12 p-5 rounded-xl border border-dashed border-zinc-800">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">
            Currently exploring
          </p>
          <div className="flex flex-wrap gap-2">
            {["Rust", "Web3", "AI/ML", "Edge Computing"].map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1 rounded-full bg-zinc-800/80 text-zinc-400 border border-zinc-700/60"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
