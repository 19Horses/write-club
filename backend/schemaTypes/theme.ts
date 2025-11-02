import {defineField, defineType} from 'sanity'

export const theme = defineType({
  name: 'theme',
  title: 'Theme',
  type: 'document',
  fields: [
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'prompts',
      title: 'Prompts',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [{type: 'string'}],
    }),
  ],
})
