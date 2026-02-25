import { sanityFetch } from '@/lib/sanity/client';
import { aboutQuery, siteSettingsQuery } from '@/lib/sanity/queries';

export default async function ResumePage() {
  const settings = await sanityFetch<any>(siteSettingsQuery);
  const about = await sanityFetch<any>(aboutQuery);
  return (
    <section>
      <h1 className="text-4xl font-bold">Resume</h1>
      <p className="mt-4 max-w-2xl text-slate-300">{about?.highlights?.join(' · ') || 'Add highlights in Sanity aboutPage.'}</p>
      {settings?.resumePdf?.asset?.url ? (
        <a href={settings.resumePdf.asset.url} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-primary-foreground">Download Resume PDF</a>
      ) : (
        <p className="mt-6 text-sm text-slate-400">Upload resume PDF in siteSettings.</p>
      )}
    </section>
  );
}
