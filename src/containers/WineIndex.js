import React, { Component } from 'react'
import WineCard from '../components/WineCard'
import SearchBar from '../components/SearchBar'

class WineIndex extends Component {
  render(){
    return (
      <div>
        alll of ze wines
        <SearchBar />
        <WineCard />
      </div>
    )
  }
}

export default WineIndex;
