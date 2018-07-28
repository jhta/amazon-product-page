import React, { Component } from 'react'
import Container from 'components/ui/Container'
import ListGroup from 'components/ListGroup'
import Form from 'components/Form'
import initialStore from 'store'
import withRematch from 'libs/withRematch'

class Page extends Component {
  static async getInitialProps ({ store, isServer }) {
    if (isServer) {
      await store.dispatch.reviews.load()
    }
    return {}
  }

  componentDidMount () {
    this.props.start()
  }

  render () {
    const { order, groups } = this.props
    return (
      <Container>
        <Form />
        <ListGroup
          groups={order === 'latest' ? groups : groups.slice().reverse()}
          order={order}
        />
      </Container>
    )
  }
}

const mapState = ({ reviews: { groups, order } }) => ({
  groups,
  order
})

const mapDispatch = ({ reviews: { startFilter } }) => ({
  start: startFilter
})

export default withRematch(initialStore, mapState, mapDispatch)(Page)
