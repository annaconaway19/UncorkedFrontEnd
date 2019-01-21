import React from 'react'
import { connect } from 'react-redux'

class TastedList extends React.Component {

  render(){
    return(
      <div>Tasted List</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(TastedList);
