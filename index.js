import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './components/app'
import CartList from './components/cartList'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/cartList" component={CartList}/>
  </Router>
), document.querySelector('main'))
