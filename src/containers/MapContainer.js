import React, { Component } from 'react'
import Map from '../components/Map'
import {connect } from 'react-redux'


class MapContainer extends Component {
  componentDidMount(){
    this.getCodes()
  }

  getCodes = () => {
    let codes = []
    this.props.countries.forEach(country => {
      codes.push(country.alphacode)
    })
  return codes
  }

  render(){
    return(
      <div>
        <Map codes={this.getCodes}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries
  }
}

export default connect(mapStateToProps)(MapContainer);
