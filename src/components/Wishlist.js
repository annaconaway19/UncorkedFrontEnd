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
    this.props.addingToTastedlist(userId, wineId)
  }

  render(){
    return(
      <div>
        <h3>Wine Wish List</h3>
        {this.props.wishlist.map(el =>
          <ul key={el.id}>
            <Link to={`/uncorked/wines/${el.wine.id}`} >
              <li>{el.wine.name}</li>
            </Link>
            <button className='move-button' onClick={() => this.handleDelete(el.id)}>Remove Wine</button>
            <button className='move-button' onClick={() => this.moveLists(el)}>Move to Tasted List</button>
          </ul>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    wishlist: state.wishlist
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addingToTastedlist: (userId, wineId) => {dispatch(addingToTastedlist(userId, wineId))},
    deletingFromWishlist: (wishId) => {dispatch(deletingFromWishlist(wishId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
