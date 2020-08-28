import React from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
     render() {
          return (
               <footer className='footer'>
                    <ul className='footer-links'>
                         <li>
                              <Link to='/contact' className='contact-link'>Contact</Link>
                         </li>
                         <li>
                              <Link to='/' className='home-link'>Back Home</Link>
                         </li>
                    </ul>
               </footer>
          )
     }
}