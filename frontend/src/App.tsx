import { useState } from "react";
import { careerChapters, profile, type CareerChapter } from "./data/siteData";

function Chapter({ chapter }: { chapter: CareerChapter }) {
  return (
    <li className={`chapter${chapter.current ? " chapter-current" : ""}`} id={chapter.id}>
      <div className="chapter-date">
        <span className="chapter-year">{chapter.start.slice(0, 4)}</span>
        <span className="chapter-period">
          <time dateTime={chapter.start}>{chapter.period.split(" — ")[0]}</time>
          <span aria-hidden="true"> — </span>
          {chapter.end ? <time dateTime={chapter.end}>{chapter.period.split(" — ")[1]}</time> : <span>Present</span>}
        </span>
        <span className="chapter-location">{chapter.location}</span>
      </div>
      <span className="chapter-node" aria-hidden="true">{chapter.number}</span>
      <article className={`chapter-card chapter-${chapter.id}`} aria-labelledby={`${chapter.id}-title`}>
        <div className="chapter-topline">
          <span className="eyebrow">Chapter {chapter.number} · {chapter.category}</span>
          {chapter.current && <span className="current-badge"><span />Current chapter</span>}
        </div>
        <div className="chapter-identity">
          <span className="company-monogram" aria-hidden="true">{chapter.monogram}</span>
          <div>
            <h3 id={`${chapter.id}-title`}>{chapter.organization}</h3>
            <p className="chapter-role">{chapter.role}</p>
          </div>
        </div>
        <p className="chapter-theme">{chapter.theme}</p>
        <p className="chapter-summary">{chapter.summary}</p>
        {chapter.impact && (
          <div className="chapter-impact">
            <span>{chapter.impact.value}</span>
            <p>{chapter.impact.label}</p>
          </div>
        )}
        <ul className="chapter-highlights">
          {chapter.highlights.slice(0, 2).map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
        <div className="chapter-skills" aria-label="Skills and specialisms">
          {chapter.skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
        {chapter.highlights.length > 2 && (
          <details className="chapter-details">
            <summary><span>A little more from this chapter<span className="sr-only"> at {chapter.organization}</span></span><span className="detail-plus" aria-hidden="true" /></summary>
            <ul>{chapter.highlights.slice(2).map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          </details>
        )}
      </article>
    </li>
  );
}

function App() {
  const [newestFirst, setNewestFirst] = useState(false);
  const chapters = newestFirst ? [...careerChapters].reverse() : careerChapters;

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <main id="main">
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

        <details className="timeline-disclosure">
          <summary className="timeline-trigger">
            <span className="timeline-trigger-title">Timeline</span>
            <span className="timeline-trigger-description">Selected chapters in software, analytics, and applied AI.</span>
            <span className="timeline-trigger-period">
              2019 — Present
              <span className="timeline-toggle-icon" aria-hidden="true" />
            </span>
          </summary>
          <section className="career-section" id="journey" aria-labelledby="journey-title">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-label">01 / The journey</p>
                <h2 id="journey-title">A few chapters<br /><em>along the way.</em></h2>
              </div>
              <div className="journey-context">
                <p>From enterprise engineering to a master’s in analytics, financial systems, and now applied AI. A few highlights from the road so far.</p>
                <button type="button" className="order-button" onClick={() => setNewestFirst((previous) => !previous)} aria-pressed={newestFirst} aria-label={newestFirst ? "Newest first. Switch to oldest first" : "From the beginning. Switch to newest first"}>
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 3v14m-3-3 3 3 3-3m5 3V3m-3 3 3-3 3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {newestFirst ? "Newest first" : "From the beginning"}
                </button>
              </div>
            </div>
            <ol className="timeline" aria-label={`Career chapters, ${newestFirst ? "newest first" : "oldest first"}`}>
              {chapters.map((chapter) => <Chapter key={chapter.id} chapter={chapter} />)}
            </ol>
            <div className="journey-end"><span className="end-spark" aria-hidden="true">✳</span><p>The next chapter?<br /><em>Still being written.</em></p></div>
          </section>
        </details>
      </main>
    </div>
  );
}

export default App;
