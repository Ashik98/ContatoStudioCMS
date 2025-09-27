// schemaTypes/documents/featureHeaderText.ts
import { defineField, defineType } from 'sanity'

export const featureHeaderText = defineType({
  name: 'featureHeaderText',
  title: 'Feature Header Text',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this feature header (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      description: 'Primary heading text (e.g., "Empower Your Professional Network with Intelligent Connections").',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'highlightedWords',
      title: 'Highlighted Words',
      type: 'array',
      description: 'Words or phrases from the heading that should be highlighted.',
      of: [{ type: 'string' }],
      validation: (rule) => rule.max(5),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Supporting description text about the features and benefits.',
      validation: (rule) => rule.required().max(400),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this feature header should be displayed.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      mainHeading: 'mainHeading',
      isActive: 'isActive',
    },
    prepare({ title, mainHeading, isActive }) {
      const status = isActive ? '' : ' (Inactive)';
      return {
        title: `${title}${status}`,
        subtitle: mainHeading,
      };
    },
  },
})


