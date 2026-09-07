"use client";
import { useState } from "react";
import Link from "next/link";
import { projects, projectCategories, siteConfig } from "@/data/portfolio";

export default function AllWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  return (
    <div className="subpage-shell">
      <img
        src="/tiger.jpeg"
        alt=""
        aria-hidden="true"
        className="subpage-decor-tiger"
      />

      <header className="subpage-header navbar-bar">
        <div className="navbar-inner">
          <Link href="/#projects" className="navbar-link">
            ← Back to portfolio
          </Link>
          <Link href="/" className="navbar-name">
            {siteConfig.navLogoText}
          </Link>
        </div>
      </header>

      <main className="subpage-main">
        <h1 className="section-title" style={{ fontSize: "clamp(42px, 7vw, 76px)" }}>Projects</h1>

        <div className="filter-chip-row" role="tablist" aria-label="Filter projects by category">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={selectedCategory === category}
              className={`filter-chip${selectedCategory === category ? " active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="work-grid" role="list">
          {filteredProjects.map((proj) => (
            <Link
              key={proj.slug}
              href={`/projects/${proj.slug}`}
              className="work-card"
              role="listitem"
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
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="subpage-empty">No projects in this category yet.</p>
        )}
      </main>
    </div>
  );
}
