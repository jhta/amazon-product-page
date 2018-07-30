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

const OrderSelector = ({ swithOrder }) => (
  <Select
    defaultValue={options[0]}
    options={options}
    onChange={(op) => { swithOrder(op.value) }}
    styles={styles}
  />
)

OrderSelector.propTypes = {
  swithOrder: PropTypes.func.isRequired
}

const mapDispatch = ({ reviews: { swithOrder } }) => ({ swithOrder })

export default connect(null, mapDispatch)(OrderSelector)
