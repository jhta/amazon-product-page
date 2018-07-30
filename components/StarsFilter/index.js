import React from 'react'
import PropTypes from 'prop-types'
import Stars from 'react-stars'
import { connect } from 'react-redux'
import Label from 'components/ui/Label'
import Selector from 'components/ui/Selector'

const StarsFilter = ({ stars = 5, filterByStars }) => (
  <Selector>
    <Label>Filter By:</Label>
    <Stars
      onChange={(s) => { filterByStars(s) }}
      value={stars}
      color2={'#03a9f4'}
      color1={'#ccc'}
      half={false}
      size={40}
    />
  </Selector>
)

StarsFilter.propTypes = {
  stars: PropTypes.number.isRequired,
  filterByStars: PropTypes.func.isRequired
}

const mapDispatch = ({ reviews: { filterByStars } }) => ({
  filterByStars
})

const mapState = ({ reviews: { stars } }) => ({
  stars
})

export default connect(mapState, mapDispatch)(StarsFilter)
