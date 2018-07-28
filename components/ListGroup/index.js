import React from 'react'
import List from 'components/List'
import InfiniteScroll from 'react-infinite-scroller'

const ListGroup = ({ groups = [], order }) => (
  <InfiniteScroll
    pageStart={0}
    loadMore={() => { console.log('load more') }}
    hasMore={true}
    loader={<div>Loading...</div>}
  >
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
  </InfiniteScroll>
)

export default ListGroup
