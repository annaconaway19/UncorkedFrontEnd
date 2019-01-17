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
      dispatch(fetchedWines(data.wines))
      dispatch(fetchedPageNums(data.meta))
    })
  }
}

const fetchedSingleWine = (wine) => {
  return { type: "FETCHED_SINGLE_WINE", wine }
}

const fetchingSingleWine = (wineId) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/wines/${wineId}`)
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

const searchedWines = (wines) => {
  return { type: "SEARCH_WINE", wines}
}

const searchingWines = (searchText) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/wines/${searchText}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      dispatch(searchedWines(data.wines))
    }).catch((error) => console.log(error))
  }
}

export { fetchingCountries, fetchingCountry, fetchingWines, fetchingTastingNotes, changeSearchText, fetchingSingleWine, searchingWines }
