
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
    // {
    //   name: 'heroHeading',
    //   title: 'Hero Heading',
    //   type: 'string',
    //   description: 'The larger text in in the "hero" area',
    //   group: 'landingContent'
    // },
    {
      name: 'heroSubheading',
      title: 'Power of Truths Subheading',
      type: 'blockContent',
      description: 'The smaller text that goes below "Power of Truths"',
      group: 'landingContent'
    },
    {
      name: 'date',
      title: 'Date and Time',
      type: 'string',
      group: 'landingContent',
      hidden: true
    },
    {
      name: 'locationName',
      title: 'Location Text',
      type: 'string',
      group: 'landingContent',
      hidden: true
    },
    {
      name: 'missionStatement',
      title: 'Mission Statement',
      type: 'text',
      group: 'pageContent',
      hidden: true
    },
    {
      name: 'introVideo',
      title: 'Intro Video',
      type: 'url',
      group: 'landingContent',
      hidden: true
    },
    {
      name: 'pageContent',
      title: 'About Section Content',
      type: 'blockContent',
      group: 'pageContent',
      description: 'The about section.',
      validation: Rule => Rule.required()
    },
    {
      name: 'scheduleContent',
      title: 'Schedule Section Content',
      type: 'blockContent',
      group: 'pageContent',
      validation: Rule => Rule.required()
    },
    {
      name: 'registerContent',
      title: 'Register Section Content',
      type: 'blockContent',
      group: 'pageContent',
      validation: Rule => Rule.required()
    }
  ]
}