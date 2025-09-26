import {defineField, defineType} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'content',
      title: 'Page Content',
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
