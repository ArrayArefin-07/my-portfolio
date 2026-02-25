'use client';

import { useEffect, useState } from 'react';
import { Project } from '@/lib/sanity/types';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data.projects || []));
  }, []);

  return projects;
}
