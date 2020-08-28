import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage.js';
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage';


export default class Routes extends Component {
     render() {
          return (
               <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/about' component={AboutPage} />
                    <Route exact path='/portfolio' component={PortfolioPage} />
                    <Route exact path='/contact' component={ContactPage} />
               </Switch>
          );
     };
};