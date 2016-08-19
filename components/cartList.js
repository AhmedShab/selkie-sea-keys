import React, { Component } from 'react'

class CartList extends Component {


    constructor (props) {
      super(props)
      console.log(this.props.params);
    }


  render () {
    return (
      <div>
        This is the cart page!
      </div>
    )
  }
}

export default CartList
