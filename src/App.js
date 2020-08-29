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
        <Routes />
        <FooterMain />
      </div>
    );
  }
}