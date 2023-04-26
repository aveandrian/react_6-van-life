import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

function Navbar(){
  return (
    <nav className='header'>
      <Link to="/" className='header--title'>#VANLIFE</Link>
      <Link to="/about" className='header--about'>About</Link>
    </nav>
  )
}

function Footer(){
  return (
    <div className='footer'>
      <p>Ⓒ 2023 #VANLIFE</p>
    </div>
  )
}

function App(){
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
)
