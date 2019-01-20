import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends React.Component {
  render(){
    return (
      <div className="nav">
      {this.props.user ? (
        <React.Fragment>
            <Link to='/uncorked' className="logo">Uncorked</Link>
            <Link to='/uncorked/cellar' className="link">Wine Cellar</Link>
            <Link to='/uncorked/countries' className="link">Countries</Link>
            <Link to='/uncorked/profile' className="link">Profile</Link>
            <Link to='/uncorked/login' className="link">Logout</Link>
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
    user: state.user
  }
}


export default withRouter(connect(mapStateToProps)(NavBar));
