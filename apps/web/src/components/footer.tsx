export function Footer({ siteTitle, socials }: { siteTitle?: string; socials?: Record<string, string> }) {
  return (
    <footer className="mx-auto mt-16 w-full max-w-6xl border-t border-white/10 px-4 py-8 text-sm">
      <p>{siteTitle || 'Portfolio'} © {new Date().getFullYear()}</p>
      <div className="mt-2 flex gap-3">
        {socials && Object.entries(socials).map(([name, href]) =>
          href ? (
            <a key={name} href={href} target="_blank" rel="noreferrer" className="text-primary">
              {name}
            </a>
          ) : null
        )}
      </div>
    </footer>
  );
}
