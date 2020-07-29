import React from 'react'
import { Switch, BrowserRouter } from 'react-router-dom'
import Route from './Router'


import Login from '../pages/Login'

import Home from '../pages/Home'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>

      <Switch>
        <Route isPrivate={false} path="/" exact component={Home} />
        <Route isPrivate={false} path="/login" component={Login} />

      </Switch>
    </BrowserRouter>
  )
}

export default Routes
