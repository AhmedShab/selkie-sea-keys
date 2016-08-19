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
      <div className="product">
        <div>
          <div>{this.props.name}</div>
          <img src={this.props.image}/>
        </div>
        <div>
          <button onClick={this.clickHandler}>Add To Cart</button>
        </div>
      </div>
    )
  }
}

export default Product
