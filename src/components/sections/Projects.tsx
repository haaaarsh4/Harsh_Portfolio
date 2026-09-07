"use client";
import Link from "next/link";
import ScrollRevealText from "@/components/ui/ScrollRevealText";
import DitheredImage from "@/components/ui/DitheredImage";
import { projects } from "@/data/portfolio";
import type { ExperienceModal } from "@/data/portfolio";

interface Props {
  onProgress: (p: number) => void;
  revealed: boolean;
  nightMode?: boolean;
  onCardClick: (modal: ExperienceModal, section: string, trigger: HTMLElement) => void;
  showCursor?: (text: string) => void;
  hideCursor?: () => void;
}

export default function Projects({ onProgress, revealed, nightMode = false, onCardClick, showCursor, hideCursor }: Props) {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="scroll-runway section-projects" style={{ marginTop: "4.2rem" }} id="projects">
      <div className="sticky-panel">
        <div className="section-inner">
          <section aria-label="Projects">
            <div className="projects-heading-row">
              <ScrollRevealText
                text="Projects"
                className="section-title"
                startSize={140}
                endSize={52}
                onProgress={onProgress}
              />
              <Link
                href="/projects"
                className={`all-work-link${revealed ? " revealed" : ""}`}
              >
                All work <span className="all-work-link-arrow">→</span>
              </Link>
            </div>

            <div className={`section-content${revealed ? " revealed" : ""}`}>
              <div className="project-grid-wrap">
                <div className={`projects-dino${revealed ? " revealed" : ""}`} aria-hidden="true">
                  <DitheredImage
                    src="/dino.png"
                    className="projects-dino-canvas"
                    nightMode={nightMode}
                    maxSize={760}
                  />
                </div>

                <div className="work-grid" role="list">
                  {featuredProjects.map((proj, i) => (
                    <div
                      key={proj.slug}
                      className="work-card"
                      role="listitem"
                      tabIndex={0}
                      style={{ animationDelay: `${i * 60}ms` }}
                      onClick={(e) => onCardClick(proj.modal, "projects", e.currentTarget)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          onCardClick(proj.modal, "projects", e.currentTarget);
                        }
                      }}
                      onMouseEnter={() => showCursor?.("View project")}
                      onMouseLeave={() => hideCursor?.()}
                    >
                      <img
                        src={proj.image}
                        alt=""
                        className="work-card-image"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="work-card-scrim" aria-hidden="true" />
                      <span className="work-card-tag">{proj.award}</span>
                      <h3 className="work-card-title">{proj.title}</h3>
                      <span className="work-card-cta">
                        View project <span className="work-card-cta-arrow">→</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
