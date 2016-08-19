import React, { Component } from 'react'


class Product extends Component {

  constructor (props) {
    super(props)
    // cartProducts: [...this.state.cartProducts, product]
    // this.props.name = props.name
    // this.props.image = props.image
    this.state = {
      amount: 5
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  addToCart () {
    if (this.state.amount === 0) {
      return
    }
    this.setState({
        amount: this.state.amount-1
    })
  }
  stock () {
    if (this.state.amount === 0) {
      return "Out of Stock"
    }
    return `Stock: ${this.state.amount}`
  }

  clickHandler () {
    const { addCart } = this.props
    this.addToCart()
    addCart(this)
  }


  render () {
    const { name, price, image } = this.props
    return (
      <div className="product">
        <div>
          <h3>{this.stock()}</h3>
          <div>{name}</div>
          <img src={image}/>
          <h3>{price}</h3>
        </div>
        <div>
          <button onClick={this.clickHandler}>Add To Cart</button>
        </div>
      </div>
    )
  }
}

export default Product
