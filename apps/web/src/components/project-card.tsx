import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/sanity/types';
import { urlFor } from '@/lib/sanity/image';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug.current}`} className="glass group rounded-xl p-4 transition hover:-translate-y-1 hover:border-primary/70">
      <div className="relative mb-3 h-44 overflow-hidden rounded-lg">
        {project.coverImage ? (
          <Image src={urlFor(project.coverImage).width(640).height(360).url()} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex h-full items-center justify-center bg-slate-900 text-xs">No cover image</div>
        )}
      </div>
      <p className="text-xs uppercase text-primary">{project.category || 'General'}</p>
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-1 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">{project.oneLiner}</p>
    </Link>
  );
}
