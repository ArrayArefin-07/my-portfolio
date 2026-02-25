import { defineType, defineField } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'oneLiner', type: 'string' }),
    defineField({ name: 'coverImage', type: 'image' }),
    defineField({ name: 'galleryImages', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'techStack', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'category', type: 'string', options: { list: ['web', 'automation', 'ai', 'other'] } }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'links', type: 'object', fields: [defineField({ name: 'live', type: 'url' }), defineField({ name: 'repo', type: 'url' })] }),
    defineField({ name: 'caseStudy', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
    defineField({ name: 'results', type: 'text' }),
    defineField({ name: 'date', type: 'datetime' })
  ]
});
