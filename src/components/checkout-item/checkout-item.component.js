import React from 'react'
import { connect } from 'react-redux'

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions'

import {
  Wrapper,
  ImageContainer,
  Name,
  RemoveButton,
  Price,
  Quantity
} from './checkout-item.styles'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <Wrapper>
      <ImageContainer>
        <img src={imageUrl} alt="item"/>
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <div className="arrow"
             onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={() => {
        clearItem(cartItem)
      }}>&#10005;</RemoveButton>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
