import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {

  return (

    <div>
          <ul className='nav-link-ul'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/class_9'>Class 9</Link></li>
          </ul>
    </div>
  )
}
export default NavBar;