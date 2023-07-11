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

import ProtectedAdmin from "./components/ProtectedAdmin";
import Unauthorized from "./pages/Unauthorized";

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

                <Route path="/manage-home" element={<ProtectedAdmin><ManageHome /></ProtectedAdmin>} />
                <Route path="/manage-about" element={<ProtectedAdmin><ManageAbout /></ProtectedAdmin>} />
                <Route path="/manage-resume" element={<ProtectedAdmin><ManageResume /></ProtectedAdmin>} />
                <Route path="/manage-project-list" element={<ProtectedAdmin><ManageProjects /></ProtectedAdmin>} />
                <Route path="/manage-contact" element={<ProtectedAdmin><ManageContact /></ProtectedAdmin>} />
              </Route>

              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </AuthContextProvider>
      </div>
    </Router>
  )
}
export default App