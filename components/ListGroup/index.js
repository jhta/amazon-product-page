import React from 'react'
import List from 'components/List'
import InfiniteScroll from 'react-infinite-scroller'
import { connect } from 'react-redux'

const ListGroup = ({ groups = [], order, hasMore, add }) => (
  <InfiniteScroll
    pageStart={0}
    loadMore={() => { console.log('hey!!!'); add() }}
    hasMore={hasMore}
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

const mapDispatch = ({ reviews: { add } }) => ({
  add
})

const mapState = ({ reviews: { hasMore } }) => ({
  hasMore
})

export default connect(mapState, mapDispatch)(ListGroup)
