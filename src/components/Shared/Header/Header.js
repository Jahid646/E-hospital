import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'
const Header = () => {
  return (
    <div>
      
      <h1 className="text-center m-5"> <span className="text-info">E-health</span>  Hospital</h1>
            
      <Navbar className="p-3" bg="info" variant="light">
         
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="ms-auto fw-bold justify-content-end">
          <Nav.Link as={NavLink} to="/specialist" className="">
              Our Specialist
            </Nav.Link>
          <Nav.Link as={NavLink} to="/about" className="">
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login" className="">
              Login
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/signup"
              className="bg-secondary rounded text-info px-4"
            >
              Sign up
            </Nav.Link>
          </Nav>
        
      </Navbar>
    </div>
  );
};

export default Header;