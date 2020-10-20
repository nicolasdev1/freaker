import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Product from './pages/Products/Product'

import Home from './pages/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />

      </Switch>
    </BrowserRouter >
  )
}

export default Routes
