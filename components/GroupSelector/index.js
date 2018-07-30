import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'

const options = [
  {
    value: 'month',
    label: 'month'
  },
  {
    value: 'week',
    label: 'week'
  },
  {
    value: 'day',
    label: 'day'
  }
]

const styles = {
  valueContainer: (o) =>({
    ...o,
    minWidth: '120px'
  }),
  container: (o) => ({
    ...o,
    borderRadius: '5px'
  }),
  control: (o) => ({
    ...o,
    border: '1px solid #03a9f4',
    borderRadius: '15px',
    background: 'white'
  })
}

const GroupSelector = ({ filterBy }) => (
  <Select
    defaultValue={options[0]}
    options={options}
    onChange={(s) => { filterBy({ filterDate: s.value }) }}
    styles={styles}
  />
)

GroupSelector.propTypes = {
  filterBy: PropTypes.func.isRequired
}

const mapDispatch = ({ reviews: { filterBy } }) => ({
  filterBy
})
export default connect(null, mapDispatch)(GroupSelector)
