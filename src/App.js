import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import { fetchingCountries, fetchingWines, fetchSingleWine } from './redux/actions'
import NavBar from './components/NavBar'
import CountryContainer from './containers/CountryContainer'
import WineIndex from './containers/WineIndex'
import WineDetails from './components/WineDetails'
import CountryIndex from './containers/CountryIndex'
import CountryDetails from './components/CountryDetails'
import './App.css';


class App extends Component {
  componentDidMount(){
    this.props.fetchingCountries()
    this.props.fetchingWines()
  }


  render() {
    return (
      <div>
        <BrowserRouter>
          <Fragment>
            <NavBar />
            <Switch>
              <Route exact path='/uncorked/countries/:name' render={(props) => <CountryDetails country={this.props.countries.find(c => c.name === props.match.params.name)}/>} />
              <Route exact path='/uncorked/countries' render={() => <CountryIndex />} />
              <Route exact path='/uncorked/cellar' component={WineIndex} />
              <Route exact path='/uncorked/wines/:id' render={(props) => <WineDetails wine={this.props.wines.find(w => w.id === parseInt(props.match.params.id))} />} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingCountries: () => {dispatch(fetchingCountries())},
    fetchingWines: () => {dispatch(fetchingWines())},
  }
}

const mapStateToProps = state => {
  return {
    wines: state.wines,
    countries: state.countries
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
