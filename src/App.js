import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Scss/style.scss';
import Landing from "./Landing";
import Header from "./Header";
import Contact from "./Contact";

import Bio from "./Bio";
import RightSideBar from "./RightSideBar";
import LeftSideBar from "./LeftSideBar";
import JobHistory from "./JobHistory";
import Projects from "./Projects";

const App = () => {
    return (
        <>
            <Header />
            <LeftSideBar />
            <RightSideBar /> 
            <div className="main-container">                
                <Landing />            
                <Bio /> 
                <JobHistory />
                <Projects />
                <Contact />
                                         
            </div>
        </>        
    );
}

export default App;