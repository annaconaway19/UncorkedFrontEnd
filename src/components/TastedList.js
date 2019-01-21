import React from 'react'
import { connect } from 'react-redux';
import { fetchingSingleWine } from '../redux/actions'

class TastedList extends React.Component {
  render(){
    return(
      <div>
      <h3>Tasted List</h3>
        <ul>{this.props.tastedList.map(el => <li key={el.wine.id}>{el.wine.name}</li>)}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    tastedList: state.tastedList
  }
}

export default connect(mapStateToProps)(TastedList);
