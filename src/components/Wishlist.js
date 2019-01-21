import React from 'react'
import { connect } from 'react-redux'

class Wishlist extends React.Component {

  render(){
    return(
      <div>
        <h3>Wine Wish List</h3>
        <ul>{this.props.wishlist.map(el => <li key={el.wine.id}>{el.wine.name}</li>)}</ul>
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
