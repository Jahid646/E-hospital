import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/Screenshot_from_2021-10-18_13-05-24-removebg-preview.png'
const Footer = () => {
    return (
        <div className="mt-3">

            <Container fluid className="bg-info d-flex justify-content-between align-items-center">
                <img className="" height="100" src={logo} alt="" />
                
                   <h2 className="text-white">We Offer Quality Full and Affordable Service For You.</h2>
              
               
            </Container>
        
               
         
      <Container fluid className="pt-5 bg-dark">
        <Row className="pb-5">
          <Col xs={4} md={2}>
          </Col>
          <Col xs={1} md={4}></Col>
          <Col xs={3} md={2} className="text-white">
            <p className="mb-1">About </p>
            <p className="mb-1">Our Blog</p>
          </Col>
          <Col xs={1} md={2}></Col>
          <Col xs={3} md={2} className="text-white">
            <p className="mb-1">Get Helps</p>
            <p className="mb-1">Read FAQs</p>
          </Col>
        </Row>
        <Row className="pt-5 pb-3 text-center">
          <Col>
            <small className="text-muted">
              Copyright &copy; 2021 E-health Hospital by Jahid Hasan
            </small>
          </Col>
        </Row>
      </Container>
    </div>
    );
};

export default Footer;