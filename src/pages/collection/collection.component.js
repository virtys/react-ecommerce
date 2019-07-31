import React from 'react'
import {connect} from 'react-redux'

import {
  CollectionPageContainer,
  CollectionItemsContainer,
  TitleContainer,
} from './collection.styles'

import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectShopCollection } from '../../redux/shop/shop.selectors'

const CollectionPage = ({collection}) => {
  const {title, items} = collection;
  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <CollectionItemsContainer>
        {
          items.map(item => (<CollectionItem key={item.id} item={item}/>))
        }
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
