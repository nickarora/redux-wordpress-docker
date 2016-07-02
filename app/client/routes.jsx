/* eslint-disable new-cap */
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { App, Home } from 'containers'

const getRoutes = () =>
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
  </Route>

export default getRoutes
