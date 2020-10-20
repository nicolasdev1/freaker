import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Product from './pages/Products/Product'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/product" component={Product} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
