import {defineField, defineType} from 'sanity'
import {stdSlugValidationRegex, stdSlugValidationErrorMsg} from '.'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      readOnly: true,
      options: {
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
      name: 'officeBio',
      title: 'Office Bio',
      type: 'blockContent',
    }),
    defineField({
      name: 'partnerHeadshot1',
      title: 'Partner Headshot 1',
      type: 'image',
    }),
    defineField({
      name: 'partnerBio1',
      title: 'Partner Bio 1',
      type: 'blockContent',
    }),
    defineField({
      name: 'partnerHeadshot2',
      title: 'Partner Headshot 2',
      type: 'image',
    }),
    defineField({
      name: 'partnerBio2',
      title: 'Partner Bio 2',
      type: 'blockContent',
    }),
  ],
})
