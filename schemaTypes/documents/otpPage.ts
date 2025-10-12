// otpPage.ts
import { defineField, defineType } from 'sanity'

export const otpPage = defineType({
  name: 'otpPage',
  title: 'OTP Verification Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Verify Your Email',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'infoText',
      title: 'OTP Sent Info Text',
      type: 'text',
      initialValue: "We've sent a 6-digit code to your email address.",
      rows: 2,
    }),
    defineField({
      name: 'changeEmailText',
      title: 'Change Email Text',
      type: 'string',
      initialValue: '(change)',
    }),
    defineField({
      name: 'otpLabel',
      title: 'OTP Input Label',
      type: 'string',
      initialValue: 'Enter 6-digit verification code',
    }),
    defineField({
      name: 'resendText',
      title: 'Resend Text',
      type: 'string',
      initialValue: "Didn't receive the code?",
    }),
    defineField({
      name: 'resendButtonLabel',
      title: 'Resend Button Label',
      type: 'string',
      initialValue: 'Resend',
    }),
    defineField({
      name: 'resendTimerLabel',
      title: 'Resend Timer Label',
      type: 'string',
      initialValue: 'Resend available in',
    }),
    defineField({
      name: 'verifyButtonText',
      title: 'Verify Button Text',
      type: 'string',
      initialValue: 'Verify & Login',
    }),
    defineField({
      name: 'signupText',
      title: 'Sign Up Text',
      type: 'string',
      initialValue: "Don't have an account? Sign up",
    }),
    defineField({
      name: 'signupUrl',
      title: 'Sign Up URL',
      type: 'url',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      description: 'SEO meta data for this page.',
    }),
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: { title: 'title', brandingLogo: 'brandingLogo' },
  },
  orderings: [
    { title: 'Recently Updated', name: 'updatedDesc', by: [{ field: '_updatedAt', direction: 'desc' }] },
  ],
})
