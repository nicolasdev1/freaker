import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import * as ROUTES from './constants/routes'

import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import ComingSoon from './pages/ComingSoon'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Users from './pages/Users'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.DEFAULT} component={Landing} />

        <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />

        <Route path={ROUTES.COMING_SOON} component={ComingSoon} />

        <Route exact path={ROUTES.PRODUCTS} component={Products} />

        <Route exact path={ROUTES.ORDERS} component={Orders} />

        <Route exact path={ROUTES.USERS} component={Users} />
      </Switch>
    </BrowserRouter >
  )
}

export default Routes
