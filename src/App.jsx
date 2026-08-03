import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import PortFolio from './components/PortFolio'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <main>
        <Home />
        <About />
        <PortFolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
