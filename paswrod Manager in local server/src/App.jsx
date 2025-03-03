import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Manger from './components/Manger'
import './App.css'

function App() {
 
  return (
  <>
  
  <Navbar/>
  <div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
  <Manger/>
  </div>
 <Footer/>

  </>
  )
}

export default App
