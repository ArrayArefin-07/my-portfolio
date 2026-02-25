import { defineType, defineField } from 'sanity';

export const blogPostType = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'excerpt', type: 'text' }),
    defineField({ name: 'coverImage', type: 'image' }),
    defineField({ name: 'content', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
    defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
    defineField({ name: 'seo', type: 'object', fields: [defineField({ name: 'title', type: 'string' }), defineField({ name: 'description', type: 'text' }), defineField({ name: 'ogImage', type: 'image' })] })
  ]
});
