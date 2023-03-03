import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'awardPastNews',
  title: 'Award/Past News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      placeholder: 'Another W in the books.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Award', value: 'award'},
          {title: 'Past News', value: 'pastNews'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'YYYY format (e.g., 2023)',
      options: {
        dateFormat: 'YYYY',
      },
      placeholder: '2023',
      validation: (rule) => rule.required(),
    }),
  ],
})
