import { combineReducers } from 'redux'

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOADING':
      return true;
    default:
      return state
  }
}

const reducer = combineReducers({
  loading: loadingReducer
})

export default reducer;
