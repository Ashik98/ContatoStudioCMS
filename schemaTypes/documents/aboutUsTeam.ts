// schemaTypes/documents/aboutUsTeam.ts
import { defineField, defineType } from 'sanity'

export const aboutUsTeam = defineType({
  name: 'aboutUsTeam',
  title: 'About Us Team',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this team section (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sectionHeading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main heading for the team section (e.g., "Meet Our Team").',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'string',
      description: 'Subtitle below the main heading (e.g., "Talented People").',
      validation: (rule) => rule.max(100),
    }),
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      description: 'List of team members to display.',
      of: [
        {
          type: 'object',
          name: 'teamMember',
          title: 'Team Member',
          fields: [
            defineField({
              name: 'name',
              title: 'Full Name',
              type: 'string',
              description: 'Team member\'s full name (e.g., "CHRISTIN LE").',
              validation: (rule) => rule.required().max(100),
            }),
            defineField({
              name: 'position',
              title: 'Job Title/Position',
              type: 'string',
              description: 'Team member\'s job title (e.g., "Front-end developer").',
              validation: (rule) => rule.required().max(100),
            }),
            defineField({
              name: 'photo',
              title: 'Profile Photo',
              type: 'image',
              description: 'Professional photo of the team member.',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  description: 'Alternative text for accessibility.',
                  validation: (rule) => rule.required(),
                }),
              ],
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'bio',
              title: 'Short Bio',
              type: 'text',
              rows: 3,
              description: 'Brief description about the team member (optional).',
              validation: (rule) => rule.max(300),
            }),
            defineField({
              name: 'socialLinks',
              title: 'Social Media Links',
              type: 'array',
              description: 'Team member\'s social media profiles (optional).',
              of: [
                {
                  type: 'object',
                  name: 'socialLink',
                  title: 'Social Link',
                  fields: [
                    defineField({
                      name: 'platform',
                      title: 'Platform',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'LinkedIn', value: 'linkedin' },
                          { title: 'Twitter/X', value: 'twitter' },
                          { title: 'GitHub', value: 'github' },
                          { title: 'Portfolio', value: 'portfolio' },
                          { title: 'Other', value: 'other' },
                        ],
                      },
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'url',
                      title: 'Profile URL',
                      type: 'url',
                      validation: (rule) => rule.required(),
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'platform',
                      subtitle: 'url',
                    },
                  },
                },
              ],
              validation: (rule) => rule.max(5),
            }),
            defineField({
              name: 'orderIndex',
              title: 'Display Order',
              type: 'number',
              description: 'Order in which this team member appears (lower numbers first).',
              validation: (rule) => rule.min(0).max(100),
            }),
          ],
          preview: {
            select: {
              name: 'name',
              position: 'position',
              media: 'photo',
            },
            prepare({ name, position, media }) {
              return {
                title: name,
                subtitle: position,
                media: media,
              };
            },
          },
        },
      ],
      validation: (rule) => rule.min(1).max(20),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this team section should be displayed.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      sectionHeading: 'sectionHeading',
      memberCount: 'teamMembers',
      isActive: 'isActive',
    },
    prepare({ title, sectionHeading, memberCount, isActive }) {
      const count = Array.isArray(memberCount) ? memberCount.length : 0;
      const status = isActive ? '' : ' (Inactive)';
      return {
        title: `${title}${status}`,
        subtitle: `"${sectionHeading}" - ${count} team members`,
      };
    },
  },
})


