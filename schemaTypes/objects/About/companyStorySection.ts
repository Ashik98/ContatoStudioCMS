// schemaTypes/objects/companyStorySection.ts
import { defineField, defineType } from 'sanity'

export const companyStorySection = defineType({
  name: 'companyStorySection',
  title: 'Company Story Section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionLabel',
      title: 'Section Label',
      type: 'string',
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'highlightedText',
      title: 'Highlighted Text',
      type: 'string',
    }),
    defineField({
      name: 'storyContent',
      title: 'Story Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'valuePropositions',
      title: 'Value Propositions',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'valueProposition',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Heart (Human-Centered)', value: 'heart' },
                  { title: 'Lightning (Innovation)', value: 'lightning' },
                  { title: 'Shield (Trust & Privacy)', value: 'shield' },
                  { title: 'Globe (Global Impact)', value: 'globe' },
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'ctaButtons',
      title: 'CTA Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'ctaButton',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'Button URL',
              type: 'url',
            }),
            defineField({
              name: 'isPrimary',
              title: 'Primary Button',
              type: 'boolean',
              initialValue: false,
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'mainHeading',
      subtitle: 'companyName',
    },
  },
})
