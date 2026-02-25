export type SiteSettings = {
  siteTitle?: string;
  tagline?: string;
  contactEmail?: string;
  whatsapp?: string;
  socials?: Record<string, string>;
  defaultSEO?: { title?: string; description?: string; ogImage?: unknown };
  resumePdf?: { asset?: { url?: string } };
};

export type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  oneLiner?: string;
  category?: string;
  techStack?: string[];
  featured?: boolean;
  date?: string;
  coverImage?: unknown;
  caseStudy?: unknown[];
  links?: { live?: string; repo?: string };
};

export type Service = {
  _id: string;
  title: string;
  slug: { current: string };
  shortDesc?: string;
  features?: string[];
  startingFromText?: string;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  coverImage?: unknown;
  content?: unknown[];
};
