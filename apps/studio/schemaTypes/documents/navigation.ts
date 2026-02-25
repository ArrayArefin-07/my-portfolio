import { defineType, defineField } from 'sanity';

export const navigationType = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'menuItems',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'href', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'order', type: 'number' }),
            defineField({ name: 'enabled', type: 'boolean', initialValue: true })
          ]
        }
      ]
    })
  ]
});
