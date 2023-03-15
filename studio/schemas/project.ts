import {defineField, defineType} from 'sanity'

import {
  stdSlugValidationRegex,
  stdSlugValidationErrorMsg,
  titleEnValidationRegex,
  titleEnValidationErrorMsg,
} from '.'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
      validation: (rule) =>
        rule.required().custom((currentValue) => {
          if (currentValue?.match(titleEnValidationRegex)) {
            return titleEnValidationErrorMsg
          }
          return true
        }),
    }),
    defineField({
      name: 'titleKr',
      title: 'Title (한국어)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titleEn',
        maxLength: 96,
      },
      validation: (rule) =>
        rule.required().custom((currentValue) => {
          if (currentValue?.current?.match(stdSlugValidationRegex)) {
            return stdSlugValidationErrorMsg
          }
          return true
        }),
    }),
    defineField({
      name: 'selectedWork',
      title: 'Selected Work',
      type: 'boolean',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'themes',
      title: 'Research Themes',
      type: 'array',
      of: [{type: 'reference', to: {type: 'theme'}}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Project Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'projectCategory'}}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Project Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM',
      },
      validation: (rule) => rule.required(),
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
      hidden: ({document}) => !document?.mainImage,
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
})
