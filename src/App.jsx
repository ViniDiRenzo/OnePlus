

import './scss/main.scss'
import { Route, Routes } from 'react-router-dom'

import Navbar from './Navbar'

import { Home, About, Projects, Contact } from './Pages'


function App() {

  return (
    <>
      <header>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/> {/* this route is for the link in the logo */}
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </header>
    </>
  )
}


export default App
  