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

const fetchedWines = (wines) => {
    return {type: "FETCHED_WINES", wines }
}

const fetchedPageNums = (page) => {
  return { type: "FETCHED_PAGE", page }
}

const fetchingWines = (pageNum) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/wines?page=${pageNum}`)
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

export { fetchingCountries, fetchingWines, fetchingTastingNotes, changeSearchText, fetchingSingleWine }
