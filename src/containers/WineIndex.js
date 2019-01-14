import React, { Component } from 'react'
import { connect } from 'react-redux'
import WineCard from '../components/WineCard'
import SearchBar from '../components/SearchBar'

class WineIndex extends Component {

  render(){
    return (
      <div>
        <div className="header">
          Welcome to the Wine Cellar
          <SearchBar />
        </div>
        <div className="WineIndex">
          {this.props.wines ? this.props.wines.map(wine => <WineCard key={wine.id} wine={wine} /> ) : null}
        </div>

        <div className="buttons">
          <button >Next Page</button>
          <button>Previous Page</button>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    wines: state.wines.filter(
      w => w.name.toLowerCase().includes(state.searchText.toLowerCase())
    )
  }
}


export default connect(mapStateToProps)(WineIndex);
//
