import React from 'react'
import { Link } from '@chakra-ui/core'

export default class Contact extends React.Component {
     render() {
          return (
               <section className='contact' id='contact'>
                    <h3 className='section-title'>
                         Where You Can Find Me
                    </h3>
                    <p className='contact-text'>
                         Feel free to reach out to me any time!
                         I enjoy collaborating with others on projects and building things together,
                         as well as just making new friends!
                    </p>
                    <Link
                         to='mailto:vctrjrvs@gmail.com'
                         className='contact-link'>
                         Send Me An Email!
                    </Link>
                    <Link
                         to='https://www.github.com/vctrjrvs'
                         target=''
                         className='contact-link'>
                         Github
                         </Link>
                    <Link
                         to='https://www.linkedin.com/in/victorjarvis/'
                         target=''
                         className='contact-link'>
                         LinkedIn
                    </Link>
               </section>
          )
     }
}