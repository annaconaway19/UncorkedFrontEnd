import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import { fetchingCountries } from './redux/actions'
import NavBar from './components/NavBar'
import CountryContainer from './containers/CountryContainer'
import WineIndex from './containers/WineIndex'
import WineDetails from './components/WineDetails'
import CountryIndex from './containers/CountryIndex'
import './App.css';


class App extends Component {
  componentDidMount(){
    this.props.fetchingCountries()
  }

  render() {
    return (
      <div>

        <BrowserRouter>
          <Fragment>
            <NavBar />
            <Switch>
              <Route exact path='/uncorked/countries/:name' component={CountryContainer} />
              <Route exact path='/uncorked/countries' render={() => <CountryIndex />} />
              <Route exact path='/uncorked/cellar' component={WineIndex} />
              <Route exact path='/uncorked/wines/:id' component={WineDetails} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingCountries: () => {dispatch(fetchingCountries())}
  }
}

export default connect(null, mapDispatchToProps)(App);
