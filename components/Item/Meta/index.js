import React from 'react'
import PropTypes from 'prop-types'
import Stars from 'react-stars'
import Avatar from 'components/ui/Avatar'
import { MetaStyled, P, Bold, MetaGroup } from './styled'
import { formatTitle, formatDate } from './utils'

const Meta = ({ reviewCreated, reviewId, productTitle, stars }) => (
  <MetaStyled>
    <Avatar />
    <MetaGroup>
      <P>Date:</P>
      <Bold>{formatDate(reviewCreated)}</Bold>
    </MetaGroup>
    <MetaGroup>
      <P>Stars:</P>
      <Stars
        value={stars}
        size={20}
        color1={'#ddd'}
        color2={'black'}
        edit={false}
      />
    </MetaGroup>
    <MetaGroup>
      <P>{ reviewId }</P>
      <Bold>{formatTitle(productTitle)}</Bold>
    </MetaGroup>
  </MetaStyled>
)

Meta.propTypes = {
  reviewCreated: PropTypes.number,
  stars: PropTypes.number,
  productTitle: PropTypes.string,
  reviewId: PropTypes.string
}

export default Meta
