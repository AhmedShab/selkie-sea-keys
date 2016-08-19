import React, { Component } from 'react'
import Product from './product';
import Cart from './cart';
import { Link } from 'react-router'

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
        <img className="header-image" src="./images/the-selkie.jpg" />
        <h1>Welcome to Selkie Sea Keys!</h1>
        <Cart items={this.state.cartProducts}/>
        <ul>
          {this.state.cartProducts.map((product) => <li>{product.props.name}</li>)}
        </ul>
        <Product name="Blackbeard's key" image='https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7509055880969?$yetidetail$'
                 price='$5' addCart={this.addCart}/>
        <Product name="API key" image='http://tattooos.org/wp-content/uploads/parser/Skull-Key-Tattoo-On-Back-1.jpeg'
                 addCart={this.addCart} price='$100'/>
        <Product name="Piano key" image='https://s-media-cache-ak0.pinimg.com/736x/f2/52/43/f25243ff44583f544720e06c2b88a7b2.jpg'
                 addCart={this.addCart} price='$5' amount={this.changeAmount}/>
        <Product name="John key" image='http://www.acroprintstore.com/media/products2011/key1.jpg'
                 addCart={this.addCart} price='50c' amount={this.changeAmount}/>
        <Product name="Key to Life" image='http://cdn.notonthehighstreet.com/fs/5d/2e/8c6a-f446-473d-b7be-044c46147ca9/original_large-ornate-key-in-gold.jpg'
                 addCart={this.addCart} price='$500' amount={this.changeAmount}/>
        <Product name="Mon-key" image='http://cogswellgallery.com/image/cache/data/Ara%20Collection/ara_small_key_pendant-800x800.jpg'
                addCart={this.addCart} price='$500' amount={this.changeAmount}/>
        <Product name="Black Keys" image='http://www.saturdayeveningpost.com/wp-content/uploads/satevepost/ben-franklins-key.png'
                addCart={this.addCart} price='$500' amount={this.changeAmount}/>
        <Product name="Key to Treasure Chest" image='http://www.tommyjo.co.uk/content/images/thumbs/0000058_sashas-large-and-small-key-necklace_335.jpeg'
                addCart={this.addCart} price='$500' amount={this.changeAmount}/>
      </div>
    )
  }
}

export default App
