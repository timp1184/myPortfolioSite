

import Greeting from "./Greeting";
import Bio from "./Bio";
import RightSideBar from "./RightSideBar";
import LeftSideBar from "./LeftSideBar";
import JobHistory from "./JobHistory";
import Projects from "./Projects";
import Contact from "./Contact";


const Home = () =>{
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

export default Home;