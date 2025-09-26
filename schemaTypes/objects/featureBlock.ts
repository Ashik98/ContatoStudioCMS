import {defineField, defineType} from 'sanity'

export const featureBlock = defineType({
  name: 'featureBlock',
  title: 'Feature Block',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'icon', title: 'Icon', type: 'image'},
            {name: 'heading', title: 'Heading', type: 'string'},
            {name: 'description', title: 'Description', type: 'text'},
          ],
        },
      ],
    }as any),
  ],
})
