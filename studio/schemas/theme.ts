import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'theme',
  title: 'Theme',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of research theme.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description:
        'The unique URL suffix for this page. Only latin characters (a-z), numbers (0-9), and hyphens (-) are valid.',
      validation: (rule) =>
        rule.required().custom((currentValue) => {
          if (currentValue?.current?.match(/[^\d\-a-zA-Z]+/gm))
            return 'Only latin characters (a-z), numbers (0-9), and hyphens (-) are valid.'
          return true
        }),
    }),
    defineField({
      name: 'lineNumber',
      title: 'Line #',
      type: 'string',
      description: 'This is the line number that corresponds to the research theme.',
      validation: (rule) =>
        rule.custom((currentValue) => {
          if (currentValue?.match(/\D/gm)) {
            return 'Only numbers (0-9) are valid.'
          }
          return true
        }),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'additionalImages',
      title: 'Additional Images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
  ],
})
