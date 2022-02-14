import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from 'react'
//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile"
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<Navbar />}>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App