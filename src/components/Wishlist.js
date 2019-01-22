import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addingToTastedlist, deletingFromWishlist } from '../redux/actions'

class Wishlist extends React.Component {

  handleDelete = (wishId) => {
    this.props.deletingFromWishlist(wishId)
  }

  moveLists = (wish) => {
    let wineId = wish.wine.id
    let userId = this.props.currentUser.id
    let tastedArr = this.props.tastedList.map(data => data.wine_id)
    console.log(tastedArr)
    if (!tastedArr.includes(wineId)) {
      this.props.deletingFromWishlist(wish.id)
      this.props.addingToTastedlist(userId, wineId)
    } else {
      alert("You must really love this one! It's already on your list.")
  }
}

  render(){
    return(
      <div>
        <h3>Wine Wish List</h3>
        {(this.props.wishlist.length !== 0) ? (
          <React.Fragment>
            {this.props.wishlist.map(el =>
            <ul key={el.id}>
              <li><Link to={`/uncorked/wines/${el.wine.id}`}>{el.wine.name}</Link> - {el.wine.price}</li>
              <button className='move-button' onClick={() => this.handleDelete(el.id)}>Remove Wine</button>
              <button className='move-button' onClick={() => this.moveLists(el)}>Move to Tasted List</button>
            </ul>
          )}
          </React.Fragment>
        ) : ("No saved wines yet!")
      }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    wishlist: state.wishlist,
    tastedList: state.tastedList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addingToTastedlist: (userId, wineId) => {dispatch(addingToTastedlist(userId, wineId))},
    deletingFromWishlist: (wishId) => {dispatch(deletingFromWishlist(wishId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
