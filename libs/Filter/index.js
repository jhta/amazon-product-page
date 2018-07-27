import moment from 'moment'

const FILTERS = {
  MONTH: 'MMMM',
  DAY: 'YYYY-DD-MM',
  WEEK: 'YYYY-ww-MM'
}

class Filter {
  constructor () {
    this._days = null
    this._weeks = null
    this._months = null
    this._reviews = []
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
        const startWeek = momentDate.clone().weekday(1)
        const endWeek = momentDate.clone().weekday(7)
        return `${startWeek.format('MMMM Do')} - ${endWeek.format('MMMM Do')}`
    }
  }

  reviewsAreDeepEqual (reviews = []) {
    if (reviews.length === this._reviews.length) {
      return !reviews.some((review, index) => review.reviewId !== this._reviews[index].reviewId)
    }
    return false
  }

  byMonth (reviews = []) {
    if (!this.reviewsAreDeepEqual(reviews) || !this._months) {
      this._reviews = reviews
      this._months = this.filter(reviews, FILTERS.MONTH, new Map())
    }

    return this.render(this._months)
  }

  byDay (reviews = []) {
    if (!this.reviewsAreDeepEqual(reviews) || !this._days) {
      this._reviews = reviews
      this._days = this.filter(reviews, FILTERS.DAY, new Map())
    }

    return this.render(this._days)
  }

  byWeek (reviews = []) {
    if (!this.reviewsAreDeepEqual(reviews) || !this._weeks) {
      this._reviews = reviews
      this._weeks = this.filter(reviews, FILTERS.WEEK, new Map())
    }

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
