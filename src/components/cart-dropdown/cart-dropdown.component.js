import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { Wrapper, CartItems, EmptyMessage } from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <Wrapper>
      <CartItems>
        {cartItems.length ?
          (
            cartItems.map(cartItem => (
              <CartItem id={cartItem.id} item={cartItem}/>
            ))
          )
          : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )

        }
      </CartItems>
      <CustomButton
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }}>Go to checkout</CustomButton>
    </Wrapper>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
