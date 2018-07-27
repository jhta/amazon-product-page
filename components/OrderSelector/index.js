import React from 'react'
import Select from 'react-select'

const options = [
  {
    value: 'by month',
    label: 'by month'
  },
  {
    value: 'by week',
    label: 'by week'
  }

]

const OrderSelector = props => <Select options={options} />

export default OrderSelector
