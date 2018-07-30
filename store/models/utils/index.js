const API_URI = 'https://sellics-frontend-test.herokuapp.com/reviews/'

export const getPage = page => `${API_URI}${page}`

export const selectFilter = (filterDate = 'month', filter) => filterDate === 'day'
  ? filter.byDay
  : filterDate === 'week'
    ? filter.byWeek
    : filter.byMonth

export const filterStars = (reviews = [], stars) => reviews
  .filter(review => review.stars === stars)

export const groupsByStars = ({ reviews, filterDate, filter }, stars) => selectFilter(
  filterDate,
  filter
)(
  filterStars(reviews, stars)
)
