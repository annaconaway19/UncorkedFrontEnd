import React from 'react'
import { connect } from 'react-redux'
import CountryCard from '../components/CountryCard'
import SearchBar from '../components/SearchBar'

const CountryIndex = (props) => {
  console.log(props.countries)

    return (
      <div>
        <div className="header">
          <div className="heading">Explore a World of Wine</div>
          <SearchBar />
        </div>
        <div className="CountryIndex">
          {props.countries.map(country => <CountryCard key={country.id} country={country} /> )}
        </div>
      </div>
    )
  }

const mapStateToProps = state => {
  return {
     countries: state.countries.filter(
       c => c.name.toLowerCase().includes(state.searchText.toLowerCase())
     )
  }
}

export default connect(mapStateToProps)(CountryIndex);
