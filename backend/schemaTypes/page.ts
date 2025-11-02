import {defineField, defineType} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      options: {
        list: [
          {title: 'About', value: 'about'},
          {title: 'Starry Nights', value: 'starry-nights'},
          {title: "What's your Niche?", value: 'niche'},
          {title: 'Write Club', value: 'write-club'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'copy',
      title: 'Copy',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [{type: 'block'}],
    }),
  ],
})
