import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchingWines } from '../redux/actions'
import WineCard from '../components/WineCard'
import SearchBar from '../components/SearchBar'

class WineIndex extends Component {
  componentDidMount(){
    this.props.dispatch(fetchingWines())
  }

  render(){
    return (
      <div>
        <div className="header">
          <h1>alll of ze wines</h1>
          <SearchBar />
        </div>  
        <div className="WineIndex">
          {this.props.wines.wines ? this.props.wines.wines.map(wine => <WineCard key={wine.id} wine={wine} /> ) : null}
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
