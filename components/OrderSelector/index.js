import React from 'react'
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

const mapDispatch = ({ reviews: { swithOrder } }) => ({ swithOrder })

export default connect(null, mapDispatch)(OrderSelector)
