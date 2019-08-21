import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'

import {Wrapper, Title, Preview} from './collection-preview.styles'

const CollectionPreview = ({title, items}) => {
  return (
    <Wrapper>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {
           items
             .filter((item, idx) => idx < 4)
             .map((item) => (
             <CollectionItem key={item.id} item={item} />
           ))
        }
      </Preview>
    </Wrapper>
  )
}

export default CollectionPreview
