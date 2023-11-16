import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Header from './Components/Header/Header';

function app() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<LandingPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default app