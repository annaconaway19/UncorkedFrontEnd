import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class TastedList extends React.Component {


  render(){
    return(
      <div >
       <div className='grid-bk'></div>
        {(this.props.tastedList.length !== 0) ? (
          <React.Fragment>
          <div className='list'>
          <h2 className="headline">Tried It, Loved It</h2>
          {this.props.tastedList.map(el =>
            <ul key={el.wine.id}>
              <Link to={`/uncorked/wines/${el.wine.id}`} >
                <li className='tastedlist-item'>{el.wine.name}</li>
              </Link>
            </ul>
          )}
          </div>
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
