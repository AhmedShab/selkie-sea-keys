import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/app'
import CartList from './components/cartList'


//
// render(<App name='selkie-sea-keys' />, document.querySelector('main'))
// console.log('welcome to selkie-sea-keys')

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/cartList" component={CartList}/>
  </Router>
), document.querySelector('main'))

// render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App}/>
//     <Route path="/cartList" component={CartList}/>
//   </Router>
// ), document.getElementById('main'))
