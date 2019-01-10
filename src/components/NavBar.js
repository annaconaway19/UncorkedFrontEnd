import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="nav">
      <Link to='/uncorked' className="logo">Uncorked</Link>
      <Link to='/uncorked' className="link">Home Page</Link>
      <Link to='/uncorked/cellar' className="link">Wine Cellar</Link>
      <Link to='/uncorked/countries' className="link">Countries</Link>
    </div>
  )
}

export default NavBar;
