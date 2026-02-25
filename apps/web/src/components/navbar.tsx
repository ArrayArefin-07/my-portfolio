import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Navbar({ menuItems }: { menuItems?: { label: string; href: string }[] }) {
  const items = menuItems?.length
    ? menuItems
    : [
        { label: 'Projects', href: '/projects' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Contact', href: '/contact' }
      ];
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-sm font-semibold">Portfolio</Link>
        <div className="flex items-center gap-4">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm hover:text-primary">
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
