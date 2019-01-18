const fetchingCountries = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/countries')
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      dispatch({type: "FETCHED_COUNTRIES", countries: data.countries })
    })
  }
}

const fetchingCountry = (countryId) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/countries/${countryId}`)
    .then(res => res.json())
    .then(data => {
      dispatch({ type: "FETCHED_COUNTRY", country: data})
    })
  }
}
const fetchedWines = (wines) => {
    return {type: "FETCHED_WINES", wines }
}

const fetchedPageNums = (page) => {
  return { type: "FETCHED_PAGE", page }
}

const fetchingWines = (ext) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/wines${ext}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.wines.length === 0) {
        alert("Oops! No bottles in our cellar with that name! Please search again.")
      } else {
        dispatch(fetchedWines(data.wines))
        dispatch(fetchedPageNums(data.meta))
      }
    })
  }
}

const fetchedSingleWine = (wine) => {
  return { type: "FETCHED_SINGLE_WINE", wine }
}

const fetchingSingleWine = (wineId) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/wine/${wineId}`)
    .then(res => res.json())
    .then(data => {
      dispatch(fetchedSingleWine(data.wine))
    })
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

const clearSearch = () => {
  return { type: "CLEAR_SEARCH" }
}

export { fetchingCountries, fetchingCountry, fetchingWines, fetchingTastingNotes, changeSearchText, fetchingSingleWine, clearSearch }
