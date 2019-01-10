import React, { Component } from 'react'
import { connect } from 'react-redux'
import CountryCard from '../components/WineCard'
import SearchBar from '../components/SearchBar'

class CountryIndex extends Component {
  render(){
    return (
      <div>
        alll of ze countries
        <SearchBar />
        <CountryCard />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
     countries: state.countries
  }
}

export default connect(mapStateToProps)(CountryIndex);
