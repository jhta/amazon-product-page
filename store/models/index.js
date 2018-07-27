import fetch from 'isomorphic-unfetch'
import Filter from 'libs/Filter'

const API_URI = 'https://sellics-frontend-test.herokuapp.com/reviews/'

let filter = null

const getPage = page => `${API_URI}${page}`

const initialState = {
  filter: null,
  groups: [],
  reviews: [],
  error: null,
  page: 1,
  hasMore: false,
  order: 'latest',
  filterDate: 'month'
}

const selectFilter = (filterDate = 'month', filter) => filterDate === 'day'
  ? filter.byDay
  : filterDate === 'week'
    ? filter.byWeek
    : filter.byMonth

export const reviews = {
  state: initialState,

  reducers: {
    set: (state, payload) => ({
      ...state,
      ...payload
    }),
    filterBy: (state, { filterDate, reviews = null }) => filterDate !== state.filterDate
      ? ({
        ...state,
        filterDate,
        groups: selectFilter(filterDate, state.filter)(reviews || state.reviews),
        reviews: reviews || state.reviews
      })
      : state,
    startFilter: (state) => ({
      ...state,
      filter: Filter()
    }),
    swithOrder: (state, order = 'latest') => ({
      ...state,
      order
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
