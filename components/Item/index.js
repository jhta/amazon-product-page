import React from 'react'
import Meta from './Meta'
import ItemStyled from './styled'

const Item = (props) => (
  <ItemStyled>
    <Meta {...props} />
    <h2>{ props.title }</h2>
    <p>{ props.content }</p>
  </ItemStyled>
)

export default Item
