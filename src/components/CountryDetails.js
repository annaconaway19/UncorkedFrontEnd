import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchingCountry } from '../redux/actions'

class CountryDetails extends React.Component {
  constructor(){
    super()
    this.state = {
      currentIndex: 0
    }
  }

  componentDidMount(){
    this.props.fetchingCountry(this.props.match.params.id)
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
            <h1 className="headline">More About {this.props.country.name}</h1>
            <div className="imagebio">
              <img alt="country" src={this.props.country.img_url} className="country-image"/>
              <p className='bio'>{this.props.country.bio}</p>
            </div>

            <div className="winelist">
              <h1 className='wines-from'>Wines from {this.props.country.name}:</h1>
              {this.props.country.wines.slice(this.state.currentIndex, this.state.currentIndex + 5).map(w =>
                <ul key={w.id}>
                  <Link to={`/uncorked/wines/${w.id}`} style={{color: 'white'}}>
                    <li className="wine-link">{w.name}</li>
                  </Link>
                </ul>
              )}
              <button className='prev-button' onClick={() => this.goBack()}>Previous Wines</button>
              <button onClick={() => this.moreWine()}>See More</button>
              </div>
          </React.Fragment>

        ) : ("loading...") }
        <div className="country-spacing"></div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    wines: state.wines,
    country: state.country
  }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchingCountry: (countryName) => {dispatch(fetchingCountry(countryName))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetails);
