import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container className="border mt-5 pt-5 pb-5 mb-5">
        <Row>
          <Col className="text-center mt-5 pt-5">
            <div>
              <img
                className=""
                height="500"
                src="https://i.ibb.co/t2jM1mb/about1.png"
                alt=""
              />
            </div>
          </Col>
          <Col className=" mt-5 pt-5">
            <div>
              <div className="text-center mt-5 pt-5">
                <h2>
                  About Our <span className="text-info">E-health Hospital</span>
                </h2>
              </div>
              <p>
                we additionally paintings very closely with our community
                healthcare group who provide antenatal, postnatal and nursing
                services and different specialist provision inclusive of the
                quitters scheme. <br />
                This 24 month benefit covers all ranges of basic upkeep.
                Notwithstanding every one of the things included on the Full
                administration we cover things that are frequently suggested for
                substitution like clockwork. <br />
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="border mt-5 pt-5 pb-5 mb-5">
        <Row>
         
          <Col className=" mt-5 pt-5">
            <div>
            <div className="text-center mt-5 pt-5">
              <h2>
                About Our <span className="text-info">E-health Hospital</span>
              </h2>
            </div>
              <p>
                we additionally paintings very closely with our community
                healthcare group who provide antenatal, postnatal and nursing
                services and different specialist provision inclusive of the
                quitters scheme. <br />
                This 24 month benefit covers all ranges of basic upkeep.
                Notwithstanding every one of the things included on the Full
                administration we cover things that are frequently suggested for
                substitution like clockwork. <br />
              </p>
            </div>
         
          </Col>

          <Col className="text-center mt-5 pt-5">
            <div>
              <img
                className=""
                height="500"
                src="https://i.ibb.co/t2jM1mb/about1.png"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
