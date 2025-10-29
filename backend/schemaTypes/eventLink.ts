import {defineField, defineType} from 'sanity'

export const eventLink = defineType({
  name: 'eventLink',
  title: 'Event Link',
  type: 'document',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      validation: (rule) => rule.required().uri({scheme: ['https'], allowRelative: false}),
    }),
  ],
})
