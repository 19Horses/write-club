import {defineType, defineField} from 'sanity'

export const person = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      description: 'The full name of the person.',
    }),
    defineField({
      name: 'initials',
      title: 'Initials',
      type: 'string',
      description: 'The initials of the person.',
    }),
  ],
})
