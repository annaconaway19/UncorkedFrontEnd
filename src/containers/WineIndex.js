import React, { Component } from 'react'
import WineCard from '../components/WineCard'
import SearchBar from '../components/SearchBar'

class WineIndex extends Component {
  render(){
    return (
      <div className="WineIndex">
        <h1>alll of ze wines</h1>
        <SearchBar />
        <WineCard />
      </div>
    )
  }
}

export default WineIndex;
