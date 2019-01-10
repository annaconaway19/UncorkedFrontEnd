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
      <div className="WineIndex">
        <h1>alll of ze wines</h1>
        <SearchBar />

        {this.props.wines.wines ? this.props.wines.wines.map(wine => <WineCard key={wine.id} wine={wine} /> ) : null}
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
