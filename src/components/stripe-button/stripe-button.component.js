import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price*100
  const publishableKey = 'pk_test_Vthw94W0Gndw6HuKO9elXTMA'

  const onToken = token => {
    console.log(token)
    alert('Payment successful')
  }
  return (
    <StripeCheckout
      label="Pay now"
      name="React Ecommerce"
      billingAdress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total price $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
