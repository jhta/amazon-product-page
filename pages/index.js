import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    const { order, groups, isSearching } = this.props
    return (
      <Container>
        <Form />
        {
          !isSearching
            ? (
              <ListGroup
                groups={order === 'latest' ? groups : groups.slice().reverse()}
                order={order}
              />
            )
            : null
        }
      </Container>
    )
  }
}

Page.propTypes = {
  order: PropTypes.string.isRequired,
  isSearching: PropTypes.bool.isRequired,
  groups: PropTypes.array.isRequired,
  start: PropTypes.func.isRequired
}

const mapState = ({ reviews: { groups, order }, searchList: { isSearching } }) => ({
  groups,
  order,
  isSearching
})

const mapDispatch = ({ reviews: { startFilter } }) => ({
  start: startFilter
})

export default withRematch(initialStore, mapState, mapDispatch)(Page)
