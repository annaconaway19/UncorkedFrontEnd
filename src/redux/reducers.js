import { combineReducers } from 'redux'

const fetchingCountriesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_COUNTRIES":
      return action.countries
    default:
      return state
  }
}

const fetchingCountryReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCHED_COUNTRY":
      return action.country
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
    case "FETCHED_SINGLE_WINE":
      return action.wine
    default:
      return state
  }
}

const fetchingPageReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCHED_PAGE":
      return action.page
    default:
      return state
  }
}

const fetchingNotesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCHED_NOTES':
      return action.notes
    default:
      return state
  }
}

const searchTextReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.value;
    case "CLEAR_SEARCH":
      return ""
    default:
      return state
  }
}

const loginReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return action.user
    case 'LOGGED_OUT':
      return null
    default:
      return state
  }
}

const errorReducer = (state = '', action) => {
  switch (action.type) {
    case "SIGN_UP_ERRORS":
      return action.errors
    default:
      return state
  }
}

const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCHED_WISHLIST':
      return action.wishlist
    case "DELETE_WISH":
      return state.filter(wish => wish.id !== action.wish.wine_wish.id)
    case "ADD_TO_TASTED":
      return state.filter(wish => wish.wine.id !== action.wine.wine.id)
    default:
      return state
  }
}

const tastedListReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_TASTEDLIST":
      return action.tastedList
    case "ADD_TO_TASTED":
      return [...state,
         action.wine
      ]
    default:
      return state
  }
}

const reducer = combineReducers({
  countries: fetchingCountriesReducer,
  wines: fetchingWineReducer,
  tastingNotes: fetchingNotesReducer,
  searchText: searchTextReducer,
  page: fetchingPageReducer,
  singleWine: fetchingSingleWineReducer,
  country: fetchingCountryReducer,
  currentUser: loginReducer,
  errors: errorReducer,
  wishlist: wishlistReducer,
  tastedList: tastedListReducer
})

export default reducer;
