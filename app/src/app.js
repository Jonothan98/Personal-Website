import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css"

function app() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="*" element={<LandingPage />}></Route>
                <Route path="/about-me" element={<AboutMe />}></Route>
                <Route path='/projects' element={<Projects />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default app