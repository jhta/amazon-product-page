import moment from 'moment'

const FILTERS = {
  MONTH: 'MMMM',
  DAY: 'YYYY-DD-MM',
  WEEK: 'YYYY-ww-MM'
}

class Filter {
  constructor () {
    this._days = new Map()
    this._weeks = new Map()
    this._months = new Map()
    this._tree = null
  }

  filter (reviews = [], dateFilter, dateMap) {
    reviews.forEach(review => {
      const date = this.setTitle(dateFilter, review.reviewCreated)
      if (dateMap.has(date)) {
        const content = dateMap.get(date)
        dateMap.set(date, [...content, review])
      } else {
        dateMap.set(date, [review])
      }
    })
    return dateMap
  }

  setTitle (dateFilter, date) {
    const momentDate = moment(date)
    switch (dateFilter) {
      case FILTERS.MONTH:
        return momentDate.format('MMMM')
      case FILTERS.DAY:
        return momentDate.format('MMM Do YYYY')
      case FILTERS.WEEK:
        const startWeek = momentDate.startOf('week')
        const endWeek = momentDate.endOf('week')
        return `${startWeek.format('MMMM Do')} - ${endWeek.format('MMMM Do')}`
    }
  }

  byMonth (reviews = []) {
    this._months = this.filter(reviews, FILTERS.MONTH, new Map(this._months))
    return this.render(this._months)
  }

  byDay (reviews = []) {
    this._days = this.filter(reviews, FILTERS.DAY, new Map(this._days))
    return this.render(this._days)
  }

  byWeek (reviews = []) {
    this._weeks = this.filter(reviews, FILTERS.WEEK, new Map(this._weeks))
    return this.render(this._weeks)
  }

  render (dict) {
    let list = []
    dict.forEach((value, key) => {
      list.push({
        title: key,
        reviews: value
      })
    })

    return list
  }
}

function filterFactory () {
  const filter = new Filter()
  return {
    byDay: (r) => filter.byDay(r),
    byMonth: (r) => filter.byMonth(r),
    byWeek: (r) => filter.byWeek(r)
  }
}

export default filterFactory
