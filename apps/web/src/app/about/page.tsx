import { RichText } from '@/components/portable-text';
import { sanityFetch } from '@/lib/sanity/client';
import { aboutQuery } from '@/lib/sanity/queries';

export default async function AboutPage() {
  const about = await sanityFetch<any>(aboutQuery);
  return (
    <section>
      <h1 className="text-4xl font-bold">{about?.title || 'About Me'}</h1>
      {about?.bio ? <div className="mt-6"><RichText value={about.bio} /></div> : <p className="mt-6">Add your bio in Sanity Studio.</p>}
    </section>
  );
}
