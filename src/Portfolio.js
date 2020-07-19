import React from 'react'
import Screenshot from './Images/QuizTitleSS.png'
import ScreenshotTwo from './Images/QuizQuestionSS.png'
import { Link } from '@chakra-ui/core'

export default class Portfolio extends React.Component {
     render() {
          return (
               <section className='portfolio' id='portfolio'>
                    <h3 className='section-title'>
                         A Little Of My Work (So Far)
                    </h3>
                    <h4 className='project-title'>
                         Stardew Valley Quiz Application
                    </h4>
                    <div className='screenshot-container'>
                         <img
                              className='portfolio-screenshot'
                              src={Screenshot}
                              alt='Stardew Quiz Home Page Screenshot'
                         />
                         <img
                              className='portfolio-screenshot'
                              src={ScreenshotTwo}
                              alt='Stardew Quiz Question Screenshot'
                         />
                    </div>
                    <p>
                         This is a short quiz application based on the open-ended RPG and farm-simulator <i>Stardew Valley</i>,
                         made to put fans of all skill level's knowledge of the game's story to the test and provide a pleasant
                         experience while doing so.
                         Made in collaboration with Thomas Davis for Thinkful's Software Engineering Immersion Program.</p>
                    <p>
                         <b>Built with:</b>
                         <b className='tech-text'>HTML</b>,
                         <b className='tech-text'>CSS</b>,
                         <b className='tech-text'>JavaScript</b>
                         and
                         <b className='tech-text'>jQuery</b>.
                    </p>
                    <Link to='https://www.github.com/thinkful-ei-orka/Victor-Quiz-App'
                         target=''
                         className='github-link'>
                         Github Repo
                    </Link>
                    <Link to='https://thinkful-ei-orka.github.io/Victor-Quiz-App/'
                         target=''
                         className='live-page-link'>
                         Live Page
                    </Link>
               </section>
          )
     }
}