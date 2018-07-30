import React from 'react'
import PropTypes from 'prop-types'
import Autosuggest from 'react-autosuggest'
import { connect } from 'react-redux'
import Item from 'components/Item'

const theme = {
  suggestionsList: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
    marginTop: '2rem',
    boxSizing: 'border-box'
  }
}

const SearchBar = ({ value, suggestions, changeValue, onFetch, clear }) => (
  <div>
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onFetch}
      onSuggestionsClearRequested={clear}
      getSuggestionValue={s => s.title}
      renderSuggestion={s => <Item {...s} />}
      inputProps={{
        placeholder: 'search...',
        value,
        onChange: (event, { newValue }) => {
          changeValue(newValue)
        }
      }}
      theme={theme}
    />
  </div>
)

SearchBar.propTypes = {
  suggestions: PropTypes.array,
  isSearching: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onFetch: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired
}

const mapState = ({ searchList: { suggestions, isSearching, value } }) => ({
  suggestions,
  isSearching,
  value
})

const mapDispatch = ({ searchList: { onFetch, clear, changeValue } }) => ({
  onFetch,
  clear,
  changeValue
})

export default connect(mapState, mapDispatch)(SearchBar)
