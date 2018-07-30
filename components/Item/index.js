import React from 'react'
import PropTypes from 'prop-types'
import Meta from './Meta'
import { ItemStyled, Description } from './styled'

const Item = (props) => (
  <ItemStyled>
    <Meta {...props} />
    <h2>{ props.title }</h2>
    <Description>{ props.content }</Description>
  </ItemStyled>
)

Item.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

export default Item
