import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element=""/>
        <Route path='/' element=""/>
        <Route path='/' element=""/>
        <Route path='/' element=""/>
        <Route path='/' element=""/>
      </Routes>
      <NavBar/>
    </div>
  )
}

export default App
