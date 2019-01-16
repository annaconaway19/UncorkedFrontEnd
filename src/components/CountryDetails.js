import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import WineCard from './WineCard'

class CountryDetails extends React.Component {
  constructor(){
    super()
    this.state = {
      currentIndex: 0
    }
  }

  moreWine = () => {
  if (this.props.country.wines.length > this.state.currentIndex + 5) {
    this.setState({ currentIndex: this.state.currentIndex + 5})
    }
  }

  goBack = () => {
  if (this.state.currentIndex >= 5) {
    this.setState({ currentIndex: this.state.currentIndex - 5})
    }
  }

  render() {
    return (
      <div className="CountryDetails">
        {this.props.country ? (
          <React.Fragment>
            <div className="header">Taste The Terroir</div>
            <h2 className="headline">More About {this.props.country.name}</h2>
            <div className="imagebio">
              <img alt="country" src={this.props.country.img_url} className="country-image"/>
              <p className='bio'>{this.props.country.bio}</p>
            </div>
            <h2>Wines from {this.props.country.name}:</h2>
            {this.props.country.wines.slice(this.state.currentIndex, this.state.currentIndex + 5).map(w =>
              <ul key={w.id}>
                <Link to={`/uncorked/wines/${w.id}`} >
                  <li>{w.name}</li>
                </Link>
              </ul>
            )}
            <button onClick={() => this.goBack()}>Go Back</button>
            <button onClick={() => this.moreWine()}>See More</button>
          </React.Fragment>

        ) : ("loading...") }
        <div className="country-spacing"></div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    wines: state.wines
  }
}

export default connect(mapStateToProps)(CountryDetails);
