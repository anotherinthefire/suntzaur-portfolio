// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Resume from "./pages/Resume"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Project  from "./pages/Project";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";
import Account from "./pages/Account";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";

function App() {

  return (
    <Router>
      <AuthContextProvider>
      <Navbar />
        <div>
          <Routes>
            
            <Route path="/signin" element={<Signin />}/>
            <Route path="/account" element={
              <Protected>
                <Account />
              </Protected>
            }/>
            
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/resume" element={<Resume />}/>
            <Route path="/project-list" element={<Portfolio />}/>
            <Route path="/project/:name" element={<Project />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
        </AuthContextProvider>
      </Router>
  )
}

export default App
