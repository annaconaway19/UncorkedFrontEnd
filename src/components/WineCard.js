import React from 'react'
import { Link } from 'react-router-dom'

const WineCard = (props) => {
  return (
    <Link to={`/uncorked/wines/${props.wine.id}`} style={{color: 'rgb(120, 7, 56)'}}>
      <div className="wine-card">
        <img alt="wine" className="wine-image" src="http://www.tudodesenhos.com/uploads/images/8164/aperitivos-e-vinho.jpg" />
        <h3>{props.wine.name}</h3>
        <p>{props.wine.country.name}</p>
      </div>
    </Link>
  )
}


export default WineCard;
