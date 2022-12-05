import Spacer from "./Spacer";
import Skills from "./Skills";
import Logo from "./ProfilePic.jpg";

const Bio = () =>{
    return(        
            <section className="bio" id="about">
                <Spacer />
                <div className="container">
                    <div className="row mx-0">
                        <div>
                            <h1 className="numbered-heading secondaryHeading">About Me</h1>   
                        </div>
                        
                    </div>
                    <div className="row mx-0">
                        <div className="col-sm-12 col-lg-6 px-0">
                            <p>Hello! My name is Timothy Parkes and I enjoy building things that live on the internet. My interest in web development started back in 2008 when I decided to try editing my MySpace page by creating a custom theme. From there I was hooked on HTML & CSS for good!</p>    
                            <br />
                            <p>
                            Fast-forward to today, I've had the privilege of learning other development technologies and languages such as .Net, React.js, Python, Django to name a few. My main focus these days is building transactional emails and inclusive products at CoStar Group for a variety of their platform users.
                            </p>   
                            <br />                       
                            <p>Here are a few technologies I've been working with recently:</p>                          
                            <Skills />
                                    
                        </div>
                        <div className="col-sm-12 col-lg-6 text-center thumbnail-container">
                            <img className="img-thumbnail"
                            width="300" height="400"
                            src={Logo} alt="profilepic" />
                        </div>
                    </div>
                </div>
                <Spacer />
            </section>
    );
}

export default Bio;