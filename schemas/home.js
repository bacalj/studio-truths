
export default {
  name: 'home',
  title: 'Pages',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  groups: [
    { name: 'landingContent', title: 'Landing Content'},
    { name: 'pageContent', title: 'Page Content'},
  ],
  fields: [
    {
      name: 'homePageTitle',
      title: 'Home Page Title',
      type: 'string',
      group: 'landingContent',
      hidden: true,
      readOnly: true
    },
    {
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      description: 'The larger text in in the "hero" area',
      group: 'landingContent'
    },
    {
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'text',
      description: 'The smaller text in in the "hero" area',
      group: 'landingContent'
    },
    {
      name: 'date',
      title: 'Date and Time',
      type: 'string',
      description: 'text of date and time',
      group: 'landingContent'
    },
    {
      name: 'locationName',
      title: 'Location Text',
      type: 'string',
      description: 'text of location',
      group: 'landingContent'
    },
    {
      name: 'missionStatement',
      title: 'Mission Statement',
      type: 'text',
      group: 'pageContent'
    },
    {
      name: 'pageContent',
      title: 'Page Content',
      type: 'blockContent',
      group: 'pageContent',
      description: 'Use the expansion button for a bigger editor.',
      validation: Rule => Rule.required()
    }
  ]
}