import React from 'react';
import "./App.css";
import Header from './Componets/Header/Header';
import Home from './Componets/Home/Home';

const App = () => {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
    </main>
    </>
  )
}

export default App