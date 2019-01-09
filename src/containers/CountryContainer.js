import React, {Component} from 'react'
import CountryDetails from '../components/CountryDetails'
import WineScroll from './WineScroll'

class CountryContainer extends Component {

  render() {
    return(
      <div>
      CountryContainer
        <CountryDetails />
        <WineScroll/>
      </div>
    )
  }
}

export default CountryContainer;
