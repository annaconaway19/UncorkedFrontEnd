import React from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import MapboxGeocoder from 'mapbox-gl-geocoder';
import { connect } from 'react-redux'


class Map extends React.Component {

  constructor(props){
  super(props)
  this.state = {
    viewport: { //map settings on first load to tv
      width: "100%",
      height: "100vh",
      latitude: 12.5739,
      longitude: 0,
      zoom: 1.5
    },
    popup: null
  }}

  componentDidMount(){
    const map = this.reactMap.getMap()
    map.on('load', () => {
      map.addControl(new MapboxGeocoder({accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}));
      map.addLayer({
        'id': 'countries',
        'source': {
          'type': 'vector',
          'url': 'mapbox://annaconaway19.699x9qok'
        },
        'source-layer': 'ne_10m_admin_0_countries-9qifgq',
        'type': 'fill',
        'paint': {
          'fill-color': '#780738', //color of highlighted countries
          'fill-outline-color': '#F2F2F2',
          'fill-opacity': 0.5
          }
        });
        map.setFilter('countries', ['in', 'ADM0_A3_IS'].concat(this.props.codes()))
    })
  }

  showPins = () => {
    return this.props.countries.map(c => {
      return <Marker key={c.id} latitude={parseFloat(c.latitude)} longitude={parseFloat(c.longitude)} offsetLeft={-20} offsetTop={-10}><Icon size="large" name="map marker alternate" color="teal" onClick={(event) => this.handlePinClick(event, parseFloat(c.latitude), parseFloat(c.longitude))}/></Marker>
    })
  }

  handlePinClick = (event, lat, long) => {
    this.setState({
      popup: {
        latitude: lat,
        longitude: long,
      }
    })
  }

  closePopup = () => {
    this.setState({ popup: null })
  }

  showPopup = () => {
    return this.state.popup && (
      <Popup tipSize={10}
        anchor="bottom"
        longitude={this.state.popup.longitude}
        latitude={this.state.popup.latitude}
        offsetTop={-20}
        closeButton={false}
      >
      <div id="popup-box" onClick={this.closePopup}>
        <div>
        It's time for a Grape Escape!
          <div>{this.showCountryInfo()}</div>
        </div>
      </div>
      </Popup>
    )
  }

  showCountryInfo = () => {
    let countryName = this.props.countries.find(c => (c.latitude == this.state.popup.latitude) && (c.longitude == this.state.popup.longitude)).name
    let countryId = this.props.countries.find(c => (c.latitude == this.state.popup.latitude) && (c.longitude == this.state.popup.longitude)).id
    return <Link to={`/uncorked/countries/${countryId}`}>Find Wine from {countryName}</Link>
  }

  render(){
    return(
      <React.Fragment>
        <ReactMapGL
          ref={(reactMap) => { this.reactMap = reactMap; }}
          {...this.state.viewport}
          mapStyle="mapbox://styles/mapbox/light-v9"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          onViewportChange={(viewport) => this.setState({viewport})}
          minZoom={1.19}
          >
          {this.showPins()}
          {this.showPopup()}
        </ReactMapGL>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries
  }
}

export default connect(mapStateToProps)(Map);
