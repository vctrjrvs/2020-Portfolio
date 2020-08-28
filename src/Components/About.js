import React from 'react'
import Avatar from '../Images/MyAvatar.png'


export default class About extends React.Component {
     render() {
          return (
               <section className='about' id='about'>
                    <h3 className='section-title'>A Little About Myself</h3>
                    <img src={Avatar} className='avatar' alt='It is me!' />
                    <p>
                         I'm currently a student of the Thinkful Software Engineering Immersion Program.
                         From a young age, I've always been drawn to different forms of creation.
                         At one point in my early twenties, I overheard a friend of mine say "Have you ever noticed that he's just always doing <i>something?</i> "<br /><br />
                         Whether it be related to music and art (my first loves) or being able to assemble something with my
                         own two hands, like a computer, I quite simply just love to <i>make stuff,</i> and I love a good challenge.<br /><br />

                         As technology and myself have both grown and changed over time,
                         I've found myself interested in it more every day,
                         which led me to pursue a career in software engineering,
                         to combine my desire to create with an ever-expanding understanding of the world of code,
                         and work alongside fellow programmers who love to do the same.<br /><br />

                         Though my roots are largely in being self-taught and autonomous, I strive to improve every day
                         to become both more dynamic as a developer and more synergistic as a team member and collaborator,
                         which has shaped me into a powerful asset, no matter the task at hand.
                         When I'm not coding, you can usually find me still on my laptop,
                         working on a new song, or trying my hand at another new skill.
                    </p>
               </section>
          )
     }
}
