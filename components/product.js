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
        <div>
          <h1>{this.props.name}</h1>
          <img src={this.props.image}/>
          <h3>{this.props.price}</h3>
        </div>
        <div>
          <button onClick={this.clickHandler}>Add To Cart</button>
        </div>
      </div>
    )
  }
}

export default Product
