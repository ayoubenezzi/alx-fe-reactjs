import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul style={{display: 'flex', gap: '20px', backgroundColor:'beige', justifyContent: 'space-around', padding: '10px', fontSize: '20px', fontWeight: 'bold'}}>
        <li style={{listStyle: 'none', }}><NavLink style={{color:'black', textDecoration:'none'}} to="/">Home</NavLink></li>
        <li style={{listStyle: 'none', }}><NavLink style={{color:'black', textDecoration:'none'}} to="/about">About</NavLink></li>
        <li style={{listStyle: 'none', }}><NavLink style={{color:'black', textDecoration:'none'}} to="/services">Services</NavLink></li>
        <li style={{listStyle: 'none', }}><NavLink style={{color:'black', textDecoration:'none'}} to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar;