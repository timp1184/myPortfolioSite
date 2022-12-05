import React, { useState } from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';


const Navigation = () => {
  const [showMobile, setMobile] = useState(false);
  const styleMobileMenu = () =>{
   
    if(!document.querySelector("#responsive-navbar-nav").attributes['class'].value.includes('show'))
      setMobile(!showMobile);
    
  }

    return (     
     
        <Navbar collapseOnSelect expand="lg" className='menu fixed-top'>     
          <Navbar.Brand href="#home" className='ml-5 '>TP</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"onClick={() => styleMobileMenu()} />
          <Navbar.Collapse 
          id="responsive-navbar-nav" className= {showMobile ? 'showMobile text-center ' : 'justify-content-end mr-5'}
          >          
            <Nav className='ms-auto mobile-menu'>
              <Nav.Link href="#about" className="nav-numbering">About</Nav.Link>
              <Nav.Link href="#work" className="nav-numbering">Work</Nav.Link>
              <Nav.Link href="#experience" className="nav-numbering">Experience</Nav.Link>
              <Nav.Link href="#contact" className="nav-numbering">Contact</Nav.Link>
              <Button className={showMobile ? 'mx-auto' :'ml-2'}>Resume</Button>
            </Nav>
          </Navbar.Collapse>        
        </Navbar>
     
      
    );
}

export default Navigation;