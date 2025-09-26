import {defineField, defineType} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'heroBlock'},
        {type: 'portableTextBlocks'},
        {type: 'imageBlock'},
        {type: 'galleryBlock'},
        {type: 'videoBlock'},
        {type: 'documentBlock'},
        {type: 'ctaBlock'},
        {type: 'featureBlock'},
        {type: 'testimonialBlock'},
        {type: 'teamMemberBlock'},
      ],
    }as any),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
})
