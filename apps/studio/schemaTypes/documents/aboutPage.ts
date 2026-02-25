import { defineType, defineField } from 'sanity';

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'bio', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'highlights', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'timeline', type: 'array', of: [{ type: 'object', fields: [defineField({ name: 'title', type: 'string' }), defineField({ name: 'org', type: 'string' }), defineField({ name: 'start', type: 'string' }), defineField({ name: 'end', type: 'string' }), defineField({ name: 'description', type: 'text' })] }] }),
    defineField({ name: 'skills', type: 'array', of: [{ type: 'object', fields: [defineField({ name: 'group', type: 'string' }), defineField({ name: 'items', type: 'array', of: [{ type: 'string' }] })] }] })
  ]
});
