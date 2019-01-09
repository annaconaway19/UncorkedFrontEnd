import React, { Component } from 'react'
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

export default CountryIndex;
