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

const fetchedSingleWine = (wine) => {
  return {type: "FETCHED_SINGLE_WINE", wine}
}

const fetchSingleWine = (wineId) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/wines/${wineId}`)
    .then(res => res.json())
    .then(data => dispatch(fetchedSingleWine(data.wine)))
  }
}

const changeSearchText = (value) => {
  return { type: "CHANGE_SEARCH_TEXT", value }
}

export { fetchingCountries, fetchingWines, fetchSingleWine, changeSearchText }
