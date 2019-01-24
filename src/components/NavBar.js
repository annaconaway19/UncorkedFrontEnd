import React from 'react'
import { connect } from 'react-redux'
import { loggingOut, clearSearch } from '../redux/actions'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends React.Component {

  handleLogout = () => {
    console.log('logging out.. ')
    this.props.loggingOut()
  }

  render(){
    return (
      <div className="nav">
      {this.props.currentUser ? (
        <React.Fragment>
            <Link to='/uncorked' className="logo">Uncorked</Link>
            <Link to='/uncorked/cellar' className="link">Wine Cellar</Link>
            <Link to='/uncorked/countries' className="link">Countries</Link>
            <Link to='/uncorked/profile' className="link">Profile</Link>
            <Link to='/uncorked/login' onClick={this.handleLogout} className="link">Logout</Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
              <Link to='/uncorked' className="logo">Uncorked</Link>
              <Link to='/uncorked/cellar' className="link">Wine Cellar</Link>
              <Link to='/uncorked/countries' className="link">Countries</Link>
              <Link to='/uncorked/login' className="link">Login</Link>
            </React.Fragment>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loggingOut: () => {dispatch(loggingOut())}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
