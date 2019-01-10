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
    .then(data => dispatch(fetchedWines(data)))
  }
}
// const fetchingCountries = () => ({type: "FETCHING_COUNTRIES"})

export { fetchingCountries, fetchingWines }
