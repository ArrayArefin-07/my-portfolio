import { ServiceCard } from '@/components/service-card';
import { SectionHeader } from '@/components/section-header';
import { sanityFetch } from '@/lib/sanity/client';
import { servicesQuery } from '@/lib/sanity/queries';

export default async function ServicesPage() {
  const services = (await sanityFetch<any[]>(servicesQuery)) || [];
  return (
    <section>
      <SectionHeader title="Services" subtitle="Offerings managed from Sanity." />
      <div className="grid gap-6 md:grid-cols-2">{services.map((service) => <ServiceCard key={service._id} service={service} />)}</div>
    </section>
  );
}
