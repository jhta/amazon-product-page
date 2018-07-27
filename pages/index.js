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

  render () {
    return (
      <Container>
        <Form />
        <ListGroup groups={this.props.groups} />
      </Container>
    )
  }
}

const mapState = ({ reviews: { groups } }) => ({
  groups
})

export default withRematch(initialStore, mapState, null)(Page)
