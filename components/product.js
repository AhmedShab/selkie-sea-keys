import React, { Component } from 'react'

class Product extends Component {

  constructor (props) {
    super(props)
    // this.props.name = props.name
    // this.props.image = props.image
  }

  render () {
    return <h1>Product is {this.props.name}</h1>
  }

}

export default Product
