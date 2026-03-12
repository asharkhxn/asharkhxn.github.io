export default function About() {
  return (
    <section id="about" className="section-padding bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm font-mono text-violet-400">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100">
            About Me
          </h2>
          <div className="flex-1 h-px bg-zinc-800 ml-4 hidden sm:block" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              Hello! I'm <span className="text-zinc-100 font-medium">Your Name</span>, a
              developer based in{" "}
              <span className="text-zinc-100 font-medium">Your City</span>.
              I enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between.
            </p>
            <p>
              My goal is to always build products that provide pixel-perfect,
              performant experiences. I'm passionate about open-source,
              accessibility, and developer tooling.
            </p>
            <p>
              When I'm not at the computer, I'm usually{" "}
              <span className="text-zinc-100">doing something interesting here</span>.
            </p>
          </div>

          {/* Stats / Quick facts */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Projects Shipped", value: "20+" },
              { label: "Open Source Contributions", value: "15+" },
              { label: "Cups of Coffee", value: "∞" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 transition-colors"
              >
                <div className="text-2xl font-bold text-violet-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
