import {defineType, defineField, PortableTextBlock} from 'sanity'

export const interviewTurn = defineType({
  name: 'interviewTurn',
  title: 'Interview Turn',
  type: 'object',
  fields: [
    defineField({
      name: 'speaker',
      title: 'Speaker',
      type: 'reference',
      to: [{type: 'person'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              title: 'Alt text',
              type: 'string',
              description: 'Important for SEO and accessibility',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      speaker: 'speaker.initials',
      text: 'text',
    },
    prepare(selection: {speaker: string; text: PortableTextBlock[]}) {
      const {speaker, text} = selection

      if (!speaker || !text) {
        return {
          title: '',
          subtitle: '',
        }
      }

      const firstBlock = text[0]

      if (!firstBlock) {
        return {
          title: speaker,
          subtitle: '',
        }
      }

      const firstChild = firstBlock.children as {text: string}[]

      return {
        title: speaker,
        subtitle: firstChild[0].text,
      }
    },
  },
})
