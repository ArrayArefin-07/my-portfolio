import { Service } from '@/lib/sanity/types';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="glass rounded-xl p-5">
      <h3 className="text-xl font-semibold">{service.title}</h3>
      <p className="mt-2 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">{service.shortDesc}</p>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
        {service.features?.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>
      {service.startingFromText ? <p className="mt-3 text-xs text-primary">{service.startingFromText}</p> : null}
    </article>
  );
}
