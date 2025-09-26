import {defineField, defineType} from 'sanity'

export const teamMemberBlock = defineType({
  name: 'teamMemberBlock',
  title: 'Team Member Block',
  type: 'object',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'role', title: 'Role', type: 'string'}),
    defineField({name: 'image', title: 'Image', type: 'image'}),
  ],
})
