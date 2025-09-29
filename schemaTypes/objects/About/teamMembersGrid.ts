// schemaTypes/objects/teamMembersGrid.ts
import { defineField, defineType } from 'sanity'

export const teamMembersGrid = defineType({
  name: 'teamMembersGrid',
  title: 'Team Members Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'members',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'teamMember',
          fields: [
            defineField({
              name: 'name',
              title: 'Full Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'position',
              title: 'Position/Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'department',
              title: 'Department',
              type: 'string',
            }),
            defineField({
              name: 'bio',
              title: 'Bio',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'photo',
              title: 'Profile Photo',
              type: 'image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alt text',
                  validation: (rule) => rule.required(),
                },
              ],
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'socialLinks',
              title: 'Social Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'platform',
                      type: 'string',
                      options: {
                        list: ['linkedin', 'twitter', 'email'],
                      },
                    },
                    {
                      name: 'url',
                      type: 'url',
                    },
                  ],
                },
              ],
            }),
            defineField({
              name: 'location',
              title: 'Location',
              type: 'string',
            }),
            defineField({
              name: 'joinYear',
              title: 'Join Year',
              type: 'number',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'position',
              media: 'photo',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      members: 'members',
    },
    prepare({ members }) {
      const count = Array.isArray(members) ? members.length : 0;
      return {
        title: 'Team Members Grid',
        subtitle: `${count} team members`,
      };
    },
  },
})
