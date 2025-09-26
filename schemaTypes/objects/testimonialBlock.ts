import {defineField, defineType} from 'sanity'

export const testimonialBlock = defineType({
  name: 'testimonialBlock',
  title: 'Testimonial Block',
  type: 'object',
  fields: [
    defineField({name: 'quote', title: 'Quote', type: 'text'}),
    defineField({name: 'author', title: 'Author', type: 'string'}),
    defineField({name: 'role', title: 'Role/Company', type: 'string'}),
    defineField({name: 'authorImage', title: 'Author Image', type: 'image'}),
  ],
})
