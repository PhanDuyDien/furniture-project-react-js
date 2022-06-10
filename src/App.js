import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FooterContainer from './components/Footer'
import Navbar from './components/Navbar'
import { Home, Shop, Contact, Blog, Error } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <FooterContainer />
    </BrowserRouter>
  )
}

export default App
