import { defineType, defineField } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteTitle', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'tagline', type: 'string' }),
    defineField({ name: 'logo', type: 'image' }),
    defineField({ name: 'favicon', type: 'image' }),
    defineField({ name: 'primaryColor', type: 'string' }),
    defineField({ name: 'socials', type: 'object', fields: ['github', 'linkedin', 'twitter', 'facebook', 'instagram'].map((name) => defineField({ name, type: 'url' })) }),
    defineField({ name: 'contactEmail', type: 'string', validation: (r) => r.email() }),
    defineField({ name: 'whatsapp', type: 'string' }),
    defineField({ name: 'resumePdf', type: 'file' }),
    defineField({ name: 'defaultSEO', type: 'object', fields: [defineField({ name: 'title', type: 'string' }), defineField({ name: 'description', type: 'text' }), defineField({ name: 'ogImage', type: 'image' })] })
  ]
});
