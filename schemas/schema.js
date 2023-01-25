import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import home from './home'
import session from './session'
import presenter from './presenter'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    home,
    session,
    presenter
  ]),
})
