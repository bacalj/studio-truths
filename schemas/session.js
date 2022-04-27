export default {
  name: 'session',
  title: 'Sessions',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title'
      }
    },
    {
      name: 'time',
      title: 'Time',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    },
    {
      name: 'createPage',
      title: 'Create Dedicated Page',
      type: 'boolean',
      description: 'Should there be a dedicated page for this session or schedule item?'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'time'
    }
  },
  orderings: [
    {
      title: 'order',
      name: 'order',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ]
}