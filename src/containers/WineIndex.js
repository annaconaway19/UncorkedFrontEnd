import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingWines } from '../redux/actions'
import WineCard from '../components/WineCard'
import SearchBar from '../components/SearchBar'

class WineIndex extends Component {


  render(){
    return (
      <div>
        <div className="header">
          <h1>alll of ze wines</h1>
          <SearchBar />
        </div>
        <div className="WineIndex">
          {this.props.wines ? this.props.wines.map(wine => <WineCard key={wine.id} wine={wine} /> ) : null}
        </div>

        <button>Next Page</button>
        <button>Previous Page</button>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    wines: state.wines
  }
}


export default connect(mapStateToProps)(WineIndex);
//
