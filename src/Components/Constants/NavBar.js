import React from 'react'
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
     render() {
          return (
               <nav className='navbar'>
                    <ul className='menu'>
                         {/* <li>
                              <Link className='home-link' to='/'>Home</Link>
                         </li> */}
                         <li>
                              <Link className='home-link' to='/about'>About</Link>
                         </li>
                         <li>
                              <Link className='home-link' to='/portfolio'>Portfolio</Link>
                         </li>
                         <li>
                              <Link className='home-link' to='/contact'> Contact </Link>
                         </li>
                    </ul>
               </nav>
          )
     }
}