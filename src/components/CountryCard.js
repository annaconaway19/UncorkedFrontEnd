import React from 'react';
import { Link } from 'react-router-dom'

const CountryCard = (props) => (
    <Link to={`/uncorked/countries/${props.country.id}`} style={{color: 'rgb(120, 7, 56)'}}>
      <div className="country-card">
        <h3>{props.country.name}</h3>
        <img alt="country" src={props.country.img_url} className="country-image"/>
      </div>
    </Link>
  )

export default CountryCard;
