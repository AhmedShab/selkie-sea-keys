import React, { Component } from 'react'
import Product from './product';
import Cart from './cart';

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
        <img className="header-image" src="./images/the-selkie.jpg" />
        <h1>Welcome to {this.props.name}</h1>
        <Cart items={this.state.cartProducts}/>
        <Product name="Blackbeard's key" image='https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7509055880969?$yetidetail$'
                 addCart={this.addToCart} price='$5' amount={this.changeAmount}/>
        <Product name="API key" image='http://tattooos.org/wp-content/uploads/parser/Skull-Key-Tattoo-On-Back-1.jpeg'
                 addCart={this.addToCart} price='$100'/>
        <Product name="Piano key" image='https://s-media-cache-ak0.pinimg.com/736x/f2/52/43/f25243ff44583f544720e06c2b88a7b2.jpg'
                 addCart={this.addToCart} price='$5' amount={this.changeAmount}/>
               <Product name="John key" image='http://cdn.notonthehighstreet.com/fs/5d/2e/8c6a-f446-473d-b7be-044c46147ca9/original_large-ornate-key-in-gold.jpg'
                 addCart={this.addToCart} price='50c' amount={this.changeAmount}/>
      </div>
    )
  }
}

export default App
