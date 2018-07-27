import React, { Component } from 'react'
import Container from 'components/ui/Container'
import ListGroup from 'components/ListGroup'
import Form from 'components/Form'
import store from 'store'

class Page extends Component {
  static async getInitialProps ({ req }) {
    await (store.dispatch({ type: 'reviews/load' }))
    const initialState = store.getState()
    return {
      ...initialState.reviews
    }
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

export default Page
