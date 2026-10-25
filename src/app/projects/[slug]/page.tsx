import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/portfolio";
import { splitRichText } from "@/lib/richText";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Harsh Upadhyay`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { from } = await searchParams;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Go back to wherever the reader actually came from. The home page tags its
  // links with ?from=home, the All Work grid tags its cards with ?from=work,
  // and anything else (a shared link, a search result) lands on All Work,
  // which is where the project lives in the site's own hierarchy.
  const cameFromHome = from === "home";
  const backHref = cameFromHome ? "/#projects" : "/projects";
  const backLabel = cameFromHome ? "Back to portfolio" : "Back to all work";

  const isCode = project.linkLabel.toLowerCase().includes("code");
  // Prefer the deployed site over the repository when both exist, so the
  // window's address bar points at the thing you can actually try.
  const windowUrl = (() => {
    const candidates = [project.link, ...(project.modal?.links ?? []).map((l) => l.url)];
    const external = candidates.filter((url) => /^https?:\/\//i.test(url));
    return external.find((url) => !/github\.com/i.test(url)) ?? external[0] ?? project.link;
  })();
  // Address as a browser would show it: no protocol, no www, no trailing slash.
  const windowAddress = (() => {
    try {
      const url = new URL(windowUrl);
      const path = url.pathname.replace(/\/$/, "");
      return `${url.host.replace(/^www\./, "")}${path}`;
    } catch {
      return project.title;
    }
  })();

  // `modal.body` is the long-form copy and may contain light HTML markup such
  // as <br />, so it is split into paragraphs and rendered as HTML. Fall back
  // to the plain `description` if a project has no modal body.
  const paragraphs = splitRichText(project.modal?.body || project.description);

  return (
    <div className="subpage-shell">
      <header className="subpage-header navbar-bar">
        <div className="navbar-inner">
          <Link href={backHref} className="navbar-link">
            ← {backLabel}
          </Link>
          <Link href="/" className="navbar-name">
            Harsh Upadhyay
          </Link>
        </div>
      </header>

      <main className="subpage-main project-detail">
        <h1 className="project-detail-title">{project.title}</h1>

        <div className="project-detail-tags">
          <span className="project-tag project-tag-accent">{project.category}</span>
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>

        <figure className="project-window">
          <div className="project-window-bar">
            <div className="project-window-lights" aria-hidden="true">
              <span className="project-window-light project-window-light-close" />
              <span className="project-window-light project-window-light-min" />
              <span className="project-window-light project-window-light-max" />
            </div>
            <span className="project-window-title">{windowAddress}</span>
            <a
              href={windowUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-window-open"
              aria-label={`Open ${project.title} in a new tab`}
            >
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="project-window-screen">
            <img
              src={project.modal.image}
              alt={`${project.title} interface`}
              loading="eager"
              decoding="async"
            />
          </div>
        </figure>

        <div className="project-detail-body">
          <div className="project-detail-description">
            <h2 className="modal-section-title">About this project</h2>

            {paragraphs.map((paragraph, paragraphIndex) => (
              <p
                className="body-text"
                key={paragraphIndex}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>

          <aside className="project-detail-aside">
            <div className="project-detail-aside-block">
              <p className="project-detail-aside-label">Stack</p>
              <ul className="project-detail-stack-list">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link project-detail-cta"
            >
              {isCode ? "View Code ↗" : "Live Demo ↗"}
            </a>
          </aside>
        </div>

        <div className="project-detail-footer-nav">
          <Link href={backHref} className="subpage-back-link">
            <span aria-hidden="true">←</span> {backLabel}
          </Link>
        </div>
      </main>
    </div>
  );
}
