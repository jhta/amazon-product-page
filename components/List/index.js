import React from 'react'
import PropTypes from 'prop-types'
import Item from 'components/Item'
import ListStyled from './styled'

const List = ({ reviews = [] }) => (
  <ListStyled>
    {
      reviews.map(review => <Item key={review.reviewId} {...review} />)
    }
  </ListStyled>
)

List.propTypes = {
  reviews: PropTypes.array
}

export default List
