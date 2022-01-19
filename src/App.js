import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Fetch from './components/Fetch';




const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/meteo" exact element={<Fetch />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;