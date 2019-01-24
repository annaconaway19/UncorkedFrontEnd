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
          <h2 className="list-headline">Tried It, Loved It</h2>
          {this.props.tastedList.map(el =>
            <ul key={el.wine.id}>
              <Link to={`/uncorked/wines/${el.wine.id}`} >
                <li className='tastedlist-item'>{el.wine.name}</li>
              </Link>
            </ul>
          )}
          </div>
          </React.Fragment>

        ) : (
           <React.Fragment>
            <div className='grid-bk'></div>
             <div className='list'>
             <h2 className="list-headline">Tried It, Loved It</h2>
             <h3 style={{'font-size': '30px', "text-align": "center", "margin-left": "6%"}}>No saved wines yet!</h3>
             </div>
            </React.Fragment>
          )
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
