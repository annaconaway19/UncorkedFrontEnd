import React from 'react';
import { connect } from 'react-redux'
import WineCard from './WineCard'

const CountryDetails = (props) => {
  return (
    <div>
      {props.country ? (
        <React.Fragment>
          <h2>More About {props.country.name}</h2>
          <img alt="country" src={props.country.img_url} className="country-image"/>
          <p>{props.country.bio}</p>

            <WineCard wine={props.wines.map(wine => wine.country.name === props.country.name)} />

        </React.Fragment>

      ) : "loading..."}


    </div>
  )
}

const mapStateToProps = state => {
  return {
    wines: state.wines
  }
}

export default connect(mapStateToProps)(CountryDetails);
