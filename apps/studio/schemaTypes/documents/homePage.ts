import { defineType, defineField } from 'sanity';

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      type: 'object',
      fields: [
        defineField({ name: 'headline', type: 'string', validation: (r) => r.required() }),
        defineField({ name: 'subheadline', type: 'text' }),
        defineField({ name: 'heroImage', type: 'image' }),
        defineField({ name: 'ctaButtons', type: 'array', of: [{ type: 'object', fields: [defineField({ name: 'label', type: 'string' }), defineField({ name: 'href', type: 'string' }), defineField({ name: 'style', type: 'string' })] }] })
      ]
    }),
    defineField({ name: 'sectionsToggle', type: 'object', fields: ['featuredProjects', 'skills', 'services', 'testimonials', 'blogTeaser'].map((name) => defineField({ name: `show${name[0].toUpperCase()}${name.slice(1)}`, type: 'boolean', initialValue: true })) }),
    defineField({ name: 'featuredProjectRefs', type: 'array', of: [{ type: 'reference', to: [{ type: 'project' }] }] })
  ]
});
