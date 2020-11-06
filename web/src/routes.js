import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

import Overview from './components/Overview'

import * as ROUTES from './constants/routes'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.DEFAULT}>
        <Redirect to={ROUTES.LOGIN} />
      </Route>

      <Route path={ROUTES.LOGIN}>
        <Login />
      </Route>

      <Dashboard>
        <Route path={ROUTES.DASHBOARD}>
          <Overview />
        </Route>
      </Dashboard>
    </Switch>
  </Router>
)

export default Routes
