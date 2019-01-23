// USER ACTIONS ********** //

const loggingIn = (userObj) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/login`, {
       method:"POST",
       headers: {
         "Content-type":"application/json",
       },
       body: JSON.stringify(userObj)
       }).then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.error){
            alert('Incorrect username and/or password')
          } else {
            console.log('Login Successful')
            dispatch(loggedIn(data.user_info))
            localStorage.setItem('token', data.token)
          }
       }
     )}
     }

const loggingOut = () => {
  return (dispatch) => {
    dispatch({ type: "LOGGED_OUT" })
  }
}

const loggedIn = (user) =>  {
  return { type:"LOGGED_IN", user }
  }

const signingUp = (userObj) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/users`, {
       method:"POST",
       headers: {
         "Content-type":"application/json",
       },
       body: JSON.stringify(userObj)
       }).then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.error) {
            dispatch(showErrors((data.error)))
          } else {
            console.log('Sign Up Successful')
            dispatch(signedUp(data.user_info))
          }
       })}
     }

const showErrors = (errors) => {
  return { type: "SIGN_UP_ERRORS", errors }
}

 const signedUp = (user) =>  {
   localStorage.setItem('token', user.token)
   return { type:"LOGGED_IN", user }
  }

const fetchingUserWines = (userId) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/users/${userId}`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: "FETCHED_WISHLIST", wishlist: data.user.wine_wishes })
      dispatch({type: "FETCHED_TASTEDLIST", tastedList: data.user.tasted_wines })

    })
  }
}

// COUNTRY ACTIONS ********** //

const fetchingCountries = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/countries')
    .then(res => res.json())
    .then(data => {
      dispatch({type: "FETCHED_COUNTRIES", countries: data.countries })
    })
  }
}

const fetchingCountry = (countryId) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/countries/${countryId}`)
    .then(res => res.json())
    .then(data => {
      dispatch({ type: "FETCHED_COUNTRY", country: data})
    })
  }
}

// WINE ACTIONS ********** //

const fetchedWines = (wines) => {
    return {type: "FETCHED_WINES", wines }
}

const fetchedPageNums = (page) => {
  return { type: "FETCHED_PAGE", page }
}

const fetchingWines = (ext) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/wines${ext}`)
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
    fetch(`http://localhost:3001/api/v1/wine/${wineId}`)
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
    fetch('http://localhost:3001/api/v1/tastingnotes')
    .then(res => res.json())
    .then(data => dispatch(fetchedNotes(data.tasting_notes)))
  }
}

const addingToWishlist = (userId, wineId) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/wine_wishes`, {
       method:"POST",
       headers: {
         "Content-type":"application/json",
       },
       body: JSON.stringify({
         user_id: userId,
         wine_id: wineId
       })
       }).then(res => res.json())
        .then(data => console.log(data))
      }
    }

  const addingToTastedlist = (userId, wineId) => {
    return (dispatch, wishId) => {
      fetch(`http://localhost:3001/api/v1/tasted_wines`, {
         method:"POST",
         headers: {
           "Content-type":"application/json",
         },
         body: JSON.stringify({
           user_id: userId,
           wine_id: wineId
         })
         }).then(res => res.json())
          .then(wine => dispatch(addedToTastedList(wine.tasted_wine)))
        }
      }

// dispatch(deletingFromWishlist(data.tasted_wine.id)
const deletingFromWishlist = (wishId) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/wine_wishes/${wishId}`, {
      method: "DELETE",
    }).then(res => res.json())
    .then(wish => dispatch(deletedWish(wish)))
  }
}

const addedToTastedList = (wine) => {
  return { type: "ADD_TO_TASTED", wine }
}

const deletedWish = (wish) => {
  return { type: "DELETE_WISH", wish }
}


const changeSearchText = (value) => {
  return { type: "CHANGE_SEARCH_TEXT", value }
}

const clearSearch = () => {
  return { type: "CLEAR_SEARCH" }
}


export { fetchingCountries, fetchingCountry, fetchingWines, fetchingTastingNotes, changeSearchText, fetchingSingleWine, clearSearch, loggingIn, signingUp, loggingOut, fetchingUserWines, addingToWishlist, addingToTastedlist, deletingFromWishlist }
