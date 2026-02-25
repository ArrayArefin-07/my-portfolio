export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8 space-y-2">
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">{subtitle}</p> : null}
    </div>
  );
}
