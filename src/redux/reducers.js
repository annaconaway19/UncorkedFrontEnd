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

const fetchingSingleWineReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCHED_ONE_WINE":
      return action.wine
      default:
        return state
    }
  }

const reducer = combineReducers({
  countries: fetchingCountriesReducer,
  wines: fetchingWineReducer,
  wine: fetchingSingleWineReducer
})

export default reducer;
