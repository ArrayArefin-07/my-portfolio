import Link from 'next/link';
import { MotionFade } from '@/components/motion-fade';
import { ProjectCard } from '@/components/project-card';
import { SectionHeader } from '@/components/section-header';
import { ServiceCard } from '@/components/service-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { homePageQuery, servicesQuery, testimonialsQuery, contactQuery } from '@/lib/sanity/queries';
import { sanityFetch } from '@/lib/sanity/client';

export default async function HomePage() {
  const home = await sanityFetch<any>(homePageQuery);
  const services = (await sanityFetch<any[]>(servicesQuery)) || [];
  const testimonials = (await sanityFetch<any[]>(testimonialsQuery)) || [];
  const contact = await sanityFetch<any>(contactQuery);

  return (
    <MotionFade>
      <section className="glass rounded-2xl p-8">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{home?.hero?.headline || 'Designing digital products for the next era.'}</h1>
        <p className="mt-4 max-w-2xl text-slate-300">{home?.hero?.subheadline || 'A futuristic multi-page portfolio powered by Next.js + Sanity CMS.'}</p>
        <div className="mt-6 flex gap-3">
          <Link className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground" href="/projects">View Projects</Link>
          <Link className="rounded-md border border-white/20 px-4 py-2 text-sm" href="/contact">Get in Touch</Link>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeader title="Featured Projects" subtitle="Curated case studies from Sanity." />
        <div className="grid gap-6 md:grid-cols-2">
          {(home?.featuredProjectRefs || []).slice(0, 4).map((project: any) => <ProjectCard key={project._id || project.slug?.current} project={project} />)}
          {!home?.featuredProjectRefs?.length ? <p className="text-sm text-slate-400">No featured projects configured yet.</p> : null}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeader title="Services" />
        <div className="grid gap-6 md:grid-cols-3">{services.slice(0, 3).map((service) => <ServiceCard key={service._id} service={service} />)}</div>
      </section>

      <section className="mt-12">
        <SectionHeader title="Testimonials" />
        <div className="grid gap-6 md:grid-cols-2">{testimonials.slice(0, 4).map((t) => <TestimonialCard key={t._id} testimonial={t} />)}</div>
      </section>

      <section className="mt-12 rounded-xl border border-primary/20 p-6">
        <h2 className="text-2xl font-semibold">{contact?.title || 'Let’s build something remarkable.'}</h2>
        <p className="mt-2 text-sm text-slate-300">{contact?.introText || 'Ready to collaborate? Reach out through the contact page.'}</p>
        <Link href="/contact" className="mt-4 inline-block text-primary">Open Contact</Link>
      </section>
    </MotionFade>
  );
}
