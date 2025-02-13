import React from 'react'
import Navbar from './Components/Navbar'
import Center from './Components/Center'
import Vendor from './Components/Vendor'
import Easeimg from './Components/Easeimg'
import Rectangle from './Components/Rectangle'
import Page4 from './Components/Page4'
import Page5 from './Components/Page5'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
   <>
   <Navbar />
   <Center />
   <Vendor />
   <Easeimg />
   <Rectangle />
   <Page4 />
   <Page5 />
   <Footer />
   <Routes>
    {/* <Route element={<Contact></Contact>} path="/contact"/> */}
   </Routes>
   </>
  )
}

export default App