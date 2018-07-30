import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'

const options = [
  {
    value: 'month',
    label: 'by month'
  },
  {
    value: 'week',
    label: 'by week'
  },
  {
    value: 'day',
    label: 'by day'
  }
]

const GroupSelector = ({ filterBy }) => (
  <Select
    defaultValue={options[0]}
    options={options}
    onChange={(s) => { filterBy({ filterDate: s.value }) }}
  />
)

GroupSelector.propTypes = {
  filterBy: PropTypes.func.isRequired
}

const mapDispatch = ({ reviews: { filterBy } }) => ({
  filterBy
})
export default connect(null, mapDispatch)(GroupSelector)
