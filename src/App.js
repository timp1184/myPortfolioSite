import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Scss/style.scss';
import Header from "./Components/Header";
import Home from "./Pages/Home";

const App = () => {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>                    
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
            
        </>        
    );
}

export default App;