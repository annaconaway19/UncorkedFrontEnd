import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import WineCard from './WineCard'

const CountryDetails = (props) => {
  console.log(props)
  return (
    <div>
      {props.country ? (
        <React.Fragment>
          <h2>More About {props.country.name}</h2>
          <img alt="country" src={props.country.img_url} className="country-image"/>
          <p>{props.country.bio}</p>

          <h2>Wines from {props.country.name}:</h2>
          {props.wines.slice(0,5).map(w =>
            <ul>
              <Link to={`/uncorked/wines/${w.id}`}>
                <li>{w.name}</li>
              </Link>
            </ul>
          )}
        </React.Fragment>

      ) : ("loading...") }

    </div>
  )
}


const mapStateToProps = state => {
  return {
    wines: state.wines
  }
}

export default connect(mapStateToProps)(CountryDetails);
