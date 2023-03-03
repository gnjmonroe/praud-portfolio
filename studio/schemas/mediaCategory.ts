import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mediaCategory',
  title: 'Media Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
