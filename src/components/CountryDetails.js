import React from 'react'

const CountryDetails = (props) => {
  console.log(props)

  return (
    <div>
      {props.country ? (
        <React.Fragment>
          <h2>More About:</h2>
          <h3>{props.country.name}</h3>
          <img alt="country" src={props.country.img_url} className="country-image"/>
          <p>{props.country.bio}</p>
        </React.Fragment>

      ) : "loading..." }

    </div>
  )
}

export default CountryDetails;
