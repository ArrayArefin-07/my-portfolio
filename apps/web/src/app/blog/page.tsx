import Link from 'next/link';
import { sanityFetch } from '@/lib/sanity/client';
import { blogQuery } from '@/lib/sanity/queries';

export default async function BlogPage() {
  const posts = (await sanityFetch<any[]>(blogQuery)) || [];
  return (
    <section>
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <article key={post._id} className="glass rounded-xl p-4">
            <Link href={`/blog/${post.slug.current}`} className="text-xl font-semibold hover:text-primary">{post.title}</Link>
            <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
          </article>
        ))}
        {!posts.length ? <p className="text-sm text-slate-400">No posts published yet.</p> : null}
      </div>
    </section>
  );
}
