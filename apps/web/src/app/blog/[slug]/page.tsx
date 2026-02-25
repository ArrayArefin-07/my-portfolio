import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RichText } from '@/components/portable-text';
import { sanityFetch } from '@/lib/sanity/client';
import { blogBySlugQuery } from '@/lib/sanity/queries';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<any>(blogBySlugQuery, { slug });
  return { title: post?.title || 'Blog Post', description: post?.excerpt || '' };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await sanityFetch<any>(blogBySlugQuery, { slug });
  if (!post) notFound();

  return (
    <article>
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="mt-3 text-slate-300">{post.excerpt}</p>
      <div className="mt-8">{post.content ? <RichText value={post.content} /> : null}</div>
    </article>
  );
}
