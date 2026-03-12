export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/60 py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-600 font-mono">
          © {year} Your Name. Built with React & Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/asharkhxn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors font-mono"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/asharkhxn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors font-mono"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors font-mono"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
