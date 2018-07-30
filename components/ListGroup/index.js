import React from 'react'
import PropTypes from 'prop-types'
import List from 'components/List'
import InfiniteScroll from 'react-infinite-scroller'
import { connect } from 'react-redux'
import H1 from 'components/ui/H1'

const ListGroup = ({ groups = [], order, hasMore, add }) => (
  <InfiniteScroll
    pageStart={0}
    loadMore={() => { add() }}
    hasMore={hasMore}
    loader={<div>Loading...</div>}
  >
    <section>
      {
        groups.map(({ title, reviews }, index) => (
          <article key={`${title}-${index}`}>
            <H1>{title}</H1>
            <List reviews={order === 'latest' ? reviews : reviews.slice().reverse()} />
          </article>
        ))
      }
    </section>
  </InfiniteScroll>
)

ListGroup.propTypes = {
  add: PropTypes.func.isRequired,
  hasMore: PropTypes.bool,
  groups: PropTypes.array,
  order: PropTypes.string
}

const mapDispatch = ({ reviews: { add } }) => ({
  add
})

const mapState = ({ reviews: { hasMore } }) => ({
  hasMore
})

export default connect(mapState, mapDispatch)(ListGroup)
