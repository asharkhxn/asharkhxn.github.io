import { lazy, Suspense } from "react";
import { profile } from "./data/siteData";

const Timeline = lazy(() => import("./pages/Timeline"));
const BeyondCode = lazy(() => import("./pages/BeyondCode"));

const pages = [
  {
    id: "timeline",
    title: "Timeline",
    href: "/timeline/",
    description: "Selected chapters in software, analytics, and applied AI.",
    meta: "2019 — Present",
  },
  {
    id: "beyond-code",
    title: "Beyond the code",
    href: "/beyond-code/",
    description: "A few adventures, city moments, and Penny.",
    meta: "Life off-screen",
  },
];

function PageArrow() {
  return (
    <svg className="page-link-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function App() {
  const currentPage = document.documentElement.dataset.page ?? "home";
  const detailPage = pages.find((page) => page.id === currentPage);

  return (
    <div className={`site-shell${detailPage ? " detail-page" : ""}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      {detailPage && (
        <header className="page-navigation">
          <a className="back-home" href="/"><span aria-hidden="true">←</span> Back to home</a>
          <nav aria-label="Portfolio pages">
            {pages.map((page) => (
              <a key={page.id} href={page.href} aria-current={page.id === currentPage ? "page" : undefined}>{page.title}</a>
            ))}
          </nav>
        </header>
      )}
      <main id="main">
        {detailPage ? (
          <Suspense fallback={<p className="page-loading" role="status">Loading {detailPage.title.toLowerCase()}…</p>}>
            {currentPage === "timeline" ? <Timeline /> : <BeyondCode />}
          </Suspense>
        ) : (
          <>
            <section className="profile-intro" aria-labelledby="profile-name">
              <h1 id="profile-name">{profile.name}</h1>
              <p>{profile.intro}</p>
              <p>{profile.focus}</p>
              <nav className="profile-links" aria-label="Social links">
                {profile.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="site-link"
                    {...(link.href.startsWith("https:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </section>
            <nav className="page-links" aria-label="Explore the site">
              {pages.map((page) => (
                <a key={page.id} className="page-link" href={page.href}>
                  <span className="page-link-title">{page.title}</span>
                  <span className="page-link-description">{page.description}</span>
                  <span className="page-link-meta">{page.meta}<PageArrow /></span>
                </a>
              ))}
            </nav>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
