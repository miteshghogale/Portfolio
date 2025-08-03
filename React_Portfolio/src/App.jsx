import React from 'react';
import "./App.css";
import Header from './Componets/Header/Header';
import Home from './Componets/Home/Home';
import About from './Componets/About/About';

const App = () => {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
    </main>
    </>
  )
}

export default App