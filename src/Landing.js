import Button from 'react-bootstrap/Button';
import Spacer from "./Spacer";

const Home = () => {
    return(        
            <section className="landing" id="home"> 
                <Spacer />            
                <div className="container">      
                    <h3>Hi, my name is</h3>
                    <h1 className='secondaryHeading'>Timothy Parkes.</h1>
                    <h1 className='primaryHeading'>I build things for the web.</h1>
                    <p className='pt-3'>I’m a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on building transactional emails at CoStar Group.</p>
                    <Button className='mt-3 landing-btnStyle p-2'>Check Something out!</Button>
                </div>
                <Spacer />            
            </section>    
    );
}

export default Home;