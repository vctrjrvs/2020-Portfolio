import React from 'react'
import ChorumApp from './ChorumApp';
import DIWHYApp from './DIWHYApp';
import SRCApp from './SRCApp';

export default class Portfolio extends React.Component {
     render() {
          return (
               <section className='portfolio' id='portfolio'>
                    <h3 className='section-title'>A Little Of My Work (So Far)</h3>
                    <DIWHYApp />
                    <ChorumApp />
                    <SRCApp />
               </section>
          )
     }
}