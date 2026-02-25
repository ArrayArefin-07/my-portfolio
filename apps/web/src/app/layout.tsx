import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { navigationQuery, siteSettingsQuery } from '@/lib/sanity/queries';
import { sanityFetch } from '@/lib/sanity/client';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch<{ defaultSEO?: { title?: string; description?: string } }>(siteSettingsQuery);
  return {
    title: settings?.defaultSEO?.title || 'Portfolio',
    description: settings?.defaultSEO?.description || 'Modern portfolio built with Next.js and Sanity.'
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const nav = await sanityFetch<{ menuItems?: { label: string; href: string }[] }>(navigationQuery);
  const settings = await sanityFetch<{ siteTitle?: string; socials?: Record<string, string> }>(siteSettingsQuery);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar menuItems={nav?.menuItems} />
          <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
          <Footer siteTitle={settings?.siteTitle} socials={settings?.socials} />
        </ThemeProvider>
      </body>
    </html>
  );
}
