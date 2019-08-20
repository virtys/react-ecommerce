import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

import CollectionItem from './collection-item.component'

const ADD_ITEM_TO_CART = gql`
    mutation AddItemToCart($item: item!) {
        addItemToCart(item: $item) @client
    }
`

const CollectionItemContainer = (props) => {
  return (
    <Mutation mutation={ADD_ITEM_TO_CART}>
      {
        (addItemToCart) => (
          <CollectionItem
            {...props}
            addItem={item => addItemToCart({ variables: { item } })}
          />)
      }
    </Mutation>
  )
}

export default CollectionItemContainer
