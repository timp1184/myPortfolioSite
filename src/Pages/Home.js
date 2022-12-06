

import Greeting from "../Components/Home/Greeting";
import Bio from "../Components/Home/Bio";
import RightSideBar from "../Components/Home/RightSideBar";
import LeftSideBar from "../Components/Home/LeftSideBar";
import JobHistory from "../Components/Home/JobHistory";
import Projects from "../Components/Home/Projects";
import Contact from "../Components/Home/Contact";


export default () =>{
    return(
    <>
        <LeftSideBar />
        <RightSideBar /> 
        <div className="main-container">                
            <Greeting />            
            <Bio /> 
            <JobHistory />
            <Projects />
            <Contact />                                         
        </div>
    </>
    )
}

