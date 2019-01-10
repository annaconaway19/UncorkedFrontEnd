import { combineReducers } from 'redux'

const fetchingCountriesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_COUNTRIES":
      return [...state, action.countries]
    default:
      return state
  }
}

const reducer = combineReducers({
  countries: fetchingCountriesReducer
})

export default reducer;
