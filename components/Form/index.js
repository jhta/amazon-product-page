import React from 'react'
import GroupSelector from '../GroupSelector'
import OrderSelector from '../OrderSelector'
import StarsFilter from '../StarsFilter'
import SearchBar from '../SearchBar'

const Form = props => (
  <section>
    <GroupSelector />
    <OrderSelector />
    <StarsFilter />
    <SearchBar />
  </section>
)

export default Form
