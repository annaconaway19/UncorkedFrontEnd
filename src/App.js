import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import { fetchingCountries, fetchingWines } from './redux/actions'
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar'
import MapContainer from './containers/MapContainer'
import WineIndex from './containers/WineIndex'
import WineDetails from './components/WineDetails'
import CountryIndex from './containers/CountryIndex'
import CountryDetails from './components/CountryDetails'
import Login from './components/Login'
import UserProfile from './containers/UserProfile'
import './App.css';


class App extends Component {
  componentDidMount(){
    this.props.fetchingCountries()
    this.props.fetchingWines('?page=1')
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Fragment>
            <NavBar />
            <Switch>
              <Route exact path="/uncorked" component={MapContainer} />
              <Route exact path='/uncorked/countries/:id' component={CountryDetails}/>} />
              <Route exact path='/uncorked/countries' render={() => <CountryIndex />} />
              <Route exact path='/uncorked/cellar' component={WineIndex} />
              <Route exact path='/uncorked/wines/:id' component={WineDetails} />
              <Route exact path='/uncorked/login' render={() => {
                if (localStorage.getItem('token')) {
                  return <Redirect to='/uncorked/profile' />
                } else { return <Login /> } }} />
              <Route exact path='/uncorked/profile' render={() => {
                if (localStorage.getItem('token')) {
                  return <UserProfile />
                } else {
                  return <Redirect to='/uncorked/login' />
                } }} />
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
    fetchingWines: (ext) => {dispatch(fetchingWines(ext))}
  }
}

const mapStateToProps = state => {
  return {
    wines: state.wines,
    countries: state.countries,
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
