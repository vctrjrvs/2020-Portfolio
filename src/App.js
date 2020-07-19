import React from 'react';
import './App.css';
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import Contact from './Contact';
import About from './About';
import Portfolio from './Portfolio';
import Banner from './Banner';


function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <div className="App">
        <Header />
        <NavBar />
        <Banner />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
