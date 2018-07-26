import React, { Component } from 'react'
import List from 'components/List'
import Container from 'components/ui/Container'
import fetch from 'isomorphic-unfetch'

const API_URI = 'https://sellics-frontend-test.herokuapp.com/reviews/1'

class Page extends Component {
  static async getInitialProps ({ req }) {
    const res = await fetch(API_URI)
    const data = await res.json()
    return data
  }
  render () {
    return (
      <Container>
        <List reviews={this.props.reviews} />
      </Container>
    )
  }
}

export default Page
