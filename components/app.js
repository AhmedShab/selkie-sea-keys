import React, { Component } from 'react'
import Product from './product';
import Cart from './cart';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {cartProducts: []}
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart (product) {
    this.setState({
      cartProducts: [...this.state.cartProducts, product]
    })
  }

  render () {
    return (
      <div>
        <img src="./images/the-selkie.jpg" />
        <h1>Welcome to {this.props.name}</h1>
        <Cart items={this.state.cartProducts}/>
        <Product name="Blackbeard's key" image='https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7509055880969?$yetidetail$' addCart={this.addToCart}/>
      </div>
    )
  }
}

export default App
