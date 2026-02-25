import { defineType, defineField } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'shortDesc', type: 'text' }),
    defineField({ name: 'features', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'startingFromText', type: 'string' }),
    defineField({ name: 'icon', type: 'image' }),
    defineField({ name: 'order', type: 'number', initialValue: 1 })
  ]
});
