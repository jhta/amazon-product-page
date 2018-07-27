import React from 'react'
import List from 'components/List'

const ListGroup = ({ groups = [], order }) => (
  <section>
    {
      groups.map(({ title, reviews }, index) => (
        <article key={index}>
          <h1>{title}</h1>
          <List reviews={order === 'latest' ? reviews : reviews.slice().reverse()} />
        </article>
      ))
    }
  </section>
)

export default ListGroup
