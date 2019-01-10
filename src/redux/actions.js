const fetchingCountries = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/countries')
    .then(res => res.json())
    .then(data =>
      dispatch({type: "FETCHED_COUNTRIES", countries: data.countries }))
  }
}

// const fetchingCountries = () => ({type: "FETCHING_COUNTRIES"})

export { fetchingCountries }
