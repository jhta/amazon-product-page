import fetch from 'isomorphic-unfetch'
import Filter from 'libs/Filter'

const API_URI = 'https://sellics-frontend-test.herokuapp.com/reviews/'

let filter = null

const getPage = page => `${API_URI}${page}`

const initialState = {
  filter: 'days',
  groups: [],
  reviews: [],
  error: null,
  page: 1,
  hasMore: false
}

export const reviews = {
  state: initialState,

  reducers: {
    set: (state, payload) => ({
      ...state,
      ...payload
    }),
    filterByWeek: (state, { reviews }) => state,
    filterByDay: (state, { reviews }) => state,
    filterByMonth: (state, { reviews }) => ({
      ...state,
      groups: filter.byMonth(reviews),
      reviews
    })
  },

  effects: dispatch => ({
    load: async (page = 1) => {
      try {
        const res = await fetch(getPage(page))
        const data = await res.json()
        filter = Filter()
        const groups = filter.byMonth(data.reviews) || []
        dispatch.reviews.set({ ...data, groups })
      } catch (e) {
        dispatch.reviews.set({ error: e.message })
      }
    }
  })
}
