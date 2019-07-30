import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollections } from '../../redux/shop/shop.selectors'

const ShopPage = ({collections}) => {
  return (
    <div className="shop-page">
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }

    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(mapStateToProps)(ShopPage)
