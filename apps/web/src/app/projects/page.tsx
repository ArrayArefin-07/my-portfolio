'use client';

import { useMemo, useState } from 'react';
import { ProjectCard } from '@/components/project-card';
import { SectionHeader } from '@/components/section-header';
import { Project } from '@/lib/sanity/types';
import { useProjects } from './use-projects';

export default function ProjectsPage() {
  const projects = useProjects();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [tech, setTech] = useState('all');

  const filtered = useMemo(
    () =>
      projects.filter((p: Project) => {
        const matchesSearch = `${p.title} ${p.oneLiner}`.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === 'all' || p.category === category;
        const matchesTech = tech === 'all' || p.techStack?.includes(tech);
        return matchesSearch && matchesCategory && matchesTech;
      }),
    [projects, search, category, tech]
  );

  return (
    <section>
      <SectionHeader title="Projects" subtitle="Filter by category and search through your case studies." />
      <div className="mb-6 flex flex-col gap-3 md:flex-row">
        <input aria-label="Search projects" className="glass rounded-md px-3 py-2" placeholder="Search by title or one-liner" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select className="glass rounded-md px-3 py-2" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All categories</option>
          <option value="web">Web</option>
          <option value="automation">Automation</option>
          <option value="ai">AI</option>
          <option value="other">Other</option>
        </select>
        <select className="glass rounded-md px-3 py-2" value={tech} onChange={(e) => setTech(e.target.value)}>
          <option value="all">All tech</option>
          {Array.from(new Set(projects.flatMap((p: Project) => p.techStack || []))).map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="grid gap-6 md:grid-cols-2">{filtered.map((project: Project) => <ProjectCard key={project._id} project={project} />)}</div>
    </section>
  );
}
