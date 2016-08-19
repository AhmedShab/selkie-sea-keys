import React, { Component } from 'react'
import Product from './product';
import Cart from './cart';
import { Link } from 'react-router'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {amount: [], cartProducts: []}
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart (product) {
    this.setState({
      cartProducts: [...this.state.cartProducts, product]
    })
  }
  changeAmount () {
    this.setState({
      amount: [5]
    })
  }

  render () {
    return (
      <div>
        <img src="./images/the-selkie.jpg" />
        <h1>Welcome to Selkie Sea Keys!</h1>
        <Cart items={this.state.cartProducts}/>
        <ul>
          {this.state.cartProducts.map((product) => <li>{product.props.name}</li>)}
        </ul>
        <Product name="Blackbeard's key" image='https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7509055880969?$yetidetail$'
                 addCart={this.addToCart} price='$5' amount={this.changeAmount}/>
        <Product name="API key" image='http://tattooos.org/wp-content/uploads/parser/Skull-Key-Tattoo-On-Back-1.jpeg'
                 addCart={this.addToCart} price='$10'/>
      </div>
    )
  }
}

export default App
