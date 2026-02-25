import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { RichText } from '@/components/portable-text';
import { sanityFetch } from '@/lib/sanity/client';
import { projectBySlugQuery } from '@/lib/sanity/queries';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await sanityFetch<any>(projectBySlugQuery, { slug });
  return {
    title: project?.title || 'Project',
    description: project?.oneLiner || 'Project case study'
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await sanityFetch<any>(projectBySlugQuery, { slug });
  if (!project) notFound();

  return (
    <article>
      <p className="text-xs uppercase text-primary">{project.category}</p>
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="mt-2 text-slate-300">{project.oneLiner}</p>
      {project.caseStudy ? <div className="mt-8"><RichText value={project.caseStudy} /></div> : <p className="mt-8 text-sm text-slate-400">No case study content yet.</p>}
    </article>
  );
}
