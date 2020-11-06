import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import * as ROUTES from './constants/routes'

import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import ComingSoon from './pages/ComingSoon'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.DEFAULT} component={Landing} />

        <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />

        <Route exact path={ROUTES.COMING_SOON} component={ComingSoon} />
      </Switch>
    </BrowserRouter >
  )
}

export default Routes
