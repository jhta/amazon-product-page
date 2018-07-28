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
  filterDate: 'month',
  stars: 5
}

const selectFilter = (filterDate = 'month', filter) => filterDate === 'day'
  ? filter.byDay
  : filterDate === 'week'
    ? filter.byWeek
    : filter.byMonth

const filterStars = (reviews = [], stars) => reviews
  .filter(review => review.stars === stars)

const groupsByStars = ({ reviews, filterDate, filter }, stars) => selectFilter(
  filterDate,
  filter
)(
  filterStars(reviews, stars)
)

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
    }),
    filterByStars: (state, stars) => ({
      ...state,
      stars,
      groups: groupsByStars(state, stars)
    }),
    addMore: (state, { reviews, hasMore }) => ({
      ...state,
      ...payload,
      hasMore,
      page: state.page +  1,
      groups: groupsByStars({
        ...state,
        reviews: [...state.reviews, ...reviews]
      }, state.stars),
      reviews: [...state.reviews, ...reviews]
    })
  },

  effects: dispatch => ({
    load: async (page = 1, state) => {
      try {
        const res = await fetch(getPage(page))
        const data = await res.json()
        filter = Filter()
        const groups = filter.byMonth(filterStars(data.reviews, 5)) || []
        dispatch.reviews.set({ ...data, groups, filter })
      } catch (e) {
        dispatch.reviews.set({ error: e.message })
      }
    },
    add: async (payload, state) => {
      try {
        const { page } = state.reviews
        const res = await fetch(getPage(page + 1))
        const data = await res.json()
        dispatch.reviews.addMore(data)
      } catch (e) {
        dispatch.reviews.set({ error: e.message })
      }
    }
  })
}
