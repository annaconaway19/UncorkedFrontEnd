import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class TastedList extends React.Component {


  render(){
    return(
      <div>
      <h3>Tried It, Loved It</h3>
      {(this.props.tastedList.length !== 0) ? (
        <React.Fragment>
        {this.props.tastedList.map(el =>
          <ul key={el.wine.id}>
            <Link to={`/uncorked/wines/${el.wine.id}`} >
              <li>{el.wine.name}</li>
            </Link>
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
    tastedList: state.tastedList
  }
}


export default connect(mapStateToProps)(TastedList);