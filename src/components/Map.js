import React from 'react'
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import MapboxGeocoder from 'mapbox-gl-geocoder';
import { connect } from 'react-redux'


class Map extends React.Component {

  constructor(props){
  super(props)
  this.state = {
    viewport: { //map settings on first load
      width: "100%",
      height: "100vh",
      latitude: 44.5739,
      longitude: 7.7952,
      zoom: 1.19
    }
  }}

  componentDidMount(){
    const map = this.reactMap.getMap()
    map.on('load', () => {
      map.addLayer(map, this.getCodes())
      map.addControl(new MapboxGeocoder({accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}))
    })
  }

  getCodes = () => {
    let codes = []
    this.props.countries.forEach(country => {
      codes.push(country.alphacode)
    })
  return codes
}

  addLayer = (map, alphaCodes) => {
    map.addLayer({
      'id': 'countries',
      'source': {
        'type': 'vector',
        'url': 'annaconaway19.2v8oxc2m'
      },
      'source-layer': 'ne_50m_admin_0_countries-3zjox8',
      'type': 'fill',
      'paint': {
        'fill-color': '#780738', //color of highlighted countries
        'fill-outline-color': '#F2F2F2' //white outline between countries
        }
      })
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
