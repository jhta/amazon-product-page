import { init } from '@rematch/core'

import * as models from './models'

export default (initialState = {}) => init({
  models,
  redux: {
    initialState
  }
})
