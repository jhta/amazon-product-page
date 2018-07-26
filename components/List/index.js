import React from 'react'
import Item from 'components/Item'

const List = ({ reviews = [] }) => (
  <section>
    <ul>
      {
        reviews.map(review => <Item key={review.childAsin} {...review} />)
      }
    </ul>
  </section>
)

export default List
