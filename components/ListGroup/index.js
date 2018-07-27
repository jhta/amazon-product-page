import React from 'react'
import List from 'components/List'

const ListGroup = ({ groups = [] }) => (
  <section>
    {
      groups.map(({ title, reviews }, index) => (
        <article key={index}>
          <h1>{title}</h1>
          <List reviews={reviews} />
        </article>
      ))
    }
  </section>
)

export default ListGroup
