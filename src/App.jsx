// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Resume from "./pages/Resume"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"

function App() {

  return (
    <Router>
      <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/resume" element={<Resume />}/>
            <Route path="/portfilio" element={<Portfolio />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </div>
      </Router>
  )
}

export default App
