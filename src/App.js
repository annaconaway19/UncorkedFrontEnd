import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import { fetchingCountries, fetchingWines, fetchSingleWine } from './redux/actions'
import NavBar from './components/NavBar'
import CountryContainer from './containers/CountryContainer'
import WineIndex from './containers/WineIndex'
import WineDetails from './components/WineDetails'
import CountryIndex from './containers/CountryIndex'
import './App.css';



class App extends Component {
  componentDidMount(){
    this.props.fetchingCountries()
    this.props.fetchingWines()
  }

  // renderWineDetail = (routerProps) => {
  //   if (this.props.wines) {
  //     console.log("yeah");
  //     return <WineDetails wine={this.props.wines.find(w => w.id === parseInt(routerProps.match.params.id))} />
  //   } else {
  //     console.log('boi');
  //     this.props.fetchSingleWine(routerProps.match.params.id)
  //     return <WineDetails wine={this.props.wine} />
  //   }
  // }


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
    fetchSingleWine: (wineId) => {dispatch(fetchSingleWine(wineId))}
  }
}

const mapStateToProps = state => {
  return {
    wines: state.wines,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
