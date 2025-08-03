import React from 'react';
import "./App.css";
import Header from './Componets/Header/Header';
import Home from './Componets/Home/Home';
import About from './Componets/About/About';
import Skills from './Componets/Skills/Skills';
import Services from './Componets/Skills/Services/Services';

const App = () => {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
    </main>
    </>
  )
}

export default App