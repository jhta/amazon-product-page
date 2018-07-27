import React, { Component } from 'react'
import List from 'components/List'
import Container from 'components/ui/Container'
import fetch from 'isomorphic-unfetch'
import Filter from 'libs/Filter'
import ListGroup from 'components/ListGroup'

const API_URI = 'https://sellics-frontend-test.herokuapp.com/reviews/1'

const filter =  Filter()

class Page extends Component {
  static async getInitialProps ({ req }) {
    const res = await fetch(API_URI)
    const data = await res.json()
    const groups = filter.byMonth(data.reviews) || []
    debugger
    return {
      ...data,
      groups
    }
  }

  render () {
    return (
      <Container>
        <ListGroup groups={this.props.groups} />
      </Container>
    )
  }
}

export default Page
