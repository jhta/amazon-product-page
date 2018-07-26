import moment from 'moment'

export const formatTitle = (title = '') => title.length > 20
  ? `${title.slice(0, 20)}...`
  : title

export const formatDate = date => moment(date).format('MMMM Do YYYY')
