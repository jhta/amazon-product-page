import { init } from '@rematch/core'

import { reviews } from './models'
import { searchList } from './models/searchList'

export default (initialState = {}) => init({
  models: {
    reviews,
    searchList
  },
  redux: {
    initialState
  }
})
