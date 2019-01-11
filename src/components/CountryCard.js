import React from 'react';
import { Link } from 'react-router-dom'

const CountryCard = (props) => (
    <Link to={`/uncorked/countries/${props.country.name}`}>
      <div className="card">
        <h4>{props.country.name}</h4>
        <p>{props.country.bio}</p>
      </div>
    </Link>  
  )

export default CountryCard;
