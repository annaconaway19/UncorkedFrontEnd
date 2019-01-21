import React from 'react'
import { connect } from 'react-redux'

class Wishlist extends React.Component {

  render(){
    return(
      <div>
        <h3>Wine Wish List</h3>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Wishlist);
