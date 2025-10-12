import { defineField, defineType } from 'sanity'

export const loginPage = defineType({
  name: 'loginPage',
  title: 'Login Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Heading',
      type: 'string',
      description: 'The primary headline shown on the landing page.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bottomText',
      title: 'Bottom Text',
      type: 'text',
      rows: 2,
      description: 'A short bottom text ',
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: 'signUpUrl',
      title: 'Sign Up URL',
      type: 'url', 
      description: 'signup url ',
    }),
    defineField({
      name: 'otpTitle',
      title: 'OTP Page Title',
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
})
