import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Client from './pages/Client'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import './index.css'


function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Client />
      <Page3 />
      <Page4 />
      <Page5 />
    </>
  )
}

export default App
