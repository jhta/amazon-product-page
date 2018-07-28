import React from 'react'
import PropTypes from 'prop-types'
import Item from 'components/Item'
import ListStyled from './styled'
import Fade from 'react-reveal/Fade'

const List = ({ reviews = [] }) => (
  <Fade>
    <ListStyled>
      {
        reviews.map(review => <Item key={review.reviewId} {...review} />)
      }
    </ListStyled>
  </Fade>
)

List.propTypes = {
  reviews: PropTypes.array
}

export default List
