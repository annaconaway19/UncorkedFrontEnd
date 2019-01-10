import React from 'react';
import { Link } from 'react-router-dom'

const CountryCard = (props) => (
      <div className="CountryCard">
        <h3>{props.country.name}</h3>
        <p>{props.country.bio}</p>
      </div>
  )

export default CountryCard;
