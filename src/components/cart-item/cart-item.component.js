import React from 'react'

import {Wrapper, ItemDetails, Name} from './cart-item.styles'

const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
  return (
    <Wrapper>
      <img src={imageUrl} alt="item"/>
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x {price}
        </span>
      </ItemDetails>
    </Wrapper>
  )
}

export default CartItem
