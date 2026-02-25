import { sanityFetch } from '@/lib/sanity/client';
import { contactQuery, siteSettingsQuery } from '@/lib/sanity/queries';

export default async function ContactPage() {
  const contact = await sanityFetch<any>(contactQuery);
  const settings = await sanityFetch<any>(siteSettingsQuery);
  return (
    <section className="max-w-2xl">
      <h1 className="text-4xl font-bold">{contact?.title || 'Contact'}</h1>
      <p className="mt-2 text-slate-300">{contact?.introText || 'Let’s discuss your next project.'}</p>
      <form className="mt-8 space-y-4" action="/api/contact" method="post">
        <input required name="name" placeholder="Your name" className="glass w-full rounded-md px-3 py-2" />
        <input required type="email" name="email" placeholder="Email" className="glass w-full rounded-md px-3 py-2" />
        <textarea required name="message" placeholder="Project details" className="glass min-h-32 w-full rounded-md px-3 py-2" />
        <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground">Send message</button>
      </form>
      <div className="mt-8 text-sm">
        <p>Email: {settings?.contactEmail || 'Set in Sanity'}</p>
        <p>WhatsApp: {settings?.whatsapp ? <a href={`https://wa.me/${settings.whatsapp}`}>Chat now</a> : 'Set in Sanity'}</p>
      </div>
    </section>
  );
}
