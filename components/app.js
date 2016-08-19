import React, { Component } from 'react'
import Product from './product';
import Cart from './cart';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {cartProducts: []}
    this.addCart = this.addCart.bind(this)
  }

  addCart (product) {
   this.setState({
     cartProducts: [...this.state.cartProducts, product]
   })
   console.log(product);
 }


  render () {
    return (
      <div>
        <img src="./images/the-selkie.jpg" />
        <h1>Welcome to {this.props.name}</h1>
        <Cart items={this.state.cartProducts}/>
        <Product name="Blackbeard's key" image='https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7509055880969?$yetidetail$'
                 price='$5' addCart={this.addCart}/>
        <Product name="API key" image='http://tattooos.org/wp-content/uploads/parser/Skull-Key-Tattoo-On-Back-1.jpeg'
                 price='$10' addCart={this.addCart} />
      </div>
    )
  }
}

export default App
