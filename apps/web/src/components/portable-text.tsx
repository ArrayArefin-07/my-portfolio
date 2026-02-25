import { PortableText } from '@portabletext/react';

export function RichText({ value }: { value: unknown[] }) {
  return (
    <PortableText
      value={value}
      components={{
        block: {
          normal: ({ children }) => <p className="mb-4 text-slate-200 dark:text-slate-200 light:text-slate-700">{children}</p>,
          h2: ({ children }) => <h2 className="mb-3 mt-8 text-2xl font-semibold">{children}</h2>
        },
        list: {
          bullet: ({ children }) => <ul className="mb-4 list-disc pl-6">{children}</ul>
        }
      }}
    />
  );
}
