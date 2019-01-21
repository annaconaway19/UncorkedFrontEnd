import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Wishlist extends React.Component {

  render(){
    return(
      <div>
        <h3>Wine Wish List</h3>
        {this.props.wishlist.map(el =>
          <ul key={el.wine.id}>
            <Link to={`/uncorked/wines/${el.wine.id}`} >
              <li>{el.wine.name}</li>
            </Link>
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

export default connect(mapStateToProps)(Wishlist);
