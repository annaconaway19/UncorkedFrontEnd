import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import WineCard from './WineCard'

const CountryDetails = (props) => {
  console.log(props)
  return (
    <div className="CountryDetails">
      {props.country ? (
        <React.Fragment>
          <h2>More About {props.country.name}</h2>
          <div className="imagebio">
            <img alt="country" src={props.country.img_url} className="country-image"/>
            <p className='bio'>{props.country.bio}</p>
          </div>
          <h2>Wines from {props.country.name}:</h2>
          {props.wines.slice(0,5).map(w =>
            <ul>
              <Link key={w.id} to={`/uncorked/wines/${w.id}`}>
                <li>{w.name}</li>
              </Link>
            </ul>
          )}
        </React.Fragment>

      ) : ("loading...") }
      <div className="country-spacing"></div>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    wines: state.wines
  }
}

export default connect(mapStateToProps)(CountryDetails);
