import fetch from 'isomorphic-unfetch'
import Filter from 'libs/Filter'
import {
  getPage,
  selectFilter,
  filterStars,
  groupsByStars
} from './utils'
import InitialState from './utils/initialState'

let filter = null

export const reviews = {
  state: InitialState,

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
      hasMore,
      page: state.page + 1,
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
        dispatch.searchList.set({ reviews: data.reviews })
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
