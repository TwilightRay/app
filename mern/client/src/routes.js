import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LinksPage} from './pages/LinksPage'
import {CreatePage} from './pages/CreatePage'
import {DetailPage} from './pages/DetailPage'
import {AuthPage} from './pages/AuthPage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) { // пользователь находится в системе
    return (// описание роутов
      <Switch>
        <Route path="/links" exact>
          <LinksPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/detail/:id" exact>
          <DetailPage />
        </Route>
        <Redirect to="/create"/> // переадресация страницы
      </Switch>
    )
  }
  return ( // пользователь не в системе
    <Switch>
      <Route path="/">
        <AuthPage />
      </Route>
      <Redirect to="/"/>
    </Switch>
  )
}