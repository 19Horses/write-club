import {defineType, defineField} from 'sanity'

export const interview = defineType({
  name: 'interview',
  title: 'Interview',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the interview.',
    }),
    defineField({
      name: 'interviewer',
      title: 'Interviewer',
      type: 'reference',
      to: [{type: 'person'}],
      description: 'The interviewer of the interview.',
    }),
    defineField({
      name: 'interviewee',
      title: 'Interviewee',
      type: 'reference',
      to: [{type: 'person'}],
      description: 'The interviewee of the interview.',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'The date of the interview.',
    }),
    defineField({
      name: 'transcript',
      title: 'Transcript',
      type: 'array',
      of: [{type: 'interviewTurn'}],
      description: 'The full interview transcript, turn by turn.',
    }),
  ],
})
