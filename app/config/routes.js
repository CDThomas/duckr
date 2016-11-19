import React from 'react'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer,
  FeedContainer, LogoutContainer } from 'containers'

export default function getRoutes (checkAuth) {
  return (
    <Router history={hashHistory}>
      <Router path='/' component={MainContainer}>
        <Route path='auth' component={AuthenticateContainer} onEnter={checkAuth} />
        <Route path='feed' component={FeedContainer} onEnter={checkAuth} />
        <Route path='logout' component={LogoutContainer} />
        <IndexRoute component={HomeContainer} onEnter={checkAuth} />
      </Router>
    </Router>
  )
}
