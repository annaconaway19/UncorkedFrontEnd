import React, { Component } from 'react'
import Map from '../components/Map'
import {connect } from 'react-redux'
import { Link } from 'react-router-dom'


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
        <div className="welcome">Explore the world's wine-producing regions, highlighted on the map, click through our wine resources, or <Link to='/uncorked/signup'>sign up</Link> and keep track of your favorite bottles!</div>
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
