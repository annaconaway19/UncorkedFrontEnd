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
import Signup from './components/Signup'
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
            <NavBar loggedIn={this.props.user}/>
            <Switch>
              <Route exact path="/uncorked" component={MapContainer} />
              <Route exact path='/uncorked/countries/:id' component={CountryDetails}/>} />
              <Route exact path='/uncorked/countries' render={() => <CountryIndex />} />
              <Route exact path='/uncorked/cellar' component={WineIndex} />
              <Route exact path='/uncorked/wines/:id' component={WineDetails} />
              <Route exact path='/uncorked/login' render={() => (
                  this.props.currentUser ? <Redirect to='/uncorked/profile' /> : <Login /> )} />
              <Route exact path='/uncorked/profile' render={() => (
                this.props.currentUser ? <UserProfile /> : <Redirect to='/uncorked/login' />
                )}  />
              <Route exact path='/uncorked/signup' render={() => (
                  this.props.currentUser ? <Redirect to='/uncorked/profile' /> : <Signup /> )} />
              <Route path='*' component={MapContainer} />
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
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
