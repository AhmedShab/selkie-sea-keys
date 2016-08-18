import React, { Component } from 'react'
import Product from './product';

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
      </div>
    )
  }
}

export default App
