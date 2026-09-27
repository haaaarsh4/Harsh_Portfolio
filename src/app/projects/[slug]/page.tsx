import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/portfolio";
import { splitRichText } from "@/lib/richText";

interface Props {
  params: Promise<{ slug: string }>;
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

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug) + 1;
  const isCode = project.linkLabel.toLowerCase().includes("code");

  // `modal.body` is the long-form copy and may contain light HTML markup such
  // as <br />, so it is split into paragraphs and rendered as HTML. Fall back
  // to the plain `description` if a project has no modal body.
  const paragraphs = splitRichText(project.modal?.body || project.description);

  return (
    <div className="subpage-shell">
      <header className="subpage-header navbar-bar">
        <div className="navbar-inner">
          <Link href="/projects" className="navbar-link">
            ← Back to work
          </Link>
          <Link href="/" className="navbar-name">
            Harsh Upadhyay
          </Link>
        </div>
      </header>

      <main className="subpage-main project-detail">
        <p className="project-detail-index">{String(index).padStart(2, "0")}</p>
        <h1 className="project-detail-title">{project.title}</h1>

        <div className="project-detail-tags">
          <span className="project-tag project-tag-accent">{project.category}</span>
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>

        <div className="project-detail-hero">
          <div className="project-detail-hero-chrome" aria-hidden="true">
            <span className="project-detail-hero-dot" />
            <span className="project-detail-hero-dot" />
            <span className="project-detail-hero-dot" />
          </div>
          <div className="project-detail-hero-frame">
            <img src={project.modal.image} alt="" loading="eager" decoding="async" />
          </div>
        </div>

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
          <Link href="/projects" className="subpage-back-link">
            <span aria-hidden="true">←</span> Back to all work
          </Link>
        </div>
      </main>
    </div>
  );
}
