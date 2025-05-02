import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/header.jsx'
import About from './components/about.jsx'
import Cards from './components/cards.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Cards />
    </>
  );
}

export default App
