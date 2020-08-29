import React from 'react'
import DIWHYSS from '../../Images/DIWHYSS.png'
import DIWHYSS2 from '../../Images/DIWHYSS2.png'

export default class DIWHYApp extends React.Component {
     render() {
          return (
               <div className='diwhy-app-container'>
                    <h4 className='project-title'>DIWHY</h4>
                    <div className='screenshot-container'>
                         <img className='portfolio-screenshot' src={DIWHYSS} alt='DIWHY Screenshot' />
                         <img className='portfolio-screenshot' src={DIWHYSS2} alt='DIWHY Screenshot 2' />
                    </div>
                    <p>
                         DIWHY (Do It (With Help) Yourself) is a social media application built for DIY enthusiasts to seek and/or provide assistance to other hobbyists and professionals.
                         This was my final capstone for Thinkful's Software Engineering Immersion Program,
                         made in collaboration with Carlo Paredes, Agatha North, Jon Oliver, and Magdalena Painter.
                    </p>
                    <p>
                         <b>Built with: </b>
                         <b className='tech-text'>HTML</b>,
                         <b className='tech-text'> CSS</b>,
                         <b className='tech-text'> JavaScript</b>,
                         <b className='tech-text'> Node.JS</b>,
                         <b className='tech-text'> Express</b>,
                         <b className='tech-text'> PostgreSQL</b>,
                         and
                         <b className='tech-text'> React</b>.
                    </p>
                    <a href='https://github.com/thinkful-ei-orka/diwhy_client_404_TNNF' target='_blank' rel='noopener noreferrer' className='github-link'>Client-Side Github Repo</a><br />
                    <a href='https://github.com/thinkful-ei-orka/diwhy_server_404_TNNF' target='_blank' rel='noopener noreferrer' className='github-link'>Server-Side Github Repo</a><br />
                    <a href='https://diwhy-client-404-tnnf.vercel.app' target='_blank' rel='noopener noreferrer' className='live-page-link'>Live Page</a>
               </div>
          )
     }
}