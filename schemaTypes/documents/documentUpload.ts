import { defineField, defineType } from 'sanity'

export const documentUpload = defineType({
  name: 'documentUpload',
  title: 'Document Upload',
  type: 'document',
  fields: [
    // Basic Information
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main title of the document',
      validation: (rule) => rule.required().max(150),
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Optional subtitle or tagline for the document',
      validation: (rule) => rule.max(200),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { 
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Detailed description of the document content',
      rows: 4,
      validation: (rule) => rule.max(500),
    }),

    // File Upload
    // Documents Upload List
defineField({
  name: 'documents',
  title: 'Documents',
  type: 'array',
  of: [
    defineField({
      name: 'documentItem',
      title: 'Document Item',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (rule) => rule.required().error('Title is required'),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'file',
          title: 'Upload File',
          type: 'file',
          description: 'Upload your document (PDF, DOC, DOCX, etc.)',
          options: {
            accept: '.pdf,.doc,.docx,.txt,.rtf,.xls,.xlsx,.ppt,.pptx',
          },
          validation: (rule) => rule.required().error('File upload is required'),
        }),
        // Categorization
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      description: 'Select the primary category for this document',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'fileSize',
      title: 'File Size (MB)',
      type: 'number',
      description: 'File size in megabytes (auto-populated if possible)',
      readOnly: true,
    }),

    defineField({
      name: 'fileType',
      title: 'File Type',
      type: 'string',
      description: 'Document format (e.g., PDF, DOCX)',
      options: {
        list: [
          { title: 'PDF', value: 'pdf' },
          { title: 'Word Document', value: 'docx' },
          { title: 'Text File', value: 'txt' },
          { title: 'Excel Spreadsheet', value: 'xlsx' },
          { title: 'PowerPoint', value: 'pptx' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),

    defineField({
      name: 'version',
      title: 'Document Version',
      type: 'string',
      description: 'Version number or identifier (e.g., v1.0, draft, final)',
      placeholder: 'v1.0',
    }),

    // Access Control
    defineField({
      name: 'accessLevel',
      title: 'Access Level',
      type: 'string',
      description: 'Who can access this document',
      options: {
        list: [
          { title: 'Public', value: 'public' },
          { title: 'Members Only', value: 'members' },
          { title: 'Staff Only', value: 'staff' },
          { title: 'Private', value: 'private' },
        ],
      },
      initialValue: 'public',
      validation: (rule) => rule.required(),
    }),

    // Author and Attribution - FIXED
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'Original author or creator of the document',
    }),

    defineField({
      name: 'uploadedBy',
      title: 'Uploaded By',
      type: 'string',
      description: 'Name of the person who uploaded this document',
    }),

    // Timestamps
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'When this document should be considered published',
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
      description: 'When the document content was last modified',
    }),

    defineField({
      name: 'expiresAt',
      title: 'Expires At',
      type: 'datetime',
      description: 'Optional expiration date for time-sensitive documents',
    }),

      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'subtitle',
        },
      },
    }),
  ],
  validation: (rule) => rule.min(1).error('At least one document is required'),
}),

    

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      description: 'Add relevant tags to help categorize and discover this document',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
      validation: (rule) => rule.max(10),
    }),

    // Document Metadata
    

    // Status and Workflow
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      description: 'Current status of the document',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Under Review', value: 'review' },
          { title: 'Published', value: 'published' },
          { title: 'Archived', value: 'archived' },
        ],
      },
      initialValue: 'draft',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'featured',
      title: 'Featured Document',
      type: 'boolean',
      description: 'Mark as featured to highlight this document',
      initialValue: false,
    }),
    // SEO (using your existing seo object)
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      description: 'SEO optimization settings for search engines',
    }),

    // Additional Notes
    defineField({
      name: 'internalNotes',
      title: 'Internal Notes',
      type: 'text',
      description: 'Internal notes for staff (not visible to public)',
      rows: 3,
    }),
  ],

  // Preview configuration
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'file',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Untitled Document',
        subtitle: subtitle || 'Document upload',
      }
    },
  },

  // Document ordering
  orderings: [
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
    {
      title: 'Recently Updated',
      name: 'updatedDesc',
      by: [{ field: '_updatedAt', direction: 'desc' }],
    },
    {
      title: 'Published Date',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
