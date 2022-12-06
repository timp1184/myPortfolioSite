import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Scss/style.scss';
import Header from "./Header";
import Home from "./Home";

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