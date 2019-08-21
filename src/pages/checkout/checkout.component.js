import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  CheckoutPageWrapper,
  CheckoutHeader,
  HeaderBlock,
  Total,
  TestWarning
} from './checkout.styles'

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors'
import CheckoutItem
  from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton
  from '../../components/stripe-button/stripe-button.component'

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <CheckoutPageWrapper>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {
        cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        ))
      }
      <Total>
        <span>TOTAL: ${total}</span>
      </Total>
      <TestWarning>
        *Please use the following test card for the payment*
        <br/>
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </TestWarning>
      <StripeCheckoutButton price={total}/>
    </CheckoutPageWrapper>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
