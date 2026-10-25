import type { CSSProperties } from "react";
import Link from "next/link";
import type { ExperienceItem } from "@/data/portfolio";
import { splitRichText } from "@/lib/richText";

/**
 * How much taller or shorter each photograph sits than the one before it.
 * The row hangs from a shared top edge, so a photo at 1.2 reaches noticeably
 * further down the page than the one at 0.9, so the pictures end up at five
 * different sizes instead of five matching tiles, without cropping any of them.
 */
const PHOTO_RHYTHM = [0.9, 1.2, 0.95, 1.12, 1];

interface Props {
  item: ExperienceItem;
  siblings: ExperienceItem[];
  basePath: "/experience" | "/research";
  sectionLabel: string;
  backHref: string;
  backLabel: string;
}

export default function StoryPage({
  item,
  siblings,
  basePath,
  sectionLabel,
  backHref,
  backLabel,
}: Props) {
  const paragraphs = splitRichText(item.modal.body || item.summary);
  const photos = item.story.gallery;
  const index = siblings.findIndex((entry) => entry.slug === item.slug);
  // Entries are ordered newest first, so the following item in the list is
  // the older role ("Previous") and the one before it is the newer ("Next").
  const older = index >= 0 && index < siblings.length - 1 ? siblings[index + 1] : null;
  const newer = index > 0 ? siblings[index - 1] : null;

  return (
    <div className="subpage-shell story-shell">
      <header className="subpage-header navbar-bar">
        <div className="navbar-inner">
          <Link href={backHref} className="navbar-link">
            ← Back to portfolio
          </Link>
          <Link href="/" className="navbar-name">
            Harsh Upadhyay
          </Link>
        </div>
      </header>

      <main className="subpage-main story-main">
        <div className="story-hero">
          <h1 className="story-title">{item.modal.title}</h1>
          <p className="story-hero-role">{item.role}</p>
        </div>

        <hr className="story-rule" />

        <section className="story-intro" aria-label="Overview">
          <p className="story-statement">{item.story.statement}</p>
          <div className="story-intro-copy">
            <p className="story-lede">{item.summary}</p>
          </div>
        </section>

        {photos.length > 0 && (
          <section
            className="story-gallery"
            aria-label={`Photographs from ${item.modal.title}`}
          >
            <div className="story-gallery-head">
              <p className="story-gallery-label">Photographs</p>
              <span className="story-gallery-rule" aria-hidden="true" />
            </div>

            <div className="story-gallery-strip">
              {photos.map((photo, photoIndex) => {
                const rhythm = PHOTO_RHYTHM[photoIndex % PHOTO_RHYTHM.length];
                return (
                <figure
                  className="story-photo"
                  key={photo.src}
                  style={
                    {
                      flexGrow: photo.aspect * rhythm,
                      "--rhythm": rhythm,
                    } as CSSProperties
                  }
                >
                  <img
                    className="story-photo-img"
                    src={photo.src}
                    alt={photo.alt}
                    width={Math.round(photo.aspect * 1000)}
                    height={1000}
                    loading={photoIndex === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </figure>
                );
              })}
            </div>
          </section>
        )}

        <div className="story-body">
          <div className="story-prose">
            <h2 className="story-section-title">The story</h2>
            {paragraphs.map((paragraph, paragraphIndex) => (
              <p
                className="story-paragraph"
                key={paragraphIndex}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}

            {item.story.highlights.length > 0 && (
              <section className="story-highlights" aria-label="What I worked on">
                <h2 className="story-section-title">What I worked on</h2>
                <ul className="story-highlight-list">
                  {item.story.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="story-aside" aria-label="Details">
            <div className="story-fact">
              <p className="story-aside-label">Role</p>
              <p className="story-aside-value">{item.role}</p>
            </div>
            <div className="story-fact">
              <p className="story-aside-label">Organization</p>
              <p className="story-aside-value">{item.company}</p>
            </div>
            <div className="story-fact">
              <p className="story-aside-label">When</p>
              <p className="story-aside-value">{item.date}</p>
            </div>
            <div className="story-fact">
              <p className="story-aside-label">Where</p>
              <p className="story-aside-value">{item.story.location}</p>
            </div>

            {item.modal.links.length > 0 && (
              <div className="story-aside-links">
                {item.modal.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    className="modal-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <span className="dotted-arrow dotted-arrow-up-right" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </aside>
        </div>

        <nav className="story-nav" aria-label={`More ${sectionLabel.toLowerCase()}`}>
          <Link href={backHref} className="story-nav-back">
            <span aria-hidden="true">←</span> {backLabel}
          </Link>

          <div className="story-nav-pager">
            {older && (
              <Link
                href={`${basePath}/${older.slug}`}
                className="story-nav-link"
                rel="prev"
              >
                <span className="story-nav-direction">
                  <span aria-hidden="true">←</span> Previous
                </span>
                <span className="story-nav-role">{older.role}</span>
                <span className="story-nav-org">{older.modal.title}</span>
              </Link>
            )}
            {newer && (
              <Link
                href={`${basePath}/${newer.slug}`}
                className="story-nav-link story-nav-link-next"
                rel="next"
              >
                <span className="story-nav-direction">
                  Next <span aria-hidden="true">→</span>
                </span>
                <span className="story-nav-role">{newer.role}</span>
                <span className="story-nav-org">{newer.modal.title}</span>
              </Link>
            )}
          </div>
        </nav>
      </main>
    </div>
  );
}
