import React from 'react'
import PropTypes from 'prop-types'
import Stars from 'react-stars'
import { connect } from 'react-redux'

const StarsFilter = ({ stars = 5, filterByStars }) => (

  <div>
    <p>Filter By:</p>
    <Stars
      onChange={(s) => { filterByStars(s) }}
      value={stars}
      half={false}
      size={40}
    />
  </div>
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
