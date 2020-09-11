import React from 'react'

export default class Contact extends React.Component {
     render() {
          return (
               <section className='contact' id='contact'>
                    <h3 className='section-title'>Where You Can Find Me</h3>
                    <p className='contact-text'>
                         Feel free to reach out to me any time!
                         I enjoy collaborating and taking on projects with others,
                         as well as making new friends and colleagues!
                    </p>
                    <a href='mailto:vctrjrvs@gmail.com' className='contact-link'>Send Me An Email!</a>
                    <a href='https://www.github.com/vctrjrvs' target='_blank' rel='noopener noreferrer' className='contact-link'>Github</a>
                    <a href='https://www.linkedin.com/in/victorjarvis/' target='_blank' rel='noopener noreferrer' className='contact-link'>LinkedIn</a>
               </section>
          )
     }
}