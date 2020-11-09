import React from 'react'
import { NavLink } from 'react-router-dom';
 
const link = {
  width: '10px',
  padding: '1px',
  margin: '0 20px 7px',
  background: '#fffff',
  textDecoration: 'none',
  color: 'grey',
  fontFamily: 'Inconsolata',
  fontsize: '60',
  textAlign: 'right',
  position: 'right',
}
 
class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: '#FFFFFF'
          }}
        >home</NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: '#FFFFFF'
          }}
        >about</NavLink>
        <NavLink
          to="/contact"
          exact
          style={link}
          activeStyle={{
            background: '#FFFFFF'
          }}
        >contact</NavLink>
          
      </div>
    )
  }
}
 
export default Navbar;