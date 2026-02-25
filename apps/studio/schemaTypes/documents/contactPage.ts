import { defineType, defineField } from 'sanity';

export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'introText', type: 'text' }),
    defineField({ name: 'formEnabled', type: 'boolean', initialValue: true }),
    defineField({ name: 'calendlyUrl', type: 'url' })
  ]
});
