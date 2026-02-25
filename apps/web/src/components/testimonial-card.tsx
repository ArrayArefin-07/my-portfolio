export function TestimonialCard({ testimonial }: { testimonial: { name: string; quote: string; role?: string; company?: string } }) {
  return (
    <article className="glass rounded-xl p-5">
      <p className="text-sm">“{testimonial.quote}”</p>
      <p className="mt-4 text-sm font-semibold">{testimonial.name}</p>
      <p className="text-xs text-slate-400">{testimonial.role} {testimonial.company ? `· ${testimonial.company}` : ''}</p>
    </article>
  );
}
