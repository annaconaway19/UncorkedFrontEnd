import React from 'react'
import { connect } from 'react-redux'
import CountryCard from '../components/CountryCard'
import SearchBar from '../components/SearchBar'

const CountryIndex = (props) => {
  console.log(props.countries)

    return (
      <div className="CountryIndex">
        <h1>alll of ze countries</h1>
        <SearchBar />
        {props.countries.map(country => <CountryCard key={country.id} country={country} /> )}
      </div>
    )
  }

const mapStateToProps = state => {
  return {
     countries: state.countries
  }
}

export default connect(mapStateToProps)(CountryIndex);
