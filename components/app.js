import React, { Component } from 'react'
import Product from './product';
import Cart from './cart';
class App extends Component {

  constructor (props) {
    super(props)
    this.state = {cartProducts: []}
  }

  addToCart (product) {
    this.setState({
      cartProducts: [...this.state.cartProducts, product]
    })
  }

  render () {
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <Product name='key' image='notImage' addCart={this.addToCart}/>
        <Cart items={this.state.cartProducts}/>
      </div>
    )
  }
}

export default App
