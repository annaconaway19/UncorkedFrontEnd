import { combineReducers } from 'redux'

const fetchingCountriesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_COUNTRIES":
      return action.countries
    default:
      return state
  }
}

const fetchingWineReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_WINES":
      return action.wines
    default:
      return state
  }
}

const searchTextReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.value;
    default:
      return state
  }
}

const reducer = combineReducers({
  countries: fetchingCountriesReducer,
  wines: fetchingWineReducer,
  searchText: searchTextReducer
})

export default reducer;
