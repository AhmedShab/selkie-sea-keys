import React, { Component } from 'react'

class Product extends Component {

  constructor (props) {
    super(props)
    // this.props.name = props.name
    // this.props.image = props.image
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler () {
    this.props.addCart(this)
  }


  render () {
    return (
      <div>
        <h1>Product is {this.props.name}</h1>
        <button onClick={this.clickHandler}>Add To Cart</button>
      </div>
    )
  }
}

export default Product
