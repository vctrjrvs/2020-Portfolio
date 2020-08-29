import React from 'react'
import ChorumScreenshot from '../../Images/ChorumSS.png'
import ChorumScreenshotTwo from '../../Images/ChorumSS2.png'

export default class ChorumApp extends React.Component {
     render() {
          return (
               <div className='chorum-app-container'>
                    <h4 className='project-title'>Chorum</h4>
                    <div className='screenshot-container'>
                         <img className='portfolio-screenshot' src={ChorumScreenshot} alt='Chorum Home Page Screenshot' />
                         <img className='portfolio-screenshot' src={ChorumScreenshotTwo} alt='Chorum Artist Profile Screenshot' />
                    </div>
                    <p>
                         Chorum is a site for musicians who want to better control the flow of information about themselves and their art.
                         My first solo capstone for Thinkful's Software Engineering Immersion Program, which has continued on as a passion project.
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
                    <a href='https://github.com/vctrjrvs/Chorum-App' target='_blank' rel='noopener noreferrer' className='github-link'>Client-Side Github Repo</a><br />
                    <a href='https://github.com/vctrjrvs/chorum-api' target='_blank' rel='noopener noreferrer' className='github-link'>Server-Side Github Repo</a><br />
                    <a href='https://chorum-app.vctrjrvs.vercel.app' target='_blank' rel='noopener noreferrer' className='live-page-link'>Live Page</a>
               </div>
          )
     }
}