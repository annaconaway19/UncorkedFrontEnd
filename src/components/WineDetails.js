import React from 'react'
import { connect } from 'react-redux'

const WineDetails = (props) => {
  return (
    <div>
    {props.wine ? (
      <React.Fragment>
          <h2>More About:</h2>
          <h3>{props.wine.name}</h3>
          <img alt="wine" src="https://cdn.pixabay.com/photo/2016/10/22/21/44/white-wine-1761771_960_720.jpg"/>
          <h4>{props.wine.varietal.name}</h4>
          
          <h3>Tasting Notes</h3>
          <ul>
            <li>Oaky</li>
            <li>Tannic</li>
            <li>Dark Berries</li>
            <li>Tobacco</li>
          </ul>
      </React.Fragment>
    ) : ("loading...")}
    </div>
  )
}



export default connect()(WineDetails);
