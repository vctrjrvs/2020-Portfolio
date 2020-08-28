import React from 'react'
import Screenshot from '../../Images/SRCSS1.png'
import ScreenshotTwo from '../../Images/SRCSS2.png'

export default class SRCApp extends React.Component {
     render() {
          return (
               <div className='stardew-app-container'>
                    <h4 className='project-title'>Stardew Valley Quiz Application</h4>
                    <div className='screenshot-container'>
                         <img className='portfolio-screenshot' src={Screenshot} alt='Stardew Quiz Home Page Screenshot' />
                         <img className='portfolio-screenshot' src={ScreenshotTwo} alt='Stardew Quiz Question Screenshot' />
                    </div>
                    <p>
                         A foreign language application built employing the spaced repetition
                         technique in order to help users learn translations of different words in
                         different languages. Made in collaboration with Jonathan Clark.
                    </p>
                    <p>
                         <b>Built with: </b>
                         <b className='tech-text'>HTML</b>,
                         <b className='tech-text'> CSS</b>,
                         <b className='tech-text'> JavaScript</b>,
                         <b className='tech-text'> Node.JS</b>,
                         <b className='tech-text'> Express</b>,
                         <b className='tech-text'> Cypress.io</b>,
                         <b className='tech-text'> PostgreSQL</b>,
                         and
                         <b className='tech-text'> React</b>.
                    </p>
                    <a href='https://github.com/thinkful-ei-orka/spaced-repetition-client-victor-jonc' target='' className='github-link'>Client-Side Github Repo</a><br />
                    <a href='https://github.com/thinkful-ei-orka/spaced-repetition-server-victor-jonc' target='' className='github-link'>Server-Side Github Repo</a><br />
                    <a href='https://spaced-repetition-app-swart.vercel.app/' target='' className='live-page-link'>Live Page</a>
               </div>
          )
     }
}