import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Galerie from './pages/Galerie'
import Reservations from './pages/Reservations'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/galerie' element={<Galerie/>}/>
        <Route path='/reservation' element={<Reservations/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
    
        <Footer/>
    </div>
  )
}

export default App
