import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Users from './pages/Users'

import Header from './components/Header'

export const App = () => {
  const routes = [
    { path: '/', component: Home, exact: true },
    { path: '/users', component: Users, exact: true }
  ]
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  )
}
