import { defineField, defineType } from 'sanity'

export const featuresShowcaseSection = defineType({
    name: 'featuresShowcaseSection',
    title: 'Features Showcase Section',
    type: 'object',
    fields: [
        /* ---------------- Header ---------------- */
        defineField({
            name: 'eyebrow',
            title: 'Eyebrow Text',
            type: 'string',
            description: 'Small heading above the section (e.g., "Our Features")',
        }),
        defineField({
            name: 'badge',
            title: 'Badge Text',
            type: 'string',
            description: 'Highlighted pill text (e.g., "Complete Feature Set")',
        }),
        defineField({
            name: 'heading',
            title: 'Main Heading',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'text',
            rows: 2,
        }),

        /* ---------------- Features ---------------- */
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            validation: (rule) => rule.min(1),
            of: [
                {
                    type: 'object',
                    name: 'featureItem',
                    fields: [
                        defineField({
                            name: 'label',
                            title: 'Feature Label',
                            type: 'string',
                            description: 'E.g. "Feature #1"',
                        }),
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
                            rows: 3,
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Icon',
                            type: 'image',
                            options: { hotspot: true },
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'tags',
                            title: 'Feature Tags',
                            description: 'Small highlight pills below description',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }),
                        defineField({
                            name: 'layout',
                            title: 'Layout Alignment',
                            type: 'string',
                            description: 'Controls left/right positioning',
                            options: {
                                list: [
                                    { title: 'Image Left / Content Right', value: 'left' },
                                    { title: 'Image Right / Content Left', value: 'right' },
                                ],
                                layout: 'radio',
                            },
                            initialValue: 'left',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'cta',
                            title: 'Feature CTA',
                            type: 'ctaBlock', // 👈 reuse existing CTA object
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            media: 'icon',
                            subtitle: 'layout',
                        },
                    },
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'heading',
        },
        prepare({ title }) {
            return {
                title: title || 'Features Showcase Section',
            }
        },
    },
})
