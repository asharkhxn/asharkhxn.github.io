import { profile, projects, type Project } from './data/siteData';

function App() {
  return (
    <div className="min-h-screen bg-[#e6d3b7] text-ink">
      <main className="mx-auto max-w-[1280px] px-7 pb-20 pt-16 sm:px-10 md:px-14 lg:px-20 lg:pb-28 lg:pt-24">
        <section className="grid gap-x-10 gap-y-8 text-[26px] leading-[1.48] tracking-[-0.03em] sm:text-[30px] md:grid-cols-2 md:gap-y-12 lg:grid-cols-[1.15fr_1.15fr_1.15fr_0.8fr] lg:text-[18px] lg:leading-[1.52]">
          <div>
            <h1 className="font-normal lowercase">{profile.name}</h1>
          </div>

          <p>{profile.intro}</p>

          <p>{profile.education}</p>

          <nav className="flex flex-col items-start gap-1 lg:pt-[1px]">
            {profile.links.map((link) => (
              <a key={link.label} href={link.href} className="site-link">
                {link.label}
              </a>
            ))}
          </nav>
        </section>

        <section className="mt-24 sm:mt-28 lg:mt-[178px]">
          <div className="space-y-14 sm:space-y-16 lg:space-y-[54px]">
            {projects.map((project) => (
              <ProjectRow key={project.title} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

type ProjectProps = {
  project: Project;
};

function ProjectRow({ project }: ProjectProps) {
  const Container = project.href ? 'a' : 'article';

  return (
    <Container
      {...(project.href ? { href: project.href } : {})}
      className="group grid gap-x-10 gap-y-3 text-[24px] leading-[1.45] tracking-[-0.03em] sm:text-[28px] md:grid-cols-2 lg:grid-cols-[1.15fr_1.15fr_1.15fr_0.8fr] lg:text-[18px] lg:leading-[1.52]"
    >
      <div>
        <h2 className="font-normal">
          {project.href ? (
            <span className="site-link">{project.title}</span>
          ) : (
            <span>{project.title}</span>
          )}
        </h2>
      </div>

      <p>{project.summary}</p>

      <p>{project.stack}</p>

      <p className="whitespace-nowrap">{project.year}</p>
    </Container>
  );
}

export default App;
