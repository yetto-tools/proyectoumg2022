import React from 'react'
import '@/App.css'
import { Home } from '@/components/home/index'
import { About } from '@/components/about/index'
import Contact from '@/components/contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '@/components/navbar'

function App () {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
