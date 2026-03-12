export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm font-mono text-violet-400">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100">
            Get In Touch
          </h2>
          <div className="flex-1 h-px bg-zinc-800 ml-4 hidden sm:block" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: blurb */}
          <div>
            <p className="text-zinc-400 leading-relaxed mb-6">
              I'm currently open to new opportunities. Whether you have a
              question, a project idea, or just want to say hi — my inbox is
              always open!
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors text-sm"
            >
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Say Hello
            </a>
          </div>

          {/* Right: contact form */}
          <form
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono text-zinc-500 mb-1.5 uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono text-zinc-500 mb-1.5 uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono text-zinc-500 mb-1.5 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="What's on your mind?"
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium transition-colors text-sm w-full sm:w-auto"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
