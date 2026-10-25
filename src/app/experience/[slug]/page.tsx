import { notFound } from "next/navigation";
import type { Metadata } from "next";
import StoryPage from "@/components/story/StoryPage";
import { experience, getExperienceBySlug } from "@/data/portfolio";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return experience.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getExperienceBySlug(slug);
  if (!item) return {};
  return {
    title: `${item.modal.title} · ${item.role} | Harsh Upadhyay`,
    description: item.summary,
  };
}

export default async function ExperienceStoryPage({ params }: Props) {
  const { slug } = await params;
  const item = getExperienceBySlug(slug);
  if (!item) notFound();

  return (
    <StoryPage
      item={item}
      siblings={experience}
      basePath="/experience"
      sectionLabel="Experience"
      backHref="/#experience"
      backLabel="Back to experience"
    />
  );
}
