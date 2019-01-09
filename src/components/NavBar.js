import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Link to='/uncorked'>uncorked</Link>
      <Link to='/uncorked'>Home Page</Link>
      <Link to='/uncorked/cellar'>Wine Cellar</Link>
      <Link to='/uncorked/countries'>Countries</Link>
    </div>
  )
}

export default NavBar;
