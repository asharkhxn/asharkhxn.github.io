interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  github?: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "Project One",
    description:
      "A full-stack web application built with React and Node.js. Placeholder description — add your real content here.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    href: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "An open-source CLI tool that automates repetitive development workflows. Placeholder description.",
    tags: ["TypeScript", "Node.js", "Commander.js"],
    github: "#",
    featured: true,
  },
  {
    title: "Project Three",
    description:
      "A real-time data dashboard with live charts and alerting. Placeholder description.",
    tags: ["Next.js", "Supabase", "Recharts"],
    href: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Side Project A",
    description: "Short description of this smaller project.",
    tags: ["Python", "FastAPI"],
    github: "#",
  },
  {
    title: "Side Project B",
    description: "Short description of this smaller project.",
    tags: ["Go", "Docker"],
    github: "#",
  },
  {
    title: "Side Project C",
    description: "Short description of this smaller project.",
    tags: ["Vue.js", "Firebase"],
    href: "#",
    github: "#",
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 rounded-lg bg-violet-500/10">
          <svg
            className="w-5 h-5 text-violet-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
        </div>
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 hover:text-zinc-200 transition-colors"
            >
              <GithubIcon />
            </a>
          )}
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live site"
              className="text-zinc-500 hover:text-zinc-200 transition-colors"
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-violet-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-zinc-400 leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-1 rounded-md bg-zinc-800 text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function SmallProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex items-start gap-4 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-violet-400 transition-colors truncate">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-zinc-600 hover:text-zinc-300 transition-colors"
              >
                <GithubIcon />
              </a>
            )}
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live site"
                className="text-zinc-600 hover:text-zinc-300 transition-colors"
              >
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>
        <p className="text-xs text-zinc-500 leading-relaxed mb-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm font-mono text-violet-400">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100">
            Projects
          </h2>
          <div className="flex-1 h-px bg-zinc-800 ml-4 hidden sm:block" />
        </div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {featured.map((project) => (
            <FeaturedProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-5">
              Other noteworthy projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {others.map((project) => (
                <SmallProjectCard key={project.title} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
