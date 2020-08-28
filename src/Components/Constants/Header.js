import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
     render() {
          return (
               <header className='App-header'>
                    <Link className='Header-Link' to='/'>VJ</Link>
               </header>
          )
     }
}