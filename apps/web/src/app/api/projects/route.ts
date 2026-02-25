import { NextResponse } from 'next/server';
import { sanityFetch } from '@/lib/sanity/client';
import { projectsQuery } from '@/lib/sanity/queries';

export async function GET() {
  const projects = (await sanityFetch(projectsQuery)) || [];
  return NextResponse.json({ projects });
}
