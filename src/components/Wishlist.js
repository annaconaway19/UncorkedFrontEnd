import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addingToTastedlist, deletingFromWishlist, loggingIn } from '../redux/actions'

class Wishlist extends React.Component {

  handleDelete = (wishId) => {
    this.props.deletingFromWishlist(wishId)
  }

  moveLists = (wish) => {
    let wishId = wish.id
    let wineId = wish.wine.id
    let userId = this.props.currentUser.id
    let tastedArr = this.props.tastedList.map(data => data.wine_id)
    console.log(wish.id)
    if (!tastedArr.includes(wineId)) {
      this.props.addingToTastedlist(userId, wineId)
      this.props.deletingFromWishlist(wishId)
    } else {
      alert("You must really love this one! It's already on your list.")
  }
}

  render(){
    return(
      <div>
      <div className="grid-bk"></div>

        {(this.props.wishlist.length !== 0) ? (
          <React.Fragment>
          <div className='list'>
            <h2 className="list-headline">Wine Wish List</h2>
              {this.props.wishlist.map(el =>
              <ul key={el.id}>
                <li className='wishlist-item'><Link to={`/uncorked/wines/${el.wine.id}`}>{el.wine.name}</Link > - {el.wine.price ? el.wine.price : 'No Price Listed'}</li>
                <div className="list-buttons">
                  <button className='move-button' onClick={() => this.handleDelete(el.id)}>Remove Wine</button>
                  <button className='move-button' onClick={() => this.moveLists(el)}>Move to Tasted List</button>
                </div>
              </ul>
          )}
          </div>

          </React.Fragment>
        ) : ( <React.Fragment>
          <div className='grid-bk'></div>
           <div className='list'>
           <h2 className="list-headline">Wine Wish List</h2>
           <h3 style={{'font-size': '30px', "text-align": "center", "margin-left": "6%"}}>No saved wines yet!</h3>
           </div>
          </React.Fragment>)
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
