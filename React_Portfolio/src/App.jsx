import React from 'react';
import "./App.css";
import Header from './Componets/Header/Header';
import Home from './Componets/Home/Home';
import About from './Componets/About/About';
import Skills from './Componets/Skills/Skills';
import Services from './Componets/Services/Services';
import Qualification from './Componets/Qualification/Qualification';

const App = () => {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
    </main>
    </>
  )
}

export default App