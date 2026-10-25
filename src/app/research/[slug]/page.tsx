import { notFound } from "next/navigation";
import type { Metadata } from "next";
import StoryPage from "@/components/story/StoryPage";
import { getResearchBySlug, research } from "@/data/portfolio";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return research.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getResearchBySlug(slug);
  if (!item) return {};
  return {
    title: `${item.modal.title} | Harsh Upadhyay`,
    description: item.summary,
  };
}

export default async function ResearchStoryPage({ params }: Props) {
  const { slug } = await params;
  const item = getResearchBySlug(slug);
  if (!item) notFound();

  return (
    <StoryPage
      item={item}
      siblings={research}
      basePath="/research"
      sectionLabel="Research"
      backHref="/#research"
      backLabel="Back to research"
    />
  );
}
