import React, { Component } from 'react'
import List from 'components/List'
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
      <React.Fragment>
        <List reviews={this.props.reviews} />
      </React.Fragment>
    )
  }
}

export default Page
