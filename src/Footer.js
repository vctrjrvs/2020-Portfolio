import React from 'react'
import { Link } from '@chakra-ui/core'

export default class Footer extends React.Component {
     render() {
          return (
               <footer className='footer'>
                    <ul className='footer-links'>
                         <li>
                              <Link
                                   to='#contact'
                                   className='contact-link'>
                                   Contact
                              </Link>
                         </li>
                         <li>
                              <Link
                                   to='#top'
                                   className='home-link'>
                                   Back To Top
                              </Link>
                         </li>
                    </ul>
               </footer>
          )
     }
}