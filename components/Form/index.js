import React from 'react'
import GroupSelector from '../GroupSelector'
import OrderSelector from '../OrderSelector'
import Stars from 'react-stars'

const Form = props => (
  <section>
    Form
    <GroupSelector />
    <OrderSelector />
    <p>Filter By:</p>
    <Stars
      value={5}
      size={20}
      color1={'#ddd'}
      color2={'black'}
      edit={false}
    />
  </section>
)

export default Form
