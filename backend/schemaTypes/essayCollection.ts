import {defineType, defineField} from 'sanity'

export const essayCollection = defineType({
  name: 'essayCollection',
  title: 'Essay Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'essays',
      title: 'Essays',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'essay'}],
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
})
