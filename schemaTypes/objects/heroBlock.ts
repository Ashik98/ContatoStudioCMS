import {defineField, defineType} from 'sanity'

export const heroBlock = defineType({
  name: 'heroBlock',
  title: 'Hero Block',
  type: 'object',
  fields: [
    defineField({name: 'headline', title: 'Headline', type: 'string'}),
    defineField({name: 'subheadline', title: 'Subheadline', type: 'text'}),
    defineField({name: 'backgroundImage', title: 'Background Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'cta', title: 'Call to Action', type: 'ctaBlock'}),
  ],
})
