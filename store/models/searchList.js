const escape = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

function getSuggestions (value = '', reviews = []) {
  const escapedValue = escape(value.trim())

  if (escapedValue === '') {
    return []
  }

  const regex = new RegExp('^' + escapedValue, 'i')

  return reviews.filter(review => regex.test(review.title))
}

const initialState = {
  suggestions: [],
  isSearching: false,
  value: '',
  reviews: []
}

export const searchList = {
  state: initialState,
  reducers: {
    set: (state, payload) => ({
      ...state,
      ...payload
    }),
    clear: ({ reviews }) => ({
      ...initialState,
      reviews
    }),
    onFetch: (state, { value }) => ({
      ...state,
      suggestions: getSuggestions(value, state.reviews)
    }),
    changeValue: (state, value) => ({
      ...state,
      value,
      isSearching: value.length !== 0
    })
  }
}
