import React from 'react'
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import MapboxGeocoder from 'mapbox-gl-geocoder'

class Map extends React.Component {

  constructor(props){
  super(props)
  this.state = {
    viewport: { //preset map settings on first load
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
      map.addControl(new MapboxGeocoder({accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}))
    })
  }

  render(){
    return(
      <ReactMapGL
        ref={(reactMap) => { this.reactMap = reactMap; }}
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(viewport) => this.setState({viewport})}
        minZoom={1.19}
        >
      </ReactMapGL>
    )
  }
}
  export default Map;
