import React, { useState } from "react";

import { Col, Container, Form, Row, Button, Modal } from "react-bootstrap";
import logo from "../../../images/Screenshot_from_2021-10-18_13-05-24-removebg-preview.png";
const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="mt-3">
      <Container
        fluid
        className="bg-info d-flex justify-content-between align-items-center"
      >
        <img className="" height="100" src={logo} alt="" />

        <h2 className="text-white">
          We Offer Quality Full and Affordable Service For You.
        </h2>
      </Container>

      <Container fluid className="pt-5 bg-dark">
        <Row className="pb-5"> <Col xs={12} md={4} sm={12} className="text-white text-center pt-4">
            <p className="mb-1">About </p> 
            <p className="mb-1">Our Blog</p>  
            <p className="mb-1">Get Helps</p> 
            <p className="mb-1">Read FAQs</p>
          </Col>

          <Col xs={12} md={4} sm={12} className="mx-auto">
            <Form className="d-flex mx-auto justify-content-center align-items-center text-white">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Subscribe for regular update.</Form.Label>
                <div className="d-flex">
                  <Form.Control type="email" placeholder="Enter email" />

                  <Button onClick={handleShow} variant="outline-info" type="submit">
                    Subscribe
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </Col>
         

          <Col xs={12} md={4} sm={12} className="text-white text-center d-flex justify-content-center align-items-center p-5 pt-4">
            <i className="fab fa-facebook-f p-2 m-2 border "></i>
            <i className="fab fa-instagram p-2 m-2 border" ></i>
            <i className="fab fa-google-plus-g p-2 m-2 border"></i>
           
          </Col>
        </Row>
        <Row className="pt-5 pb-3 text-center">
          <Col>
            <small className="text-muted">
              Copyright &copy; 2021 E-health Hospital Jahid Hasan All right reserved
            </small>
          </Col>
        </Row>
      </Container>
{/* Modal after subscription  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thanks For Subscribe</Modal.Title>
        </Modal.Header>
        <Modal.Body>Now you will get update regularly.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Footer;
