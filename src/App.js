import React from 'react';
import './App.css';
import Header from './Components/Constants/Header';
import NavBar from './Components/Constants/NavBar';
import Routes from './Routes';
import FooterMain from './Components/Constants/FooterMain';


export default class App extends React.Component {
  render() {
    return (
      <div className='App'>

        <Header />
        <NavBar />
        <p className='site-welcome'>Welcome to my portfolio site! 
        This is an ever-growing work in progress as I navigate the world of
         software engineering and build on my professional and personal world.</p>
        <Routes />
        <FooterMain />
      </div>
    );
  }
}