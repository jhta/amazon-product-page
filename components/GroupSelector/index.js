import React from 'react'
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

class GroupSelector extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (selected) {
    this.props.filterBy({ filterDate: selected.value })
  }

  render () {
    return (
      <Select
        defaultValue={options[0]}
        options={options}
        onChange={this.handleChange}
      />
    )
  }
}


const mapDispatch = ({ reviews: { filterBy } }) => ({
  filterBy
})
export default connect(null, mapDispatch)(GroupSelector)
