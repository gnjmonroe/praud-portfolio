import {defineField, defineType} from 'sanity'

import {stdSlugValidationRegex, stdSlugValidationErrorMsg} from '.'

export default defineType({
  name: 'mediaItem',
  title: 'Media Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) =>
        rule.required().custom((currentValue) => {
          if (currentValue?.current?.match(stdSlugValidationRegex)) {
            return stdSlugValidationErrorMsg
          }
          return true
        }),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'YYYY-MM-DD format (e.g., 2023-03-10)',
      placeholder: '2023-03-10',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'recentNews',
      title: 'Recent News?',
      type: 'boolean',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mediaCategory',
      title: 'Media Category',
      type: 'string',
      options: {
        list: [
          {title: 'Media Coverage', value: 'mediaCoverage'},
          {title: 'Online Videos', value: 'onlineVideos'},
          {title: 'Studio News', value: 'studioNews'},
          {title: 'Writings by PRAUD', value: 'writingsByPraud'},
          {title: 'Writings featuring PRAUD', value: 'writingsFeaturingPraud'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'string',
      hidden: ({document}) =>
        document?.mediaCategory !== 'mediaCoverage' && document?.mediaCategory !== 'onlineVideos',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
    }),
    defineField({
      name: 'additionalImages',
      title: 'Additional Images',
      type: 'array',
      of: [{type: 'image'}],
      hidden: ({document}) => !document?.mainImage,
    }),
    defineField({
      name: 'bodyText',
      title: 'Body Text',
      type: 'blockContent',
      hidden: ({document}) => document?.mediaCategory !== 'writingsByPraud',
    }),
  ],
})
