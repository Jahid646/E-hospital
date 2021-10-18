import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/Screenshot_from_2021-10-18_13-05-24-removebg-preview.png'
const Footer = () => {
    return (
        <div className="border">
      <Container fluid className="pt-5 bg-info">
        <Row className="pb-5">
          <Col xs={4} md={2}>
            <img className="img-fluid" src={logo} alt="" />
          </Col>
          <Col xs={1} md={4}></Col>
          <Col xs={3} md={2} className="">
            <p className="mb-1">About Online Food</p>
            <p className="mb-1">Read Our Blog</p>
            <p className="mb-1">Sign Up to Delivery</p>
            <p className="mb-0">Add Your Restaurant</p>
          </Col>
          <Col xs={1} md={2}></Col>
          <Col xs={3} md={2} className="">
            <p className="mb-1">Get Helps</p>
            <p className="mb-1">Read FAQs</p>
            <p className="mb-1">View All cities</p>
            <p className="mb-0">Restaurant Near Me</p>
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