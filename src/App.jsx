import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Grooming from './pages/Grooming.jsx'
import Training from './pages/Training.jsx'
import Walking from './pages/Walking.jsx'
import'./App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/grooming" element={<Grooming/>} />
        <Route path="/training" element={<Training/>} />
        <Route path="/walking" element={<Walking/>} />
      </Routes>
    </div>
  )
}

export default App