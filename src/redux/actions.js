const fetchingCountries = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/countries')
    .then(res => res.json())
    .then(data =>
      dispatch({type: "FETCHED_COUNTRIES", countries: data.countries }))
  }
}

const fetchedWines = (wines) => {
    return {type: "FETCHED_WINES", wines }
}

const fetchingWines = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/wines')
    .then(res => res.json())
    .then(data => dispatch(fetchedWines(data.wines)))
  }
}

const fetchedNotes = (notes) => {
  return {type: 'FETCHED_NOTES', notes}
}
const fetchingTastingNotes = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/tastingnotes')
    .then(res => res.json())
    .then(data => dispatch(fetchedNotes(data.tasting_notes)))
  }
}

const changeSearchText = (value) => {
  return { type: "CHANGE_SEARCH_TEXT", value }
}

export { fetchingCountries, fetchingWines, fetchingTastingNotes, changeSearchText }
