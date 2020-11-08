import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import * as ROUTES from './constants/routes'

import Landing from './pages/Landing'
import ComingSoon from './pages/ComingSoon'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Users from './pages/Users'
import EditUser from './pages/Users/EditUser'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.DEFAULT} component={Landing} />

        <Route path={ROUTES.COMING_SOON} component={ComingSoon} />

        <Route exact path={ROUTES.PRODUCTS} component={Products} />

        <Route exact path={ROUTES.ORDERS} component={Orders} />

        <Route exact path={ROUTES.USERS} component={Users} />

        {/* <Route exact path="dashboard/users/edit/:id" component={EditUser} /> */}
      </Switch>
    </BrowserRouter >
  )
}

export default Routes
