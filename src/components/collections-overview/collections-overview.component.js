import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import CollectionPreview from '../collection-preview/collection-preview.component'

import {CollectionsOverviewContainer} from './collections-overview.styles'
import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selectors'


const CollectionsOverview = ({collections}) => {
  return (
    <CollectionsOverviewContainer>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </CollectionsOverviewContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionsOverview)
