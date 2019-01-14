import React from 'react'
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import { Icon } from 'semantic-ui-react'
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
          'fill-outline-color': '#F2F2F2'
          }
        });
        map.setFilter('countries', ['in', 'ADM0_A3_IS'].concat(this.props.codes()))
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
          {this.props.countries.map(c => {
            return <Marker key={c.id} longitude={20} latitude={77}><Icon size="large" name="star" color="teal"/></Marker>
          })}
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
