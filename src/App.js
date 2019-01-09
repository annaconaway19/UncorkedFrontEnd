import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import CountryContainer from './containers/CountryContainer'
import WineIndex from './containers/WineIndex'
import WineDetails from './components/WineDetails'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
      this is my app - uncorked
        <NavBar />
        <Switch>
          <Route exact path='/uncorked/countries/:name' component={CountryContainer} />
          <Route exact path='/uncorked/wines' component={WineIndex} />
          <Route exact path='/uncorked/wines/:id' component={WineDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
