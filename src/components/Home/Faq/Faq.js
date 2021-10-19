import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Faq = () => {
    return (
        <>
        <Container className="border mt-5 pt-5 pb-5 mb-5">
            <Row>

            <Col className="text-center mt-5 pt-5 " md={6} sm={12} xs={12}>
                <div>
                    <img className="img-fluid" height="450" src="https://i.ibb.co/t2jM1mb/about1.png" alt="" />
                </div>
                </Col>
                <Col className=" mt-5 pt-5"  md={6} sm={12} xs={12}>
                       <div>
            <div className="text-center mt-5 pt-5">
                <h2>Frequently Asked <span className="text-info">Questions</span> </h2>
            </div>


            <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Does E-health Hospital offer emergency care?</Accordion.Header>
    <Accordion.Body>
    Our essential care suppliers can address an extensive variety of earnest and intense concerns. Since we offer same-day arrangement accessibility and day in and day out access to our clinical group, we are an incredible choice for dire needs.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What is primary care?</Accordion.Header>
    <Accordion.Body>
    The term essential care alludes to the sort of restorative care you require first — before you become ill, before you have to see a master, before you have to go to a healing facility.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header>Womens Health E-health Hospital</Accordion.Header>
    <Accordion.Body>
    Women confront a unique arrangement of wellbeing needs. As essential care doctors, we are prepared in numerous zones of ladies' wellbeing and can give a large number of an indistinguishable administrations from your gynecologist — which can help you diminish the quantity of specialists you see for routine issues.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
                </Col>
                
            </Row>
        </Container>
 

        </>
    );
};

export default Faq;