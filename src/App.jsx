// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

import Layout from "./shared/Layout";
import Home from "./pages/Home"
import About from "./pages/About"
import Resume from "./pages/Resume"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";
import Account from "./pages/Account";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";

import ManageHome from "./admin/pages/ManageHome";
import ManageAbout from "./admin/pages/ManageAbout";
import ManageResume from "./admin/pages/ManageResume";
import ManageContact from "./admin/pages/ManageContact";
import ManageProjects from "./admin/pages/ManageProjects"

function App() {

  return (
    <Router>
      <div className='App'>
        <AuthContextProvider>

          <div>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/signin" element={<Signin />} />
                <Route path="/account" element={
                  <Protected>
                    <Account />
                  </Protected>
                } />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/project-list" element={<Portfolio />} />
                <Route path="/project/:name" element={<Project />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/manage-home" element={<ManageHome />} />
                <Route path="/manage-about" element={<ManageAbout />} />
                <Route path="/manage-resume" element={<ManageResume />} />
                <Route path="/manage-project-list" element={<ManageProjects />} />
                <Route path="/manage-contact" element={<ManageContact />} />
              </Route>

              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </AuthContextProvider>
      </div>
    </Router>
  )
}

export default App
