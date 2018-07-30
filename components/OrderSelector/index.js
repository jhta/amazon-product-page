import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'

const options = [
  {
    value: 'latest',
    label: 'latest'
  },
  {
    value: 'older',
    label: 'older'
  }

]

const OrderSelector = ({ swithOrder }) => (
  <Select
    defaultValue={options[0]}
    options={options}
    onChange={(op) => { swithOrder(op.value) }}
  />
)

OrderSelector.propTypes = {
  swithOrder: PropTypes.func.isRequired
}

const mapDispatch = ({ reviews: { swithOrder } }) => ({ swithOrder })

export default connect(null, mapDispatch)(OrderSelector)
